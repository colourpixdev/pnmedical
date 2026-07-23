const siteDataset = {
    brand: {
        name: "PN Medical",
        tagline: "Clinical hygiene systems for healthcare and industrial environments"
    },
    navigation: [
        { label: "Products", href: "#products" },
        { label: "Accreditation", href: "#credibility" },
        { label: "FAQ", href: "#faq" },
        { label: "News", href: "#news" },
        { label: "Contact", href: "#inquiry" }
    ],
    components: [
        {
            id: "COMP-001",
            name: "Top Admin Information Bar",
            visualDescription: "High-contrast Charcoal Slate thin information bar with white text and Sky Blue links.",
            contentItems: [
                "3 Commercial Road, Malmesbury Industria",
                "+27 21 552 9799",
                "info@pnmedical.co.za"
            ],
            designThemeRules: [
                "Background: #1E293B",
                "Color: #FFFFFF",
                "Font size: 0.85rem",
                "Display: flex",
                "Justify content: space-between"
            ]
        },
        {
            id: "COMP-002",
            name: "Asymmetric Angular Hero Banner",
            visualDescription: "A bold Slate-to-Teal hero with a slanted base, crimson badge, and dual CTAs.",
            contentItems: [
                "Kills 99.9% of Tested Germs",
                "Advanced Infection Control Solutions",
                "Explore Products",
                "Request Quote"
            ],
            designThemeRules: [
                "Background: linear-gradient(135deg, #1E293B 40%, #0F766E 100%)",
                "Clip path: polygon(0 0, 100% 0, 100% 90%, 0 100%)"
            ]
        },
        {
            id: "COMP-003",
            name: "Credibility and Accreditation Block",
            visualDescription: "Two-column authority block with an isolated accreditation panel and sky-blue accent border.",
            contentItems: [
                "Established 2007",
                "Hospitals, clinics, dairies, factories, and abattoirs",
                "ISO 22716, SGS FR12/01290, HACCP, WHO GMP"
            ],
            designThemeRules: [
                "Grid layout with responsive collapse below tablet",
                "White surface with left sky-blue border on accreditation panel"
            ]
        },
        {
            id: "COMP-004",
            name: "Three-Column Flagship Product Grid",
            visualDescription: "Responsive product cards with an ash-gray frame, red label, and teal inquiry CTA.",
            contentItems: [
                "Plastic Touch-Free Dispenser",
                "Stainless Steel Dispenser",
                "1L Isopropanol Refill Bag"
            ],
            designThemeRules: [
                "Grid template columns: repeat(auto-fit, minmax(280px, 1fr))",
                "Angular CTA buttons"
            ]
        },
        {
            id: "COMP-005",
            name: "Interactive FAQ Accordion Module",
            visualDescription: "Expandable operational FAQ rows with animated height transitions and active state styling.",
            contentItems: [
                "Prices on request",
                "Easy installation",
                "About 1000 sprays per 1L bag",
                "99.9% protection"
            ],
            designThemeRules: [
                "Animated max-height panel",
                "Chevron rotation on active state"
            ]
        },
        {
            id: "COMP-006",
            name: "Latest Campaigns and News Stream",
            visualDescription: "Timeline-style update cards with deep teal top stripes and crimson date markers.",
            contentItems: [
                "Western Cape 10th Infection Prevention Day",
                "Khayelitsha Hospital campaign",
                "Brewelskloof demonstration"
            ],
            designThemeRules: [
                "White cards with ambient shadow",
                "Top border accent in Deep Teal"
            ]
        },
        {
            id: "COMP-007",
            name: "Secure Procurement Inquiry Block",
            visualDescription: "Split-pane contact and form section using dark slate with an angular translucent form surface.",
            contentItems: [
                "Facility contact details",
                "Facility name, email, and message inputs",
                "Send Inquiry Securely CTA"
            ],
            designThemeRules: [
                "Dark background",
                "Translucent form panels with white-outline controls"
            ]
        }
    ],
    topBar: {
        address: "3 Commercial Road, Malmesbury Industria",
        phoneDisplay: "+27 21 552 9799",
        phoneHref: "tel:+27215529799",
        email: "info@pnmedical.co.za"
    },
    hero: {
        badge: "Kills 99.9% of Tested Germs",
        title: "Advanced Infection Control",
        accent: "Solutions",
        description: "Promoting superior hand hygiene with modern, waterless medical-strength systems for clinics, hospitals, factories, dairies, and abattoirs across South Africa.",
        primaryCta: { label: "Explore Products", href: "#products" },
        secondaryCta: { label: "Request Quote", href: "#inquiry" },
        supportTitle: "Touch-free dispensing built for high-contact spaces",
        supportPoints: [
            "Wall-mounted units for clinical, workplace, and public-use environments",
            "Hands-free operation helps reduce cross-contamination between users",
            "Closed-circuit one litre refill format for controlled, lockable dispensing"
        ],
        metrics: [
            "ISO 22716 cosmetic safety accreditation",
            "Established in 2007 with healthcare and industry coverage",
            "1L refill bags yield approximately 1000 sprays"
        ]
    },
    touchFreeFeature: {
        eyebrow: "Featured Product",
        title: "Sani-Hands Touch Free Dispensers - Plastic and Stainless Steel",
        imageSrc: "touch-free-dispensers.svg",
        imageAlt: "Sani-Hands plastic touch free dispenser and stainless steel touch free dispenser",
        intro: "Sani-Hands Touch Free Dispensers are available in durable plastic or stainless steel. The wall-mounted, hands-free system helps prevent harmful bacteria transfer and is suited to workplaces, offices, doctors' rooms, hospitals, kitchens, and other shared environments.",
        whenToUse: [
            "Before and after every patient contact",
            "After touching items such as door handles, money, hand rails, and public facilities",
            "Developed in accordance with World Health Organisation hand-hygiene guidelines"
        ],
        clinicUse: [
            "Popular in hospitals and clinics",
            "Wall mounted and lockable",
            "Closed-circuit one litre refill bag system"
        ],
        benefits: [
            "Non-allergenic",
            "Kills 99.9% of all germs",
            "Moisturises",
            "No water required",
            "No towels required"
        ],
        compliance: "Sani-Hands Touch Free Products are proudly South African and are manufactured, tested, and packaged in accordance with ISO 22716. This is the highest cosmetic accreditation for this product type in South Africa and supports efficacy and safety positioning alongside ISO 9001, ISO/IEC 17025:2005, HACCP, WHO GMO, CTFA membership, and the Muslim Judicial Council ruling permitting its use as a hand sanitiser.",
        warning: "For external use only. If swallowed, contact a physician. Keep out of eyes. In case of eye contact flush eyes with water immediately. If irritation persists seek medical attention. Keep out of reach of children. Flammable. Keep away from heat or flames."
    },
    credibility: {
        eyebrow: "Who We Serve",
        title: "Built for clinical reliability and industrial discipline.",
        summary: "PN Medical supplies touch-free hygiene products and infection-control solutions to hospitals, clinics, factories, dairies, and abattoirs, with a focus on dependable supply, compliance, and straightforward maintenance.",
        audiences: [
            "Private and public hospitals",
            "Clinics and healthcare practices",
            "Factories, dairies, and abattoirs",
            "Facilities that require fast hand-hygiene deployment"
        ],
        accreditationTitle: "Highest Cosmetic Accreditation",
        accreditationSummary: "Sani-Hands products align with strict cosmetic safety and quality standards for regulated hygiene environments.",
        certifications: [
            "ISO 22716 cosmetic safety accreditation",
            "SGS certificates FR12/01290 and FR12/01295",
            "ISO 9001, HACCP, and WHO GMP compliance references"
        ]
    },
    products: [
        {
            id: "prod-plastic-dispenser",
            category: "dispensers",
            label: "Flagship Dispenser",
            name: "Plastic Touch-Free Dispenser",
            description: "A lightweight touch-free unit designed for fast installation and reliable hand-sanitiser delivery in busy healthcare spaces.",
            cta: "Inquire",
            illustration: "plastic-dispenser"
        },
        {
            id: "prod-steel-dispenser",
            category: "dispensers",
            label: "Clinical Grade",
            name: "Stainless Steel Dispenser",
            description: "A heavy-duty stainless steel fixture built for high-traffic, high-durability environments where hygiene hardware must last.",
            cta: "Inquire",
            illustration: "steel-dispenser"
        },
        {
            id: "prod-refill-bag",
            category: "liquid-refills",
            label: "1L Refill",
            name: "Isopropanol Spray Bag",
            description: "Waterless alcohol refill bag supplying approximately 1000 sprays, suited to medical and industrial hand-hygiene routines.",
            cta: "Request Refill Quote",
            illustration: "refill-bag"
        },
        {
            id: "prod-50ml-bottle",
            category: "liquid-refills",
            label: "Portable Format",
            name: "50ml Spray Bottle",
            description: "Compact personal sanitising bottle for mobile teams, ward rounds, and on-site field hygiene access.",
            cta: "Request Refill Quote",
            illustration: "spray-bottle"
        },
        {
            id: "prod-reel-clip",
            category: "dispensers",
            label: "Accessory",
            name: "Retractable Reel and Clip",
            description: "Wearable holder system that keeps portable sanitising products accessible without interrupting task flow.",
            cta: "Inquire",
            illustration: "reel-clip"
        }
    ],
    filters: [
        { id: "all", label: "All Products" },
        { id: "dispensers", label: "Dispensers" },
        { id: "liquid-refills", label: "Liquid Refills" }
    ],
    faqs: [
        {
            question: "How much does it cost?",
            answer: "Pricing is provided on request so the recommendation can match the facility size, quantity, and preferred dispenser format."
        },
        {
            question: "Is it easy to install?",
            answer: "Yes. The dispensers are designed for straightforward setup and ship with fitting guidance for fast installation."
        },
        {
            question: "How many sprays per refill bag?",
            answer: "Each 1L bag yields approximately 1000 sprays or squirts under standard use conditions."
        },
        {
            question: "Is it safe and effective?",
            answer: "The range is positioned around ISO 22716 safety expectations and a 99.9% tested-germ reduction message for hand-hygiene use cases."
        }
    ],
    news: [
        {
            date: "26 OCT 2017",
            title: "Western Cape Infection Prevention Day",
            summary: "A joint awareness campaign linked to Tygerberg Hospital and Stellenbosch University activity around infection prevention and control."
        },
        {
            date: "10 MAY 2018",
            title: "Khayelitsha Hospital Hand Hygiene Week",
            summary: "An outreach and demonstration activation focused on improving hand-hygiene participation in a large public-care environment."
        },
        {
            date: "18 SEP 2018",
            title: "Brewelskloof Hand Wash Demonstration",
            summary: "A practical demonstration for hospital staff showcasing dispenser workflows, refill capacity, and fast deployment."
        }
    ],
    inquiry: {
        title: "Secure procurement inquiries for facilities and teams.",
        copy: "Use this form to request dispenser recommendations, refill quantities, or a quotation for a hospital, clinic, or industrial site.",
        contacts: [
            "Address: 3 Commercial Road, Malmesbury Industria",
            "Phone: +27 21 552 9799",
            "Email: info@pnmedical.co.za"
        ]
    },
    mediaAssets: [
        {
            title: "Website Showcase",
            description: "Available project video asset in the workspace.",
            src: "Website.mp4"
        },
        {
            title: "Social Media Showcase",
            description: "Available campaign asset in the workspace.",
            src: "Social Media.mp4"
        }
    ]
};

