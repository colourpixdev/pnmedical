const PN_ADMIN_AUTH_KEY = "pnMedicalAdminAuthenticated";
const PN_ADMIN_CONTENT_OVERRIDES_KEY = "pnMedicalContentOverrides";
const PN_ADMIN_USERNAME = "admin";
const PN_ADMIN_PASSWORD = "admin";

const pageConfig = [
    {
        id: "home",
        title: "Home",
        description: "Hero, campaign content, product teaser, credibility snapshot, and CTA.",
        url: "index.html",
        previewLabel: "Home preview",
        sections: [
            {
                id: "hero",
                title: "Hero",
                summary: "Headline, intro copy, CTA buttons, metric badges, and hero video.",
                previewAnchor: "home",
                previewLabel: "Hero",
                fields: [
                    ["hero", "badge"],
                    ["hero", "title"],
                    ["hero", "accent"],
                    ["hero", "description"],
                    ["hero", "primaryCta", "label"],
                    ["hero", "secondaryCta", "label"],
                    ["hero", "supportTitle"],
                    ["hero", "supportPoints", 0],
                    ["hero", "supportPoints", 1],
                    ["hero", "supportPoints", 2],
                    ["mediaAssets", 0, "title"],
                    ["mediaAssets", 0, "description"],
                    ["mediaAssets", 0, "src"],
                    ["mediaAssets", 0, "poster"]
                ]
            },
            {
                id: "flyerSpotlight",
                title: "Campaign spotlight",
                summary: "Campaign guidance, protocol panel, badge artwork, and inquiry CTA.",
                previewAnchor: null,
                previewLabel: "Spotlight",
                fields: [
                    ["flyerSpotlight", "title"],
                    ["flyerSpotlight", "description"],
                    ["flyerSpotlight", "emphasis"],
                    ["flyerSpotlight", "panelTitle"],
                    ["flyerSpotlight", "panelFooter"],
                    ["flyerSpotlight", "disclaimer"],
                    ["flyerSpotlight", "ctaTitle"],
                    ["flyerSpotlight", "contactLines", 0],
                    ["flyerSpotlight", "contactLines", 1],
                    ["flyerSpotlight", "contactLines", 2]
                ]
            },
            {
                id: "highlights",
                title: "Highlights",
                summary: "Homepage advantage cards and the featured range teaser.",
                previewAnchor: null,
                previewLabel: "Highlights",
                fields: [
                    ["homeHighlights", 0, "title"],
                    ["homeHighlights", 0, "description"],
                    ["homeHighlights", 0, "href"],
                    ["homeHighlights", 1, "title"],
                    ["homeHighlights", 1, "description"],
                    ["homeHighlights", 1, "href"],
                    ["homeHighlights", 2, "title"],
                    ["homeHighlights", 2, "description"],
                    ["homeHighlights", 2, "href"],
                    ["pageIntro", "products", "eyebrow"],
                    ["pageIntro", "products", "title"],
                    ["pageIntro", "products", "description"]
                ]
            },
            {
                id: "productPreview",
                title: "Featured product preview",
                summary: "Two featured product links that should stay prominent and concise.",
                previewAnchor: null,
                previewLabel: "Featured range",
                fields: [
                    ["pageIntro", "accreditation", "eyebrow"],
                    ["pageIntro", "accreditation", "title"],
                    ["pageIntro", "accreditation", "description"],
                    ["pageIntro", "faq", "eyebrow"],
                    ["pageIntro", "faq", "title"],
                    ["pageIntro", "faq", "description"],
                    ["pageIntro", "news", "eyebrow"],
                    ["pageIntro", "news", "title"],
                    ["pageIntro", "news", "description"],
                    ["pageIntro", "contact", "eyebrow"],
                    ["pageIntro", "contact", "title"],
                    ["pageIntro", "contact", "description"]
                ]
            },
            {
                id: "credibility",
                title: "Accreditation snapshot",
                summary: "Accreditation callout and trust signals on the home page.",
                previewAnchor: null,
                previewLabel: "Credibility",
                fields: [
                    ["credibility", "title"],
                    ["credibility", "summary"],
                    ["credibility", "audiences", 0],
                    ["credibility", "audiences", 1],
                    ["credibility", "audiences", 2],
                    ["credibility", "audiences", 3],
                    ["credibility", "accreditationTitle"],
                    ["credibility", "accreditationSummary"],
                    ["credibility", "certifications", 0],
                    ["credibility", "certifications", 1],
                    ["credibility", "certifications", 2]
                ]
            },
            {
                id: "cta",
                title: "Call to action",
                summary: "Closing callout that pushes visitors into contact.",
                previewAnchor: null,
                previewLabel: "CTA",
                fields: [
                    ["hero", "primaryCta", "href"],
                    ["hero", "secondaryCta", "href"],
                    ["flyerSpotlight", "ctaTitle"],
                    ["inquiry", "title"],
                    ["inquiry", "copy"]
                ]
            }
        ]
    },
    {
        id: "products",
        title: "Products",
        description: "Jump links, product features, catalog, filters, and accessory content.",
        url: "products.html",
        previewLabel: "Products preview",
        sections: [
            {
                id: "productLinks",
                title: "Quick links",
                summary: "Anchor links for fast navigation to the product sections.",
                previewAnchor: "home",
                previewLabel: "Quick links",
                fields: [
                    ["productQuickLinks", 0, "label"],
                    ["productQuickLinks", 0, "href"],
                    ["productQuickLinks", 1, "label"],
                    ["productQuickLinks", 1, "href"],
                    ["productQuickLinks", 2, "label"],
                    ["productQuickLinks", 2, "href"],
                    ["productQuickLinks", 3, "label"],
                    ["productQuickLinks", 3, "href"],
                    ["productQuickLinks", 4, "label"],
                    ["productQuickLinks", 4, "href"]
                ]
            },
            {
                id: "touchFree",
                title: "Touch-free dispensers",
                summary: "Main dispenser hardware page block with image, benefits, and compliance.",
                previewAnchor: "home",
                previewLabel: "Touch-free",
                fields: [
                    ["touchFreeFeature", "eyebrow"],
                    ["touchFreeFeature", "title"],
                    ["touchFreeFeature", "intro"],
                    ["touchFreeFeature", "imageSrc"],
                    ["touchFreeFeature", "imageAlt"],
                    ["touchFreeFeature", "listGroups", 0, "title"],
                    ["touchFreeFeature", "listGroups", 0, "items", 0],
                    ["touchFreeFeature", "listGroups", 0, "items", 1],
                    ["touchFreeFeature", "listGroups", 0, "items", 2],
                    ["touchFreeFeature", "listGroups", 1, "title"],
                    ["touchFreeFeature", "listGroups", 1, "items", 0],
                    ["touchFreeFeature", "listGroups", 1, "items", 1],
                    ["touchFreeFeature", "listGroups", 1, "items", 2],
                    ["touchFreeFeature", "tags", 0],
                    ["touchFreeFeature", "tags", 1],
                    ["touchFreeFeature", "tags", 2],
                    ["touchFreeFeature", "tags", 3],
                    ["touchFreeFeature", "tags", 4],
                    ["touchFreeFeature", "compliance"],
                    ["touchFreeFeature", "warning"]
                ]
            },
            {
                id: "refillBag",
                title: "1 Litre refill bag",
                summary: "Refill consumable block for alcohol sanitiser.",
                previewAnchor: "profile",
                previewLabel: "Refill bag",
                fields: [
                    ["refillFeature", "eyebrow"],
                    ["refillFeature", "title"],
                    ["refillFeature", "intro"],
                    ["refillFeature", "imageSrc"],
                    ["refillFeature", "imageAlt"],
                    ["refillFeature", "listGroups", 0, "title"],
                    ["refillFeature", "listGroups", 0, "items", 0],
                    ["refillFeature", "listGroups", 0, "items", 1],
                    ["refillFeature", "listGroups", 0, "items", 2],
                    ["refillFeature", "listGroups", 0, "items", 3],
                    ["refillFeature", "listGroups", 0, "items", 4],
                    ["refillFeature", "listGroups", 0, "items", 5],
                    ["refillFeature", "listGroups", 0, "items", 6],
                    ["refillFeature", "listGroups", 1, "title"],
                    ["refillFeature", "listGroups", 1, "items", 0],
                    ["refillFeature", "listGroups", 1, "items", 1],
                    ["refillFeature", "listGroups", 1, "items", 2],
                    ["refillFeature", "listGroups", 1, "items", 3],
                    ["refillFeature", "tags", 0],
                    ["refillFeature", "tags", 1],
                    ["refillFeature", "tags", 2],
                    ["refillFeature", "tags", 3],
                    ["refillFeature", "tags", 4],
                    ["refillFeature", "compliance"]
                ]
            },
            {
                id: "soapRefill",
                title: "Soap refill bag",
                summary: "Anti-bacterial soap refill with mounted system details.",
                previewAnchor: "messages",
                previewLabel: "Soap refill",
                fields: [
                    ["soapFeature", "eyebrow"],
                    ["soapFeature", "title"],
                    ["soapFeature", "intro"],
                    ["soapFeature", "imageSrc"],
                    ["soapFeature", "imageAlt"],
                    ["soapFeature", "listGroups", 0, "title"],
                    ["soapFeature", "listGroups", 0, "items", 0],
                    ["soapFeature", "listGroups", 0, "items", 1],
                    ["soapFeature", "listGroups", 0, "items", 2],
                    ["soapFeature", "listGroups", 0, "items", 3],
                    ["soapFeature", "listGroups", 1, "title"],
                    ["soapFeature", "listGroups", 1, "items", 0],
                    ["soapFeature", "listGroups", 1, "items", 1],
                    ["soapFeature", "listGroups", 1, "items", 2],
                    ["soapFeature", "listGroups", 1, "items", 3],
                    ["soapFeature", "tags", 0],
                    ["soapFeature", "tags", 1],
                    ["soapFeature", "tags", 2],
                    ["soapFeature", "tags", 3],
                    ["soapFeature", "tags", 4],
                    ["soapFeature", "compliance"]
                ]
            },
            {
                id: "portable",
                title: "Portable spray bottle",
                summary: "50ml spray bottle for mobile hygiene use.",
                previewAnchor: "settings",
                previewLabel: "Portable",
                fields: [
                    ["sprayBottleFeature", "eyebrow"],
                    ["sprayBottleFeature", "title"],
                    ["sprayBottleFeature", "intro"],
                    ["sprayBottleFeature", "imageSrc"],
                    ["sprayBottleFeature", "imageAlt"],
                    ["sprayBottleFeature", "listGroups", 0, "title"],
                    ["sprayBottleFeature", "listGroups", 0, "items", 0],
                    ["sprayBottleFeature", "listGroups", 0, "items", 1],
                    ["sprayBottleFeature", "listGroups", 0, "items", 2],
                    ["sprayBottleFeature", "listGroups", 1, "title"],
                    ["sprayBottleFeature", "listGroups", 1, "items", 0],
                    ["sprayBottleFeature", "listGroups", 1, "items", 1],
                    ["sprayBottleFeature", "listGroups", 1, "items", 2],
                    ["sprayBottleFeature", "tags", 0],
                    ["sprayBottleFeature", "tags", 1],
                    ["sprayBottleFeature", "tags", 2],
                    ["sprayBottleFeature", "tags", 3],
                    ["sprayBottleFeature", "tags", 4],
                    ["sprayBottleFeature", "compliance"]
                ]
            },
            {
                id: "accessory",
                title: "Accessory",
                summary: "Retractable reel and clip content for the spray bottle.",
                previewAnchor: "fund",
                previewLabel: "Accessory",
                fields: [
                    ["reelClipFeature", "eyebrow"],
                    ["reelClipFeature", "title"],
                    ["reelClipFeature", "intro"],
                    ["reelClipFeature", "imageSrc"],
                    ["reelClipFeature", "imageAlt"],
                    ["reelClipFeature", "listGroups", 0, "title"],
                    ["reelClipFeature", "listGroups", 0, "items", 0],
                    ["reelClipFeature", "listGroups", 0, "items", 1],
                    ["reelClipFeature", "listGroups", 0, "items", 2],
                    ["reelClipFeature", "listGroups", 1, "title"],
                    ["reelClipFeature", "listGroups", 1, "items", 0],
                    ["reelClipFeature", "listGroups", 1, "items", 1],
                    ["reelClipFeature", "listGroups", 1, "items", 2],
                    ["reelClipFeature", "tags", 0],
                    ["reelClipFeature", "tags", 1],
                    ["reelClipFeature", "tags", 2],
                    ["reelClipFeature", "tags", 3],
                    ["reelClipFeature", "compliance"]
                ]
            },
            {
                id: "catalog",
                title: "Catalog",
                summary: "Catalog filter bar and grid heading.",
                previewAnchor: null,
                previewLabel: "Catalog",
                fields: [
                    ["filters", 0, "label"],
                    ["filters", 0, "id"],
                    ["filters", 1, "label"],
                    ["filters", 1, "id"],
                    ["filters", 2, "label"],
                    ["filters", 2, "id"]
                ]
            }
        ]
    },
    {
        id: "accreditation",
        title: "Accreditation",
        description: "Credibility, supporting visuals, and compliance band content.",
        url: "accreditation.html",
        previewLabel: "Accreditation preview",
        sections: [
            {
                id: "intro",
                title: "Intro",
                summary: "Page intro copy and accent headings.",
                previewAnchor: null,
                previewLabel: "Intro",
                fields: [
                    ["pageIntro", "accreditation", "eyebrow"],
                    ["pageIntro", "accreditation", "title"],
                    ["pageIntro", "accreditation", "description"]
                ]
            },
            {
                id: "credibilityPage",
                title: "Credibility summary",
                summary: "Facility fit, accreditation summary, and certification list.",
                previewAnchor: null,
                previewLabel: "Credibility",
                fields: [
                    ["credibility", "eyebrow"],
                    ["credibility", "title"],
                    ["credibility", "summary"],
                    ["credibility", "audiences", 0],
                    ["credibility", "audiences", 1],
                    ["credibility", "audiences", 2],
                    ["credibility", "audiences", 3],
                    ["credibility", "accreditationTitle"],
                    ["credibility", "accreditationSummary"],
                    ["credibility", "certifications", 0],
                    ["credibility", "certifications", 1],
                    ["credibility", "certifications", 2]
                ]
            },
            {
                id: "visuals",
                title: "Supporting visuals",
                summary: "The product images that support accreditation positioning.",
                previewAnchor: null,
                previewLabel: "Visuals",
                fields: [
                    ["accreditationVisuals", 0, "src"],
                    ["accreditationVisuals", 0, "alt"],
                    ["accreditationVisuals", 0, "title"],
                    ["accreditationVisuals", 0, "caption"],
                    ["accreditationVisuals", 1, "src"],
                    ["accreditationVisuals", 1, "alt"],
                    ["accreditationVisuals", 1, "title"],
                    ["accreditationVisuals", 1, "caption"]
                ]
            },
            {
                id: "complianceBand",
                title: "Compliance references",
                summary: "Cross-page compliance band content.",
                previewAnchor: null,
                previewLabel: "Compliance",
                fields: [
                    ["touchFreeFeature", "compliance"],
                    ["refillFeature", "compliance"],
                    ["soapFeature", "compliance"],
                    ["sprayBottleFeature", "compliance"]
                ]
            }
        ]
    },
    {
        id: "faq",
        title: "FAQ",
        description: "Static FAQ answers and question text.",
        url: "faq.html",
        previewLabel: "FAQ preview",
        sections: [
            {
                id: "faqAnswers",
                title: "FAQ answers",
                summary: "Questions and answers shown on the page.",
                previewAnchor: null,
                previewLabel: "FAQ",
                fields: [
                    ["faqs", 0, "question"],
                    ["faqs", 0, "answer"],
                    ["faqs", 1, "question"],
                    ["faqs", 1, "answer"],
                    ["faqs", 2, "question"],
                    ["faqs", 2, "answer"],
                    ["faqs", 3, "question"],
                    ["faqs", 3, "answer"]
                ]
            }
        ]
    },
    {
        id: "news",
        title: "News",
        description: "Campaign updates, Facebook timeline, and LinkedIn hints.",
        url: "news.html",
        previewLabel: "News preview",
        sections: [
            {
                id: "social",
                title: "Social feed",
                summary: "Facebook and LinkedIn links shown in the social section.",
                previewAnchor: null,
                previewLabel: "Social",
                fields: [
                    ["socialFeeds", "facebookUrl"],
                    ["socialFeeds", "linkedinUrl"],
                    ["socialFeeds", "linkedinNotes", 0],
                    ["socialFeeds", "linkedinNotes", 1]
                ]
            },
            {
                id: "newsCards",
                title: "News stories",
                summary: "Historical story cards on the page.",
                previewAnchor: null,
                previewLabel: "Stories",
                fields: [
                    ["news", 0, "date"],
                    ["news", 0, "title"],
                    ["news", 0, "summary"],
                    ["news", 1, "date"],
                    ["news", 1, "title"],
                    ["news", 1, "summary"],
                    ["news", 2, "date"],
                    ["news", 2, "title"],
                    ["news", 2, "summary"]
                ]
            }
        ]
    },
    {
        id: "contact",
        title: "Contact",
        description: "Contact intro, contact details, and inquiry copy.",
        url: "contact.html",
        previewLabel: "Contact preview",
        sections: [
            {
                id: "contactIntro",
                title: "Intro",
                summary: "Contact page intro text.",
                previewAnchor: null,
                previewLabel: "Intro",
                fields: [
                    ["pageIntro", "contact", "eyebrow"],
                    ["pageIntro", "contact", "title"],
                    ["pageIntro", "contact", "description"]
                ]
            },
            {
                id: "inquiry",
                title: "Procurement inquiry",
                summary: "Contact callout text and form details.",
                previewAnchor: null,
                previewLabel: "Inquiry",
                fields: [
                    ["inquiry", "title"],
                    ["inquiry", "copy"],
                    ["inquiry", "contacts", 0],
                    ["inquiry", "contacts", 1],
                    ["inquiry", "contacts", 2]
                ]
            }
        ]
    },
    {
        id: "global",
        title: "Global",
        description: "Shared elements like brand, navigation, top bar, and footer.",
        url: "index.html",
        previewLabel: "Global preview",
        sections: [
            {
                id: "brand",
                title: "Brand and navigation",
                summary: "Tagline, nav labels, and top bar contact details.",
                previewAnchor: null,
                previewLabel: "Header",
                fields: [
                    ["brand", "tagline"],
                    ["navigation", 0, "label"],
                    ["navigation", 0, "href"],
                    ["navigation", 1, "label"],
                    ["navigation", 1, "href"],
                    ["navigation", 2, "label"],
                    ["navigation", 2, "href"],
                    ["navigation", 3, "label"],
                    ["navigation", 3, "href"],
                    ["navigation", 4, "label"],
                    ["navigation", 4, "href"],
                    ["navigation", 5, "label"],
                    ["navigation", 5, "href"],
                    ["topBar", "address"],
                    ["topBar", "phoneDisplay"],
                    ["topBar", "phoneHref"],
                    ["topBar", "email"]
                ]
            },
            {
                id: "footer",
                title: "Footer navigation",
                summary: "Footer copy and links.",
                previewAnchor: null,
                previewLabel: "Footer",
                fields: [
                    ["hero", "primaryCta", "href"],
                    ["hero", "secondaryCta", "href"]
                ]
            }
        ]
    }
];

