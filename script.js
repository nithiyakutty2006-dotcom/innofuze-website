/**
 * INNOFUZE TECHNOLOGIES - WEBSITE SCRIPT
 */

const servicesData = [
    {
        id: "web-application-development",
        title: "Website & Application Development",
        desc: "Modern, responsive websites and applications built for businesses, startups, students, and organizations.",
        cardImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=82",
        cardImageAlt: "Website and application interfaces displayed across desktop, tablet, and phone screens",
        colorClass: "card-blue",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8M12 17v4"></path></svg>`,
        heroVisual: "devices",
        heroLabels: ["Business website", "Mobile ready", "Easy to explore"],
        description: "We design and develop modern, responsive and user-friendly websites and applications for businesses, startups, students and organizations.",
        useCases: [
            ["Business Websites", "Build a professional online presence for your business, services and customers.", "browser", ["Your business", "Services", "Let’s talk"]],
            ["E-Commerce", "Sell products online with a complete digital shopping experience.", "commerce", ["New arrivals", "Shop collection", "Your cart"]],
            ["Portfolio Websites", "Showcase your skills, projects, achievements and professional work.", "portfolio", ["Selected work", "Case studies", "About me"]],
            ["Management Systems", "Manage users, data, records, reports and business operations digitally.", "dashboard", ["Overview", "Active users", "Monthly report"]],
            ["Mobile Applications", "Create mobile experiences that users can access anytime.", "mobile", ["Today", "Quick actions", "Your activity"]]
        ],
        helps: ["Reach customers wherever they browse.", "Make important information easier to find.", "Bring services and workflows into one useful experience."],
        projects: [
            ["Restaurant Business Website", "restaurant", "A sample restaurant concept bringing its menu, story, gallery and enquiry into one responsive website.", ["Home", "Menu", "About", "Gallery", "Contact", "Online enquiry"]],
            ["Student Management System", "dashboard", "A sample student portal concept for common academic tasks and records.", ["Student login", "Attendance", "Marks", "Assignments", "Dashboard", "Admin panel"]]
        ],
        process: ["Requirement analysis", "UI/UX design", "Development", "Testing", "Deployment", "Support"],
        reasons: ["Responsive layouts for different screens.", "Clear project milestones and review points.", "A considered balance of usability, performance and maintainability."]
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        desc: "Strategic campaigns and useful content to help businesses reach their audience online.",
        cardImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=82",
        cardImageAlt: "Marketing analytics and campaign metrics displayed on a laptop",
        colorClass: "card-pink",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5-5 18-4-8-9-5z"></path><path d="M12 16 19 9"></path></svg>`,
        heroVisual: "analytics",
        heroLabels: ["Campaign reach", "Engagement", "Conversions"],
        description: "We help businesses reach their target audience through strategic digital campaigns, social media content and online marketing.",
        useCases: [
            ["Social Media Marketing", "Promote your brand through engaging social media content and campaigns.", "social", ["Brand stories", "Reels & posts", "Audience response"]],
            ["Content Marketing", "Create useful content that attracts and engages your target audience.", "calendar", ["Blog", "Video", "Social post"]],
            ["Lead Generation", "Turn online visitors into potential customers through targeted campaigns.", "funnel", ["Visitors", "Interested leads", "Customers"]],
            ["Campaign Management", "Launch, monitor and improve online advertising campaigns.", "campaign", ["Campaign overview", "Active ads", "Budget"]],
            ["Analytics & Performance", "Measure campaign performance and understand what is working.", "analytics", ["Reach", "Clicks", "Conversions"]]
        ],
        helps: ["Put your message in front of relevant audiences.", "Build a consistent rhythm for content and campaigns.", "Use performance signals to guide the next improvement."],
        projects: [
            ["Fashion Brand Social Media Campaign", "social", "A sample campaign concept with a coordinated social feed and performance view.", ["Content calendar", "Social posts", "Reels", "Captions", "Hashtags", "Performance tracking"]],
            ["New Product Digital Campaign", "campaign", "A sample product-launch concept connecting promotional creative with audience results.", ["Promotional creatives", "Social campaign", "Audience targeting", "Lead collection", "Performance tracking"]]
        ],
        process: ["Research", "Strategy", "Content creation", "Campaign launch", "Monitoring", "Optimization", "Report"],
        reasons: ["A plan shaped around your audience and goals.", "Creative and measurement considered together.", "Clear reporting that turns results into next steps."]
    },
    {
        id: "project-building",
        title: "Project Building",
        desc: "From early idea to working demonstration, with planning, development, testing and documentation.",
        cardImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=82",
        cardImageAlt: "Charts and reports in a software dashboard interface",
        colorClass: "card-indigo",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"></path><path d="m16 3 5 5-9 9-5 1 1-5 8-10z"></path></svg>`,
        heroVisual: "architecture",
        heroLabels: ["Your idea", "Working system", "Clear demo"],
        description: "We transform ideas into practical technology projects through planning, development, testing, documentation and deployment.",
        useCases: [
            ["AI & Machine Learning Projects", "Build intelligent systems that analyze data, recognize patterns and generate predictions.", "neural", ["Input data", "Model", "Prediction"]],
            ["Data Analytics Projects", "Convert raw data into meaningful insights using analytics and visualization.", "dashboard", ["Data set", "Key trends", "Insights"]],
            ["Web Application Projects", "Build complete web applications with interactive interfaces and data management.", "architecture", ["Frontend", "Backend", "Database"]],
            ["Automation Projects", "Automate repetitive tasks and improve productivity using software solutions.", "workflow", ["Trigger", "Process", "Complete"]],
            ["College Projects", "Turn academic ideas into functional projects with proper documentation and demonstration.", "presentation", ["Project brief", "Working demo", "Documentation"]]
        ],
        helps: ["Break a broad idea into testable milestones.", "Connect the interface, logic and data into a coherent demo.", "Make the implementation easier to explain and present."],
        projects: [
            ["AI-Based Image Forgery Detection", "neural", "A sample project concept for comparing an image with a model-generated authenticity assessment.", ["Image upload", "AI detection", "Real/fake prediction", "Confidence score", "Analysis graph", "Report generation"]],
            ["Student Performance Analytics", "dashboard", "A sample analytics concept for exploring academic activity and performance patterns.", ["Data upload", "Data cleaning", "Data analysis", "Interactive charts", "Performance insights", "Reports"]]
        ],
        process: ["Idea", "Requirement analysis", "Architecture", "Development", "Testing", "Documentation", "Demo"],
        reasons: ["A practical scope that fits the available time and resources.", "Visible progress through small, reviewable milestones.", "A usable demo with supporting project documentation."]
    },
    {
        id: "branding",
        title: "Branding",
        desc: "Consistent brand identities that help businesses communicate clearly and be recognized.",
        cardImage: "/INNOFUZE_Project_Images/Swasthik_Projects/Project_04.png",
        cardImageAlt: "Swasthik Cafe logo design from the project portfolio",
        cardImageFit: "contain",
        colorClass: "card-teal",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 9 9c0-1.1-.9-2-2-2h-1.5a1.5 1.5 0 0 1-1.5-1.5V8a5 5 0 0 0-5-5z"></path><circle cx="7.5" cy="10.5" r="1"></circle><circle cx="12" cy="7.5" r="1"></circle><circle cx="16.5" cy="10.5" r="1"></circle></svg>`,
        heroVisual: "brandboard",
        heroLabels: ["Logo system", "Color palette", "Brand touchpoints"],
        description: "We create memorable and consistent brand identities that help businesses communicate their personality and build recognition.",
        useCases: [
            ["Logo Design", "Create a unique visual symbol that represents your business.", "logo", ["Concept sketches", "Refined mark", "Final lockup"]],
            ["Brand Identity", "Build a consistent visual identity across every customer touchpoint.", "brandboard", ["Logo", "Color system", "Brand assets"]],
            ["Color & Typography", "Choose colors and fonts that communicate the personality of your brand.", "type", ["Display type", "Body type", "Color palette"]],
            ["Social Media Branding", "Create a consistent visual style across your social media presence.", "social", ["Profile", "Post system", "Story format"]],
            ["Business Materials", "Extend your brand identity across professional business materials.", "stationery", ["Business card", "Letterhead", "Packaging"]]
        ],
        helps: ["Make your brand recognizable across channels.", "Give teams practical rules for consistent visuals.", "Create a clear foundation for future communication."],
        projects: [
            ["Tech Startup Brand Identity", "brandboard", "A sample identity concept showing how a technology brand can stay consistent across key touchpoints.", ["Logo", "Brand colors", "Typography", "Business card", "Social templates", "Brand guidelines"]],
            ["Café Brand Identity", "stationery", "A sample café identity concept connecting a logo with menus, packaging and social visuals.", ["Logo", "Menu design", "Packaging", "Posters", "Social templates"]]
        ],
        process: ["Research", "Brand concept", "Logo design", "Color & typography", "Brand assets", "Brand guidelines"],
        reasons: ["Identity choices anchored to your audience and purpose.", "A flexible system for both digital and print use.", "Useful guidance that keeps future work visually consistent."]
    },
    {
        id: "digital-design",
        title: "Digital Design",
        desc: "Purposeful digital visuals for brands, businesses, events, websites and online campaigns.",
        cardImage: "/INNOFUZE_Project_Images/Sridhar_Projects/Project_01.png",
        cardImageAlt: "Digital poster design from the project portfolio",
        cardImageFit: "contain",
        colorClass: "card-purple",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.6 7.6"></path><circle cx="11" cy="11" r="2"></circle></svg>`,
        heroVisual: "design-board",
        heroLabels: ["Campaign artwork", "Interface screens", "Ready to share"],
        description: "We create engaging digital visuals for brands, businesses, events, social media, websites and online campaigns.",
        useCases: [
            ["Social Media Posts", "Create attractive social media content that captures attention.", "social", ["Post designs", "Story frames", "Feed preview"]],
            ["Posters & Banners", "Communicate events, offers and announcements through impactful visuals.", "poster", ["Event title", "Key details", "Call to action"]],
            ["UI Design", "Design intuitive digital interfaces that are easy and enjoyable to use.", "mobile", ["Clear navigation", "Useful actions", "Readable content"]],
            ["Presentation Design", "Turn information into clean, engaging and professional presentations.", "presentation", ["Key message", "Supporting data", "Takeaway"]],
            ["Promotional Creatives", "Create visual advertisements that communicate your message clearly.", "campaign", ["Product focus", "Offer detail", "Next step"]]
        ],
        helps: ["Make information easier to scan and remember.", "Keep campaign visuals consistent across formats.", "Present products, events and ideas with clarity."],
        projects: [
            ["Instagram Promotional Pack", "social", "A sample social kit concept with coordinated feed, story and campaign artwork.", ["5 Instagram posts", "3 story designs", "2 promotional banners", "2 reel covers"]],
            ["College Event Creative Pack", "poster", "A sample event-communication concept connecting promotional and informational artwork.", ["Event poster", "Invitation", "Certificate", "Social banner", "Presentation cover"]]
        ],
        process: ["Brief", "Concept", "Design", "Review", "Revision", "Final delivery"],
        reasons: ["Layouts designed for the channel and audience.", "A clear review process to refine the right details.", "Consistent artwork prepared for practical digital use."]
    }
];

