const PN_CONTENT_OVERRIDES_KEY = "pnMedicalContentOverrides";

function cloneContent(value) {
    return JSON.parse(JSON.stringify(value));
}

function isMergeableObject(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
}

function mergeContent(baseValue, overrideValue) {
    if (Array.isArray(baseValue)) {
        if (!Array.isArray(overrideValue)) {
            return cloneContent(baseValue);
        }

        return baseValue.map((item, index) => mergeContent(item, overrideValue[index]));
    }

    if (isMergeableObject(baseValue)) {
        const result = {};
        Object.keys(baseValue).forEach((key) => {
            result[key] = mergeContent(baseValue[key], overrideValue ? overrideValue[key] : undefined);
        });
        return result;
    }

    if (typeof baseValue === "string" && typeof overrideValue === "string") {
        return overrideValue;
    }

    return baseValue;
}

function readContentOverrides() {
    try {
        const stored = window.localStorage.getItem(PN_CONTENT_OVERRIDES_KEY);
        if (!stored) {
            return null;
        }

        const parsed = JSON.parse(stored);
        return parsed && typeof parsed === "object" ? parsed : null;
    } catch (_error) {
        return null;
    }
}

const baseDataset = {
    brand: {
        tagline: "Support effective everyday hand hygiene across healthcare, industry, and public spaces"
    },
    navigation: [
        { id: "home", label: "Home", href: "index.html" },
        { id: "products", label: "Products", href: "products.html" },
        { id: "accreditation", label: "Accreditation", href: "accreditation.html" },
        { id: "faq", label: "FAQ", href: "faq.html" },
        { id: "news", label: "News", href: "news.html" },
        { id: "contact", label: "Contact", href: "contact.html" }
    ],
    topBar: {
        address: "3 Commercial Road, Malmesbury Industria",
        phoneDisplay: "+27 21 552 9799",
        phoneHref: "tel:+27215529799",
        email: "info@pnmedical.co.za"
    },
    hero: {
        badge: "Support Effective Everyday Hand Hygiene",
        title: "Sani-Hands",
        accent: "Everyday Hygiene",
        description: "With Sani-Hands Isopropanol hand rub and anti-bacterial soap hand wash, facilities can maintain fast, practical hand hygiene routines throughout the day.",
        primaryCta: { label: "Order Sani-Hands Products", href: "contact.html" },
        secondaryCta: { label: "Request Quote", href: "contact.html" },
        supportTitle: "Built for clinical teams and high-contact environments",
        supportPoints: [
            "Designed for hospitals, clinics, offices, schools, and public facilities",
            "Waterless hand-hygiene formats for fast use on shift and on the move",
            "No water or towels required for core Sani-Hands sanitising routines"
        ],
        metrics: [
            "ISO 22716 cosmetic safety accreditation",
            "Established in 2007 with healthcare and industry coverage",
            "Kills 99.9% of tested germs message across flagship product line"
        ]
    },
    pageIntro: {
        products: {
            eyebrow: "Product Range",
            title: "Hand-hygiene systems for facilities that need reliability.",
            description: "Browse the flagship PN Medical range, including touch-free dispensers and refill consumables designed for infection-control compliance and easy deployment."
        },
        accreditation: {
            eyebrow: "Accreditation",
            title: "Compliance, manufacturing discipline, and product assurance.",
            description: "PN Medical positions Sani-Hands around strong manufacturing controls, tested germ efficacy, and formal quality references relevant to healthcare and industrial buyers."
        },
        faq: {
            eyebrow: "FAQ",
            title: "Operational answers for buyers, installers, and hygiene teams.",
            description: "The most common procurement and installation questions, kept in one place for facilities evaluating the range."
        },
        news: {
            eyebrow: "Campaigns and News",
            title: "Awareness campaigns and hand-hygiene activity.",
            description: "Recent and historical campaign items, paired with social updates from Facebook and LinkedIn."
        },
        contact: {
            eyebrow: "Contact PN Medical",
            title: "Talk to PN Medical about quotes, refills, and dispenser rollout.",
            description: "Use the contact page for procurement, facility planning, and hygiene-system questions."
        }
    },
    accreditationIntroVisual: {
        src: "products/2.png",
        alt: "Sani-Hands refill product visual for accreditation context",
        title: "Controlled Refill Standards"
    },
    accreditationCredibilityVisual: {
        src: "products/1.png",
        alt: "Sani-Hands touch free dispenser hardware visual",
        title: "Clinical Hardware Reliability"
    },
    homeHighlights: [
        {
            title: "Touch-free dispensing",
            description: "Wall-mounted plastic and stainless steel units for high-traffic shared spaces.",
            href: "products.html"
        },
        {
            title: "Waterless sanitising",
            description: "Alcohol-based sanitiser and refill formats for fast hand hygiene without water.",
            href: "products.html"
        },
        {
            title: "Compliance confidence",
            description: "Backed by ISO 22716 positioning and additional manufacturing references.",
            href: "accreditation.html"
        }
    ],
    flyerSpotlight: {
        title: "Campaign Guidance for Everyday Hand Hygiene",
        description: "Sani-Hands hand-hygiene products are intended for use on intact skin to support routine hand hygiene in facilities, hospitals, clinics, offices, schools, and general-use areas.",
        emphasis: "Good hand hygiene is one of the simplest ways to support everyday cleanliness.",
        panelTitle: "Sani-Hands Isopropanol Hand Rub",
        panelFooter: "No water or towels needed",
        disclaimer: "Based on applicable test evidence. Use as directed. Intended for hand-hygiene use on intact skin only. Not intended for wound care, surgical use, sterile-field use, invasive procedures, patient treatment, contact lens care, or cleaning and disinfecting medical devices.",
        ctaTitle: "Order your Sani-Hands products now",
        contactLines: [
            "+27 21 552 9799",
            "info@pnmedical.co.za",
            "www.pnmedical.co.za"
        ]
    },
    touchFreeFeature: {
        id: "home",
        eyebrow: "Featured Product",
        title: "Sani-Hands Touch Free Dispensers - Plastic and Stainless Steel",
        imageSrc: "products/1.png",
        imageAlt: "Sani-Hands plastic touch free dispenser and stainless steel touch free dispenser",
        intro: "Sani-Hands Touch Free Dispensers are available in durable plastic or stainless steel. The wall-mounted, hands-free system helps prevent harmful bacteria transfer and is suited to workplaces, offices, doctors' rooms, hospitals, kitchens, and other shared environments.",
        listGroups: [
            {
                title: "When to use Sani-Hands",
                items: [
                    "Before and after every patient contact",
                    "After touching items such as door handles, money, hand rails, and public facilities",
                    "Developed in accordance with World Health Organisation hand-hygiene guidelines"
                ]
            },
            {
                title: "Hospital and clinic fit",
                items: [
                    "Popular in hospitals and clinics",
                    "Wall mounted and lockable",
                    "Closed-circuit one litre refill bag system"
                ]
            }
        ],
        tags: [
            "Non-allergenic",
            "Kills 99.9% of all germs",
            "Moisturises",
            "No water required",
            "No towels required"
        ],
        compliance: "Sani-Hands Touch Free Products are proudly South African and are manufactured, tested, and packaged in accordance with ISO 22716. This is the highest cosmetic accreditation for this product type in South Africa and supports efficacy and safety positioning alongside ISO 9001, ISO/IEC 17025:2005, HACCP, WHO GMO, CTFA membership, and the Muslim Judicial Council ruling permitting its use as a hand sanitiser.",
        warning: "For external use only. If swallowed, contact a physician. Keep out of eyes. In case of eye contact flush eyes with water immediately. If irritation persists seek medical attention. Keep out of reach of children. Flammable. Keep away from heat or flames."
    },
    refillFeature: {
        id: "profile",
        eyebrow: "Consumable",
        title: "Sani-Hands Isopropanol Refill Bag (1 Litre)",
        imageSrc: "products/2.png",
        imageAlt: "Sani-Hands 1 Litre isopropanol refill bag and mounted dispenser refill system",
        intro: "Sani-Hands Isopropanol is a waterless alcohol-based hand sanitiser that has been tested and is effective against 99.9% of all germs.",
        listGroups: [
            {
                title: "Why facilities use it",
                items: [
                    "Sanitise hands anywhere without water",
                    "No need to use towels because it dries in seconds",
                    "No need for soap",
                    "Fresh fragrance",
                    "Moisturises",
                    "Helps eliminate the spread of bacteria",
                    "The touch-free concept increases compliance of hand washing dramatically"
                ]
            },
            {
                title: "Efficacy challenge organisms",
                items: [
                    "Escherichia coli",
                    "Staphylococcus aureus",
                    "Pseudomonas aeruginosa",
                    "Yeast and mould"
                ]
            }
        ],
        tags: [
            "Waterless use",
            "Fast dry down",
            "Fresh fragrance",
            "Moisturises",
            "99.9% tested efficacy"
        ],
        compliance: "Tested in accordance with ISO 22716, SABS Method 261, SANS 5261, and SANS 490 for 99.9% efficacy against key bacterial and fungal challenges relevant to hand-hygiene environments."
    },
    soapFeature: {
        id: "messages",
        eyebrow: "Consumable",
        title: "Sani-Hands Anti-Bacterial Soap Refill Bag (1 Litre)",
        imageSrc: "products/3.png",
        imageAlt: "Sani-Hands 1 Litre anti-bacterial soap refill bag and mounted dispenser refill system",
        intro: "Sani-Hands Anti-Bacterial Soap has been laboratory tested and is effective against 99.9% of all germs.",
        listGroups: [
            {
                title: "Why facilities use it",
                items: [
                    "A fragrant soap with Rooibos extract which is soft and gentle on your hands",
                    "Effective against Gram-negative bacteria",
                    "Ideal for soiled hands",
                    "Moisturises hands"
                ]
            },
            {
                title: "Efficacy challenge organisms",
                items: [
                    "Escherichia coli",
                    "Staphylococcus aureus",
                    "Pseudomonas aeruginosa",
                    "Yeast and mould"
                ]
            }
        ],
        tags: [
            "Rooibos extract",
            "Gentle on hands",
            "Ideal for soiled hands",
            "Moisturises",
            "99.9% tested efficacy"
        ],
        compliance: "Tested in accordance with ISO 22716, SABS Method 261, SANS 1597, and SANS 490 for 99.9% efficacy against key bacterial and fungal challenges relevant to hand-hygiene environments."
    },
    sprayBottleFeature: {
        id: "settings",
        eyebrow: "Portable Product",
        title: "Sani-Hands Isopropanol Spray Bottle (50ml)",
        imageSrc: "products/4.png",
        imageAlt: "Sani-Hands Isopropanol Spray Bottle 50ml",
        intro: "Sani-Hands 50ml hand sanitiser spray is a waterless alcohol based hand sanitiser that has been laboratory tested to kill 99.9% of all germs. It uses 70% Isopropanol which has been proven to be effective.",
        listGroups: [
            {
                title: "Portable hygiene use",
                items: [
                    "Sized for mobile teams, ward rounds, reception desks, and field visits",
                    "Spray format supports quick application between shared touchpoints",
                    "Waterless use supports hygiene where sinks are not available"
                ]
            },
            {
                title: "Core efficacy and skin profile",
                items: [
                    "Contains 70% Isopropanol",
                    "Laboratory tested to kill 99.9% of all germs",
                    "Non-allergenic and moisturising"
                ]
            }
        ],
        tags: [
            "Non-allergenic",
            "Kills 99.9% of all germs",
            "Moisturises",
            "No water required",
            "No towels required"
        ],
        compliance: "Aligned to the Sani-Hands efficacy positioning for waterless hand hygiene, using 70% Isopropanol in a compact portable format for frequent day-to-day use."
    },
    reelClipFeature: {
        id: "fund",
        eyebrow: "Accessory",
        title: "Retractable Reel & Clip for 50ml Spray Bottle",
        imageSrc: "products/5.png",
        imageAlt: "Retractable reel and clip attached to a Sani-Hands 50ml spray bottle",
        intro: "Our Retractable reel & clip will ensure your Sani-Hands 50ml Hand Sanitiser Spray is always within reach. Perfect for use by nurses or medical staff in hospitals and doctor's rooms, reducing the risk of contamination.",
        listGroups: [
            {
                title: "Why teams use it",
                items: [
                    "Keeps the 50ml bottle accessible during shifts and rounds",
                    "Supports faster hand-sanitiser access at high-contact points",
                    "Reduces misplacement of portable sanitiser bottles"
                ]
            },
            {
                title: "Typical environments",
                items: [
                    "Hospitals and clinics",
                    "Doctors' rooms and treatment areas",
                    "Mobile nursing and frontline medical teams"
                ]
            }
        ],
        tags: [
            "Always within reach",
            "Supports contamination control",
            "Built for medical workflows",
            "Portable hygiene accessory"
        ],
        compliance: "Designed as an accessory for the Sani-Hands 50ml spray bottle to improve practical carry, access speed, and day-to-day hygiene adherence in clinical environments."
    },
    productQuickLinks: [
        { label: "Touch Free Dispensers", href: "#home" },
        { label: "1 Litre Isopropanol Refill Bags", href: "#profile" },
        { label: "1 Litre Anti-Bacterial Soap Refill Bags", href: "#messages" },
        { label: "50ml Isopropanol Spray Bottle", href: "#settings" },
        { label: "Retractable Reel & Clip for 50ml Spray Bottle", href: "#fund" }
    ],
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
            "ISO 9001, HACCP, WHO GMP, ISO/IEC 17025:2005, and CTFA references"
        ]
    },
    accreditationVisuals: [
        {
            src: "products/1.png",
            alt: "Sani-Hands touch free dispenser systems for controlled hand-hygiene delivery",
            title: "Touch-Free Hardware",
            caption: "Wall-mounted plastic and stainless steel units designed for high-use environments."
        },
        {
            src: "products/2.png",
            alt: "Sani-Hands one litre isopropanol refill format",
            title: "Refill Process",
            caption: "Closed-circuit one litre refill format supporting consistent sanitiser supply."
        },
        {
            src: "products/3.png",
            alt: "Sani-Hands anti-bacterial soap refill product",
            title: "Soap Hygiene Line",
            caption: "Anti-bacterial soap refill option aligned with routine hygiene programs."
        },
        {
            src: "products/4.png",
            alt: "Sani-Hands portable 50ml spray bottle",
            title: "Portable Compliance",
            caption: "50ml portable sanitiser for rapid hand hygiene during rounds and field movement."
        },
        {
            src: "products/5.png",
            alt: "Sani-Hands retractable reel and clip accessory",
            title: "Clinical Accessory Control",
            caption: "Retractable reel and clip keeps portable sanitiser close at all times."
        }
    ],
    products: [
        {
            id: "prod-touch-free-dispensers",
            category: "dispensers",
            label: "Dispenser",
            name: "Sani-Hands Touch Free Dispensers",
            description: "Hands-free plastic and stainless steel wall-mounted systems that help reduce cross-contamination in shared environments.",
            cta: "Request dispenser quote",
            imageSrc: "products/1.png"
        },
        {
            id: "prod-refill-bag",
            category: "liquid-refills",
            label: "Refill",
            name: "1 Litre Isopropanol Refill Bag",
            description: "Waterless alcohol refill bag supplying tested 99.9% germ efficacy and clean integration into the touch-free dispenser system.",
            cta: "Request refill quote",
            imageSrc: "products/2.png"
        },
        {
            id: "prod-soap-refill-bag",
            category: "liquid-refills",
            label: "Refill",
            name: "1 Litre Anti-Bacterial Soap Refill Bag",
            description: "Anti-bacterial soap refill with Rooibos extract, formulated for effective hand hygiene and skin comfort.",
            cta: "Request refill quote",
            imageSrc: "products/3.png"
        },
        {
            id: "prod-50ml-bottle",
            category: "liquid-refills",
            label: "Portable",
            name: "Sani-Hands Isopropanol Spray Bottle (50ml)",
            description: "Portable 70% isopropanol sanitiser spray tested to kill 99.9% of all germs for fast waterless hand hygiene.",
            cta: "Request refill quote",
            imageSrc: "products/4.png"
        },
        {
            id: "prod-reel-clip",
            category: "dispensers",
            label: "Accessory",
            name: "Retractable Reel & Clip for 50ml Spray Bottle",
            description: "Wearable holder accessory that keeps the Sani-Hands 50ml spray bottle within reach for medical staff and frontline teams.",
            cta: "Request accessory quote",
            imageSrc: "products/5.png"
        }
    ],
    socialFeeds: {
        facebookUrl: "https://www.facebook.com/sanihandssa/",
        linkedinUrl: "https://za.linkedin.com/company/pn-medical-pty-ltd",
        linkedinNotes: [
            "Open the PN Medical LinkedIn page to view the latest company posts and updates.",
            "Follow the page for campaign activity, product announcements, and hygiene awareness content."
        ]
    },
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
            src: "Website.mp4",
            poster: "logo.png"
        }
    ]
};

