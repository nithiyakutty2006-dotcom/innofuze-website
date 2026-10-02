/**
 * INNOFUZE TECHNOLOGIES - WEBSITE SCRIPT
 */

const servicesData = [
    {
        id: "web-dev",
        title: "Website & Application Development",
        desc: "Custom, scalable web applications and high-performance mobile solutions built with modern technology.",
        colorClass: "card-blue",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`
    },
    {
        id: "digital-designs",
        title: "Digital Designs",
        desc: "Creative UI/UX designs, wireframes, and interactive prototypes tailored for user engagement.",
        colorClass: "card-purple",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        desc: "Data-driven marketing campaigns, SEO optimization, and social media strategies for targeted growth.",
        colorClass: "card-pink",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`
    },
    {
        id: "branding",
        title: "Branding",
        desc: "Complete corporate identity, brand voice, guidelines, and visual language to make your business stand out.",
        colorClass: "card-teal",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
    },
    {
        id: "project-building",
        title: "Project Building",
        desc: "End-to-end software product development from ideation and architecture to deployment and support.",
        colorClass: "card-indigo",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`
    }
];

const serviceKeywordMap = {
    'web-dev': ['web', 'website', 'application', 'development', 'web development', 'web dev', 'website development', 'application development'],
    'digital-designs': ['design', 'designs', 'digital design', 'digital designs', 'ui', 'ux', 'ui ux'],
    'digital-marketing': ['marketing', 'digital marketing', 'seo', 'social media'],
    'branding': ['brand', 'branding', 'brand identity'],
    'project-building': ['project', 'project building', 'software project', 'ai', 'artificial intelligence', 'drowsiness', 'drowsiness detection', 'driver monitoring']
};

const servicesGrid = document.getElementById('servicesGrid');
const servicesSearchStatus = document.getElementById('servicesSearchStatus');
const heroSearchInput = document.getElementById('heroSearchInput');
const heroSearchBtn = document.getElementById('heroSearchBtn');
const tagButtons = document.querySelectorAll('.tag-chip');
const registerBtn = document.getElementById('registerBtn');
const registerModal = document.getElementById('registerModal');
const closeModalBtn = document.getElementById('closeRegisterModal');
const registerForm = document.getElementById('registerForm');
const toastEl = document.getElementById('toast');
const projectDetailModal = document.getElementById('projectDetailModal');
const projectDetailContent = document.getElementById('projectDetailContent');
const closeProjectModalBtn = document.getElementById('closeProjectModal');

function renderServices(list = servicesData) {
    if (!servicesGrid) return;
    servicesGrid.innerHTML = '';

    list.forEach(service => {
        const card = document.createElement('div');
        card.className = `service-card ${service.colorClass}`;
        card.setAttribute('data-id', service.id);
        card.id = `search-${service.id}`;

        card.innerHTML = `
            <div>
                <div class="card-icon-wrap">
                    ${service.icon}
                </div>
                <h3 class="service-card-title">${service.title}</h3>
                <p class="service-card-desc">${service.desc}</p>
            </div>
            <a href="#" class="card-footer-link" data-service-id="${service.id}">
                Get Started 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
        `;

        servicesGrid.appendChild(card);
    });
}

function normalizeSearchTerm(value) {
    return String(value || '')
        .trim()
        .toLowerCase()
        .replace(/\s+/g, ' ');
}

function getMatchedServiceIds(query) {
    const normalized = normalizeSearchTerm(query);
    if (!normalized) {
        return servicesData.map(service => service.id);
    }

    const matched = [];
    Object.entries(serviceKeywordMap).forEach(([serviceId, keywords]) => {
        const isMatch = keywords.some(keyword => {
            const normalizedKeyword = normalizeSearchTerm(keyword);
            return normalized === normalizedKeyword || normalized.includes(normalizedKeyword);
        });

        if (isMatch) {
            matched.push(serviceId);
        }
    });

    return matched;
}

function serviceMatchesQuery(service, query) {
    const value = normalizeSearchTerm(query);
    if (!value) return true;

    const searchableText = normalizeSearchTerm(`${service.title} ${service.desc}`);
    const matchesText = value.split(' ').every(term => searchableText.includes(term));
    return matchesText || getMatchedServiceIds(value).includes(service.id);
}

function hideSearchStatus() {
    if (!servicesSearchStatus) return;
    servicesSearchStatus.classList.add('hidden');
    servicesSearchStatus.innerHTML = '';
}

function showSearchStatus(query, results) {
    if (!servicesSearchStatus) return;
    servicesSearchStatus.classList.remove('hidden');
    servicesSearchStatus.replaceChildren();

    const title = document.createElement('div');
    title.className = 'services-status-title';
    title.textContent = results.length
        ? `Found ${results.length} matching service${results.length === 1 ? '' : 's'}`
        : 'No matching services found.';

    const subtitle = document.createElement('div');
    subtitle.className = 'services-status-subtitle';
    subtitle.textContent = results.length
        ? `Services matching "${query}". Select a result to jump to it.`
        : 'Try Website, Design, Marketing, Branding, or Project Building.';

    servicesSearchStatus.append(title, subtitle);

    if (results.length) {
        const resultList = document.createElement('div');
        resultList.className = 'site-search-results';

        results.forEach(result => {
            const resultButton = document.createElement('button');
            resultButton.type = 'button';
            resultButton.className = 'site-search-result';
            resultButton.textContent = `${result.title} · ${result.section}`;
            resultButton.addEventListener('click', () => {
                result.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
            resultList.appendChild(resultButton);
        });

        servicesSearchStatus.appendChild(resultList);
    }

    const clearBtn = document.createElement('button');
    clearBtn.type = 'button';
    clearBtn.className = 'services-status-clear';
    clearBtn.textContent = 'Clear Search';
    clearBtn.addEventListener('click', () => {
        if (heroSearchInput) heroSearchInput.value = '';
        renderServices();
        hideSearchStatus();
    });
    servicesSearchStatus.appendChild(clearBtn);
}

function getServiceSearchResults(matchedServices) {
    return matchedServices.map(service => ({
        title: service.title,
        section: 'Services',
        target: document.getElementById(`search-${service.id}`)
    })).filter(result => result.target);
}

function applyServiceSearch(query, shouldScroll = false) {
    const value = normalizeSearchTerm(query);

    if (!value) {
        renderServices();
        hideSearchStatus();
        return;
    }

    const matchedServices = servicesData.filter(service => serviceMatchesQuery(service, value));
    renderServices(matchedServices);
    const results = getServiceSearchResults(matchedServices);
    showSearchStatus(value, results);

    if (shouldScroll && servicesSearchStatus) {
        servicesSearchStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function getProjectDetailMarkup(serviceId) {
    if (serviceId === 'project-building') {
        return `
            <div class="project-detail-header">
                <span class="project-detail-badge">Project Building</span>
                <h3 class="project-detail-title">AI-Based Drowsiness Detection System</h3>
                <p class="project-detail-subtitle">Real-Time Driver Monitoring &amp; Drowsiness Analysis</p>
            </div>
            <div class="project-detail-grid">
                <div class="project-detail-main">
                    <video class="project-video" controls playsinline preload="metadata" muted>
                        <source src="/projects/drowsiness-detection/drowsiness-detection.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div class="project-description-box">
                        <p>An AI-powered real-time monitoring system that uses a camera to detect driver drowsiness and monitor alertness. The system analyzes live camera input, detects drowsiness-related behavior, displays the current live status, records events, and provides session-level analysis.</p>
                    </div>
                </div>
                <div class="project-detail-side">
                    <div class="project-detail-card">
                        <h4>Features</h4>
                        <ul class="project-feature-list">
                            <li>Real-Time Camera Monitoring</li>
                            <li>Drowsiness Detection</li>
                            <li>Live Driver Status</li>
                            <li>Alert / Warning Detection</li>
                            <li>Event Timeline</li>
                            <li>Session Analysis</li>
                            <li>Drowsiness Trend Monitoring</li>
                            <li>Monitoring Report</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="project-documents">
                <h4>Project Documents</h4>
                <div class="project-doc-row">
                    <span>Sridhar PDF</span>
                    <div class="project-doc-actions">
                        <a href="/projects/drowsiness-detection/sridhar.pdf" target="_blank" rel="noopener noreferrer" class="project-action-btn primary">View PDF</a>
                        <a href="/projects/drowsiness-detection/sridhar.pdf" download class="project-action-btn secondary">Download PDF</a>
                    </div>
                </div>
                <iframe class="project-pdf-preview" src="/projects/drowsiness-detection/sridhar.pdf" title="Sridhar PDF Preview"></iframe>
            </div>
        `;
    }

    if (serviceId === 'digital-designs') {
        return `
            <div class="project-detail-header">
                <span class="project-detail-badge">Digital Designs</span>
                <h3 class="project-detail-title">Made by Swasthik</h3>
                <p class="project-detail-subtitle">Design work and creative poster collection</p>
            </div>
            <div class="project-detail-grid single-column">
                <div class="project-document-panel">
                    <iframe class="project-pdf-preview" src="/projects/digital-designs/made-by-swasthik.pdf" title="Made by Swasthik PDF Preview"></iframe>
                    <div class="project-doc-actions project-doc-actions-center">
                        <a href="/projects/digital-designs/made-by-swasthik.pdf" target="_blank" rel="noopener noreferrer" class="project-action-btn primary">View PDF</a>
                        <a href="/projects/digital-designs/made-by-swasthik.pdf" download class="project-action-btn secondary">Download PDF</a>
                    </div>
                </div>
            </div>
        `;
    }

    return '';
}

function openProjectModal(serviceId) {
    if (!projectDetailModal || !projectDetailContent) return;
    projectDetailContent.innerHTML = getProjectDetailMarkup(serviceId);
    projectDetailModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    if (!projectDetailModal) return;
    projectDetailModal.classList.add('hidden');
    document.body.style.overflow = '';
}

function handleServiceCardClick(event) {
    const targetLink = event.target.closest('[data-service-id]');
    if (!targetLink) return;

    event.preventDefault();
    const serviceId = targetLink.dataset.serviceId;

    if (serviceId === 'project-building' || serviceId === 'digital-designs') {
        openProjectModal(serviceId);
        return;
    }

    openRegisterModal(event);
}

function handleHeroSearchSubmit() {
    if (!heroSearchInput) return;
    applyServiceSearch(heroSearchInput.value, true);
}

if (heroSearchInput) {
    heroSearchInput.addEventListener('input', (event) => {
        applyServiceSearch(event.target.value);
    });

    heroSearchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleHeroSearchSubmit();
        }
    });
}

if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', handleHeroSearchSubmit);
}

if (tagButtons) {
    tagButtons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent.trim();
            const searchValue = value;
            if (heroSearchInput) heroSearchInput.value = searchValue;
            applyServiceSearch(searchValue, true);
        });
    });
}

if (closeProjectModalBtn) {
    closeProjectModalBtn.addEventListener('click', closeProjectModal);
}

window.addEventListener('click', (e) => {
    if (e.target === projectDetailModal) closeProjectModal();
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (projectDetailModal && !projectDetailModal.classList.contains('hidden')) closeProjectModal();
    }
});

let registerModalPreviousOverflow = '';

function openRegisterModal(e) {
    if (e) e.preventDefault();
    if (!registerModal) return;
    registerModalPreviousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    registerModal.classList.remove('hidden');
    if (regFormStatus) {
        regFormStatus.textContent = '';
        regFormStatus.className = 'form-status-msg hidden';
    }
}

function closeRegisterModal() {
    if (!registerModal) return;
    registerModal.classList.add('hidden');
    document.body.style.overflow = registerModalPreviousOverflow;
    registerModalPreviousOverflow = '';
    if (registerForm) registerForm.reset();
    if (regFormStatus) {
        regFormStatus.textContent = '';
        regFormStatus.className = 'form-status-msg hidden';
    }
}

if (registerBtn) registerBtn.addEventListener('click', openRegisterModal);
if (closeModalBtn) closeModalBtn.addEventListener('click', closeRegisterModal);

const contactForm = document.getElementById('contactForm');
const contactNameInput = document.getElementById('contactName');
const contactEmailInput = document.getElementById('contactEmail');
const contactPhoneInput = document.getElementById('contactPhone');
const contactMessageInput = document.getElementById('contactMessage');

const contactNameError = document.getElementById('contactNameError');
const contactEmailError = document.getElementById('contactEmailError');
const contactPhoneError = document.getElementById('contactPhoneError');
const contactMessageError = document.getElementById('contactMessageError');
const contactFormStatus = document.getElementById('contactFormStatus');
const contactSubmitButton = document.querySelector('.btn-send-message');
const whatsappButton = document.querySelector('.btn-whatsapp');

// Chat Modal Elements
const chatBtn = document.getElementById('chatBtn');
const chatModal = document.getElementById('chatModal');
const closeChatModalBtn = document.getElementById('closeChatModal');
const chatModalForm = document.getElementById('chatModalForm');
const chatFormStatus = document.getElementById('chatFormStatus');
const chatSubmitBtn = document.getElementById('chatSubmitBtn');
const chatWhatsappBtn = document.getElementById('chatWhatsappBtn');

// Register Elements
const regFormStatus = document.getElementById('regFormStatus');
const regSubmitBtn = document.getElementById('regSubmitBtn');

function openChatModal(e) {
    if (e) e.preventDefault();
    if (chatModal) chatModal.classList.remove('hidden');
}

function closeChatModal() {
    if (chatModal) chatModal.classList.add('hidden');
}

if (chatBtn) chatBtn.addEventListener('click', openChatModal);
if (closeChatModalBtn) closeChatModalBtn.addEventListener('click', closeChatModal);

window.addEventListener('click', (e) => {
    if (e.target === registerModal) closeRegisterModal();
    if (e.target === chatModal) closeChatModal();
    if (e.target === projectDetailModal) closeProjectModal();
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (registerModal && !registerModal.classList.contains('hidden')) closeRegisterModal();
        if (chatModal && !chatModal.classList.contains('hidden')) closeChatModal();
        if (projectDetailModal && !projectDetailModal.classList.contains('hidden')) closeProjectModal();
    }
});

const CONTACT_CONFIG = {
    whatsappNumber: ''
};

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

function normalizePhoneNumber(phone) {
    return String(phone || '').trim().replace(/[\s()\-]/g, '');
}

function validatePhone(phone) {
    const normalized = normalizePhoneNumber(phone);
    if (!normalized) return false;
    return /^(?:\+?91|91)?[0-9]{10}$/.test(normalized);
}

function clearContactErrors() {
    if (contactNameError) contactNameError.textContent = '';
    if (contactEmailError) contactEmailError.textContent = '';
    if (contactPhoneError) contactPhoneError.textContent = '';
    if (contactMessageError) contactMessageError.textContent = '';
    if (contactFormStatus) {
        contactFormStatus.textContent = '';
        contactFormStatus.className = 'form-status-msg hidden';
    }
}

function setSubmitButtonState(isSending) {
    if (!contactSubmitButton) return;
    const buttonText = contactSubmitButton.querySelector('span');
    contactSubmitButton.disabled = isSending;
    contactSubmitButton.setAttribute('aria-busy', String(isSending));
    if (buttonText) {
        buttonText.textContent = isSending ? 'Sending...' : 'Send Message';
    }
}

function buildWhatsAppMessageFromForm() {
    const name = contactNameInput ? contactNameInput.value.trim() : '';
    const email = contactEmailInput ? contactEmailInput.value.trim() : '';
    const phone = contactPhoneInput ? contactPhoneInput.value.trim() : '';
    const message = contactMessageInput ? contactMessageInput.value.trim() : '';

    return [
        'Hello Innofuze Technologies,',
        '',
        'I would like to enquire about your services.',
        '',
        `Name: ${name || 'N/A'}`,
        `Email: ${email || 'N/A'}`,
        `Phone: ${phone || 'N/A'}`,
        '',
        `Requirement: ${message || 'N/A'}`
    ].join('\n');
}

async function loadContactConfig() {
    try {
        const response = await fetch('/api/config');
        if (!response.ok) return;
        const data = await response.json();
        if (data && data.whatsappNumber) {
            CONTACT_CONFIG.whatsappNumber = data.whatsappNumber;
        }
    } catch (error) {
        // Keep the default WhatsApp number if the config endpoint is unavailable.
    }
}

if (whatsappButton) {
    whatsappButton.addEventListener('click', (event) => {
        event.preventDefault();

        if (!CONTACT_CONFIG.whatsappNumber) {
            const message = encodeURIComponent(buildWhatsAppMessageFromForm());
            window.open(`https://wa.me/?text=${message}`, '_blank', 'noopener,noreferrer');
            return;
        }

        const cleanNumber = String(CONTACT_CONFIG.whatsappNumber).replace(/\D/g, '');
        const message = encodeURIComponent(buildWhatsAppMessageFromForm());
        const whatsappUrl = `https://wa.me/${cleanNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        clearContactErrors();

        const nameVal = contactNameInput ? contactNameInput.value.trim() : '';
        const emailVal = contactEmailInput ? contactEmailInput.value.trim() : '';
        const phoneVal = contactPhoneInput ? contactPhoneInput.value.trim() : '';
        const messageVal = contactMessageInput ? contactMessageInput.value.trim() : '';

        let isValid = true;

        if (!nameVal) {
            if (contactNameError) contactNameError.textContent = 'Please enter your name.';
            isValid = false;
        }

        if (!emailVal) {
            if (contactEmailError) contactEmailError.textContent = 'Please enter your email address.';
            isValid = false;
        } else if (!validateEmail(emailVal)) {
            if (contactEmailError) contactEmailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        if (!phoneVal) {
            if (contactPhoneError) contactPhoneError.textContent = 'Please enter your phone number.';
            isValid = false;
        } else if (!validatePhone(phoneVal)) {
            if (contactPhoneError) contactPhoneError.textContent = 'Please enter a valid phone number.';
            isValid = false;
        }

        if (!messageVal) {
            if (contactMessageError) contactMessageError.textContent = 'Please enter your message.';
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        const formData = {
            name: nameVal,
            email: emailVal,
            phone: normalizePhoneNumber(phoneVal),
            message: messageVal
        };

        setSubmitButtonState(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json().catch(() => ({}));

            if (!response.ok) {
                const errorMessage = result && result.error ? result.error : 'Unable to send your message right now. Please try again.';
                if (contactFormStatus) {
                    contactFormStatus.textContent = errorMessage;
                    contactFormStatus.className = 'form-status-msg error';
                }
                showToast('Unable to send your message right now. Please try again.');
                return;
            }

            contactForm.reset();
            if (contactFormStatus) {
                contactFormStatus.textContent = 'Message sent successfully!';
                contactFormStatus.className = 'form-status-msg success';
                const messageText = document.createElement('div');
                messageText.textContent = 'Thank you for contacting Innofuze Technologies. We\'ll get back to you soon.';
                contactFormStatus.appendChild(messageText);
            }
            showToast('Message sent successfully!');
        } catch (error) {
            if (contactFormStatus) {
                contactFormStatus.textContent = 'Unable to send your message right now. Please try again.';
                contactFormStatus.className = 'form-status-msg error';
            }
            showToast('Unable to send your message right now. Please try again.');
        } finally {
            setSubmitButtonState(false);
        }
    });
}

function buildWhatsAppMessage(name, email, phone, message) {
    return [
        'Hello INNOFUZE TECHNOLOGIES,',
        '',
        `Name: ${name || 'N/A'}`,
        `Mobile: ${phone || 'N/A'}`,
        `Email: ${email || 'N/A'}`,
        '',
        'Message:',
        `${message || 'N/A'}`
    ].join('\n');
}

if (chatWhatsappBtn) {
    chatWhatsappBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const name = document.getElementById('chatName').value.trim();
        const email = document.getElementById('chatEmail').value.trim();
        const phone = document.getElementById('chatMobile').value.trim();
        const message = document.getElementById('chatMessage').value.trim();

        const wpMessage = encodeURIComponent(buildWhatsAppMessage(name, email, phone, message));
        const wpNumber = CONTACT_CONFIG.whatsappNumber ? String(CONTACT_CONFIG.whatsappNumber).replace(/\D/g, '') : '919360732895';
        window.open(`https://wa.me/${wpNumber}?text=${wpMessage}`, '_blank', 'noopener,noreferrer');
    });
}