const loginSection = document.querySelector("#admin-login");
const editorSection = document.querySelector("#admin-editor");
const loginForm = document.querySelector("#admin-login-form");
const loginError = document.querySelector("#admin-login-error");
const statusMessage = document.querySelector("#admin-status");
const saveButton = document.querySelector("#admin-save");
const resetButton = document.querySelector("#admin-reset");
const logoutButton = document.querySelector("#admin-logout");
const saveSectionButton = document.querySelector("#admin-save-section");
const revertSectionButton = document.querySelector("#admin-revert-section");
const searchInput = document.querySelector("#admin-search");
const pageListRoot = document.querySelector("#admin-page-list");
const sectionListRoot = document.querySelector("#admin-section-list");
const fieldListRoot = document.querySelector("#admin-field-list");
const thumbsRoot = document.querySelector("#admin-section-thumbs");
const previewFrame = document.querySelector("#admin-preview-frame");
const previewCaption = document.querySelector("#admin-preview-caption");
const previewLinks = document.querySelector("#admin-preview-links");
const pageBadge = document.querySelector("#admin-page-badge");
const sectionTitle = document.querySelector("#admin-section-title");
const sectionSummary = document.querySelector("#admin-section-summary");
const pageCount = document.querySelector("#admin-page-count");
const sectionCount = document.querySelector("#admin-section-count");
const sectionFieldCount = document.querySelector("#admin-section-field-count");
const sectionPreviewLabel = document.querySelector("#admin-section-preview-label");
const pageSelect = document.querySelector("#admin-page-select");
const sectionSelect = document.querySelector("#admin-section-select");
const inspectorHint = document.querySelector("#admin-inspector-hint");
const imageAssetList = document.querySelector("#admin-image-assets");
const mediaAssetList = document.querySelector("#admin-media-assets");
const selectedFieldKind = document.querySelector("#admin-selected-field-kind");
const selectedFieldEditor = document.querySelector("#admin-selected-field-editor");

