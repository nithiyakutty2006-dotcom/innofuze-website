const express = require('express');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

const projectEnvPath = path.resolve(__dirname, '.env');
require('dotenv').config({ path: projectEnvPath });

const app = express();
const PORT = Number(process.env.PORT || 3000);
const ADMIN_EMAIL = 'inithiyasree@gmail.com';
const WHATSAPP_NUMBER = (process.env.WHATSAPP_NUMBER || '919360732895').trim();
const DATA_FILE = path.join(__dirname, 'data', 'contact-requests.json');

function getEffectiveEnvValue(key) {
  return (process.env[key] || '').trim();
}

function getSmtpConfig() {
  const host = getEffectiveEnvValue('SMTP_HOST');
  const portValue = getEffectiveEnvValue('SMTP_PORT');
  const port = Number(portValue);
  const user = getEffectiveEnvValue('SMTP_USERNAME');
  const pass = getEffectiveEnvValue('SMTP_PASSWORD');
  const from = getEffectiveEnvValue('SMTP_FROM');
  const secure = port === 465;

  return { host, portValue, port, secure, user, pass, from };
}

let smtpTransporter;

function getSmtpTransporter() {
  if (smtpTransporter) return smtpTransporter;

  const { host, port, secure, user, pass } = getSmtpConfig();
  smtpTransporter = nodemailer.createTransport({
    host,
    port,
    secure,
    requireTLS: port === 587,
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
    auth: { user, pass }
  });

  return smtpTransporter;
}

function getSmtpStatus() {
  const smtpConfig = getSmtpConfig();
  const validPort = Boolean(smtpConfig.portValue && Number.isInteger(smtpConfig.port) && smtpConfig.port > 0 && smtpConfig.port <= 65535);
  return {
    host: Boolean(smtpConfig.host),
    port: validPort,
    username: Boolean(smtpConfig.user),
    password: Boolean(smtpConfig.pass),
    from: Boolean(smtpConfig.from),
    loaded: Boolean(smtpConfig.host && validPort && smtpConfig.user && smtpConfig.pass && smtpConfig.from)
  };
}

function ensureDataFile() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
    fs.writeFileSync(DATA_FILE, '[]', 'utf8');
  }
}

function readContacts() {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function writeContacts(entries) {
  ensureDataFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2), 'utf8');
}

function normalizePhone(value) {
  return String(value || '').trim().replace(/[\s()\-]/g, '');
}

function escapeHtml(value) {
  return String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;').replace(/'/g, '&#39;');
}

function validateEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(String(email || '').trim());
}

function buildAdminMessage(contact) {
  const submittedAt = contact.submitted_at ? new Date(contact.submitted_at).toLocaleString() : new Date().toLocaleString();

  if (contact.type === 'registration') {
    return [
      'New Registration - Innofuze Technologies',
      '',
      `Name: ${contact.name}`,
      `Email: ${contact.email}`,
      `Phone: ${contact.phone}`,
      `Submitted At: ${submittedAt}`
    ].join('\n');
  }

  return [
    'New Contact Enquiry - Innofuze Technologies',
    '',
    `Name: ${contact.name}`,
    `Email: ${contact.email}`,
    `Phone: ${contact.phone}`,
    `Submitted At: ${submittedAt}`,
    '',
    'Message:',
    contact.message
  ].join('\n');
}