window.__pnDefaultDataset = cloneContent(baseDataset);
const siteDataset = mergeContent(baseDataset, readContentOverrides());

const appRoot = document.querySelector("#app");
const currentPage = document.body.dataset.page || "home";

function renderApp() {
    appRoot.innerHTML = `
        ${renderTopBar(siteDataset.topBar)}
        ${renderHeader(siteDataset.brand, siteDataset.navigation, currentPage)}
        <main>${renderPage(currentPage)}</main>
        ${renderFooter(siteDataset.navigation)}
    `;

    renderProductCards("all");
    wireFilterBar();
    wireMobileMenu();
}

function renderPage(page) {
    switch (page) {
        case "products": return renderProductsPage();
        case "accreditation": return renderAccreditationPage();
        case "faq": return renderFaqPage();
        case "news": return renderNewsPage();
        case "contact": return renderContactPage();
        default: return renderHomePage();
    }
}

function renderTopBar(topBar) {
    return `<div class="top-bar"><div class="container top-bar__inner"><span class="top-bar__item">Address: ${topBar.address}</span><span class="top-bar__item">Phone: <a href="${topBar.phoneHref}">${topBar.phoneDisplay}</a></span><span class="top-bar__item">Email: <a href="mailto:${topBar.email}">${topBar.email}</a></span></div></div>`;
}