const defaultDataset = window.__pnDefaultDataset;
const assetLibrary = {
    images: [
        "logo.png",
        "pn-medical-logo.svg",
        "flyer-germ-badge.svg",
        "hygiene-steps.svg",
        "touch-free-dispensers.svg",
        "spray-bottle-product.svg",
        "soap-refill-bag-product.svg",
        "refill-bag-product.svg",
        "reel-clip-product.svg",
        "products/1.png",
        "products/2.png",
        "products/3.png",
        "products/4.png",
        "products/5.png"
    ],
    media: ["Website.mp4", "Social Media.mp4"]
};
let activePageId = pageConfig[0].id;
let activeSectionId = pageConfig[0].sections[0].id;
let activeFieldInput = null;
let selectedFieldPath = null;
let selectedElement = null;
let previewViewportMode = "mobile";
let autosaveTimer = null;
const previewInspectorState = new Map();
const PREVIEW_MESSAGE_SOURCE = "pn-medical-preview";
const EDITOR_MESSAGE_SOURCE = "pn-medical-editor";

if (!defaultDataset) {
    loginSection.hidden = true;
    editorSection.hidden = false;
    statusMessage.textContent = "Unable to load default content dataset. Ensure site.js loads before admin.js.";
} else {
    initializeAdmin();
}