const appRoot = document.querySelector("#app");

function renderApp() {
    appRoot.innerHTML = `
        ${renderTopBar(siteDataset.topBar)}
        ${renderHeader(siteDataset.brand, siteDataset.navigation)}
        <main>
            ${renderHero(siteDataset.hero, siteDataset.mediaAssets)}
            ${renderCredibility(siteDataset.credibility)}
            ${renderProducts(siteDataset.filters)}
            ${renderFaq(siteDataset.faqs)}
            ${renderNews(siteDataset.news)}
            ${renderInquiry(siteDataset.inquiry)}
        </main>
        ${renderFooter(siteDataset.components)}
    `;

    renderProductCards("all");
    wireFilterBar();
    wireFaqAccordion();
}

function renderTopBar(topBar) {
    return `
        <div class="top-bar">
            <div class="container top-bar__inner">
                <span class="top-bar__item">Address: ${topBar.address}</span>
                <span class="top-bar__item">Phone: <a href="${topBar.phoneHref}">${topBar.phoneDisplay}</a></span>
                <span class="top-bar__item">Email: <a href="mailto:${topBar.email}">${topBar.email}</a></span>
            </div>
        </div>
    `;
}

function renderHeader(brand, navigation) {
    const links = navigation
        .map((item) => `<a href="${item.href}">${item.label}</a>`)
        .join("");

    return `
        <header class="site-header">
            <div class="container site-header__inner">
                <a class="brand" href="#top" aria-label="PN Medical homepage">
                    <img class="brand__logo" src="pn-medical-logo.svg" alt="PN Medical logo">
                    <span class="brand__tagline">${brand.tagline}</span>
                </a>
                <nav class="site-nav" aria-label="Primary navigation">
                    ${links}
                </nav>
            </div>
        </header>
    `;
}