function adminFieldAttrs(path, kind = "text") {
    return `data-admin-field="${path.join(".")}" data-admin-kind="${kind}"`;
}

function renderHeader(brand, navigation, page) {
    const links = navigation.map((item) => `<a class="${item.id === page ? "is-active" : ""}" href="${item.href}">${item.label}</a>`).join("");
    return `<header class="site-header"><div class="container site-header__inner"><a class="brand" href="index.html" aria-label="PN Medical homepage"><img class="brand__logo" src="logo.png" alt="PN Medical logo"><span class="brand__tagline">${brand.tagline}</span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Toggle navigation menu"><span></span><span></span><span></span></button><nav id="primary-nav" class="site-nav" aria-label="Primary navigation">${links}</nav></div></header>`;
}

function renderHomePage() {
    return `${renderHero(siteDataset.hero, siteDataset.mediaAssets)}${renderFlyerSpotlight(siteDataset.flyerSpotlight)}${renderHomeHighlights(siteDataset.homeHighlights)}${renderHomeProductPreview()}${renderAccreditationSummary(siteDataset.credibility)}${renderHomeContactCta()}`;
}

function renderProductsPage() {
    return `${renderPageIntro(siteDataset.pageIntro.products)}<section class="section section--tight"><div class="container">${renderProductQuickLinks(siteDataset.productQuickLinks)}${renderProductFeature(siteDataset.touchFreeFeature)}${renderProductFeature(siteDataset.refillFeature)}${renderProductFeature(siteDataset.soapFeature)}${renderProductFeature(siteDataset.sprayBottleFeature)}${renderProductFeature(siteDataset.reelClipFeature)}${renderProducts(siteDataset.filters)}</div></section>`;
}