function initializeAdmin() {
    loginForm.addEventListener("submit", handleLogin);
    saveButton?.addEventListener("click", saveChanges);
    resetButton?.addEventListener("click", resetAllChanges);
    logoutButton?.addEventListener("click", logout);
    saveSectionButton?.addEventListener("click", saveChanges);
    revertSectionButton?.addEventListener("click", revertCurrentSection);
    searchInput?.addEventListener("input", renderPortal);
    pageSelect?.addEventListener("change", handlePageSelection);
    sectionSelect?.addEventListener("change", handleSectionSelection);
    previewFrame?.addEventListener("load", attachPreviewBridge);
    window.addEventListener("message", handlePreviewMessage);
    document.addEventListener("pn-admin-preview-select", handlePreviewSelectionEvent);
    document.querySelectorAll("[data-viewport]").forEach((button) => {
        button.addEventListener("click", () => setPreviewViewport(String(button.getAttribute("data-viewport") || "mobile")));
    });
    const adminApi = {
        selectField(path) {
            syncSelectedField(Array.isArray(path) ? path : keyToPath(String(path || "")), { skipFocus: true });
            document.body.classList.add("admin-element-focused");
        },
        clearSelection() {
            clearSelectedElement({ skipRender: true });
            renderPortal();
        },
        setViewport(viewport) {
            setPreviewViewport(viewport);
        }
    };
    window.__pnAdminApi = adminApi;
    document.body.__pnAdminApi = adminApi;
    populateAssetSuggestions();

    document.body.classList.toggle("admin-authenticated", sessionStorage.getItem(PN_ADMIN_AUTH_KEY) === "1");

    if (document.body.classList.contains("admin-authenticated")) {
        showEditor();
        return;
    }

    showLogin();
}

function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const username = String(formData.get("username") || "").trim();
    const password = String(formData.get("password") || "").trim();

    if (username === PN_ADMIN_USERNAME && password === PN_ADMIN_PASSWORD) {
        sessionStorage.setItem(PN_ADMIN_AUTH_KEY, "1");
        document.body.classList.add("admin-authenticated");
        loginError.textContent = "";
        showEditor();
        return;
    }

    loginError.textContent = "Incorrect username or password.";
}

function showLogin() {
    document.body.classList.remove("admin-authenticated");
    loginSection.hidden = false;
    editorSection.hidden = true;
}

function showEditor() {
    document.body.classList.add("admin-authenticated");
    loginSection.hidden = true;
    editorSection.hidden = false;
    if (!selectedElement) {
        document.body.classList.remove("admin-element-focused");
    }
    renderPortal();
}

function logout() {
    sessionStorage.removeItem(PN_ADMIN_AUTH_KEY);
    document.body.classList.remove("admin-authenticated");
    statusMessage.textContent = "Logged out.";
    showLogin();
}

function setActivePage(pageId) {
    const targetPage = pageConfig.find((page) => page.id === pageId);
    if (!targetPage) {
        return;
    }

    activePageId = targetPage.id;
    activeSectionId = targetPage.sections[0]?.id || activeSectionId;
    selectedFieldPath = null;
    selectedElement = null;
    document.body.classList.remove("admin-element-focused");
}

function setActiveSection(sectionId) {
    const targetSection = getActivePage().sections.find((section) => section.id === sectionId);
    if (!targetSection) {
        return;
    }

    activeSectionId = targetSection.id;
    selectedFieldPath = null;
    selectedElement = null;
    document.body.classList.remove("admin-element-focused");
}

function handlePageSelection() {
    const nextPageId = String(pageSelect?.value || "");
    if (!nextPageId || nextPageId === activePageId) {
        return;
    }

    persistCurrentSectionDraft({ announce: false, reRender: false, quiet: true });
    setActivePage(nextPageId);
    renderPortal();
}

function handleSectionSelection() {
    const nextSectionId = String(sectionSelect?.value || "");
    if (!nextSectionId || nextSectionId === activeSectionId) {
        return;
    }

    persistCurrentSectionDraft({ announce: false, reRender: false, quiet: true });
    setActiveSection(nextSectionId);
    renderPortal();
}

function renderContextSelectors(pages, activePage) {
    if (pageSelect) {
        pageSelect.innerHTML = pages.map((page) => `<option value="${escapeHtml(page.id)}">${escapeHtml(page.title)}</option>`).join("");
        pageSelect.value = activePage.id;
    }

    if (sectionSelect) {
        sectionSelect.innerHTML = activePage.sections.map((section) => `<option value="${escapeHtml(section.id)}">${escapeHtml(section.title)}</option>`).join("");
        sectionSelect.value = activeSectionId;
    }
}

function readOverrides() {
    try {
        const raw = localStorage.getItem(PN_ADMIN_CONTENT_OVERRIDES_KEY);
        if (!raw) {
            return {};
        }

        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : {};
    } catch (_error) {
        return {};
    }
}

function populateAssetSuggestions() {
    if (imageAssetList) {
        imageAssetList.innerHTML = assetLibrary.images.map((asset) => `<option value="${escapeHtml(asset)}"></option>`).join("");
    }

    if (mediaAssetList) {
        mediaAssetList.innerHTML = assetLibrary.media.map((asset) => `<option value="${escapeHtml(asset)}"></option>`).join("");
    }
}

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

function setByPath(target, path, value) {
    let current = target;
    path.forEach((part, index) => {
        const isLast = index === path.length - 1;
        if (isLast) {
            current[part] = value;
            return;
        }

        const nextPart = path[index + 1];
        if (current[part] == null) {
            current[part] = typeof nextPart === "number" ? [] : {};
        }

        current = current[part];
    });
}

function getByPath(source, path) {
    return path.reduce((acc, part) => (acc == null ? acc : acc[part]), source);
}

function isImageValue(value) {
    return typeof value === "string" && /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(value);
}

function isMediaValue(value) {
    return typeof value === "string" && /\.(mp4|webm|ogg)$/i.test(value);
}

function fieldLabel(path) {
    return path.map((part) => (typeof part === "number" ? `Item ${part + 1}` : toTitleCase(part))).join(" / ");
}

function toTitleCase(value) {
    return String(value).replace(/([A-Z])/g, " $1").replace(/[_-]/g, " ").replace(/^./, (match) => match.toUpperCase()).trim();
}

