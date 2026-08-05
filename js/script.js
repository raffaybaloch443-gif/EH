(function () {
  "use strict";

  const STORAGE = {
    favorites: "favorites",
    compare: "compareProperties",
    recent: "recentProperties",
    user: "loggedInUser"
  };

  const demoProperties = [
    {
      id: 1,
      name: "Modern House",
      type: "house",
      purpose: "buy",
      city: "Lahore",
      location: "DHA Phase 6, Lahore",
      price: "PKR 2,50,00,000",
      amount: 25000000,
      area: "10 Marla",
      bedrooms: 5,
      bathrooms: 6,
      image: "assets/img/photo-1600607687920-4e2a09cf159d-w900-q80.jpg",
      url: "property-info.html?id=1"
    },
    {
      id: 11,
      name: "Luxury Apartment",
      type: "apartment",
      purpose: "buy",
      city: "Karachi",
      location: "Clifton, Karachi",
      price: "PKR 1,75,00,000",
      amount: 17500000,
      area: "1800 Sq Ft",
      bedrooms: 3,
      bathrooms: 4,
      image: "assets/img/photo-1545324418-cc1a3fa10c00-w900-q80.jpg",
      url: "property-info.html?id=11"
    },
    {
      id: 21,
      name: "Commercial Plaza",
      type: "commercial",
      purpose: "buy",
      city: "Islamabad",
      location: "Blue Area, Islamabad",
      price: "PKR 3,20,00,000",
      amount: 32000000,
      area: "10 Marla",
      bedrooms: 0,
      bathrooms: 3,
      image: "assets/img/photo-1486406146926-c627a92ad1ab-w900-q80.jpg",
      url: "property-info.html?id=21"
    },
    {
      id: 31,
      name: "Residential Land",
      type: "land",
      purpose: "buy",
      city: "Faisalabad",
      location: "Canal Road, Faisalabad",
      price: "PKR 85,00,000",
      amount: 8500000,
      area: "5 Marla",
      bedrooms: 0,
      bathrooms: 0,
      image: "assets/img/photo-1500382017468-9049fed747ef-w900-q80.jpg",
      url: "property-info.html?id=1"
    }
  ];

  function pageName() {
    return window.location.pathname.split("/").pop() || "index.html";
  }

  function readStore(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch (error) {
      return [];
    }
  }

  function writeStore(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function normalizeProperty(property) {
    if (!property) return null;
    const firstImage = property.image || (Array.isArray(property.images) ? property.images[0] : "");
    const location = property.location || property.city || "";
    return {
      id: Number(property.id),
      name: property.name || "Property",
      type: property.type || "property",
      purpose: property.purpose || "buy",
      city: property.city || location.split(",").pop().trim(),
      location,
      price: property.price || "",
      amount: property.amount || Number(String(property.price || "").replace(/\D/g, "")) || 0,
      area: property.area || "",
      bedrooms: Number(property.bedrooms || 0),
      bathrooms: Number(property.bathrooms || 0),
      image: firstImage,
      images: property.images || (firstImage ? [firstImage] : []),
      url: property.url || `property-info.html?id=${property.id}`
    };
  }

  function getPropertyFromPage() {
    if (window.EstateHubProperty) return normalizeProperty(window.EstateHubProperty);
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));
    return demoProperties.find((item) => item.id === id) || null;
  }

  function toast(message, type) {
    let wrap = document.querySelector(".toast-wrap");
    if (!wrap) {
      wrap = document.createElement("div");
      wrap.className = "toast-wrap";
      wrap.setAttribute("aria-live", "polite");
      document.body.appendChild(wrap);
    }

    const note = document.createElement("div");
    note.className = `toast ${type || "info"}`;
    note.textContent = message;
    wrap.appendChild(note);
    window.setTimeout(() => note.classList.add("show"), 20);
    window.setTimeout(() => {
      note.classList.remove("show");
      note.addEventListener("transitionend", () => note.remove(), { once: true });
    }, 2600);
  }

  function headerMarkup(active) {
    const user = JSON.parse(localStorage.getItem(STORAGE.user) || "null");
    const count = readStore(STORAGE.favorites).length;
    return `
      <header class="topbar" data-global-header>
        <a class="brand" href="index.html"><span class="brand-icon" aria-hidden="true">&#8962;</span>EstateHub</a>
        <nav class="nav" aria-label="Primary navigation">
          <a ${active === "index.html" ? 'class="active"' : ""} href="index.html">Home</a>
          <a ${active === "properties.html" ? 'class="active"' : ""} href="properties.html">Properties</a>
          <a ${active === "about.html" ? 'class="active"' : ""} href="about.html">About Us</a>
          <a ${active === "messages.html" ? 'class="active"' : ""} href="messages.html">Contact</a>
          <a href="favorites.html" id="favoriteLink" aria-label="Favorite properties">Favorites (${count})</a>
        </nav>
        ${user ? `<a href="#" id="logoutBtn">Logout</a>` : `<a class="btn dark hide-mobile" href="login.html">Login / Register</a>`}
      </header>
    `;
  }

  const footerMarkup = `
    <footer class="site-footer" data-site-footer>
      <div class="site-footer__inner">
        <div class="site-footer__grid">
          <div class="site-footer__brand">
            <a class="site-footer__logo" href="index.html" aria-label="EstateHub home">
              <span class="site-footer__logo-mark" aria-hidden="true">&#8962;</span><span>EstateHub</span>
            </a>
            <p>Connecting you to your perfect space. Leading properties, trusted agents, and seamless transactions.</p>
          </div>
          <nav class="site-footer__column" aria-label="Quick links">
            <h2>Quick Links</h2>
            <a href="properties.html">For Sale</a>
            <a href="properties.html?purpose=rent">For Rent</a>
            <a href="properties.html">New Projects</a>
          </nav>
          <nav class="site-footer__column" aria-label="Company">
            <h2>Company</h2>
            <a href="about.html">About Us</a>
            <a href="about.html#agents">Our Agents</a>
            <a href="messages.html">Contact</a>
          </nav>
          <div class="site-footer__column">
            <h2>Contact Us</h2>
            <div class="site-footer__contact"><span aria-hidden="true">⌖</span><span>Block 4, Karachi, Pakistan</span></div>
            <div class="site-footer__contact"><span aria-hidden="true">@</span><a href="mailto:info@estatehub.org">info@estatehub.org</a></div>
            <div class="site-footer__contact"><span aria-hidden="true">☎</span><a href="tel:+9221111123456">+92 (21) 111-123-456</a></div>
          </div>
          <div class="site-footer__column site-footer__newsletter">
            <h2>Stay Updated</h2>
            <p class="site-footer__newsletter-title">Subscribe to our Newsletter</p>
            <form class="site-footer__form" data-validate="newsletter">
              <input type="email" name="email" placeholder="Enter your email address..." aria-label="Email address" required>
              <button type="submit" class="site-footer__button">Subscribe</button>
            </form>
          </div>
        </div>
        <div class="site-footer__bottom">© 2026 EstateHub. All rights reserved.</div>
      </div>
    </footer>
  `;

  function normalizeHeader() {
    const active = ["modern-house.html", "luxury-apartment.html", "commercial-plaza.html", "property-info.html", "property-detail.html"].includes(pageName())
      ? "properties.html"
      : pageName();
    const existing = document.querySelector(".topbar");
    if (existing) {
      existing.outerHTML = headerMarkup(active);
    } else {
      document.body.insertAdjacentHTML("afterbegin", headerMarkup(active));
    }
  }

  function insertFooter() {
    if (document.querySelector("[data-site-footer]")) return;
    const target = document.querySelector("main") || document.querySelector(".favorites-container") || document.querySelector(".container");
    if (target) target.insertAdjacentHTML("afterend", footerMarkup);
    else document.body.insertAdjacentHTML("beforeend", footerMarkup);
  }

  function updateFavoriteCounters() {
    const count = readStore(STORAGE.favorites).length;
    document.querySelectorAll("#favoriteLink, [data-favorites-count]").forEach((node) => {
      node.textContent = node.id === "favoriteLink" ? `Favorites (${count})` : String(count);
    });
  }

  function isFavorite(id) {
    return readStore(STORAGE.favorites).some((item) => Number(item.id) === Number(id));
  }

  function toggleFavorite(property) {
    const normalized = normalizeProperty(property || getPropertyFromPage());
    if (!normalized || !normalized.id) {
      toast("Select a property first.", "warning");
      return;
    }
    let favorites = readStore(STORAGE.favorites);
    if (isFavorite(normalized.id)) {
      favorites = favorites.filter((item) => Number(item.id) !== normalized.id);
      toast("Removed from favorites.", "info");
    } else {
      favorites.push(normalized);
      toast("Added to favorites.", "success");
    }
    writeStore(STORAGE.favorites, favorites);
    updateFavoriteCounters();
    refreshStateButtons();
  }

  function toggleCompare(property) {
    const normalized = normalizeProperty(property || getPropertyFromPage());
    if (!normalized || !normalized.id) return;
    let compare = readStore(STORAGE.compare);
    const exists = compare.some((item) => Number(item.id) === normalized.id);
    if (exists) {
      compare = compare.filter((item) => Number(item.id) !== normalized.id);
      toast("Removed from compare.", "info");
    } else if (compare.length >= 3) {
      toast("You can compare up to 3 properties.", "warning");
      return;
    } else {
      compare.push(normalized);
      toast("Added to compare.", "success");
    }
    writeStore(STORAGE.compare, compare);
    renderComparePage();
    refreshStateButtons();
  }

  function addRecentlyViewed() {
    const property = normalizeProperty(getPropertyFromPage());
    if (!property || !property.id) return;
    const recent = readStore(STORAGE.recent).filter((item) => Number(item.id) !== property.id);
    recent.unshift(property);
    writeStore(STORAGE.recent, recent.slice(0, 8));
  }

  function refreshStateButtons() {
    document.querySelectorAll("[data-favorite-id], #favoriteBtn").forEach((button) => {
      const id = Number(button.dataset.favoriteId || (getPropertyFromPage() || {}).id);
      if (!id) return;
      button.classList.toggle("is-active", isFavorite(id));
      button.textContent = isFavorite(id) ? "Remove Favorite" : "Add to Favorites";
    });
    const compareIds = readStore(STORAGE.compare).map((item) => Number(item.id));
    document.querySelectorAll("[data-compare-id]").forEach((button) => {
      const id = Number(button.dataset.compareId);
      button.classList.toggle("is-active", compareIds.includes(id));
      button.textContent = compareIds.includes(id) ? "Remove Compare" : "Compare";
    });
  }

function enableContactModal() {
  if (document.querySelector(".floating-contact")) return;

  document.body.insertAdjacentHTML("beforeend", `
    <button class="floating-contact" type="button">Info</button>
  `);

  const openBtn = document.querySelector(".floating-contact");

  openBtn.addEventListener("click", () => {
    window.location.href = "messages.html";
  });
}

  function enableGallery() {
    const main = document.querySelector("[data-gallery-main]");
    if (!main) return;
    document.querySelectorAll("[data-thumb]").forEach((thumb) => {
      thumb.addEventListener("click", () => {
        document.querySelectorAll("[data-thumb]").forEach((item) => item.classList.remove("active"));
        thumb.classList.add("active");
        main.innerHTML = thumb.innerHTML;
      });
    });
    main.addEventListener("click", () => main.classList.toggle("is-lightbox"));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") main.classList.remove("is-lightbox");
    });
  }

  function enableFilterDropdowns() {
    document.querySelectorAll(".filter-dropdown").forEach((dropdown) => {
      const button = dropdown.querySelector(".filter-btn");
      if (!button) return;
      button.addEventListener("click", () => {
        const isOpen = dropdown.classList.toggle("is-open");
        button.setAttribute("aria-expanded", String(isOpen));
      });
    });
  }

  function fillSelect(select, values) {
    if (!select || select.dataset.enhanced) return;
    select.innerHTML = values.map((item) => `<option value="${item.value}">${item.label}</option>`).join("");
    select.dataset.enhanced = "true";
  }

  function enhancePropertiesFilters() {
    const filters = document.querySelector(".filters");
    if (!filters) return;
    const selects = filters.querySelectorAll("select");
    fillSelect(selects[0], [
      { value: "", label: "All Cities" },
      { value: "karachi", label: "Karachi" },
      { value: "lahore", label: "Lahore" },
      { value: "islamabad", label: "Islamabad" },
      { value: "hyderabad", label: "Hyderabad" },
      { value: "multan", label: "Multan" },
      { value: "faisalabad", label: "Faisalabad" }
    ]);
    fillSelect(selects[1], [
      { value: "", label: "All Types" },
      { value: "house", label: "House" },
      { value: "apartment", label: "Apartment" },
      { value: "villa", label: "Villa" },
      { value: "bungalow", label: "Bungalow" },
      { value: "commercial", label: "Commercial" },
      { value: "office", label: "Office" },
      { value: "shop", label: "Shop" },
      { value: "farm house", label: "Farm House" },
      { value: "land", label: "Land" }
    ]);
    fillSelect(selects[2], [
      { value: "", label: "Any Purpose" },
      { value: "buy", label: "Buy" },
      { value: "rent", label: "Rent" },
      { value: "lease", label: "Lease" }
    ]);

    const button = filters.querySelector(".btn");
    if (button) {
      button.addEventListener("click", () => {
        const city = selects[0].value;
        const type = selects[1].value;
        const cards = document.querySelectorAll(".list-card");
        let visible = 0;
        cards.forEach((card) => {
          const text = card.textContent.toLowerCase();
          const match = (!city || text.includes(city)) && (!type || text.includes(type) || (type === "commercial" && text.includes("plaza")));
          card.hidden = !match;
          if (match) visible += 1;
        });
        toast(`${visible} matching properties found.`, visible ? "success" : "warning");
      });
    }
  }

  function enhancePropertyCards() {
    document.querySelectorAll(".list-card").forEach((card, index) => {
      const property = demoProperties[index];
      if (!property || card.dataset.enhanced) return;
      const link = card.querySelector("a.btn");
      if (link) link.href = property.url;
      const actions = document.createElement("div");
      actions.className = "card-actions";
      actions.innerHTML = `
        <button class="btn small light" type="button" data-favorite-id="${property.id}">Add to Favorites</button>
      `;
      card.appendChild(actions);
      card.dataset.enhanced = "true";
    });
  }

  function renderComparePage() {
    const container = document.getElementById("compareList");
    if (!container) return;
    const compare = readStore(STORAGE.compare).map(normalizeProperty).filter(Boolean);
    if (!compare.length) {
      container.innerHTML = '<div class="panel full"><h2>No Properties Selected</h2><p class="muted">Add up to 3 properties from the listings to compare them here.</p><a class="btn" href="properties.html">Browse Properties</a></div>';
      return;
    }
    container.innerHTML = compare.map((property) => `
      <article class="property-card">
        <div class="property-img"><img src="${property.image}" alt="${property.name}" loading="lazy"></div>
        <div class="property-body">
          <h3>${property.name}</h3>
          <p class="muted">${property.location}</p>
          <p class="price">${property.price}</p>
          <div class="facts">
            <span>${property.area || "Area N/A"}</span>
            <span>${property.bedrooms || 0} Beds</span>
            <span>${property.bathrooms || 0} Baths</span>
          </div>
          <div class="card-actions">
            <a class="btn small light" href="${property.url}">Details</a>
            <button class="btn small light" type="button" data-compare-id="${property.id}">Remove Compare</button>
          </div>
        </div>
      </article>
    `).join("");
  }

  function searchProperty() {
    const input = document.getElementById("searchInput");
    const query = (input ? input.value : "").toLowerCase().trim();
    if (!query) {
      toast("Please enter a city, type, purpose, price, or keyword.", "warning");
      return;
    }
    const found = demoProperties.find((item) => {
      return [item.name, item.type, item.purpose, item.city, item.location, item.price, item.area].join(" ").toLowerCase().includes(query);
    });
    if (found) {
      window.location.href = found.url;
    } else {
      toast("No property matched your search.", "error");
    }
  }

  function enableForms() {
    document.addEventListener("submit", (event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement) || form.id === "loginForm" || form.id === "registerForm") return;
      const invalid = Array.from(form.querySelectorAll("[required]")).find((field) => !field.value.trim());
      event.preventDefault();
      if (invalid) {
        invalid.focus();
        toast("Please fill in all required fields.", "error");
        return;
      }
      form.reset();
      toast("Submitted successfully.", "success");
    });
  }

  function enableGlobalClicks() {
    document.addEventListener("click", (event) => {
      const favorite = event.target.closest("[data-favorite-id]");
      if (favorite) {
        const property = demoProperties.find((item) => item.id === Number(favorite.dataset.favoriteId));
        toggleFavorite(property);
      }
      const compare = event.target.closest("[data-compare-id]");
      if (compare) {
        const property = demoProperties.find((item) => item.id === Number(compare.dataset.compareId));
        toggleCompare(property);
      }
    });

    const logout = document.getElementById("logoutBtn");
    if (logout) {
      logout.addEventListener("click", (event) => {
        event.preventDefault();
        localStorage.removeItem(STORAGE.user);
        toast("You have been logged out.", "info");
        window.setTimeout(() => (window.location.href = "login.html"), 400);
      });
    }
  }

  function enableLoader() {
    document.body.insertAdjacentHTML("afterbegin", '<div class="page-loader" aria-hidden="true"></div>');
    window.setTimeout(() => document.querySelector(".page-loader")?.remove(), 450);
  }

  function init() {
    normalizeHeader();
    insertFooter();
    enableLoader();
    enableGallery();
    enableFilterDropdowns();
    enableContactModal();
    enableForms();
    enableGlobalClicks();
    enhancePropertiesFilters();
    enhancePropertyCards();
    renderComparePage();
    addRecentlyViewed();
    refreshStateButtons();
    updateFavoriteCounters();
  }

  window.searchProperty = searchProperty;
  window.addFavorite = function () {
    toggleFavorite(getPropertyFromPage());
  };
  window.EstateHub = { toast, toggleFavorite, toggleCompare, normalizeProperty };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