function renderHero(hero, mediaAssets) {
    const metricCards = hero.metrics
        .map(
            (metric) => `
                <li class="hero__metric-pill angular-card">${metric}</li>
            `
        )
        .join("");
    const primaryVideo = mediaAssets[0];

    return `
        <section id="top" class="hero angular-hero-banner">
            <div class="container hero__layout">
                <div class="hero__copy">
                    <span class="eyebrow">${hero.badge}</span>
                    <h1>${hero.title} <span>${hero.accent}</span></h1>
                    <p>${hero.description}</p>
                    <div class="hero__actions">
                        <a class="button button--primary angular-card" href="${hero.primaryCta.href}">${hero.primaryCta.label}</a>
                        <a class="button button--secondary angular-card" href="${hero.secondaryCta.href}">${hero.secondaryCta.label}</a>
                    </div>
                    <ul class="hero__metrics-list">
                        ${metricCards}
                    </ul>
                </div>
                <aside class="hero__panel angular-card" aria-label="Featured videos">
                    <div class="hero__showcase">
                        <article class="hero__video-card hero__video-card--main angular-card">
                            <video controls preload="metadata">
                                <source src="${primaryVideo.src}" type="video/mp4">
                            </video>
                            <div class="hero__video-copy">
                                <strong>${primaryVideo.title}</strong>
                                <span>${primaryVideo.description}</span>
                            </div>
                        </article>
                        <article class="hero__insight-card angular-card">
                            <strong>${hero.supportTitle}</strong>
                            <ul>
                                ${hero.supportPoints.map((point) => `<li>${point}</li>`).join("")}
                            </ul>
                        </article>
                    </div>
                </aside>
            </div>
        </section>
    `;
}