function renderAccreditationPage() {
    return `${renderPageIntro(siteDataset.pageIntro.accreditation)}${renderCredibility(siteDataset.credibility)}${renderAccreditationGallery(siteDataset.accreditationVisuals)}<section class="section section--tight"><div class="container compliance-band angular-card"><div><span class="eyebrow">Compliance Detail</span><h2>Quality references used across the range.</h2></div><p>${siteDataset.touchFreeFeature.compliance}</p><p>${siteDataset.refillFeature.compliance}</p></div></section>`;
}

function renderFaqPage() {
    return `${renderPageIntro(siteDataset.pageIntro.faq)}${renderFaq(siteDataset.faqs)}`;
}

function renderNewsPage() {
    return `${renderPageIntro(siteDataset.pageIntro.news)}${renderSocialFeed(siteDataset.socialFeeds)}${renderNews(siteDataset.news)}`;
}

function renderContactPage() {
    return `${renderPageIntro(siteDataset.pageIntro.contact)}${renderInquiry(siteDataset.inquiry)}`;
}

function renderHero(hero, mediaAssets) {
    const metricCards = hero.metrics.map((metric) => `<li class="hero__metric-pill angular-card">${metric}</li>`).join("");
    const primaryVideo = mediaAssets[0];
    const videoPoster = primaryVideo.poster || "logo.png";
    return `<section class="hero angular-hero-banner"><div class="container hero__layout"><div class="hero__copy"><span class="eyebrow" ${adminFieldAttrs(["hero", "badge"])}>${hero.badge}</span><h1 ${adminFieldAttrs(["hero", "title"])}>${hero.title} <span ${adminFieldAttrs(["hero", "accent"])}>${hero.accent}</span></h1><p ${adminFieldAttrs(["hero", "description"])}>${hero.description}</p><div class="hero__actions"><a class="button button--primary angular-card" href="${hero.primaryCta.href}" ${adminFieldAttrs(["hero", "primaryCta", "label"])}> ${hero.primaryCta.label}</a><a class="button button--secondary angular-card" href="${hero.secondaryCta.href}" ${adminFieldAttrs(["hero", "secondaryCta", "label"])}>${hero.secondaryCta.label}</a></div><ul class="hero__metrics-list">${metricCards}</ul></div><aside class="hero__panel angular-card" aria-label="Featured video and summary"><div class="hero__showcase"><article class="hero__video-card hero__video-card--main angular-card"><video controls preload="metadata" poster="${videoPoster}" ${adminFieldAttrs(["mediaAssets", 0, "src"], "media")}><source src="${primaryVideo.src}" type="video/mp4"></video><div class="hero__video-copy"><strong ${adminFieldAttrs(["mediaAssets", 0, "title"])}>${primaryVideo.title}</strong><span ${adminFieldAttrs(["mediaAssets", 0, "description"])}>${primaryVideo.description}</span></div></article><article class="hero__insight-card angular-card"><strong ${adminFieldAttrs(["hero", "supportTitle"])}>${hero.supportTitle}</strong><ul>${hero.supportPoints.map((point, index) => `<li ${adminFieldAttrs(["hero", "supportPoints", index])}>${point}</li>`).join("")}</ul></article></div></aside></div></section>`;
}

function renderFlyerSpotlight(flyerSpotlight) {
    const contactLines = flyerSpotlight.contactLines.map((item) => `<li>${item}</li>`).join("");
    return `<section class="section section--tight flyer-spotlight"><div class="container flyer-spotlight__layout"><article class="flyer-spotlight__main angular-card"><div class="flyer-spotlight__copy"><h2 ${adminFieldAttrs(["flyerSpotlight", "title"])}>${flyerSpotlight.title}</h2><p ${adminFieldAttrs(["flyerSpotlight", "description"])}>${flyerSpotlight.description}</p><p class="flyer-spotlight__emphasis" ${adminFieldAttrs(["flyerSpotlight", "emphasis"])}>${flyerSpotlight.emphasis}</p></div><div class="flyer-spotlight__protocol angular-card"><h3 ${adminFieldAttrs(["flyerSpotlight", "panelTitle"])}>${flyerSpotlight.panelTitle}</h3><img src="hygiene-steps.svg" alt="Hand hygiene usage guidance illustration" ${adminFieldAttrs(["flyerSpotlight", "panelTitle"], "image")}></div><p class="flyer-spotlight__protocol-footer" ${adminFieldAttrs(["flyerSpotlight", "panelFooter"])}>${flyerSpotlight.panelFooter}</p><p class="flyer-spotlight__disclaimer" ${adminFieldAttrs(["flyerSpotlight", "disclaimer"])}>${flyerSpotlight.disclaimer}</p></article><aside class="flyer-spotlight__cta angular-card"><img class="flyer-spotlight__badge" src="flyer-germ-badge.svg" alt="Kills 99.9% of tested germs badge" ${adminFieldAttrs(["flyerSpotlight", "ctaTitle"], "image")}><h3 ${adminFieldAttrs(["flyerSpotlight", "ctaTitle"])}>${flyerSpotlight.ctaTitle}</h3><ul>${flyerSpotlight.contactLines.map((item, index) => `<li ${adminFieldAttrs(["flyerSpotlight", "contactLines", index])}>${item}</li>`).join("")}</ul><a class="button button--primary angular-card" href="contact.html" ${adminFieldAttrs(["flyerSpotlight", "ctaTitle"])}>Place an Inquiry</a></aside></div></section>`;
}