const projectsData = [
    {
        id: 1,
        owner: 'Sridhar',
        name: 'Sridhar Project 01',
        image: '/INNOFUZE_Project_Images/Sridhar_Projects/Project_01.png',
        description: 'Creative and technology project artwork from the supplied Sridhar portfolio.',
        technologies: [],
        category: 'Sridhar Projects'
    },
    {
        id: 2,
        owner: 'Sridhar',
        name: 'Sridhar Project 02',
        image: '/INNOFUZE_Project_Images/Sridhar_Projects/Project_02.png',
        description: 'Creative and technology project artwork from the supplied Sridhar portfolio.',
        technologies: [],
        category: 'Sridhar Projects'
    },
    {
        id: 3,
        owner: 'Swasthik',
        name: 'Swasthik Project 01',
        image: '/INNOFUZE_Project_Images/Swasthik_Projects/Project_01.png',
        description: 'Creative design artwork from the supplied Swasthik portfolio.',
        technologies: [],
        category: 'Swasthik Projects'
    },
    {
        id: 4,
        owner: 'Swasthik',
        name: 'Swasthik Project 02',
        image: '/INNOFUZE_Project_Images/Swasthik_Projects/Project_02.png',
        description: 'Creative design artwork from the supplied Swasthik portfolio.',
        technologies: [],
        category: 'Swasthik Projects'
    },
    {
        id: 5,
        owner: 'Swasthik',
        name: 'Swasthik Project 03',
        image: '/INNOFUZE_Project_Images/Swasthik_Projects/Project_03.png',
        description: 'Creative design artwork from the supplied Swasthik portfolio.',
        technologies: [],
        category: 'Swasthik Projects'
    },
    {
        id: 6,
        owner: 'Swasthik',
        name: 'Swasthik Project 04',
        image: '/INNOFUZE_Project_Images/Swasthik_Projects/Project_04.png',
        description: 'Creative design artwork from the supplied Swasthik portfolio.',
        technologies: [],
        category: 'Swasthik Projects'
    },
    {
        id: 7,
        owner: 'Sivanainar',
        name: 'Drowsiness Detection',
        video: '/projects/drowsiness-detection/drowsiness-detection.mp4',
        service: 'Machine Learning / AI & Data Science',
        description: 'A screen recording shows the project code in an editor and dashboard.py running in the terminal.',
        technologies: [],
        category: 'Sivanainar Projects'
    },
    {
        id: 8,
        owner: 'Nithiyasree',
        name: 'Nithiyasree Project 01',
        video: '/project-videos/interface%20svm%20random%20-%20Colab%20-%20Google%20Chrome%202026-04-04%2011-37-15.mp4',
        aspectRatio: '1920 / 1020',
        service: 'Machine Learning',
        description: 'A Google Colab notebook is shown with project code and output.',
        technologies: [],
        category: 'Nithiyasree Projects'
    },
    {
        id: 9,
        owner: 'Nithiyasree',
        name: 'TechPulse',
        video: '/project-videos/Recording%202026-09-09%20190446.mp4',
        aspectRatio: '1912 / 1014',
        service: 'IT Infrastructure',
        description: 'The TechPulse dashboard presents CPU and RAM usage, running applications, and monitoring controls.',
        technologies: [],
        category: 'Nithiyasree Projects'
    },
    {
        id: 10,
        owner: 'Nithiyasree',
        name: 'Nithiyasree Project 03',
        video: '/project-videos/Recording%202026-09-12%20202730.mp4',
        aspectRatio: '1900 / 1078',
        service: 'Software Development',
        description: 'The recording shows source code in an editor and a separate command-line window with output.',
        technologies: [],
        category: 'Nithiyasree Projects'
    }
];