function renderCredibility(credibility) {
    const audiences = credibility.audiences.map((item) => `<li>${item}</li>`).join("");
    const certifications = credibility.certifications.map((item) => `<li>${item}</li>`).join("");

    return `
        <section id="credibility" class="section">
            <div class="container">
                <div class="section-heading">
                    <div>
                        <span class="eyebrow">${credibility.eyebrow}</span>
                        <h2>${credibility.title}</h2>
                    </div>
                    <p>${credibility.summary}</p>
                </div>
                <div class="credibility">
                    <article class="panel-card angular-card">
                        <h3>Facility Fit</h3>
                        <ul class="stats-list">${audiences}</ul>
                    </article>
                    <article class="panel-card panel-card--accent angular-card">
                        <h3>${credibility.accreditationTitle}</h3>
                        <p>${credibility.accreditationSummary}</p>
                        <ul class="credentials-list">${certifications}</ul>
                    </article>
                </div>
            </div>
        </section>
    `;
}

function renderProducts(filters) {
    const filterButtons = filters
        .map(
            (filter, index) => `
                <button class="filter-chip angular-card${index === 0 ? " is-active" : ""}" type="button" data-filter="${filter.id}">
                    ${filter.label}
                </button>
            `
        )
        .join("");

    return `
        <section id="products" class="section">
            <div class="container">
                <div class="section-heading">
                    <div>
                        <span class="eyebrow">Flagship Range</span>
                        <h2>Filter dispensers and refill products by procurement need.</h2>
                    </div>
                    <p>The catalog grid is driven from the dataset so the displayed items, labels, and categories can be extended without changing the markup structure.</p>
                </div>
                ${renderTouchFreeFeature(siteDataset.touchFreeFeature)}
                <div class="filter-bar" aria-label="Product filters">
                    ${filterButtons}
                </div>
                <div id="product-grid" class="product-grid"></div>
            </div>
        </section>
    `;
}