function fieldType(path, value) {
    const key = String(path[path.length - 1]).toLowerCase();
    if (isImageValue(value) || key.includes("image") || key.includes("poster")) {
        return "image";
    }

    if (isMediaValue(value) || key === "src") {
        return "media";
    }

    if (typeof value === "string" && value.length > 100) {
        return "textarea";
    }

    return "text";
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function getMergedDataset() {
    return mergeContent(defaultDataset, readOverrides());
}

function getActivePage() {
    return pageConfig.find((page) => page.id === activePageId) || pageConfig[0];
}

function getActiveSection() {
    const activePage = getActivePage();
    return activePage.sections.find((section) => section.id === activeSectionId) || activePage.sections[0];
}

function pathToKey(path) {
    return Array.isArray(path) ? path.join(".") : "";
}

function keyToPath(key) {
    return key.split(".").map((part) => (/^\d+$/.test(part) ? Number(part) : part));
}

function pathsEqual(left, right) {
    return pathToKey(left) === pathToKey(right);
}

function findFieldPathInSection(section, key) {
    return section.fields.find((path) => pathToKey(path) === key) || null;
}

function getSelectedFieldPath(section = getActiveSection()) {
    const selectedPath = selectedFieldPath || selectedElement?.path;
    return selectedPath && findFieldPathInSection(section, pathToKey(selectedPath)) ? selectedPath : section.fields[0];
}

function getSelectedFieldType(path, value) {
    return fieldType(path, String(value ?? ""));
}

function createSelectedElement(path, mergedData = getMergedDataset()) {
    const resolvedPath = Array.isArray(path) ? path : keyToPath(String(path || ""));
    const value = String(getByPath(mergedData, resolvedPath) ?? "");
    return {
        id: pathToKey(resolvedPath),
        field_key: pathToKey(resolvedPath),
        type: getSelectedFieldType(resolvedPath, value),
        value,
        label: fieldLabel(resolvedPath),
        path: resolvedPath
    };
}

function postPreviewMessage(message) {
    const frameWindow = previewFrame?.contentWindow;
    if (!frameWindow) {
        return;
    }

    const targetOrigin = window.location.protocol === "file:" ? "*" : window.location.origin;

    frameWindow.postMessage({
        source: EDITOR_MESSAGE_SOURCE,
        ...message
    }, targetOrigin);
}

function setPreviewViewport(viewport) {
    previewViewportMode = ["mobile", "tablet", "laptop", "wide"].includes(viewport) ? viewport : "mobile";
    const viewportRoot = document.getElementById("admin-preview-viewport");
    if (viewportRoot) {
        viewportRoot.setAttribute("data-viewport", previewViewportMode);
    }

    document.querySelectorAll("[data-viewport]").forEach((button) => {
        button.classList.toggle("is-active", button.getAttribute("data-viewport") === previewViewportMode);
    });
}

function handlePreviewMessage(event) {
    if (window.location.protocol !== "file:" && event.origin !== window.location.origin) {
        return;
    }

    const data = event.data;
    if (!data || data.source !== PREVIEW_MESSAGE_SOURCE) {
        return;
    }

    if (data.action === "field-selected" && data.path) {
        syncSelectedField(keyToPath(String(data.path)), { skipFocus: true });
        document.body.classList.add("admin-element-focused");
    }

    if (data.action === "clear-selection") {
        clearSelectedElement({ skipRender: true });
        renderPortal();
    }
}

function handlePreviewSelectionEvent(event) {
    const detail = event.detail;
    if (!detail || detail.source !== PREVIEW_MESSAGE_SOURCE) {
        return;
    }

    if (detail.action === "field-selected" && detail.path) {
        syncSelectedField(keyToPath(String(detail.path)), { skipFocus: true });
        document.body.classList.add("admin-element-focused");
    }

    if (detail.action === "clear-selection") {
        clearSelectedElement({ skipRender: true });
        renderPortal();
    }
}

function attachPreviewBridge() {
    const frameDocument = previewFrame?.contentDocument;
    if (!frameDocument) {
        return;
    }

    if (!frameDocument.getElementById("pn-admin-preview-style")) {
        const style = frameDocument.createElement("style");
        style.id = "pn-admin-preview-style";
        style.textContent = `[data-admin-field]{cursor:pointer;transition:outline-color 120ms ease, box-shadow 120ms ease;}[data-admin-field]:hover{outline:2px solid rgba(2,132,199,.45)!important;outline-offset:2px;}.pn-admin-selected{outline:2px solid rgba(2,132,199,.92)!important;outline-offset:2px;box-shadow:0 0 0 3px rgba(2,132,199,.15);} `;
        frameDocument.head.appendChild(style);
    }

    if (frameDocument.body.dataset.adminBridgeReady === "true") {
        return;
    }

    frameDocument.body.dataset.adminBridgeReady = "true";
    frameDocument.body.addEventListener("click", (event) => {
        const target = event.target.closest("[data-admin-field]");
        if (!target) {
            clearSelectedElement();
            return;
        }

        event.preventDefault();
        event.stopPropagation();

        frameDocument.querySelectorAll(".pn-admin-selected").forEach((node) => node.classList.remove("pn-admin-selected"));
        target.classList.add("pn-admin-selected");
        syncSelectedField(keyToPath(target.getAttribute("data-admin-field")), { skipFocus: true });
        document.body.classList.add("admin-element-focused");
    }, true);
}

function setSelectedElement(path, options = {}) {
    const section = getActiveSection();
    const resolvedPath = findFieldPathInSection(section, pathToKey(path)) || findFieldPathInSection(section, pathToKey(path || []));
    if (!resolvedPath) {
        return;
    }

    selectedFieldPath = resolvedPath;
    selectedElement = createSelectedElement(resolvedPath, options.mergedData || getMergedDataset());
    document.body.classList.add("admin-element-focused");

    const frameDocument = previewFrame?.contentDocument;
    if (frameDocument) {
        frameDocument.querySelectorAll(".pn-admin-selected").forEach((node) => node.classList.remove("pn-admin-selected"));
        const selectedNode = frameDocument.querySelector(`[data-admin-field="${CSS.escape(pathToKey(resolvedPath))}"]`);
        selectedNode?.classList.add("pn-admin-selected");
    }

    const input = fieldListRoot.querySelector(`[data-path="${pathToKey(resolvedPath)}"]`);
    if (input) {
        activeFieldInput = input;
    }

    renderSelectedFieldInspector(getActivePage(), section, options.mergedData || getMergedDataset());
    postPreviewMessage({
        action: "highlight-element",
        element: selectedElement
    });

    if (input && !options.skipFocus) {
        input.focus({ preventScroll: true });
    }

    applyInspectorPresentation(resolvedPath);

    highlightSelectedFieldCard();
}

function clearSelectedElement(options = {}) {
    selectedElement = null;
    selectedFieldPath = null;
    document.body.classList.remove("admin-element-focused");
    const frameDocument = previewFrame?.contentDocument;
    frameDocument?.querySelectorAll(".pn-admin-selected").forEach((node) => node.classList.remove("pn-admin-selected"));
    if (!options.skipRender) {
        renderPortal();
    }
    postPreviewMessage({ action: "clear-highlight" });
}

function syncSelectedField(path, options = {}) {
    setSelectedElement(path, options);
}

function matchesQuery(page, section, query, mergedData) {
    if (!query) {
        return true;
    }

    const haystack = [page.title, page.description, section.title, section.summary]
        .concat(section.fields.map((path) => String(getByPath(mergedData, path) ?? "")))
        .join(" ")
        .toLowerCase();

    return haystack.includes(query);
}

function renderPageList(pages) {
    pageListRoot.innerHTML = pages.map((page) => {
        const isActive = page.id === activePageId;
        const fieldTotal = page.sections.reduce((total, section) => total + section.fields.length, 0);
        return `<button type="button" class="admin-page-card${isActive ? " is-active" : ""}" data-page-id="${page.id}"><strong>${page.title}</strong><span>${page.sections.length} sections</span><span>${fieldTotal} fields</span><p>${page.description}</p></button>`;
    }).join("");

    pageListRoot.querySelectorAll("[data-page-id]").forEach((button) => {
        button.addEventListener("click", () => {
            persistCurrentSectionDraft({ announce: false, reRender: false, quiet: true });
            setActivePage(String(button.getAttribute("data-page-id") || ""));
            renderPortal();
        });
    });
}

function renderSectionList(page) {
    sectionListRoot.innerHTML = page.sections.map((section) => {
        const isActive = section.id === activeSectionId;
        const fieldPreview = section.fields.slice(0, 3).map((path) => fieldLabel(path)).join(" · ");
        return `<button type="button" class="admin-section-card${isActive ? " is-active" : ""}" data-section-id="${section.id}"><strong>${section.title}</strong><span>${section.fields.length} editable items</span><p>${section.summary}</p><small>${escapeHtml(fieldPreview)}${section.fields.length > 3 ? " · …" : ""}</small></button>`;
    }).join("");

    sectionListRoot.querySelectorAll("[data-section-id]").forEach((button) => {
        button.addEventListener("click", () => {
            persistCurrentSectionDraft({ announce: false, reRender: false, quiet: true });
            setActiveSection(String(button.getAttribute("data-section-id") || ""));
            renderPortal();
        });
    });
}

function renderAssetLibrary(section) {
    const relevantAssets = section.fields
        .map((path) => String(getByPath(defaultDataset, path) || getByPath(getMergedDataset(), path) || ""))
        .filter((value) => isImageValue(value) || isMediaValue(value));

    const imageChips = assetLibrary.images.map((asset) => {
        const active = relevantAssets.includes(asset);
        return `<button type="button" class="admin-asset-chip${active ? " is-active" : ""}" data-asset-kind="image" data-asset-value="${escapeHtml(asset)}">${escapeHtml(asset)}</button>`;
    }).join("");

    const mediaChips = assetLibrary.media.map((asset) => {
        const active = relevantAssets.includes(asset);
        return `<button type="button" class="admin-asset-chip${active ? " is-active" : ""}" data-asset-kind="media" data-asset-value="${escapeHtml(asset)}">${escapeHtml(asset)}</button>`;
    }).join("");

    return `
        <div class="admin-asset-library__group">
            <strong>Images</strong>
            <div class="admin-asset-chip-list">${imageChips}</div>
        </div>
        <div class="admin-asset-library__group">
            <strong>Media</strong>
            <div class="admin-asset-chip-list">${mediaChips}</div>
        </div>
    `;
}

function renderFieldCard(path, value) {
    const type = fieldType(path, value);
    const pathString = path.join(".");
    const label = escapeHtml(fieldLabel(path));
    const safeValue = escapeHtml(value);
    const listId = type === "image" ? "admin-image-assets" : type === "media" ? "admin-media-assets" : "";

    let inputMarkup = `<input data-path="${escapeHtml(pathString)}" data-field-type="${type}" ${listId ? `list="${listId}"` : ""} type="text" value="${safeValue}" placeholder="${type === "image" ? "Choose or type an image file" : type === "media" ? "Choose or type a media file" : "Enter text"}">`;
    if (type === "textarea") {
        inputMarkup = `<textarea data-path="${escapeHtml(pathString)}" data-field-type="${type}" placeholder="Enter or paste section copy">${safeValue}</textarea>`;
    }

    let previewMarkup = `<p>${safeValue || "(empty text)"}</p>`;
    if (type === "image") {
        previewMarkup = `<img src="${safeValue}" alt="${label} preview" loading="lazy">`;
    } else if (type === "media") {
        previewMarkup = `<video src="${safeValue}" muted preload="metadata" controls></video>`;
    }

    const isSelected = pathToKey(path) === pathToKey(getSelectedFieldPath());
    return `<article class="admin-field angular-card${isSelected ? " is-selected" : ""}" data-field-card="${escapeHtml(pathString)}"><div class="admin-field__header"><label><span data-field-kind="${escapeHtml(type)}">${label}</span>${inputMarkup}</label><p class="admin-path">${escapeHtml(pathString)}</p></div><div class="admin-placeholder"><span class="admin-placeholder__title">Preview</span>${previewMarkup}</div></article>`;
}

function resolveSiblingFieldPath(section, path, candidates) {
    if (!Array.isArray(path) || !path.length) {
        return null;
    }

    const prefix = path.slice(0, -1);
    for (const candidate of candidates) {
        const nextPath = prefix.concat(candidate);
        const inSection = findFieldPathInSection(section, pathToKey(nextPath));
        if (inSection) {
            return inSection;
        }
    }

    return null;
}

function getPreviewEditableElement(path) {
    const frameDocument = previewFrame?.contentDocument;
    if (!frameDocument || !Array.isArray(path)) {
        return null;
    }

    const selector = `[data-admin-field="${CSS.escape(pathToKey(path))}"]`;
    return frameDocument.querySelector(selector);
}

function getInspectorPresentationState(path) {
    const key = pathToKey(path);
    if (!previewInspectorState.has(key)) {
        previewInspectorState.set(key, {
            bold: false,
            align: "inherit",
            linkTarget: "self"
        });
    }

    return previewInspectorState.get(key);
}

function applyInspectorPresentation(path) {
    const element = getPreviewEditableElement(path);
    if (!element) {
        return;
    }

    const state = getInspectorPresentationState(path);
    element.style.fontWeight = state.bold ? "700" : "";
    element.style.textAlign = state.align === "inherit" ? "" : state.align;

    if (element.tagName === "A") {
        if (state.linkTarget === "blank") {
            element.setAttribute("target", "_blank");
            element.setAttribute("rel", "noopener noreferrer");
        } else {
            element.setAttribute("target", "_self");
            element.removeAttribute("rel");
        }
    }
}

function toggleInspectorBold(path) {
    const state = getInspectorPresentationState(path);
    state.bold = !state.bold;
    applyInspectorPresentation(path);
}

function setInspectorAlignment(path, align) {
    const state = getInspectorPresentationState(path);
    state.align = ["left", "center", "right", "inherit"].includes(align) ? align : "inherit";
    applyInspectorPresentation(path);
}

function setInspectorLinkTarget(path, linkTarget) {
    const state = getInspectorPresentationState(path);
    state.linkTarget = linkTarget === "blank" ? "blank" : "self";
    applyInspectorPresentation(path);
}

function renderSelectedFieldInspector(page, section, mergedData) {
    if (!selectedFieldEditor) {
        return;
    }

    if (!selectedElement?.path) {
        if (selectedFieldKind) {
            selectedFieldKind.textContent = "waiting";
        }
        if (inspectorHint) {
            inspectorHint.textContent = "Select anything with a blue hover ring in the preview to open focused controls.";
        }

        selectedFieldEditor.innerHTML = `
            <article class="admin-inspector-empty">
                <h3>Inspector is ready</h3>
                <p>Use the preview to click an editable element. The inspector will switch to image or text controls for that exact element only.</p>
                <p><strong>Current context:</strong> ${escapeHtml(page.title)} / ${escapeHtml(section.title)}</p>
            </article>
        `;
        return;
    }

    const path = getSelectedFieldPath(section);
    const key = pathToKey(path);
    const value = String(getByPath(mergedData, path) ?? "");
    const type = getSelectedFieldType(path, value);
    const label = escapeHtml(fieldLabel(path));
    const presentationState = getInspectorPresentationState(path);
    const previewElement = getPreviewEditableElement(path);
    const isAnchor = previewElement?.tagName === "A";
    const isImageInspector = type === "image" || type === "media";

    if (selectedFieldKind) {
        selectedFieldKind.textContent = isImageInspector ? "image inspector" : "text inspector";
    }
    if (inspectorHint) {
        inspectorHint.textContent = isImageInspector
            ? "Replace the source and metadata for this visual asset."
            : "Edit copy and preview presentation for the selected text element.";
    }

    const altPath = isImageInspector ? resolveSiblingFieldPath(section, path, ["alt", "imageAlt"]) : null;
    const titlePath = isImageInspector ? resolveSiblingFieldPath(section, path, ["title", "imageTitle"]) : null;
    const altValue = altPath ? String(getByPath(mergedData, altPath) ?? "") : "";
    const titleValue = titlePath ? String(getByPath(mergedData, titlePath) ?? "") : "";
    const listId = type === "image" ? "admin-image-assets" : type === "media" ? "admin-media-assets" : "";

    const previewMarkup = type === "image"
        ? `<img src="${escapeHtml(value)}" alt="${label} preview" loading="lazy">`
        : type === "media"
            ? `<video src="${escapeHtml(value)}" muted controls preload="metadata"></video>`
            : `<p>${escapeHtml(value || "(empty text)")}</p>`;

    if (isImageInspector) {
        selectedFieldEditor.innerHTML = `
            <article class="admin-selected-field__card">
                <div class="admin-selected-field__preview">
                    <strong>${label}</strong>
                    ${previewMarkup}
                    <p class="admin-selected-field__meta">Path: ${escapeHtml(key)}</p>
                </div>
                <div class="admin-inspector-grid">
                    <label class="admin-inspector-control">
                        <span>File Source</span>
                        <input data-path="${escapeHtml(key)}" data-field-type="${escapeHtml(type)}" ${listId ? `list="${listId}"` : ""} type="text" value="${escapeHtml(value)}" placeholder="Replace source path or use upload">
                    </label>
                    <div class="admin-inspector-grid admin-inspector-grid--2">
                        ${altPath ? `<label class="admin-inspector-control"><span>Alt Text</span><input data-path="${escapeHtml(pathToKey(altPath))}" type="text" value="${escapeHtml(altValue)}" placeholder="Describe the image for accessibility"></label>` : ""}
                        ${titlePath ? `<label class="admin-inspector-control"><span>Image Title</span><input data-path="${escapeHtml(pathToKey(titlePath))}" type="text" value="${escapeHtml(titleValue)}" placeholder="Optional title attribute"></label>` : ""}
                    </div>
                    <div class="admin-dropzone" data-dropzone>
                        <strong>Drag and drop image/video file</strong>
                        <p>Drop a file here to convert and update this field immediately.</p>
                        <div class="admin-selected-field__actions">
                            <button class="button button--secondary angular-card" type="button" data-action="choose-file">Upload file</button>
                            <button class="button button--secondary angular-card" type="button" data-action="reset-field">Reset field</button>
                            <button class="button button--secondary angular-card" type="button" data-action="clear-selection">Done</button>
                        </div>
                        <input id="admin-selected-file-input" type="file" accept="${type === "image" ? "image/*" : "video/*"}">
                    </div>
                </div>
            </article>
        `;
    } else {
        const asTextArea = type === "textarea";
        const linkTargetSelect = isAnchor
            ? `<label class="admin-inspector-control"><span>Link Target</span><select data-action="link-target"><option value="self" ${presentationState.linkTarget === "self" ? "selected" : ""}>Same tab</option><option value="blank" ${presentationState.linkTarget === "blank" ? "selected" : ""}>New tab</option></select></label>`
            : "";

        selectedFieldEditor.innerHTML = `
            <article class="admin-selected-field__card">
                <div class="admin-selected-field__preview">
                    <strong>${label}</strong>
                    ${previewMarkup}
                    <p class="admin-selected-field__meta">Path: ${escapeHtml(key)}</p>
                </div>
                <label class="admin-inspector-control">
                    <span>Content</span>
                    ${asTextArea
                        ? `<textarea data-path="${escapeHtml(key)}" data-field-type="${escapeHtml(type)}" placeholder="Update selected text">${escapeHtml(value)}</textarea>`
                        : `<input data-path="${escapeHtml(key)}" data-field-type="${escapeHtml(type)}" type="text" value="${escapeHtml(value)}" placeholder="Update selected text">`}
                </label>
                <div class="admin-inspector-grid admin-inspector-grid--2">
                    <label class="admin-inspector-control">
                        <span>Typography</span>
                        <div class="admin-typography-controls" role="group" aria-label="Typography controls">
                            <button type="button" data-action="toggle-bold" class="${presentationState.bold ? "is-active" : ""}">Bold</button>
                            <button type="button" data-action="align-left" class="${presentationState.align === "left" ? "is-active" : ""}">Left</button>
                            <button type="button" data-action="align-center" class="${presentationState.align === "center" ? "is-active" : ""}">Center</button>
                            <button type="button" data-action="align-right" class="${presentationState.align === "right" ? "is-active" : ""}">Right</button>
                        </div>
                    </label>
                    ${linkTargetSelect}
                </div>
                <div class="admin-selected-field__actions">
                    <button class="button button--secondary angular-card" type="button" data-action="reset-field">Reset field</button>
                    <button class="button button--secondary angular-card" type="button" data-action="clear-selection">Done</button>
                </div>
            </article>
        `;
    }

    selectedFieldEditor.querySelectorAll("[data-path]").forEach((editorInput) => {
        editorInput.addEventListener("input", () => {
            const editorPath = keyToPath(String(editorInput.getAttribute("data-path") || ""));
            applyFieldValue(editorPath, String(editorInput.value || ""));
            queueAutosave();
        });
    });

    const fileInput = selectedFieldEditor.querySelector("#admin-selected-file-input");
    const applyPickedFile = async (file) => {
        if (!file) {
            return;
        }

        const dataUrl = await fileToDataUrl(file);
        applyFieldValue(path, dataUrl);
        queueAutosave();
        renderSelectedFieldInspector(page, section, getMergedDataset());
    };

    if (fileInput) {
        fileInput.addEventListener("change", async () => {
            await applyPickedFile(fileInput.files?.[0]);
        });
    }

    const dropzone = selectedFieldEditor.querySelector("[data-dropzone]");
    if (dropzone) {
        ["dragenter", "dragover"].forEach((eventName) => {
            dropzone.addEventListener(eventName, (event) => {
                event.preventDefault();
                dropzone.classList.add("is-dragging");
            });
        });

        ["dragleave", "drop"].forEach((eventName) => {
            dropzone.addEventListener(eventName, () => {
                dropzone.classList.remove("is-dragging");
            });
        });

        dropzone.addEventListener("drop", async (event) => {
            event.preventDefault();
            await applyPickedFile(event.dataTransfer?.files?.[0]);
        });
    }

    selectedFieldEditor.querySelectorAll("[data-action]").forEach((button) => {
        button.addEventListener("click", () => {
            const action = String(button.getAttribute("data-action") || "");
            if (action === "choose-file") {
                fileInput?.click();
            }
            if (action === "reset-field") {
                revertSelectedField(path);
            }
            if (action === "toggle-bold") {
                toggleInspectorBold(path);
                renderSelectedFieldInspector(page, section, getMergedDataset());
            }
            if (action === "align-left") {
                setInspectorAlignment(path, "left");
                renderSelectedFieldInspector(page, section, getMergedDataset());
            }
            if (action === "align-center") {
                setInspectorAlignment(path, "center");
                renderSelectedFieldInspector(page, section, getMergedDataset());
            }
            if (action === "align-right") {
                setInspectorAlignment(path, "right");
                renderSelectedFieldInspector(page, section, getMergedDataset());
            }
            if (action === "clear-selection") {
                clearSelectedElement();
            }
        });
    });

    const linkTargetInput = selectedFieldEditor.querySelector("[data-action='link-target']");
    if (linkTargetInput) {
        linkTargetInput.addEventListener("change", () => {
            setInspectorLinkTarget(path, String(linkTargetInput.value || "self"));
        });
    }

    applyInspectorPresentation(path);
}

function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ""));
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
    });
}

