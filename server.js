const express = require('express');
const fs = require('fs');
const path = require('path');
const rateLimit = require('express-rate-limit');

const projectEnvPath = path.resolve(__dirname, '.env');
require('dotenv').config({ path: projectEnvPath });

const app = express();
const PORT = Number(process.env.PORT || 3000);
const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || 'innofuzetech249@gmail.com').trim();
const FORMSPREE_ENDPOINT = (process.env.FORMSPREE_ENDPOINT || '').trim();
const WHATSAPP_NUMBER = (process.env.WHATSAPP_NUMBER || '919360732895').trim();
const DATA_FILE = path.join(__dirname, 'data', 'contact-requests.json');

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

function validateEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(String(email || '').trim());
}

async function notifyAdmin(contact) {
  if (!FORMSPREE_ENDPOINT) return false;

  const subject = contact.type === 'registration'
    ? 'New Registration Received'
    : 'New Contact Enquiry - Innofuze Technologies';

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...contact,
        _replyto: contact.email,
        _subject: subject
      })
    });

    if (!response.ok) {
      console.error(`Formspree delivery failed for ${contact.type}: HTTP ${response.status}`);
      return false;
    }

    return true;
  } catch (error) {
    console.error(`Formspree delivery failed for ${contact.type}.`);
    return false;
  }
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

console.log(`Formspree endpoint configured: ${FORMSPREE_ENDPOINT ? 'YES' : 'NO'}`);

app.get('/api/config', (_req, res) => {
  res.json({
    whatsappNumber: WHATSAPP_NUMBER,
    adminEmail: ADMIN_EMAIL
  });
});

app.post('/api/contact', contactRateLimiter, async (req, res) => {
  try {
    const { name, email, phone, message, service } = req.body || {};

    if (!name || !email || !message || (!phone && !service)) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim();
    const cleanPhone = normalizePhone(phone);
    const cleanMessage = String(message).trim();
    const cleanService = String(service || '').trim();

    if (!cleanName || !cleanEmail || !cleanMessage || (!cleanPhone && !cleanService)) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const supportedServices = ['Website & Application Development', 'Digital Marketing', 'Project Building', 'Branding', 'Digital Design'];
    if (cleanService && !supportedServices.includes(cleanService)) {
      return res.status(400).json({ error: 'Please select a valid service.' });
    }

    if (!validateEmail(cleanEmail)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    if (cleanPhone && !/^(?:\+?91|91)?[0-9]{10}$/.test(cleanPhone)) {
      return res.status(400).json({ error: 'Please enter a valid phone number.' });
    }

    const newRequest = {
      id: Date.now().toString(),
      type: 'enquiry',
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      ...(cleanService ? { service: cleanService } : {}),
      message: cleanMessage,
      submitted_at: new Date().toISOString()
    };

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

const pageRoutes = {
  '/services': 'services.html',
  '/projects': 'projects.html',
  '/about': 'about.html',
  '/faq': 'faq.html',
  '/terms': 'terms.html',
  '/policies': 'policies.html'
};

const serviceDetailRoutes = new Set([
  'web-application-development',
  'digital-marketing',
  'project-building',
  'branding',
  'digital-design'
]);

app.get('/services/:serviceId', (req, res, next) => {
  if (!serviceDetailRoutes.has(req.params.serviceId)) return next();
  res.sendFile(path.join(__dirname, 'services.html'));
});

Object.entries(pageRoutes).forEach(([route, fileName]) => {
  app.get([route, `${route}/`], (_req, res) => {
    res.sendFile(path.join(__dirname, fileName));
  });
});

app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'Not found.' });
  }

  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