function renderPageIntro(intro, visual = null) {
    const sideMarkup = visual
        ? `<div class="page-intro__side"><p ${adminFieldAttrs(["pageIntro", currentPage], "text")}>${intro.description}</p><article class="context-visual-card angular-card"><img src="${visual.src}" alt="${visual.alt}" ${adminFieldAttrs(["accreditationVisuals", 0, "src"], "image")}><h3 ${adminFieldAttrs(["accreditationVisuals", 0, "title"])}>${visual.title}</h3></article></div>`
        : `<p ${adminFieldAttrs(["pageIntro", currentPage], "text")}>${intro.description}</p>`;

    return `<section class="page-intro"><div class="container page-intro__layout"><div><span class="eyebrow" ${adminFieldAttrs(["pageIntro", currentPage, "eyebrow"])}>${intro.eyebrow}</span><h1 ${adminFieldAttrs(["pageIntro", currentPage, "title"])}>${intro.title}</h1></div>${sideMarkup}</div></section>`;
}

function renderHomeHighlights(items) {
    const cards = items.map((item, index) => `<article class="overview-card angular-card"><h3 ${adminFieldAttrs(["homeHighlights", index, "title"])}>${item.title}</h3><p ${adminFieldAttrs(["homeHighlights", index, "description"])}>${item.description}</p><a href="${item.href}" ${adminFieldAttrs(["homeHighlights", index, "href"])}>Learn more</a></article>`).join("");
    return `<section class="section section--tight"><div class="container"><div class="section-heading"><div><span class="eyebrow">Core Advantages</span><h2>Clean product lines with clear facility use cases.</h2></div><p>The site now separates browsing by intent, so visitors can move from the homepage into products, accreditation, support, or contact without scrolling through a single long document.</p></div><div class="overview-grid">${cards}</div></div></section>`;
}

function renderHomeProductPreview() {
    return `<section class="section section--tight product-preview"><div class="container"><div class="section-heading"><div><span class="eyebrow" ${adminFieldAttrs(["pageIntro", "products", "eyebrow"])}>Featured Range</span><h2 ${adminFieldAttrs(["pageIntro", "products", "title"])}>Start with the touch-free system and its refill formats.</h2></div><p ${adminFieldAttrs(["pageIntro", "products", "description"])}>The products area is now its own page, with detailed sections for dispenser hardware and refill consumables.</p></div><div class="preview-links"><a class="preview-link angular-card" href="products.html" ${adminFieldAttrs(["pageIntro", "products", "title"])}><strong ${adminFieldAttrs(["pageIntro", "products", "title"])}>Touch Free Dispensers</strong><span ${adminFieldAttrs(["pageIntro", "products", "description"])}>Plastic and stainless steel systems for shared environments.</span></a><a class="preview-link angular-card" href="products.html" ${adminFieldAttrs(["pageIntro", "products", "title"])}><strong ${adminFieldAttrs(["pageIntro", "accreditation", "title"])}>1 Litre Refill Bags</strong><span ${adminFieldAttrs(["pageIntro", "accreditation", "description"])}>Waterless isopropanol sanitiser with tested 99.9% efficacy claims.</span></a></div></div></section>`;
}

function renderAccreditationSummary(credibility) {
    const certifications = credibility.certifications.map((item) => `<li>${item}</li>`).join("");
    return `<section class="section section--tight"><div class="container summary-panel angular-card"><div><span class="eyebrow" ${adminFieldAttrs(["credibility", "eyebrow"])}>Accreditation Snapshot</span><h2 ${adminFieldAttrs(["credibility", "title"])}>${credibility.title}</h2><p ${adminFieldAttrs(["credibility", "summary"])}>${credibility.summary}</p></div><ul class="credentials-list">${certifications}</ul></div></section>`;
}

function renderHomeContactCta() {
    return `<section class="section section--tight"><div class="container callout-panel angular-card"><div><span class="eyebrow" ${adminFieldAttrs(["inquiry", "title"])}>Next Step</span><h2 ${adminFieldAttrs(["inquiry", "title"])}>Need a dispenser or refill recommendation for your facility?</h2><p ${adminFieldAttrs(["inquiry", "copy"])}>Move straight to the contact page to request a quote or discuss rollout requirements.</p></div><a class="button button--primary angular-card" href="contact.html" ${adminFieldAttrs(["hero", "primaryCta", "label"])}>Contact PN Medical</a></div></section>`;
}

function renderAccreditationGallery(images) {
    const cards = images.map((image, index) => `<article class="accreditation-gallery__card angular-card"><img src="${image.src}" alt="${image.alt}" ${adminFieldAttrs(["accreditationVisuals", index, "src"], "image")}><div class="accreditation-gallery__copy"><h3 ${adminFieldAttrs(["accreditationVisuals", index, "title"])}>${image.title}</h3><p ${adminFieldAttrs(["accreditationVisuals", index, "caption"])}>${image.caption}</p></div></article>`).join("");
    return `<section class="section section--tight"><div class="container"><div class="section-heading"><div><span class="eyebrow">Visual Evidence</span><h2>Product visuals supporting accreditation positioning.</h2></div><p>These reference visuals show the core hardware, refill formats, and portable hygiene products that support PN Medical's quality and compliance profile.</p></div><div class="accreditation-gallery">${cards}</div></div></section>`;
}

function renderCredibility(credibility, visual = null) {
    const audiences = credibility.audiences.map((item) => `<li>${item}</li>`).join("");
    const certifications = credibility.certifications.map((item) => `<li>${item}</li>`).join("");
    const sideMarkup = visual
        ? `<div class="section-heading__side"><p ${adminFieldAttrs(["credibility", "summary"])}>${credibility.summary}</p><article class="context-visual-card angular-card"><img src="${visual.src}" alt="${visual.alt}" ${adminFieldAttrs(["accreditationVisuals", 0, "src"], "image")}><h3 ${adminFieldAttrs(["accreditationVisuals", 0, "title"])}>${visual.title}</h3></article></div>`
        : `<p ${adminFieldAttrs(["credibility", "summary"])}>${credibility.summary}</p>`;

    return `<section class="section"><div class="container"><div class="section-heading"><div><span class="eyebrow" ${adminFieldAttrs(["credibility", "eyebrow"])}>${credibility.eyebrow}</span><h2 ${adminFieldAttrs(["credibility", "title"])}>${credibility.title}</h2></div>${sideMarkup}</div><div class="credibility"><article class="panel-card angular-card"><h3 ${adminFieldAttrs(["credibility", "title"])}>Facility Fit</h3><ul class="stats-list">${credibility.audiences.map((item, index) => `<li ${adminFieldAttrs(["credibility", "audiences", index])}>${item}</li>`).join("")}</ul></article><article class="panel-card panel-card--accent angular-card"><h3 ${adminFieldAttrs(["credibility", "accreditationTitle"])}>${credibility.accreditationTitle}</h3><p ${adminFieldAttrs(["credibility", "accreditationSummary"])}>${credibility.accreditationSummary}</p><ul class="credentials-list">${certifications}</ul></article></div></div></section>`;
}