function applyFieldValue(path, value) {
    const fieldKey = pathToKey(path);
    const selector = `[data-path="${CSS.escape(fieldKey)}"]`;
    document.querySelectorAll(selector).forEach((input) => {
        input.value = value;
    });

    statusMessage.textContent = "Unsaved changes. Save the section when you are done.";
}

function revertSelectedField(path) {
    const section = getActiveSection();
    const defaultValue = String(getByPath(defaultDataset, path) ?? "");
    applyFieldValue(path, defaultValue);
    renderPortal();
}

function highlightSelectedFieldCard() {
    fieldListRoot.querySelectorAll(".admin-field").forEach((card) => {
        card.classList.toggle("is-selected", card.getAttribute("data-field-card") === pathToKey(getSelectedFieldPath()));
    });
}

function renderPreview(page, section) {
    const previewUrl = section.previewAnchor ? `${page.url}#${section.previewAnchor}` : page.url;
    previewFrame.src = previewUrl;
    previewCaption.textContent = `${page.title} · ${section.title}`;
    previewLinks.innerHTML = `<a href="${page.url}" target="_blank" rel="noopener noreferrer">Open ${page.title} page</a><a href="${previewUrl}" target="_blank" rel="noopener noreferrer">Open selected section</a>`;
    setPreviewViewport(previewViewportMode);
}