const serviceKeywordMap = {
    'web-application-development': ['web', 'website', 'application', 'development', 'web development', 'web dev', 'app'],
    'digital-marketing': ['marketing', 'social media', 'content', 'campaign', 'analytics', 'lead generation'],
    'project-building': ['project', 'ai', 'artificial intelligence', 'machine learning', 'analytics', 'automation', 'college project'],
    'branding': ['brand', 'branding', 'logo', 'identity', 'color palette'],
    'digital-design': ['design', 'digital design', 'graphic design', 'ui', 'poster', 'banner', 'presentation']
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
const closeProjectModalBtn = document.getElementById('closeProjectModal');
const projectPreviewImage = document.getElementById('projectPreviewImage');
const projectPreviewVideo = document.getElementById('projectPreviewVideo');
const projectPreviewTitle = document.getElementById('projectPreviewTitle');
const projectPreviewOwner = document.getElementById('projectPreviewOwner');
const previousProjectBtn = document.getElementById('previousProject');
const nextProjectBtn = document.getElementById('nextProject');
const projectsGrid = document.getElementById('projectsGrid');
const projectsEmptyState = document.getElementById('projectsEmptyState');
const projectFilterButtons = document.querySelectorAll('[data-project-filter]');

let activeProjectFilter = 'All Projects';
let activeProjectQuery = '';
let visibleProjects = projectsData;
let activeProjectIndex = -1;
const projectVideoObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play().catch(() => {});
            } else {
                entry.target.pause();
            }
        });
    }, { threshold: 0.25 })
    : null;

