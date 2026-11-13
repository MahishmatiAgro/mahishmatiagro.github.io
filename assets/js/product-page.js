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
    document.querySelector('meta[name="keywords"]').content = en.keywords;
    document.querySelector('meta[name="twitter:title"]').content = en.name + " - Mahishmati Agro";
    document.querySelector('meta[name="twitter:description"]').content = en.meta;
    document.querySelector('meta[name="twitter:image"]').content = BASE + p.img.slice(1);
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

    // 3D jar with the current label (view-product/jar/) in place of the photo. If 3D
    // cannot start (no WebGL), the viewer sends "jar3d-error" and the photo comes back.
    if (p.jar3d) {
        var frame = $("vp-3d-frame");
        frame.title = en.name + " jar in 3D";
        frame.src = p.jar3d;
        frame.hidden = false;
        $("vp-img").hidden = true;
        window.addEventListener("message", function (e) {
            if (e.origin === location.origin && e.data === "jar3d-error") {
                frame.hidden = true;
                $("vp-img").hidden = false;
            }
        });
    }

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

    // Where the health information comes from, with a no-claim note.
    if (p.source) {
        var src = $("vp-source");
        make("span", src, "vp.src", p.source.en, p.source.hi);
        var list = document.createElement("ol");
        list.className = "pd-sources";
        p.source.links.forEach(function (l, i) {
            var li = list.appendChild(document.createElement("li"));
            make("strong", li, "vp.srcT" + i, l.topic.en + ":", l.topic.hi + ":");
            li.appendChild(document.createTextNode(" "));
            var link = document.createElement("a");
            link.href = l.url;
            link.target = "_blank";
            link.rel = "noopener";
            link.textContent = l.cite;
            li.appendChild(link);
        });
        src.appendChild(list);
        make("span", src, "vp.srcEnd", p.source.enEnd, p.source.hiEnd);
        src.hidden = false;
    }

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
        manufacturer: { "@id": BASE + "#business" },
        category: "Mushrooms",
        countryOfOrigin: "IN",
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
    var crumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE },
            { "@type": "ListItem", position: 2, name: "Products", item: BASE + "#products" },
            { "@type": "ListItem", position: 3, name: en.name, item: url },
        ],
    };
    s.textContent = JSON.stringify([ld, crumbs]);
    document.head.appendChild(s);
})();