function renderProducts(filters) {
    const filterButtons = filters.map((filter, index) => `<button class="filter-chip angular-card${index === 0 ? " is-active" : ""}" type="button" data-filter="${filter.id}">${filter.label}</button>`).join("");
    return `<div class="catalog-panel"><div class="section-heading"><div><span class="eyebrow">Catalog</span><h2>Browse the broader product set.</h2></div><p>Use the filters to separate dispenser hardware from refill consumables and portable accessories.</p></div><div class="filter-bar" aria-label="Product filters">${filterButtons}</div><div id="product-grid" class="product-grid"></div></div>`;
}

function renderProductQuickLinks(links) {
    const items = links.map((item, index) => `<a class="product-jump-link angular-card" href="${item.href}" ${adminFieldAttrs(["productQuickLinks", index, "label"])}>${item.label}</a>`).join("");
    return `<section class="product-jump-panel angular-card"><h3>Quick Product Navigation</h3><div class="product-jump-links">${items}</div></section>`;
}

function renderProductFeature(feature) {
    const listMarkup = feature.listGroups.map((group) => `<section class="product-feature__list angular-card"><h4>${group.title}</h4><ul>${group.items.map((item) => `<li>${item}</li>`).join("")}</ul></section>`).join("");
    const tagsMarkup = feature.tags.map((item) => `<span>${item}</span>`).join("");
    const warningMarkup = feature.warning ? `<div class="product-feature__warning angular-card"><strong>Warning</strong><p>${feature.warning}</p></div>` : "";
    const idAttribute = feature.id ? ` id="${feature.id}"` : "";
    return `<article${idAttribute} class="product-feature angular-card"><div class="product-feature__layout"><div class="product-feature__content"><span class="eyebrow" ${adminFieldAttrs([feature.id === "home" ? "touchFreeFeature" : feature.id === "profile" ? "refillFeature" : feature.id === "messages" ? "soapFeature" : feature.id === "settings" ? "sprayBottleFeature" : "reelClipFeature", "eyebrow"])}>${feature.eyebrow}</span><h3 ${adminFieldAttrs([feature.id === "home" ? "touchFreeFeature" : feature.id === "profile" ? "refillFeature" : feature.id === "messages" ? "soapFeature" : feature.id === "settings" ? "sprayBottleFeature" : "reelClipFeature", "title"])}>${feature.title}</h3><p class="product-feature__lede" ${adminFieldAttrs([feature.id === "home" ? "touchFreeFeature" : feature.id === "profile" ? "refillFeature" : feature.id === "messages" ? "soapFeature" : feature.id === "settings" ? "sprayBottleFeature" : "reelClipFeature", "intro"])}>${feature.intro}</p><div class="product-feature__lists">${feature.listGroups.map((group, groupIndex) => `<section class="product-feature__list angular-card"><h4 ${adminFieldAttrs([feature.id === "home" ? "touchFreeFeature" : feature.id === "profile" ? "refillFeature" : feature.id === "messages" ? "soapFeature" : feature.id === "settings" ? "sprayBottleFeature" : "reelClipFeature", "listGroups", groupIndex, "title"])}>${group.title}</h4><ul>${group.items.map((item, itemIndex) => `<li ${adminFieldAttrs([feature.id === "home" ? "touchFreeFeature" : feature.id === "profile" ? "refillFeature" : feature.id === "messages" ? "soapFeature" : feature.id === "settings" ? "sprayBottleFeature" : "reelClipFeature", "listGroups", groupIndex, "items", itemIndex])}>${item}</li>`).join("")}</ul></section>`).join("")}</div><div class="product-feature__benefits angular-card">${feature.tags.map((item, tagIndex) => `<span ${adminFieldAttrs([feature.id === "home" ? "touchFreeFeature" : feature.id === "profile" ? "refillFeature" : feature.id === "messages" ? "soapFeature" : feature.id === "settings" ? "sprayBottleFeature" : "reelClipFeature", "tags", tagIndex])}>${item}</span>`).join("")}</div><p ${adminFieldAttrs([feature.id === "home" ? "touchFreeFeature" : feature.id === "profile" ? "refillFeature" : feature.id === "messages" ? "soapFeature" : feature.id === "settings" ? "sprayBottleFeature" : "reelClipFeature", "compliance"])}>${feature.compliance}</p>${warningMarkup}</div><div class="product-feature__visual angular-card"><img src="${feature.imageSrc}" alt="${feature.imageAlt}" ${adminFieldAttrs([feature.id === "home" ? "touchFreeFeature" : feature.id === "profile" ? "refillFeature" : feature.id === "messages" ? "soapFeature" : feature.id === "settings" ? "sprayBottleFeature" : "reelClipFeature", "imageSrc"], "image")}></div></div></article>`;
}