function renderServices(list = servicesData) {
    if (!servicesGrid) return;
    servicesGrid.innerHTML = '';

    list.forEach(service => {
        const card = document.createElement('a');
        card.className = `service-card service-directory-card ${service.colorClass}`;
        card.setAttribute('data-id', service.id);
        card.id = `search-${service.id}`;
        card.href = `/services/${service.id}`;
        card.setAttribute('aria-label', `Explore ${service.title}`);

        card.innerHTML = `
            <div class="directory-card-visual"></div>
            <div class="directory-card-copy">
                <div class="card-icon-wrap">${service.icon}</div>
                <h2 class="service-card-title">${service.title}</h2>
                <p class="service-card-desc">${service.desc}</p>
                <span class="card-footer-link">Explore service <span aria-hidden="true">&rarr;</span></span>
            </div>
        `;

        const cardVisual = card.querySelector('.directory-card-visual');
        if (servicesGrid.closest('.services-section') && service.cardImage) {
            const image = document.createElement('img');
            image.className = 'service-card-photo';
            image.src = service.cardImage;
            image.alt = service.cardImageAlt;
            image.loading = 'lazy';
            image.decoding = 'async';
            if (service.cardImageFit) image.dataset.fit = service.cardImageFit;
            image.addEventListener('error', () => {
                cardVisual.innerHTML = renderConceptVisual(service.heroVisual, service.heroLabels, service.title);
            }, { once: true });
            cardVisual.appendChild(image);
        } else {
            cardVisual.innerHTML = renderConceptVisual(service.heroVisual, service.heroLabels, service.title);
        }

        servicesGrid.appendChild(card);
    });
}

