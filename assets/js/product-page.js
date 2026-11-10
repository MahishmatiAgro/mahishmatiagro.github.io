/* Renders /view-product/ from window.PRODUCTS (view-product/products.js).
   Runs BEFORE main.js: it fills the page in English and adds the Hindi text to I18N_HI,
   so main.js's language switch works unchanged. */
(function () {
    "use strict";
    var BASE = "https://mahishmatiagro.github.io/";
    var code = (new URLSearchParams(location.search).get("product") || "").toUpperCase();
    var p = window.PRODUCTS[code];
    if (!p) {
        // Unknown or missing code: show the product list on the home page.
        location.replace("/#products");
        return;
    }
    var en = p.en;
    var hi = p.hi;
    var HI = window.I18N_HI;

    // Set English text on an element and register its Hindi text under a page key.
    function put(el, key, enText, hiText) {
        el.textContent = enText;
        el.dataset.i18n = key;
        if (hiText != null) HI[key] = hiText;
        return el;
    }
    function make(tag, parent, key, enText, hiText) {
        var el = document.createElement(tag);
        parent.appendChild(put(el, key, enText, hiText));
        return el;
    }
    function $(id) {
        return document.getElementById(id);
    }

    var url = BASE + "view-product/?product=" + code;
    document.title = en.name + " - Mahishmati Agro | Mandla, MP";
    document.querySelector('meta[name="description"]').content = en.meta;
    document.querySelector('link[rel="canonical"]').href = url;
    document.querySelector('meta[property="og:title"]').content = en.name + " - Mahishmati Agro";
    document.querySelector('meta[property="og:description"]').content = en.meta;
    document.querySelector('meta[property="og:url"]').content = url;
    document.querySelector('meta[property="og:image"]').content = BASE + p.img.slice(1);

    put($("vp-crumb"), "vp.name", en.name, hi.name);
    put($("vp-name"), "vp.name", en.name, hi.name);
    $("vp-name-hi").textContent = hi.name;
    $("vp-code").textContent = code;
    put($("vp-lead"), "vp.lead", en.lead, hi.lead);
    put($("vp-tag"), "vp.tag", en.tag, hi.tag);
    $("vp-img").src = p.img;
    $("vp-img").alt = en.alt;

    // Price box: selling price + struck-out MRP, or MRP only, or "ask on WhatsApp".
    var priceRow = $("vp-price-row");
    if (p.price && p.price.now) {
        make("span", priceRow, "vp.pnow", "₹" + p.price.now).className = "pd-price-now";
        if (p.price.unit) {
            make("span", priceRow, "vp.unit", "/ " + p.price.unit, "/ किलो").className =
                "pd-price-unit";
        }
        if (p.price.mrp) {
            var mrp = document.createElement("span");
            mrp.className = "pd-price-mrp";
            priceRow.appendChild(mrp);
            make("span", mrp, "vp.mrp", "MRP", "एमआरपी");
            mrp.appendChild(document.createTextNode(" "));
            mrp.appendChild(document.createElement("s")).textContent = "₹" + p.price.mrp;
        }
        if (en.offer) {
            make("span", priceRow, "vp.offer", en.offer, hi.offer).className = "pd-offer";
        }
    } else if (p.price) {
        make("span", priceRow, "vp.mrp", "MRP", "एमआरपी").className = "pd-price-mrp";
        priceRow.appendChild(document.createTextNode(" "));
        var now = document.createElement("span");
        now.className = "pd-price-now";
        now.textContent = "₹" + p.price.mrp;
        priceRow.appendChild(now);
    } else {
        $("vp-price").classList.add("pd-price-ask");
    }
    put($("vp-price-note"), "vp.pnote", en.priceNote, hi.priceNote);

    en.badges.forEach(function (b, i) {
        make("li", $("vp-badges"), "vp.b" + i, b, hi.badges[i]);
    });
    en.about.forEach(function (a, i) {
        var li = document.createElement("li");
        $("vp-about").appendChild(li);
        make("strong", li, "vp.a" + i + "t", a[0], hi.about[i][0]);
        li.appendChild(document.createTextNode(" "));
        make("span", li, "vp.a" + i + "d", a[1], hi.about[i][1]);
    });

    function table(tbody, rows, hiRows, prefix) {
        rows.forEach(function (r, i) {
            var tr = document.createElement("tr");
            tbody.appendChild(tr);
            make("th", tr, prefix + i, r[0], hiRows[i][0]);
            make("td", tr, prefix + i + "v", r[1], hiRows[i][1]);
        });
    }
    if (en.nutrition) {
        put($("vp-nut-sub"), "vp.nsub", en.nutrition.sub, hi.nutrition.sub);
        table($("vp-nut"), en.nutrition.rows, hi.nutrition.rows, "vp.n");
    } else {
        $("vp-nut-box").hidden = true;
        $("vp-about-box").parentNode.classList.add("pd-one");
    }
    table($("vp-details"), en.details, hi.details, "vp.d");
    put($("vp-use-title"), "vp.useT", en.useTitle, hi.useTitle);
    en.use.forEach(function (u, i) {
        make("li", $("vp-use"), "vp.u" + i, u, hi.use[i]);
    });

    // Order buttons send an order message; the rest send an enquiry about this product.
    document.querySelectorAll("[data-wa]").forEach(function (a) {
        a.dataset.wa = a.dataset.waKind === "order" ? p.wa + "Order" : p.wa;
    });

    // Structured data for search engines.
    var ld = {
        "@context": "https://schema.org",
        "@type": "Product",
        sku: code,
        name: en.name,
        alternateName: hi.name,
        image: BASE + p.img.slice(1),
        description: en.lead,
        brand: { "@type": "Brand", name: "Mahishmati Agro" },
    };
    if (p.price) {
        ld.offers = {
            "@type": "Offer",
            priceCurrency: "INR",
            price: String(p.price.now || p.price.mrp).replace(/,/g, ""),
            availability: "https://schema.org/InStock",
            url: url,
            seller: { "@type": "Organization", name: "Mahishmati Agro" },
        };
    }
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(ld);
    document.head.appendChild(s);
})();