function renderSocialFeed(socialFeeds) {
    const facebookPluginUrl = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(socialFeeds.facebookUrl)}&tabs=timeline&width=500&height=640&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;
    const linkedinNotes = socialFeeds.linkedinNotes.map((note) => `<li>${note}</li>`).join("");
    return `<section class="section section--tight"><div class="container"><div class="section-heading"><div><span class="eyebrow" ${adminFieldAttrs(["socialFeeds", "facebookUrl"])}>Social Feed</span><h2 ${adminFieldAttrs(["socialFeeds", "facebookUrl"])}>Latest from Facebook and LinkedIn</h2></div><p ${adminFieldAttrs(["socialFeeds", "linkedinNotes", 0])}>Facebook timeline posts are embedded directly. LinkedIn keeps stricter access controls, so use the direct company link for the newest updates.</p></div><div class="social-feed-grid"><article class="social-feed-card angular-card"><header><h3 ${adminFieldAttrs(["socialFeeds", "facebookUrl"])}>Facebook</h3><a href="${socialFeeds.facebookUrl}" target="_blank" rel="noopener noreferrer" ${adminFieldAttrs(["socialFeeds", "facebookUrl"])}>Open Facebook page</a></header><iframe title="Sani-Hands Facebook timeline" src="${facebookPluginUrl}" width="500" height="640" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></article><article class="social-feed-card social-feed-card--linkedin angular-card"><header><h3 ${adminFieldAttrs(["socialFeeds", "linkedinUrl"])}>LinkedIn</h3><a href="${socialFeeds.linkedinUrl}" target="_blank" rel="noopener noreferrer" ${adminFieldAttrs(["socialFeeds", "linkedinUrl"])}>Open LinkedIn page</a></header><ul>${socialFeeds.linkedinNotes.map((note, index) => `<li ${adminFieldAttrs(["socialFeeds", "linkedinNotes", index])}>${note}</li>`).join("")}</ul><div class="social-feed-actions"><a class="button button--secondary angular-card" href="${socialFeeds.linkedinUrl}" target="_blank" rel="noopener noreferrer" ${adminFieldAttrs(["socialFeeds", "linkedinUrl"])}>View Recent LinkedIn Posts</a></div></article></div></div></section>`;
}

function renderFaq(faqs) {
    const faqItems = faqs.map((item, index) => `<article class="faq-item angular-card"><h3 class="faq-question" ${adminFieldAttrs(["faqs", index, "question"])}>${item.question}</h3><p class="faq-answer" ${adminFieldAttrs(["faqs", index, "answer"])}>${item.answer}</p></article>`).join("");
    return `<section class="section"><div class="container"><div class="faq-list">${faqItems}</div></div></section>`;
}

function renderNews(newsItems) {
    const cards = newsItems.map((item, index) => `<article class="news-card angular-card"><div class="news-card__body"><span class="news-card__date" ${adminFieldAttrs(["news", index, "date"])}>${item.date}</span><h3 ${adminFieldAttrs(["news", index, "title"])}>${item.title}</h3><p ${adminFieldAttrs(["news", index, "summary"])}>${item.summary}</p></div></article>`).join("");
    return `<section class="section"><div class="container"><div class="news-grid">${cards}</div></div></section>`;
}

function renderInquiry(inquiry) {
    const contacts = inquiry.contacts.map((item, index) => `<li ${adminFieldAttrs(["inquiry", "contacts", index])}>${item}</li>`).join("");
    return `<section class="section inquiry"><div class="container inquiry__layout"><div class="inquiry__copy angular-card"><span class="eyebrow" ${adminFieldAttrs(["inquiry", "title"])}>Procurement</span><h2 ${adminFieldAttrs(["inquiry", "title"])}>${inquiry.title}</h2><p ${adminFieldAttrs(["inquiry", "copy"])}>${inquiry.copy}</p><ul class="contact-list">${contacts}</ul></div><form class="inquiry__form angular-card"><div class="form-grid"><label><span>Name or Facility</span><input type="text" name="facility" placeholder="Hospital, clinic, or team name"></label><label><span>Email Address</span><input type="email" name="email" placeholder="procurement@example.org"></label><label><span>Inquiry Message</span><textarea name="message" placeholder="Tell PN Medical what products, quantities, or delivery details you need."></textarea></label><button class="button button--primary angular-card" type="submit">Send Inquiry Securely</button></div></form></div></section>`;
}

function renderFooter(navigation) {
    const productTiles = siteDataset.products.slice(0, 6).map((product) => `<a class="site-footer__product" href="products.html"><img src="${product.imageSrc}" alt="${product.name}"><span>${product.name}</span></a>`).join("");
    const footerLinks = navigation.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");

    return `
        <footer class="site-footer">
            <div class="container site-footer__grid">
                <section class="site-footer__panel site-footer__panel--intro">
                    <span class="eyebrow">No More Germs</span>
                    <h2>Protect patients and staff with always-available hand hygiene.</h2>
                    <p>Research has shown that 80% of all infectious diseases are spread by hand contact. Keep Sani-Hands Touch Free Dispensers and Handy 50ml Spray Bottles within reach so protection stays practical throughout the day.</p>
                    <div class="site-footer__cta-row">
                        <a class="button button--primary angular-card" href="products.html">View Products</a>
                        <a class="button button--secondary angular-card" href="contact.html">Request a Quote</a>
                    </div>
                </section>

                <section class="site-footer__panel">
                    <h3>Widely Used</h3>
                    <ul class="site-footer__checklist">
                        <li>Medical strength</li>
                        <li>Kills 99.9% of all germs</li>
                        <li>No water required</li>
                        <li>Sani-Hands is non-allergenic</li>
                    </ul>
                </section>

                <section class="site-footer__panel">
                    <h3>Our Products</h3>
                    <div class="site-footer__products">${productTiles}</div>
                </section>

                <section class="site-footer__panel">
                    <h3>Reference Details</h3>
                    <ul class="site-footer__contact-list">
                        <li><strong>Physical:</strong> 3 Commercial Road, Malmesbury Industria, Malmesbury, 7300</li>
                        <li><strong>Postal:</strong> PO Box 63, Century City, 7446</li>
                        <li><strong>Phone:</strong> <a href="${siteDataset.topBar.phoneHref}">${siteDataset.topBar.phoneDisplay}</a></li>
                        <li><strong>Email:</strong> <a href="mailto:${siteDataset.topBar.email}">${siteDataset.topBar.email}</a></li>
                        <li><strong>Fax:</strong> 086 599 5269</li>
                    </ul>
                    <nav class="site-footer__nav" aria-label="Footer navigation">${footerLinks}<a href="proposal/">Proposal</a><a href="admin.html">Admin Login</a></nav>
                </section>
            </div>

            <div class="site-footer__bottom">
                <div class="container site-footer__bottom-inner">
                    <p>© Copyright PN Medical (Reg# 2007/031947/07). Designed by Linchpin-PM.</p>
                    <a href="https://www.facebook.com/sanihandssa/" target="_blank" rel="noopener noreferrer" aria-label="PN Medical Facebook">f</a>
                </div>
            </div>
        </footer>`;
}