const conceptVisualImages = {
    devices: { src: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=82', alt: 'Website and application screens shown across desktop, tablet, and phone' },
    browser: { src: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=82', alt: 'Website pages displayed across desktop, tablet, and phone screens' },
    commerce: { src: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1000&q=82', alt: 'Customer completing an online shopping checkout on a laptop' },
    portfolio: { src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1000&q=82', alt: 'Portfolio website displayed on a desktop screen' },
    dashboard: { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=82', alt: 'Business dashboard open on a laptop' },
    mobile: { src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=82', alt: 'Smartphone displaying mobile applications' },
    social: { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=82', alt: 'Campaign analytics dashboard on a laptop showing reach and engagement metrics' },
    calendar: { src: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1000&q=82', alt: 'Campaign tasks organized on a content planning board' },
    funnel: { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=82', alt: 'Marketing performance analytics shown in a dashboard' },
    campaign: { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=82', alt: 'Marketing collaborators reviewing work on a laptop' },
    analytics: { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=82', alt: 'Analytics dashboard showing campaign metrics and charts' },
    neural: { src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=82', alt: 'Artificial intelligence visualization' },
    architecture: { src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=82', alt: 'Server infrastructure supporting software systems' },
    workflow: { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=82', alt: 'Project work and planning at a desk' },
    presentation: { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=82', alt: 'Team presenting and discussing a project' },
    brandboard: { src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=82', alt: 'Brand identity and graphic design workspace' },
    logo: { src: '/INNOFUZE_Project_Images/Swasthik_Projects/Project_04.png', alt: 'Swasthik Cafe logo artwork from the supplied project portfolio', fit: 'contain' },
    type: { src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1000&q=82', alt: 'Graphic designer creating digital artwork' },
    stationery: { src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=82', alt: 'Brand identity design materials and color references' },
    'design-board': { src: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1000&q=82', alt: 'UI designer sketching interface layouts on a tablet' },
    poster: { src: '/INNOFUZE_Project_Images/Sridhar_Projects/Project_01.png', alt: 'Digital promotional poster artwork from the supplied project portfolio', fit: 'contain' },
    restaurant: { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=82', alt: 'Restaurant dishes prepared for a food menu' }
};

function renderConceptVisual(kind, labels, accessibleLabel) {
    const image = conceptVisualImages[kind] || conceptVisualImages.devices;
    return `<div class="concept-visual concept-visual-${kind}"><img class="concept-visual-photo" src="${image.src}" alt="${image.alt}" data-fit="${image.fit || 'cover'}" loading="lazy" decoding="async"></div>`;
}

function renderServiceDetail(service) {
    const catalog = document.getElementById('servicesCatalog');
    const mount = document.getElementById('serviceDetailMount');
    if (!catalog || !mount) return;

    catalog.classList.add('hidden');
    mount.classList.remove('hidden');
    document.title = `${service.title} | INNOFUZE TECHNOLOGIES`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', service.description);
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '/services');
        if (link.getAttribute('href') === '/services') link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
    });

    const useCases = service.useCases.map(([title, description, visual, labels]) => `
        <article class="showcase-use-card reveal-on-scroll">
            ${renderConceptVisual(visual, labels, `${service.title} ${title}`)}
            <div class="showcase-use-copy"><div class="showcase-use-icon">${service.icon}</div><h3>${title}</h3><p>${description}</p></div>
        </article>`).join('');
    const projects = service.projects.map(([title, visual, description, features], index) => `
        <article class="showcase-project reveal-on-scroll">
            <div class="showcase-project-visual">${renderConceptVisual(visual, [title, index ? 'Project insights' : 'Concept preview', 'Innofuze'], title)}</div>
            <div class="showcase-project-copy"><span class="showcase-eyebrow">SAMPLE CONCEPT 0${index + 1}</span><h3>${title}</h3><p>${description}</p><ul>${features.map(feature => `<li>${feature}</li>`).join('')}</ul></div>
        </article>`).join('');
    const process = service.process.map((step, index) => `<li class="showcase-process-step"><span>0${index + 1}</span><strong>${step}</strong></li>`).join('');
    const helps = service.helps.map((item, index) => `<li><span>0${index + 1}</span>${item}</li>`).join('');
    const reasons = service.reasons.map((item, index) => `<li><span>${service.icon}</span><div><strong>${['Purposeful by design', 'Built around your goals', 'Clear from start to finish'][index]}</strong><p>${item}</p></div></li>`).join('');

    mount.innerHTML = `
        <div class="service-detail-page">
            <div class="showcase-detail-topline"><a href="/services" class="showcase-back-link">&larr; Back to Services</a><span>INNOFUZE / SERVICES / ${service.title}</span></div>
            <section class="showcase-hero ${service.colorClass}">
                <div class="showcase-hero-copy"><span class="section-badge">BUILT AROUND YOUR NEXT MOVE</span><h1>${service.title}</h1><p>${service.description}</p><a class="showcase-cta" href="#service-enquiry" data-enquiry-service-id="${service.id}">Start Your Project <span aria-hidden="true">&rarr;</span></a></div>
                <div class="showcase-hero-visual">${renderConceptVisual(service.heroVisual, service.heroLabels, `${service.title} visual concept`)}</div>
            </section>
            <section class="showcase-section showcase-use-section"><header class="showcase-section-heading"><span class="section-badge">MADE TO BE USEFUL</span><h2>What is it used for?</h2><p>Explore the ways ${service.title.toLowerCase()} can bring an idea into focus.</p></header><div class="showcase-use-grid">${useCases}</div></section>
            <section class="showcase-help-section"><div class="showcase-help-heading"><span class="section-badge">FROM COMPLEXITY TO CLARITY</span><h2>How it helps</h2><p>Good work makes the next step easier for the people using it.</p></div><ul class="showcase-help-list">${helps}</ul></section>
            <section class="showcase-section showcase-project-section"><header class="showcase-section-heading"><span class="section-badge">POSSIBILITIES IN PRACTICE</span><h2>Sample project concepts</h2><p>Illustrative directions, not claims of completed client work.</p></header><div class="showcase-project-grid">${projects}</div></section>
            <section class="showcase-process-section"><header class="showcase-section-heading"><span class="section-badge">A CLEAR WAY FORWARD</span><h2>Project workflow</h2></header><ol class="showcase-process-list">${process}</ol></section>
            <section class="showcase-why-section"><div><span class="section-badge">WHY INNOFUZE</span><h2>Thoughtful work, from first brief to final handoff.</h2></div><ul class="showcase-reasons-list">${reasons}</ul></section>
            <section class="showcase-final-cta" id="service-enquiry"><div><span class="section-badge">YOUR NEXT MOVE STARTS HERE</span><h2>Ready to Build Something Amazing?</h2><p>Have an idea in mind? Let's turn it into a professional digital solution.</p></div><div class="showcase-final-actions"><a class="showcase-cta" href="#service-enquiry" data-enquiry-service-id="${service.id}">Start Your Project <span aria-hidden="true">&rarr;</span></a><a class="showcase-back-link" href="/services">&larr; Back to Services</a></div></section>
        </div>`;

    observeShowcaseSections();
}

function observeShowcaseSections() {
    const revealItems = document.querySelectorAll('.reveal-on-scroll:not(.is-visible)');
    if (!('IntersectionObserver' in window)) {
        revealItems.forEach(item => item.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    revealItems.forEach(item => observer.observe(item));
}

function getMatchingProjects(category = activeProjectFilter, query = activeProjectQuery) {
    const searchTerm = normalizeSearchTerm(query);

    return projectsData.filter(project => {
        const matchesCategory = category === 'All Projects' || project.category === category;
        if (!matchesCategory) return false;
        if (!searchTerm) return true;

        const searchableText = normalizeSearchTerm([
            project.name,
            project.owner,
            project.description,
            project.category,
            project.service || '',
            ...project.technologies
        ].join(' '));

        return searchTerm.split(' ').every(term => searchableText.includes(term));
    });
}

function renderProjects(category = activeProjectFilter, query = activeProjectQuery) {
    if (!projectsGrid) return;

    activeProjectFilter = category;
    activeProjectQuery = normalizeSearchTerm(query);
    visibleProjects = getMatchingProjects(activeProjectFilter, activeProjectQuery);
    projectsGrid.querySelectorAll('.project-card-video').forEach(video => {
        if (projectVideoObserver) projectVideoObserver.unobserve(video);
        video.pause();
    });
    projectsGrid.replaceChildren();

    projectFilterButtons.forEach(button => {
        const isActive = button.dataset.projectFilter === activeProjectFilter;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    visibleProjects.forEach(project => {
        const card = document.createElement('article');
        card.className = 'project-gallery-card';
        card.id = `project-${project.id}`;

        const imageButton = document.createElement('button');
        imageButton.type = 'button';
        imageButton.className = 'project-image-trigger';
        imageButton.dataset.projectPreview = String(project.id);
        imageButton.setAttribute('aria-label', `Preview ${project.name}`);

        let previewVideo = null;
        if (project.video) {
            previewVideo = document.createElement('video');
            previewVideo.className = 'project-card-video';
            previewVideo.src = project.video;
            if (project.aspectRatio) previewVideo.style.aspectRatio = project.aspectRatio;
            previewVideo.muted = true;
            previewVideo.loop = true;
            previewVideo.autoplay = true;
            previewVideo.playsInline = true;
            previewVideo.preload = 'metadata';
            previewVideo.setAttribute('aria-hidden', 'true');
            imageButton.appendChild(previewVideo);
        } else {
            const image = document.createElement('img');
            image.src = project.image;
            image.alt = project.name;
            image.loading = 'lazy';
            imageButton.appendChild(image);
        }

        const details = document.createElement('div');
        details.className = 'project-card-content';

        const owner = document.createElement('span');
        owner.className = 'project-owner-label';
        owner.textContent = `Project by ${project.owner}`;

        const title = document.createElement('h3');
        title.className = 'project-card-title';
        title.textContent = project.name;

        if (project.service) {
            const service = document.createElement('p');
            service.className = 'project-card-service';
            service.textContent = project.service;
            details.append(owner, title, service);
        } else {
            details.append(owner, title);
        }

        const description = document.createElement('p');
        description.className = 'project-card-description';
        description.textContent = project.description;

        const categoryLabel = document.createElement('span');
        categoryLabel.className = 'project-category-label';
        categoryLabel.textContent = project.category;

        const viewButton = document.createElement('button');
        viewButton.type = 'button';
        viewButton.className = 'project-view-button';
        viewButton.dataset.projectPreview = String(project.id);
        viewButton.textContent = 'View Project';

        details.append(description, categoryLabel, viewButton);
        card.append(imageButton, details);
        projectsGrid.appendChild(card);
        if (previewVideo) {
            if (projectVideoObserver) projectVideoObserver.observe(previewVideo);
            else previewVideo.play().catch(() => {});
        }
    });

    if (projectsEmptyState) {
        projectsEmptyState.classList.toggle('hidden', visibleProjects.length > 0);
    }
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
            return (` ${normalized} `).includes(` ${normalizedKeyword} `);
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

function showSearchStatus(query, serviceResults, projectResults = []) {
    if (!servicesSearchStatus) return;
    servicesSearchStatus.classList.remove('hidden');
    servicesSearchStatus.replaceChildren();

    const resultCount = serviceResults.length + projectResults.length;
    const title = document.createElement('div');
    title.className = 'services-status-title';
    title.textContent = resultCount
        ? `Found ${resultCount} matching result${resultCount === 1 ? '' : 's'}`
        : 'No results found';

    const subtitle = document.createElement('div');
    subtitle.className = 'services-status-subtitle';
    subtitle.textContent = resultCount
        ? `Matches for "${query}". Select a result to jump to it.`
        : 'Try Website, Design, Marketing, Branding, Project, Sridhar, or Swasthik.';

    servicesSearchStatus.append(title, subtitle);

    const results = [...serviceResults, ...projectResults];
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
        renderProjects('All Projects', '');
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

function getProjectSearchResults(matchedProjects) {
    return matchedProjects.map(project => ({
        title: project.name,
        section: 'Projects',
        target: document.getElementById(`project-${project.id}`)
    })).filter(result => result.target);
}

function applyServiceSearch(query, shouldScroll = false) {
    const value = normalizeSearchTerm(query);

    if (!value) {
        renderServices();
        renderProjects('All Projects', '');
        hideSearchStatus();
        return;
    }

    const matchedServices = servicesData.filter(service => serviceMatchesQuery(service, value));
    renderServices(matchedServices);
    const searchProjects = (value !== 'project building' && /\b(projects?|sridhar|swasthik)\b/.test(value)) || matchedServices.length === 0;
    renderProjects(activeProjectFilter, searchProjects ? value : '');
    const serviceResults = getServiceSearchResults(matchedServices);
    const projectResults = searchProjects ? getProjectSearchResults(visibleProjects) : [];
    showSearchStatus(value, serviceResults, projectResults);

    if (shouldScroll) {
        const target = projectResults.length
            ? document.getElementById('our-projects') || projectsGrid
            : servicesSearchStatus;
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function updateProjectPreview() {
    const project = visibleProjects[activeProjectIndex];
    if (!project) return;

    if (project.video && projectPreviewVideo) {
        projectPreviewImage.classList.add('hidden');
        projectPreviewVideo.classList.remove('hidden');
        projectPreviewVideo.src = project.video;
        projectPreviewVideo.setAttribute('aria-label', project.name);
        projectPreviewVideo.load();
    } else {
        if (projectPreviewVideo) {
            projectPreviewVideo.pause();
            projectPreviewVideo.removeAttribute('src');
            projectPreviewVideo.load();
            projectPreviewVideo.classList.add('hidden');
        }
        projectPreviewImage.classList.remove('hidden');
        projectPreviewImage.src = project.image;
        projectPreviewImage.alt = project.name;
    }
    projectPreviewTitle.textContent = project.name;
    projectPreviewOwner.textContent = `Project by ${project.owner}`;
    const disableControls = visibleProjects.length < 2;
    previousProjectBtn.disabled = disableControls;
    nextProjectBtn.disabled = disableControls;
}

function openProjectPreview(projectId) {
    if (!projectDetailModal) return;
    visibleProjects = getMatchingProjects(activeProjectFilter, activeProjectQuery);
    activeProjectIndex = visibleProjects.findIndex(project => project.id === projectId);
    if (activeProjectIndex < 0) return;

    updateProjectPreview();
    projectDetailModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProjectPreview() {
    if (!projectDetailModal) return;
    projectDetailModal.classList.add('hidden');
    document.body.style.overflow = '';
    activeProjectIndex = -1;
    if (projectPreviewImage) projectPreviewImage.src = '';
    if (projectPreviewVideo) {
        projectPreviewVideo.pause();
        projectPreviewVideo.removeAttribute('src');
        projectPreviewVideo.load();
        projectPreviewVideo.classList.add('hidden');
    }
}

function showAdjacentProject(direction) {
    if (visibleProjects.length < 2) return;
    activeProjectIndex = (activeProjectIndex + direction + visibleProjects.length) % visibleProjects.length;
    updateProjectPreview();
}

function handleServiceCardClick(event) {
    const serviceButton = event.target.closest('[data-service-id]');
    if (!serviceButton) return;

    event.preventDefault();
    openServiceEnquiryModal(serviceButton.dataset.serviceId);
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

projectFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        renderProjects(button.dataset.projectFilter, activeProjectQuery);
    });
});

if (closeProjectModalBtn) {
    closeProjectModalBtn.addEventListener('click', closeProjectPreview);
}

if (previousProjectBtn) previousProjectBtn.addEventListener('click', () => showAdjacentProject(-1));
if (nextProjectBtn) nextProjectBtn.addEventListener('click', () => showAdjacentProject(1));

window.addEventListener('click', (e) => {
    if (e.target === projectDetailModal) closeProjectPreview();
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (projectDetailModal && !projectDetailModal.classList.contains('hidden')) closeProjectPreview();
    }
});

let registerModalPreviousOverflow = '';
let serviceEnquiryPreviousOverflow = '';
let serviceEnquiryCloseTimer;

function openServiceEnquiryModal(serviceId) {
    const modal = document.getElementById('serviceEnquiryModal');
    const form = document.getElementById('serviceEnquiryForm');
    const serviceSelect = document.getElementById('serviceEnquiryService');
    const status = document.getElementById('serviceEnquiryStatus');
    if (!modal || !form) return;

    clearTimeout(serviceEnquiryCloseTimer);
    form.reset();
    if (status) {
        status.textContent = '';
        status.className = 'form-status-msg hidden';
    }
    const selectedService = servicesData.find(service => service.id === serviceId);
    if (serviceSelect && selectedService) serviceSelect.value = selectedService.title;
    serviceEnquiryPreviousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    modal.classList.remove('hidden');
    document.getElementById('serviceEnquiryName').focus();
}

function closeServiceEnquiryModal() {
    const modal = document.getElementById('serviceEnquiryModal');
    const form = document.getElementById('serviceEnquiryForm');
    const status = document.getElementById('serviceEnquiryStatus');
    if (!modal) return;

    clearTimeout(serviceEnquiryCloseTimer);
    modal.classList.add('hidden');
    document.body.style.overflow = serviceEnquiryPreviousOverflow;
    serviceEnquiryPreviousOverflow = '';
    if (form) form.reset();
    if (status) {
        status.textContent = '';
        status.className = 'form-status-msg hidden';
    }
}

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

const closeServiceEnquiryBtn = document.getElementById('closeServiceEnquiry');
const serviceEnquiryForm = document.getElementById('serviceEnquiryForm');

if (closeServiceEnquiryBtn) closeServiceEnquiryBtn.addEventListener('click', closeServiceEnquiryModal);

if (serviceEnquiryForm) {
    serviceEnquiryForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = document.getElementById('serviceEnquiryName').value.trim();
        const email = document.getElementById('serviceEnquiryEmail').value.trim();
        const service = document.getElementById('serviceEnquiryService').value;
        const message = document.getElementById('serviceEnquiryDescription').value.trim();
        const status = document.getElementById('serviceEnquiryStatus');
        const submitButton = document.getElementById('serviceEnquirySubmit');

        if (!name || !email || !service || !message || !validateEmail(email)) {
            status.textContent = 'Please complete all fields with a valid email address.';
            status.className = 'form-status-msg error';
            return;
        }

        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ name, email, service, message })
            });
            const result = await response.json().catch(() => ({}));

            if (!response.ok) {
                status.textContent = result.error || 'Unable to submit your enquiry right now. Please try again.';
                status.className = 'form-status-msg error';
                return;
            }

            status.textContent = 'Thank you! Your enquiry has been submitted successfully.';
            status.className = 'form-status-msg success';
            serviceEnquiryCloseTimer = setTimeout(closeServiceEnquiryModal, 3000);
        } catch (error) {
            status.textContent = 'Unable to submit your enquiry right now. Please try again.';
            status.className = 'form-status-msg error';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Submit Enquiry';
        }
    });
}

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
    if (e.target === document.getElementById('serviceEnquiryModal')) closeServiceEnquiryModal();
    if (e.target === chatModal) closeChatModal();
    if (e.target === projectDetailModal) closeProjectPreview();
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (registerModal && !registerModal.classList.contains('hidden')) closeRegisterModal();
        const serviceEnquiryModal = document.getElementById('serviceEnquiryModal');
        if (serviceEnquiryModal && !serviceEnquiryModal.classList.contains('hidden')) closeServiceEnquiryModal();
        if (chatModal && !chatModal.classList.contains('hidden')) closeChatModal();
        if (projectDetailModal && !projectDetailModal.classList.contains('hidden')) closeProjectPreview();
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
    if (statusElement) {
        statusElement.textContent = '';
        statusElement.className = 'form-status-msg hidden';
    }

    const formData = getFormData();
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

document.addEventListener('click', (event) => {
    const enquiryLink = event.target.closest('[data-enquiry-service-id]');
    if (enquiryLink) {
        event.preventDefault();
        openServiceEnquiryModal(enquiryLink.dataset.enquiryServiceId);
        return;
    }

    const projectPreviewButton = event.target.closest('[data-project-preview]');
    if (projectPreviewButton) {
        openProjectPreview(Number(projectPreviewButton.dataset.projectPreview));
        return;
    }

    const serviceLink = event.target.closest('[data-service-id]');
    if (serviceLink) {
        handleServiceCardClick(event);
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    renderServices();
    renderProjects('All Projects', '');
    const detailPrefix = '/services/';
    const detailId = window.location.pathname.startsWith(detailPrefix)
        ? window.location.pathname.slice(detailPrefix.length).replace(/\/$/, '')
        : '';
    const serviceDetail = servicesData.find(service => service.id === detailId);
    if (serviceDetail) renderServiceDetail(serviceDetail);
    const requestedAction = new URLSearchParams(window.location.search).get('action');
    if (requestedAction === 'chat') openChatModal();
    if (requestedAction === 'register') openRegisterModal();
    await loadContactConfig();
});
