(function () {
  "use strict";

  var WA_NUMBER = "917223047175";
  var STORAGE_KEY = "ma-lang";
  var root = document.documentElement;
  root.classList.add("js");

  var SUPPORTED = ["en", "hi"];

  // Use the visitor's saved choice; otherwise the first supported language
  // in their browser's preference list; otherwise English.
  function browserLang() {
    var prefs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || ""];
    for (var i = 0; i < prefs.length; i++) {
      var code = String(prefs[i]).toLowerCase().split("-")[0];
      if (SUPPORTED.indexOf(code) !== -1) return code;
    }
    return "en";
  }

  var lang = null;
  try { lang = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  if (SUPPORTED.indexOf(lang) === -1) lang = browserLang();

  /* ---------- Google Analytics events ---------- */
  function track(name, params) {
    if (typeof window.gtag === "function") window.gtag("event", name, params || {});
  }
  function sectionOf(el) {
    var s = el.closest("section[id], header, footer, .topbar, .wa-float");
    if (!s) return "page";
    return s.id || s.className.split(" ")[0] || s.tagName.toLowerCase();
  }
  // One listener for every contact link on the page.
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a[href]");
    if (!a) return;
    var href = a.getAttribute("href");
    var where = { link_location: sectionOf(a), site_language: lang };
    if (a.dataset.wa) {
      where.enquiry_type = a.dataset.wa;
      track("whatsapp_click", where);
    } else if (href.indexOf("tel:") === 0) {
      track("phone_call_click", where);
    } else if (href.indexOf("mailto:") === 0) {
      track("email_click", where);
    } else if (href.indexOf("instagram.com") !== -1) {
      track("instagram_click", where);
    } else if (/maps\.app\.goo\.gl|maps\.google\.com|google\.com\/maps/.test(href)) {
      track("directions_click", where);
    }
  });

  /* ---------- i18n ---------- */
  // English is the markup itself; cache it once so we can switch back.
  var textEls = document.querySelectorAll("[data-i18n]");
  var htmlEls = document.querySelectorAll("[data-i18n-html]");
  var phEls = document.querySelectorAll("[data-i18n-ph]");
  textEls.forEach(function (el) { el._en = el.textContent; });
  htmlEls.forEach(function (el) { el._en = el.innerHTML; });
  phEls.forEach(function (el) { el._en = el.getAttribute("placeholder"); });

  function t(el, key) {
    return lang === "hi" && window.I18N_HI[key] != null ? window.I18N_HI[key] : el._en;
  }

  function waUrl(text) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
  }

  function applyLang() {
    root.lang = lang;
    textEls.forEach(function (el) { el.textContent = t(el, el.dataset.i18n); });
    htmlEls.forEach(function (el) { el.innerHTML = t(el, el.dataset.i18nHtml); });
    phEls.forEach(function (el) { el.setAttribute("placeholder", t(el, el.dataset.i18nPh)); });
    document.querySelectorAll("[data-wa]").forEach(function (a) {
      a.href = waUrl(window.WA_MSG[lang][a.dataset.wa] || window.WA_MSG[lang].general);
    });
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    renderRecipes();
  }

  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.addEventListener("click", function () {
      lang = b.dataset.lang;
      track("language_switch", { site_language: lang });
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
      applyLang();
    });
  });

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  function closeNav() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeNav); });

  /* ---------- Recipes ---------- */
  var grid = document.getElementById("recipe-grid");
  var dialog = document.getElementById("recipe-dialog");
  var activeFilter = "all";

  function renderRecipes() {
    grid.innerHTML = "";
    window.RECIPES.forEach(function (r, i) {
      var c = r[lang];
      var card = document.createElement("button");
      card.type = "button";
      card.className = "recipe-card";
      card.dataset.cat = r.cat;
      card.hidden = activeFilter !== "all" && activeFilter !== r.cat;
      card.innerHTML =
        '<div class="rc-img"><img loading="lazy" alt=""></div>' +
        '<div class="rc-body"><span class="rc-num"></span><h3></h3><p class="rc-sub"></p></div>';
      var img = card.querySelector("img");
      img.src = "assets/img/dishes/" + r.id + ".png";
      img.alt = c.title;
      card.querySelector(".rc-num").textContent = String(i + 1).padStart(2, "0");
      card.querySelector("h3").textContent = c.title;
      card.querySelector(".rc-sub").textContent = c.sub;
      card.addEventListener("click", function () { openRecipe(r, i); });
      grid.appendChild(card);
    });
  }

  function openRecipe(r, i) {
    track("view_recipe", { recipe_id: r.id, site_language: lang });
    var c = r[lang];
    document.getElementById("rd-img").src = "assets/img/dishes/" + r.id + ".png";
    document.getElementById("rd-img").alt = c.title;
    document.getElementById("rd-num").textContent = String(i + 1).padStart(2, "0");
    document.getElementById("rd-title").textContent = c.title;
    document.getElementById("rd-ing").textContent = c.ing;
    document.getElementById("rd-method").textContent = c.method;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) dialog.close();
  });

  document.querySelectorAll(".chip[data-filter]").forEach(function (chip) {
    chip.addEventListener("click", function () {
      activeFilter = chip.dataset.filter;
      document.querySelectorAll(".chip[data-filter]").forEach(function (c) {
        var on = c === chip;
        c.classList.toggle("is-active", on);
        c.setAttribute("aria-selected", String(on));
      });
      grid.querySelectorAll(".recipe-card").forEach(function (card) {
        card.hidden = activeFilter !== "all" && activeFilter !== card.dataset.cat;
      });
    });
  });

  /* ---------- Enquiry form -> WhatsApp ---------- */
  var form = document.getElementById("enquiry-form");
  var formError = document.getElementById("form-error");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = new FormData(form);
    var name = (d.get("name") || "").trim();
    if (!name) {
      formError.hidden = false;
      form.elements.name.focus();
      return;
    }
    formError.hidden = true;
    var L = window.WA_MSG[lang].form;
    var productSel = form.elements.product;
    var lines = [L.head, L.name + ": " + name];
    var fields = [["phone", L.phone], ["qty", L.qty], ["city", L.city], ["msg", L.msg]];
    lines.push(L.product + ": " + productSel.options[productSel.selectedIndex].text);
    fields.forEach(function (f) {
      var v = (d.get(f[0]) || "").trim();
      if (v) lines.push(f[1] + ": " + v);
    });
    track("generate_lead", { lead_source: "enquiry_form", product: productSel.value, site_language: lang });
    window.open(waUrl(lines.join("\n")), "_blank", "noopener");
  });

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -60px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  applyLang();
})();