async function handleFormSubmit(event, url, getFormData, statusElement, submitBtn, successMessage) {
    event.preventDefault();
    const formData = getFormData();
    
    if (statusElement) {
        statusElement.textContent = '';
        statusElement.className = 'form-status-msg hidden';
    }

    if (!formData) return; // Validation failed

    const btnText = submitBtn.querySelector('span') || submitBtn;
    const originalText = btnText.textContent;
    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json().catch(() => ({}));

        if (!response.ok) {
            const errorMessage = result && result.error ? result.error : 'Unable to submit right now. Please try again.';
            if (statusElement) {
                statusElement.textContent = errorMessage;
                statusElement.className = 'form-status-msg error';
            }
            showToast(errorMessage);
            return;
        }

        event.target.reset();
        const msg = result && result.message ? result.message : successMessage;
        if (statusElement) {
            statusElement.textContent = msg;
            statusElement.className = (result && result.warning) ? 'form-status-msg warning' : 'form-status-msg success';
        }
        showToast(msg);
    } catch (error) {
        if (statusElement) {
            statusElement.textContent = 'Unable to send your message right now. Please try again.';
            statusElement.className = 'form-status-msg error';
        }
        showToast('Unable to send your message right now. Please try again.');
    } finally {
        submitBtn.disabled = false;
        btnText.textContent = originalText;
    }
}