function renderTouchFreeFeature(feature) {
    const useCases = feature.whenToUse.map((item) => `<li>${item}</li>`).join("");
    const clinicUse = feature.clinicUse.map((item) => `<li>${item}</li>`).join("");
    const benefitsMarkup = feature.benefits.map((item) => `<span>${item}</span>`).join("");

    return `
        <article class="product-feature angular-card">
            <div class="product-feature__layout">
                <div class="product-feature__visual angular-card">
                    <img src="${feature.imageSrc}" alt="${feature.imageAlt}">
                </div>
                <div class="product-feature__content">
                    <span class="eyebrow">${feature.eyebrow}</span>
                    <h3>${feature.title}</h3>
                    <p class="product-feature__lede">${feature.intro}</p>
                    <div class="product-feature__lists">
                        <section class="product-feature__list angular-card">
                            <h4>When to use Sani-Hands</h4>
                            <ul>${useCases}</ul>
                        </section>
                        <section class="product-feature__list angular-card">
                            <h4>Hospital and clinic fit</h4>
                            <ul>${clinicUse}</ul>
                        </section>
                    </div>
                    <div class="product-feature__benefits angular-card">
                        ${benefitsMarkup}
                    </div>
                    <p>${feature.compliance}</p>
                    <div class="product-feature__warning angular-card">
                        <strong>Warning</strong>
                        <p>${feature.warning}</p>
                    </div>
                </div>
            </div>
        </article>
    `;
}

function renderFaq(faqs) {
    const faqItems = faqs
        .map(
            (item) => `
                <div class="faq-item angular-card">
                    <button class="accordion" type="button" aria-expanded="false">
                        <span>${item.question}</span>
                        <span class="accordion__icon" aria-hidden="true">⌄</span>
                    </button>
                    <div class="panel">
                        <p class="faq-answer">${item.answer}</p>
                    </div>
                </div>
            `
        )
        .join("");

    return `
        <section id="faq" class="section">
            <div class="container">
                <div class="section-heading">
                    <div>
                        <span class="eyebrow">FAQ</span>
                        <h2>Operational answers for buyers, installers, and hygiene teams.</h2>
                    </div>
                    <p>The accordion uses animated max-height transitions so capacity and installation information can expand without leaving the page context.</p>
                </div>
                <div class="faq-list">
                    ${faqItems}
                </div>
            </div>
        </section>
    `;
}

function renderNews(newsItems) {
    const cards = newsItems
        .map(
            (item) => `
                <article class="news-card angular-card">
                    <div class="news-card__body">
                        <span class="news-card__date">${item.date}</span>
                        <h3>${item.title}</h3>
                        <p>${item.summary}</p>
                    </div>
                </article>
            `
        )
        .join("");

    return `
        <section id="news" class="section">
            <div class="container">
                <div class="section-heading">
                    <div>
                        <span class="eyebrow">Campaigns and News</span>
                        <h2>Programmed as data for repeatable updates.</h2>
                    </div>
                    <p>Historical campaign entries are represented as structured records, which makes them easy to expand into a larger programmatic archive later.</p>
                </div>
                <div class="news-grid">
                    ${cards}
                </div>
            </div>
        </section>
    `;
}