async function notifyAdmin(contact) {
  const smtpConfig = getSmtpConfig();
  const smtpFrom = smtpConfig.from;
  const subject = contact.type === 'registration'
    ? 'New Registration - Innofuze Technologies'
    : 'New Contact Enquiry - Innofuze Technologies';

  const missing = getMissingSmtpSettings();
  if (missing.length > 0) {
    console.error(`Email not sent. SMTP is not configured for ${contact.type}. Missing: ${missing.join(', ') || 'none'}.`);
    return false;
  }

  try {
    const replyTo = contact.type === 'enquiry' ? contact.email : undefined;

    await getSmtpTransporter().sendMail({
      from: `"Innofuze Technologies" <${smtpFrom}>`,
      to: ADMIN_EMAIL,
      replyTo,
      subject,
      text: buildAdminMessage(contact),
      html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h3 style="margin-bottom: 12px; color: #0f172a;">${subject}</h3>
        <p><strong>Name:</strong> ${escapeHtml(contact.name || '')}</p>
        <p><strong>Email:</strong> ${escapeHtml(contact.email || '')}</p>
        <p><strong>Phone:</strong> ${escapeHtml(contact.phone || '')}</p>
        ${contact.message ? `<p><strong>Message:</strong><br>${escapeHtml(contact.message || '').replace(/\n/g, '<br>')}</p>` : ''}
        <p><strong>Submitted At:</strong> ${escapeHtml(new Date(contact.submitted_at || Date.now()).toLocaleString())}</p>
      </div>`
    });

    return true;
  } catch (error) {
    console.error(`Email sending failed for ${contact.type}: ${error.code || error.responseCode || 'SMTP_ERROR'}`);
    return false;
  }
}

function getMissingSmtpSettings() {
  const smtpConfig = getSmtpConfig();
  const missing = [];

  if (!smtpConfig.host) missing.push('SMTP_HOST');
  if (!smtpConfig.portValue || !Number.isInteger(smtpConfig.port) || smtpConfig.port < 1 || smtpConfig.port > 65535) missing.push('SMTP_PORT');
  if (!smtpConfig.user) missing.push('SMTP_USERNAME');
  if (!smtpConfig.pass) missing.push('SMTP_PASSWORD');
  if (!smtpConfig.from) missing.push('SMTP_FROM');

  return missing;
}

function createSubmissionRateLimiter() {
  return rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many requests. Please try again later.' },
    handler: (req, res) => {
      res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }
  });
}

const contactRateLimiter = createSubmissionRateLimiter();
const registrationRateLimiter = createSubmissionRateLimiter();

app.use(express.json({ limit: '1mb' }));
app.use((req, res, next) => {
  const blockedPaths = ['/.env', '/server.js', '/package.json', '/data', '/data/', '/data/contact-requests.json'];
  if (blockedPaths.includes(req.path) || req.path.startsWith('/data/')) {
    return res.status(404).json({ error: 'Not found.' });
  }
  next();
});
app.use(express.static(__dirname));

const smtpStatus = getSmtpStatus();
console.log(`SMTP_HOST configured: ${smtpStatus.host ? 'YES' : 'NO'}`);
console.log(`SMTP_PORT configured: ${smtpStatus.port ? 'YES' : 'NO'}`);
console.log(`SMTP_USERNAME configured: ${smtpStatus.username ? 'YES' : 'NO'}`);
console.log(`SMTP_PASSWORD configured: ${smtpStatus.password ? 'YES' : 'NO'}`);
console.log(`SMTP_FROM configured: ${smtpStatus.from ? 'YES' : 'NO'}`);
console.log(`SMTP configuration loaded: ${smtpStatus.loaded ? 'YES' : 'NO'}`);

if (smtpStatus.loaded) {
  getSmtpTransporter().verify()
    .then(() => console.log('SMTP transporter verification: SUCCESS'))
    .catch(error => console.error(`SMTP transporter verification: FAIL (${error.code || 'SMTP_ERROR'})`));
} else {
  console.log('SMTP transporter verification: SKIPPED (configuration incomplete)');
}

app.get('/api/config', (_req, res) => {
  res.json({
    whatsappNumber: WHATSAPP_NUMBER,
    adminEmail: ADMIN_EMAIL
  });
});

app.post('/api/contact', contactRateLimiter, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body || {};

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim();
    const cleanPhone = normalizePhone(phone);
    const cleanMessage = String(message).trim();

    if (!cleanName || !cleanEmail || !cleanPhone || !cleanMessage) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    if (!validateEmail(cleanEmail)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    if (!/^(?:\+?91|91)?[0-9]{10}$/.test(cleanPhone)) {
      return res.status(400).json({ error: 'Please enter a valid phone number.' });
    }

    const newRequest = {
      id: Date.now().toString(),
      type: 'enquiry',
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      message: cleanMessage,
      submitted_at: new Date().toISOString()
    };

    const missingSmtpSettings = getMissingSmtpSettings();
    if (missingSmtpSettings.length > 0) {
      const configurationError = `Missing SMTP configuration: ${missingSmtpSettings.join(', ')}.`;
      console.error(`Contact email not sent. ${configurationError}`);
      return res.status(503).json({
        error: 'Unable to send your message right now. Please try again.',
        code: 'SMTP_NOT_CONFIGURED',
        configurationError
      });
    }

    const emailSent = await notifyAdmin(newRequest);

    if (emailSent === false) {
      return res.status(503).json({
        error: 'Unable to send your message right now. Please try again.'
      });
    }

    const entries = readContacts();
    entries.push(newRequest);
    writeContacts(entries);

    res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      data: newRequest
    });
  } catch (error) {
    console.error('Contact submission failed:', error);
    res.status(500).json({
      error: 'Unable to send your message right now. Please try again.'
    });
  }
});

app.post('/api/register', registrationRateLimiter, async (req, res) => {
  try {
    const { name, email, phone } = req.body || {};

    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim();
    const cleanPhone = normalizePhone(phone);

    if (!cleanName || !cleanEmail || !cleanPhone) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    if (!validateEmail(cleanEmail)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    if (!/^(?:\+?91|91)?[0-9]{10}$/.test(cleanPhone)) {
      return res.status(400).json({ error: 'Please enter a valid phone number.' });
    }

    const newRequest = {
      id: Date.now().toString(),
      type: 'registration',
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      submitted_at: new Date().toISOString()
    };

    const missingSmtpSettings = getMissingSmtpSettings();
    if (missingSmtpSettings.length > 0) {
      const configurationError = `Missing SMTP configuration: ${missingSmtpSettings.join(', ')}.`;
      console.error(`Registration email not sent. ${configurationError}`);
      return res.status(503).json({
        error: 'Unable to complete registration right now. Please try again.',
        code: 'SMTP_NOT_CONFIGURED',
        configurationError
      });
    }

    const emailSent = await notifyAdmin(newRequest);

    if (emailSent === false) {
      return res.status(503).json({
        error: 'Unable to complete registration right now. Please try again.'
      });
    }

    const entries = readContacts();
    entries.push(newRequest);
    writeContacts(entries);

    res.status(201).json({
      success: true,
      message: 'Registration successful!',
      confirmation: 'Thank you for registering with Innofuze Technologies.',
      data: newRequest
    });
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).json({
      error: 'Unable to complete registration right now. Please try again.'
    });
  }
});

app.get('/health', (_req, res) => {
  res.json({ ok: true, status: 'healthy' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