if (chatModalForm) {
    chatModalForm.addEventListener('submit', (e) => {
        handleFormSubmit(e, '/api/contact', () => {
            const name = document.getElementById('chatName').value.trim();
            const email = document.getElementById('chatEmail').value.trim();
            const phone = document.getElementById('chatMobile').value.trim();
            const message = document.getElementById('chatMessage').value.trim();
            
            if (!name || !email || !phone || !message) {
                if (chatFormStatus) {
                    chatFormStatus.textContent = 'Please fill out all required fields.';
                    chatFormStatus.className = 'form-status-msg error';
                }
                return null;
            }
            
            if (!validateEmail(email)) {
                if (chatFormStatus) {
                    chatFormStatus.textContent = 'Please enter a valid email address.';
                    chatFormStatus.className = 'form-status-msg error';
                }
                return null;
            }
            
            if (!validatePhone(phone)) {
                if (chatFormStatus) {
                    chatFormStatus.textContent = 'Please enter a valid mobile number.';
                    chatFormStatus.className = 'form-status-msg error';
                }
                return null;
            }

            return { name, email, phone, message };
        }, chatFormStatus, chatSubmitBtn, 'Thank you! Your message has been sent successfully.');
    });
}

if (registerForm) {
    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (regFormStatus) {
            regFormStatus.textContent = '';
            regFormStatus.className = 'form-status-msg hidden';
        }

        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const phone = document.getElementById('regMobile').value.trim();

        if (!name || !email || !phone) {
            if (regFormStatus) {
                regFormStatus.textContent = 'Please fill out all required fields.';
                regFormStatus.className = 'form-status-msg error';
            }
            return;
        }

        if (!validateEmail(email)) {
            if (regFormStatus) {
                regFormStatus.textContent = 'Please enter a valid email address.';
                regFormStatus.className = 'form-status-msg error';
            }
            return;
        }

        if (!validatePhone(phone)) {
            if (regFormStatus) {
                regFormStatus.textContent = 'Please enter a valid mobile number.';
                regFormStatus.className = 'form-status-msg error';
            }
            return;
        }

        regSubmitBtn.disabled = true;
        regSubmitBtn.textContent = 'Registering...';

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ name, email, phone: normalizePhoneNumber(phone) })
            });
            const result = await response.json().catch(() => ({}));

            if (!response.ok) {
                if (regFormStatus) {
                    regFormStatus.textContent = result.error || 'Unable to complete registration right now. Please try again.';
                    regFormStatus.className = 'form-status-msg error';
                }
                return;
            }

            registerForm.reset();
            if (regFormStatus) {
                regFormStatus.textContent = `${result.message} ${result.confirmation}`;
                regFormStatus.className = 'form-status-msg success';
            }
        } catch (error) {
            if (regFormStatus) {
                regFormStatus.textContent = 'Unable to complete registration right now. Please try again.';
                regFormStatus.className = 'form-status-msg error';
            }
        } finally {
            regSubmitBtn.disabled = false;
            regSubmitBtn.textContent = 'Register Now';
        }
    });
}

function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.remove('hidden');

    setTimeout(() => {
        toastEl.classList.add('hidden');
    }, 4000);
}

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('click', (event) => {
    const serviceLink = event.target.closest('[data-service-id]');
    if (serviceLink) {
        handleServiceCardClick(event);
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    renderServices();
    await loadContactConfig();
});
