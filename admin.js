const PN_ADMIN_AUTH_KEY = "pnMedicalAdminAuthenticated";
const PN_ADMIN_CONTENT_OVERRIDES_KEY = "pnMedicalContentOverrides";
const PN_ADMIN_USERNAME = "admin";
const PN_ADMIN_PASSWORD = "admin";

const pageOrder = ["home", "products", "accreditation", "faq", "news", "contact", "global"];
const pageMeta = {
    home: { title: "Home Page", description: "Hero, campaign, and homepage highlight content.", url: "index.html" },
    products: { title: "Products Page", description: "Product intros, product cards, filters, and feature sections.", url: "products.html" },
    accreditation: { title: "Accreditation Page", description: "Compliance text and accreditation visuals.", url: "accreditation.html" },
    faq: { title: "FAQ Page", description: "Frequently asked questions and answers.", url: "faq.html" },
    news: { title: "News Page", description: "News cards and social link content.", url: "news.html" },
    contact: { title: "Contact Page", description: "Contact intro, contacts, and inquiry form copy.", url: "contact.html" },
    global: { title: "Global Elements", description: "Branding, navigation labels, and shared top bar content.", url: "index.html" }
};

const pagePreviewLabels = {
    home: ["Hero text and video", "Campaign spotlight", "Homepage highlights", "Featured product preview", "Accreditation snapshot", "Call to action"],
    products: ["Product jump links", "Touch-free dispenser section", "Refill bag section", "Soap refill section", "Catalog filters", "Portable accessory section"],
    accreditation: ["Credibility summary", "Supporting visuals", "Compliance references"],
    faq: ["FAQ answers"],
    news: ["Social feed" , "News stories"],
    contact: ["Procurement inquiry form", "Contact details"],
    global: ["Top bar", "Header navigation", "Footer navigation"]
};

const pagePreviewAnchors = {
    home: [
        { label: "Hero text + video", anchor: "home" },
        { label: "Flyer spotlight", anchor: null },
        { label: "Homepage highlights", anchor: null },
        { label: "Featured product preview", anchor: null },
        { label: "Accreditation snapshot", anchor: null },
        { label: "Call to action", anchor: null }
    ],
    products: [
        { label: "Quick links", anchor: "home" },
        { label: "Touch-free dispensers", anchor: "home" },
        { label: "1 Litre refill bag", anchor: "profile" },
        { label: "Soap refill bag", anchor: "messages" },
        { label: "50ml spray bottle", anchor: "settings" },
        { label: "Accessory section", anchor: "fund" },
        { label: "Catalog filters", anchor: null }
    ],
    accreditation: [
        { label: "Intro copy", anchor: null },
        { label: "Credibility summary", anchor: null },
        { label: "Visual evidence", anchor: null }
    ],
    faq: [{ label: "FAQ answers", anchor: null }],
    news: [{ label: "Social feed", anchor: null }, { label: "News stories", anchor: null }],
    contact: [{ label: "Inquiry form", anchor: null }],
    global: [{ label: "Top bar", anchor: null }, { label: "Header navigation", anchor: null }, { label: "Footer navigation", anchor: null }]
};

const loginSection = document.querySelector("#admin-login");
const editorSection = document.querySelector("#admin-editor");
const loginForm = document.querySelector("#admin-login-form");
const loginError = document.querySelector("#admin-login-error");
const groupsRoot = document.querySelector("#admin-groups");
const statusMessage = document.querySelector("#admin-status");
const saveButton = document.querySelector("#admin-save");
const resetButton = document.querySelector("#admin-reset");
const logoutButton = document.querySelector("#admin-logout");

const defaultDataset = window.__pnDefaultDataset;

if (!defaultDataset) {
    loginSection.hidden = true;
    editorSection.hidden = false;
    groupsRoot.innerHTML = '<p class="admin-error">Unable to load default content dataset. Ensure site.js loads before admin.js.</p>';
} else {
    initializeAdmin();
}