function renderInquiry(inquiry) {
    const contacts = inquiry.contacts.map((item) => `<li>${item}</li>`).join("");

    return `
        <section id="inquiry" class="section inquiry">
            <div class="container inquiry__layout">
                <div class="inquiry__copy angular-card">
                    <span class="eyebrow">Procurement</span>
                    <h2>${inquiry.title}</h2>
                    <p>${inquiry.copy}</p>
                    <ul class="contact-list">${contacts}</ul>
                </div>
                <form class="inquiry__form angular-card">
                    <div class="form-grid">
                        <label>
                            <span>Name or Facility</span>
                            <input type="text" name="facility" placeholder="Hospital, clinic, or team name">
                        </label>
                        <label>
                            <span>Email Address</span>
                            <input type="email" name="email" placeholder="procurement@example.org">
                        </label>
                        <label>
                            <span>Inquiry Message</span>
                            <textarea name="message" placeholder="Tell PN Medical what products, quantities, or delivery details you need."></textarea>
                        </label>
                        <button class="button button--primary angular-card" type="submit">Send Inquiry Securely</button>
                    </div>
                </form>
            </div>
        </section>
    `;
}

function renderFooter(components) {
    return `
        <footer class="site-footer">
            <div class="container">
                <p>Structured mockup dataset loaded with ${components.length} core architecture components for the PN Medical build.</p>
            </div>
        </footer>
    `;
}

function renderProductIllustration(product) {
    const illustrations = {
        "plastic-dispenser": `
            <svg viewBox="0 0 320 220" role="img" aria-label="Plastic touch-free dispenser illustration" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="plasticBody" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#ffffff" />
                        <stop offset="100%" stop-color="#dbeafe" />
                    </linearGradient>
                </defs>
                <rect x="118" y="28" width="84" height="142" rx="24" fill="url(#plasticBody)" stroke="#0f766e" stroke-width="6" />
                <rect x="136" y="52" width="48" height="52" rx="14" fill="#e2e8f0" />
                <rect x="144" y="116" width="32" height="20" rx="10" fill="#0f766e" opacity="0.85" />
                <path d="M150 170 H170 L182 194 H138 Z" fill="#1e293b" />
                <circle cx="230" cy="78" r="16" fill="#b91c1c" opacity="0.15" />
                <path d="M229 68 V88 M219 78 H239" stroke="#b91c1c" stroke-width="5" stroke-linecap="round" />
            </svg>
        `,
        "steel-dispenser": `
            <svg viewBox="0 0 320 220" role="img" aria-label="Stainless steel dispenser illustration" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="steelBody" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#f8fafc" />
                        <stop offset="45%" stop-color="#cbd5e1" />
                        <stop offset="100%" stop-color="#94a3b8" />
                    </linearGradient>
                </defs>
                <rect x="112" y="24" width="96" height="148" rx="20" fill="url(#steelBody)" stroke="#1e293b" stroke-width="6" />
                <rect x="132" y="52" width="56" height="14" rx="7" fill="#ffffff" opacity="0.7" />
                <rect x="126" y="84" width="68" height="44" rx="14" fill="#e2e8f0" opacity="0.7" />
                <path d="M146 172 H174 L188 198 H132 Z" fill="#0f766e" />
                <path d="M58 162 L96 134" stroke="#0284c7" stroke-width="8" stroke-linecap="round" />
                <circle cx="52" cy="168" r="18" fill="#0284c7" opacity="0.12" />
            </svg>
        `,
        "refill-bag": `
            <svg viewBox="0 0 320 220" role="img" aria-label="Isopropanol refill bag illustration" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="bagBody" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#e0f2fe" />
                        <stop offset="100%" stop-color="#bfdbfe" />
                    </linearGradient>
                </defs>
                <path d="M102 38 H218 L206 182 H114 Z" fill="url(#bagBody)" stroke="#0284c7" stroke-width="6" />
                <rect x="134" y="22" width="52" height="28" rx="10" fill="#1e293b" />
                <rect x="126" y="76" width="68" height="22" rx="11" fill="#ffffff" opacity="0.72" />
                <path d="M128 132 C148 116 172 116 192 132" stroke="#0f766e" stroke-width="7" fill="none" stroke-linecap="round" />
                <text x="160" y="160" text-anchor="middle" font-size="24" font-family="Barlow, Arial, sans-serif" font-weight="700" fill="#1e293b">1L</text>
            </svg>
        `,
        "spray-bottle": `
            <svg viewBox="0 0 320 220" role="img" aria-label="Portable spray bottle illustration" xmlns="http://www.w3.org/2000/svg">
                <rect x="130" y="56" width="60" height="120" rx="20" fill="#dbeafe" stroke="#0284c7" stroke-width="6" />
                <rect x="146" y="32" width="28" height="30" rx="8" fill="#1e293b" />
                <path d="M174 40 H206 V58 H188" fill="#1e293b" />
                <path d="M206 48 H228" stroke="#1e293b" stroke-width="8" stroke-linecap="round" />
                <path d="M230 42 L248 34" stroke="#0f766e" stroke-width="5" stroke-linecap="round" />
                <path d="M232 52 L252 52" stroke="#0f766e" stroke-width="5" stroke-linecap="round" />
                <path d="M230 62 L248 70" stroke="#0f766e" stroke-width="5" stroke-linecap="round" />
                <rect x="142" y="96" width="36" height="44" rx="12" fill="#ffffff" opacity="0.75" />
            </svg>
        `,
        "reel-clip": `
            <svg viewBox="0 0 320 220" role="img" aria-label="Retractable reel and clip illustration" xmlns="http://www.w3.org/2000/svg">
                <circle cx="138" cy="110" r="52" fill="#1e293b" />
                <circle cx="138" cy="110" r="28" fill="#0f766e" />
                <path d="M188 110 H254" stroke="#0284c7" stroke-width="7" stroke-linecap="round" />
                <path d="M250 92 V148" stroke="#0284c7" stroke-width="8" stroke-linecap="round" />
                <path d="M232 150 H268" stroke="#0284c7" stroke-width="8" stroke-linecap="round" />
                <path d="M72 94 L92 74" stroke="#b91c1c" stroke-width="7" stroke-linecap="round" />
                <path d="M70 126 L94 146" stroke="#b91c1c" stroke-width="7" stroke-linecap="round" />
            </svg>
        `
    };

    return illustrations[product.illustration] ?? illustrations["plastic-dispenser"];
}