function renderProductIllustration(product) {
    if (product.imageSrc) {
        return `<img src="${product.imageSrc}" alt="${product.name}">`;
    }

    const illustrations = {
        "plastic-dispenser": `<svg viewBox="0 0 320 220" role="img" aria-label="Plastic touch-free dispenser illustration" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="plasticBody" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ffffff" /><stop offset="100%" stop-color="#dbeafe" /></linearGradient></defs><rect x="118" y="28" width="84" height="142" rx="24" fill="url(#plasticBody)" stroke="#0f766e" stroke-width="6" /><rect x="136" y="52" width="48" height="52" rx="14" fill="#e2e8f0" /><rect x="144" y="116" width="32" height="20" rx="10" fill="#0f766e" opacity="0.85" /><path d="M150 170 H170 L182 194 H138 Z" fill="#1e293b" /><circle cx="230" cy="78" r="16" fill="#b91c1c" opacity="0.15" /><path d="M229 68 V88 M219 78 H239" stroke="#b91c1c" stroke-width="5" stroke-linecap="round" /></svg>`,
        "steel-dispenser": `<svg viewBox="0 0 320 220" role="img" aria-label="Stainless steel dispenser illustration" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="steelBody" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f8fafc" /><stop offset="45%" stop-color="#cbd5e1" /><stop offset="100%" stop-color="#94a3b8" /></linearGradient></defs><rect x="112" y="24" width="96" height="148" rx="20" fill="url(#steelBody)" stroke="#1e293b" stroke-width="6" /><rect x="132" y="52" width="56" height="14" rx="7" fill="#ffffff" opacity="0.7" /><rect x="126" y="84" width="68" height="44" rx="14" fill="#e2e8f0" opacity="0.7" /><path d="M146 172 H174 L188 198 H132 Z" fill="#0f766e" /><path d="M58 162 L96 134" stroke="#0284c7" stroke-width="8" stroke-linecap="round" /><circle cx="52" cy="168" r="18" fill="#0284c7" opacity="0.12" /></svg>`,
        "refill-bag": `<svg viewBox="0 0 320 220" role="img" aria-label="Isopropanol refill bag illustration" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bagBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f1f5f9" /><stop offset="100%" stop-color="#cbd5e1" /></linearGradient></defs><path d="M102 38 H218 L206 182 H114 Z" fill="url(#bagBody)" stroke="#334155" stroke-width="6" /><rect x="134" y="22" width="52" height="28" rx="10" fill="#1e293b" /><rect x="120" y="74" width="80" height="48" rx="10" fill="#ffffff" opacity="0.9" /><path d="M128 136 C148 120 172 120 192 136" stroke="#b91c1c" stroke-width="7" fill="none" stroke-linecap="round" /><text x="160" y="103" text-anchor="middle" font-size="18" font-family="Barlow, Arial, sans-serif" font-weight="700" fill="#1e293b">1 LITRE</text><text x="160" y="160" text-anchor="middle" font-size="22" font-family="Barlow, Arial, sans-serif" font-weight="700" fill="#1e293b">REFILL</text></svg>`,
        "spray-bottle": `<svg viewBox="0 0 320 220" role="img" aria-label="Portable spray bottle illustration" xmlns="http://www.w3.org/2000/svg"><rect x="130" y="56" width="60" height="120" rx="20" fill="#dbeafe" stroke="#0284c7" stroke-width="6" /><rect x="146" y="32" width="28" height="30" rx="8" fill="#1e293b" /><path d="M174 40 H206 V58 H188" fill="#1e293b" /><path d="M206 48 H228" stroke="#1e293b" stroke-width="8" stroke-linecap="round" /><path d="M230 42 L248 34" stroke="#0f766e" stroke-width="5" stroke-linecap="round" /><path d="M232 52 L252 52" stroke="#0f766e" stroke-width="5" stroke-linecap="round" /><path d="M230 62 L248 70" stroke="#0f766e" stroke-width="5" stroke-linecap="round" /><rect x="142" y="96" width="36" height="44" rx="12" fill="#ffffff" opacity="0.75" /></svg>`,
        "reel-clip": `<svg viewBox="0 0 320 220" role="img" aria-label="Retractable reel and clip illustration" xmlns="http://www.w3.org/2000/svg"><circle cx="138" cy="110" r="52" fill="#1e293b" /><circle cx="138" cy="110" r="28" fill="#0f766e" /><path d="M188 110 H254" stroke="#0284c7" stroke-width="7" stroke-linecap="round" /><path d="M250 92 V148" stroke="#0284c7" stroke-width="8" stroke-linecap="round" /><path d="M232 150 H268" stroke="#0284c7" stroke-width="8" stroke-linecap="round" /><path d="M72 94 L92 74" stroke="#b91c1c" stroke-width="7" stroke-linecap="round" /><path d="M70 126 L94 146" stroke="#b91c1c" stroke-width="7" stroke-linecap="round" /></svg>`
    };
    return illustrations[product.illustration] ?? illustrations["plastic-dispenser"];
}

function renderProductCards(activeFilter) {
    const grid = document.querySelector("#product-grid");
    if (!grid) { return; }

    const filtered = activeFilter === "all" ? siteDataset.products : siteDataset.products.filter((product) => product.category === activeFilter);
    if (!filtered.length) {
        grid.innerHTML = '<div class="product-empty angular-card">No products matched this filter.</div>';
        return;
    }

    grid.innerHTML = filtered.map((product) => `<article class="product-card angular-card"><div class="product-card__media"><div class="product-card__media-top"><span class="product-card__tag angular-card">${product.label}</span><strong>${product.category === "dispensers" ? "Hardware" : "Consumable"}</strong></div><div class="product-card__art">${renderProductIllustration(product)}</div></div><div class="product-card__body"><h3>${product.name}</h3><p>${product.description}</p><div class="product-card__actions"><a class="button button--secondary angular-card" href="contact.html">${product.cta}</a></div></div></article>`).join("");
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

function wireMobileMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("#primary-nav");
    if (!toggle || !nav) { return; }

    const closeMenu = () => {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
        const shouldOpen = !nav.classList.contains("is-open");
        nav.classList.toggle("is-open", shouldOpen);
        toggle.classList.toggle("is-open", shouldOpen);
        toggle.setAttribute("aria-expanded", String(shouldOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.matchMedia("(min-width: 721px)").matches) {
            closeMenu();
        }
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}

if (appRoot) {
    renderApp();
}