function renderSectionWorkbench(page, section, mergedData) {
    pageBadge.textContent = page.title;
    sectionTitle.textContent = section.title;
    sectionSummary.textContent = section.summary;
    sectionFieldCount.textContent = `${section.fields.length} fields`;
    sectionPreviewLabel.textContent = section.previewLabel || page.previewLabel;

    thumbsRoot.innerHTML = renderAssetLibrary(section);
    fieldListRoot.innerHTML = section.fields.map((path) => renderFieldCard(path, String(getByPath(mergedData, path) ?? ""))).join("");
    renderSelectedFieldInspector(page, section, mergedData);

    fieldListRoot.querySelectorAll("[data-path]").forEach((input) => {
        input.addEventListener("focus", () => {
            activeFieldInput = input;
            selectedFieldPath = keyToPath(input.getAttribute("data-path"));
            selectedElement = null;
            document.body.classList.remove("admin-element-focused");
            renderSelectedFieldInspector(page, section, mergedData);
        });
        input.addEventListener("input", () => {
            activeFieldInput = input;
            selectedFieldPath = keyToPath(input.getAttribute("data-path"));
            selectedElement = null;
            document.body.classList.remove("admin-element-focused");
            queueAutosave();
        });
    });

    thumbsRoot.querySelectorAll("[data-asset-value]").forEach((button) => {
        button.addEventListener("click", () => {
            const assetValue = button.getAttribute("data-asset-value");
            const assetKind = button.getAttribute("data-asset-kind");
            const selectedPath = getSelectedFieldPath(section);
            const selectedValue = String(getByPath(mergedData, selectedPath) ?? "");
            if (getSelectedFieldType(selectedPath, selectedValue) === assetKind) {
                applyFieldValue(selectedPath, assetValue);
                if (activeFieldInput) {
                    activeFieldInput.value = assetValue;
                    activeFieldInput.dispatchEvent(new Event("input", { bubbles: true }));
                }
                renderSelectedFieldInspector(page, section, getMergedDataset());
                queueAutosave();
            }
        });
    });

    renderPreview(page, section);
    highlightSelectedFieldCard();
}