function renderProductCards(activeFilter) {
    const grid = document.querySelector("#product-grid");
    const filtered = activeFilter === "all"
        ? siteDataset.products
        : siteDataset.products.filter((product) => product.category === activeFilter);

    if (!filtered.length) {
        grid.innerHTML = '<div class="product-empty angular-card">No products matched this filter.</div>';
        return;
    }

    grid.innerHTML = filtered
        .map(
            (product) => `
                <article class="product-card angular-card">
                    <div class="product-card__media">
                        <div class="product-card__media-top">
                            <span class="product-card__tag angular-card">${product.label}</span>
                            <strong>${product.category === "dispensers" ? "Hardware" : "Consumable"}</strong>
                        </div>
                        <div class="product-card__art" aria-hidden="true">
                            ${renderProductIllustration(product)}
                        </div>
                    </div>
                    <div class="product-card__body">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <div class="product-card__actions">
                            <a class="button button--secondary angular-card" href="#inquiry">${product.cta}</a>
                        </div>
                    </div>
                </article>
            `
        )
        .join("");
}

function wireFilterBar() {
    document.querySelectorAll(".filter-chip").forEach((button) => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.remove("is-active"));
            button.classList.add("is-active");
            renderProductCards(button.dataset.filter);
        });
    });
}

function wireFaqAccordion() {
    document.querySelectorAll(".accordion").forEach((accordion) => {
        accordion.addEventListener("click", () => {
            accordion.classList.toggle("active");
            const panel = accordion.nextElementSibling;
            const isExpanded = accordion.getAttribute("aria-expanded") === "true";

            accordion.setAttribute("aria-expanded", String(!isExpanded));

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.style.paddingTop = "0px";
                panel.style.paddingBottom = "0px";
            } else {
                panel.style.maxHeight = `${panel.scrollHeight}px`;
                panel.style.paddingTop = "0.15rem";
                panel.style.paddingBottom = "1.2rem";
            }
        });
    });
}

renderApp();