function initializeAdmin() {
    loginForm.addEventListener("submit", handleLogin);
    saveButton.addEventListener("click", saveChanges);
    resetButton.addEventListener("click", resetAllChanges);
    logoutButton.addEventListener("click", logout);

    if (sessionStorage.getItem(PN_ADMIN_AUTH_KEY) === "1") {
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
        loginError.textContent = "";
        showEditor();
        return;
    }

    loginError.textContent = "Incorrect username or password.";
}

function showLogin() {
    loginSection.hidden = false;
    editorSection.hidden = true;
}

function showEditor() {
    loginSection.hidden = true;
    editorSection.hidden = false;
    renderEditor();
}

function logout() {
    sessionStorage.removeItem(PN_ADMIN_AUTH_KEY);
    statusMessage.textContent = "Logged out.";
    showLogin();
}

function readOverrides() {
    try {
        const raw = localStorage.getItem(PN_ADMIN_CONTENT_OVERRIDES_KEY);
        if (!raw) {
            return null;
        }
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : null;
    } catch (_error) {
        return null;
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

function collectStringLeaves(value, trail = [], result = []) {
    if (typeof value === "string") {
        result.push({ path: [...trail], defaultValue: value });
        return result;
    }

    if (Array.isArray(value)) {
        value.forEach((item, index) => collectStringLeaves(item, [...trail, index], result));
        return result;
    }

    if (isMergeableObject(value)) {
        Object.keys(value).forEach((key) => collectStringLeaves(value[key], [...trail, key], result));
    }

    return result;
}

function getByPath(source, path) {
    return path.reduce((acc, part) => (acc == null ? acc : acc[part]), source);
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

function fieldType(path, value) {
    const key = String(path[path.length - 1]).toLowerCase();
    if (/\.(png|jpg|jpeg|gif|svg|webp)$/i.test(value) || key.includes("image") || key.includes("poster")) {
        return "image";
    }

    if (/\.(mp4|webm|ogg)$/i.test(value) || key === "src") {
        return "media";
    }

    if (value.length > 90) {
        return "textarea";
    }

    return "text";
}

function pageCategory(path) {
    const root = String(path[0]);
    if (root === "hero" || root === "mediaAssets" || root === "homeHighlights" || root === "flyerSpotlight") {
        return "home";
    }

    if (root === "products" || root === "filters" || root === "productQuickLinks" || root.endsWith("Feature")) {
        return "products";
    }

    if (root === "accreditationIntroVisual" || root === "accreditationCredibilityVisual" || root === "accreditationVisuals" || root === "credibility") {
        return "accreditation";
    }

    if (root === "faqs") {
        return "faq";
    }

    if (root === "socialFeeds" || root === "news") {
        return "news";
    }

    if (root === "inquiry") {
        return "contact";
    }

    if (root === "pageIntro") {
        const page = String(path[1] || "").toLowerCase();
        if (pageMeta[page]) {
            return page;
        }
    }

    return "global";
}

function elementLabel(path) {
    return path.map((part) => (typeof part === "number" ? `Item ${part + 1}` : toTitleCase(part))).join(" / ");
}

function toTitleCase(value) {
    return value.replace(/([A-Z])/g, " $1").replace(/[_-]/g, " ").replace(/^./, (match) => match.toUpperCase()).trim();
}

function isImageValue(value) {
    return /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(value);
}

function isMediaValue(value) {
    return /\.(mp4|webm|ogg)$/i.test(value);
}

function buildFieldMarkup(field, currentValue) {
    const serializedPath = field.path.join(".");
    const type = fieldType(field.path, currentValue);
    const safeValue = escapeHtml(currentValue);
    const label = escapeHtml(elementLabel(field.path));
    const pathLabel = escapeHtml(serializedPath);

    let inputMarkup = `<input data-path="${pathLabel}" type="text" value="${safeValue}">`;
    if (type === "textarea") {
        inputMarkup = `<textarea data-path="${pathLabel}">${safeValue}</textarea>`;
    }

    let previewMarkup = `<p>${safeValue || "(empty text)"}</p>`;
    if (isImageValue(currentValue)) {
        previewMarkup = `<img src="${safeValue}" alt="${label} preview" loading="lazy">`;
    } else if (isMediaValue(currentValue)) {
        previewMarkup = `<video src="${safeValue}" muted preload="metadata" controls></video>`;
    }

    return `<article class="admin-field angular-card"><label><span>${label}</span>${inputMarkup}</label><p class="admin-path">Element path: ${pathLabel}</p><div class="admin-placeholder"><span class="admin-placeholder__title">Editable Placeholder Preview</span>${previewMarkup}</div></article>`;
}

function buildPagePreview(page) {
    const meta = pageMeta[page];
    const labels = pagePreviewLabels[page] || [];
    const anchors = pagePreviewAnchors[page] || [];
    const chips = labels.map((label) => `<span>${label}</span>`).join("");
    const shots = anchors.map((shot) => {
        const previewUrl = shot.anchor ? `${meta.url}#${shot.anchor}` : meta.url;
        return `<article class="admin-shot"><div class="admin-shot__frame"><iframe title="${escapeHtml(meta.title)} ${escapeHtml(shot.label)} preview" src="${previewUrl}" loading="lazy"></iframe><span class="admin-shot__badge">${escapeHtml(shot.label)}</span></div><strong>${escapeHtml(shot.label)}</strong></article>`;
    }).join("");
    return `<div class="admin-preview"><div class="admin-preview__shots">${shots}</div><div class="admin-preview__meta"><strong>${escapeHtml(meta.title)}</strong><p>${escapeHtml(meta.description)}</p><div class="admin-preview__chips">${chips}</div></div></div>`;
}

function renderEditor() {
    const mergedData = mergeContent(defaultDataset, readOverrides());
    const fields = collectStringLeaves(defaultDataset);

    const grouped = {};
    pageOrder.forEach((page) => {
        grouped[page] = [];
    });

    fields.forEach((field) => {
        const page = pageCategory(field.path);
        const currentValue = String(getByPath(mergedData, field.path) ?? "");
        grouped[page].push({ field, currentValue });
    });

    const groupMarkup = pageOrder
        .filter((page) => grouped[page].length > 0)
        .map((page) => {
            const meta = pageMeta[page];
            const cards = grouped[page].map(({ field, currentValue }) => buildFieldMarkup(field, currentValue)).join("");
            return `<details class="admin-group angular-card"${page === "home" ? " open" : ""}><summary><div><h2>${meta.title}</h2><p class="admin-group__meta">${meta.description} ${grouped[page].length} editable fields.</p></div><span class="admin-group__count">${grouped[page].length} items</span></summary>${buildPagePreview(page)}<div class="admin-group__fields">${cards}</div></details>`;
        })
        .join("");

    groupsRoot.innerHTML = groupMarkup;
}

function saveChanges() {
    const mergedData = mergeContent(defaultDataset, readOverrides());
    const overrides = {};

    groupsRoot.querySelectorAll("[data-path]").forEach((input) => {
        const path = input.getAttribute("data-path").split(".").map((part) => (/^\d+$/.test(part) ? Number(part) : part));
        const value = String(input.value || "");
        setByPath(mergedData, path, value);
    });

    const fields = collectStringLeaves(defaultDataset);
    fields.forEach((field) => {
        const defaultValue = String(field.defaultValue);
        const currentValue = String(getByPath(mergedData, field.path) ?? "");
        if (currentValue !== defaultValue) {
            setByPath(overrides, field.path, currentValue);
        }
    });

    localStorage.setItem(PN_ADMIN_CONTENT_OVERRIDES_KEY, JSON.stringify(overrides));
    statusMessage.textContent = "Changes saved. Refresh any site page to see updates.";
    renderEditor();
}

function resetAllChanges() {
    localStorage.removeItem(PN_ADMIN_CONTENT_OVERRIDES_KEY);
    statusMessage.textContent = "All saved overrides were removed. Site content is back to defaults.";
    renderEditor();
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
}