function queueAutosave() {
    window.clearTimeout(autosaveTimer);
    statusMessage.textContent = "Saving changes...";
    autosaveTimer = window.setTimeout(() => {
        persistCurrentSectionDraft({ announce: true, reRender: false });
    }, 180);
}

function collectOverridesFromInputs() {
    const overrides = {};
    fieldListRoot.querySelectorAll("[data-path]").forEach((input) => {
        const path = input.getAttribute("data-path").split(".").map((part) => (/^\d+$/.test(part) ? Number(part) : part));
        setByPath(overrides, path, String(input.value || ""));
    });
    return overrides;
}

function unsetByPath(target, path) {
    if (!path.length) {
        return;
    }

    let current = target;
    for (let index = 0; index < path.length - 1; index += 1) {
        current = current[path[index]];
        if (current == null) {
            return;
        }
    }

    const finalPart = path[path.length - 1];
    if (current && Object.prototype.hasOwnProperty.call(current, finalPart)) {
        delete current[finalPart];
    }
}

function persistCurrentSectionDraft(options = {}) {
    const { announce = false, reRender = false, quiet = false } = options;
    const overrides = readOverrides();
    const section = getActiveSection();
    const currentValues = collectOverridesFromInputs();

    section.fields.forEach((path) => {
        const currentValue = getByPath(currentValues, path);
        const defaultValue = getByPath(defaultDataset, path);
        if (String(currentValue ?? "") === String(defaultValue ?? "")) {
            return;
        }

        setByPath(overrides, path, currentValue);
    });

    localStorage.setItem(PN_ADMIN_CONTENT_OVERRIDES_KEY, JSON.stringify(overrides));

    if (!quiet) {
        statusMessage.textContent = announce ? `Saved ${section.title} for ${getActivePage().title}.` : "Changes saved.";
    }

    if (reRender) {
        renderPortal();
    }

    return overrides;
}

function revertCurrentSection() {
    window.clearTimeout(autosaveTimer);
    const overrides = readOverrides();
    const section = getActiveSection();

    section.fields.forEach((path) => {
        unsetByPath(overrides, path);
    });

    localStorage.setItem(PN_ADMIN_CONTENT_OVERRIDES_KEY, JSON.stringify(overrides));
    statusMessage.textContent = `Reverted ${section.title} back to the previous saved state.`;
    renderPortal();
}

function renderPortal() {
    const mergedData = getMergedDataset();
    const query = String(searchInput?.value || "").trim().toLowerCase();

    const matchingPages = pageConfig.map((page) => ({
        ...page,
        sections: page.sections.filter((section) => matchesQuery(page, section, query, mergedData))
    })).filter((page) => page.sections.length > 0 || !query);

    if (!matchingPages.some((page) => page.id === activePageId)) {
        activePageId = matchingPages[0]?.id || pageConfig[0].id;
    }

    const activePage = matchingPages.find((page) => page.id === activePageId) || getActivePage();
    if (!activePage.sections.some((section) => section.id === activeSectionId)) {
        activeSectionId = activePage.sections[0].id;
    }

    renderPageList(matchingPages);
    renderSectionList(activePage);
    renderContextSelectors(matchingPages.length ? matchingPages : pageConfig, activePage);
    renderSectionWorkbench(activePage, getActiveSection(), mergedData);

    pageCount.textContent = `${matchingPages.length} pages`;
    sectionCount.textContent = `${activePage.sections.length} sections`;
}

function saveChanges() {
    persistCurrentSectionDraft({ announce: true, reRender: true });
}

function resetAllChanges() {
    localStorage.removeItem(PN_ADMIN_CONTENT_OVERRIDES_KEY);
    statusMessage.textContent = "All content overrides were cleared.";
    renderPortal();
}
