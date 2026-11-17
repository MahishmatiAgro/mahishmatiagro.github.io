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

    // Image-only gallery with keyboard navigation and accessible view names.
    if (p.gallery && p.gallery.length > 1) {
        var gallery = $("vp-gallery");
        var thumbs = $("vp-thumbs");
        var display = $("vp-display");
        var photo = $("vp-img");
        var views = p.gallery;
        var buttons = [];
        gallery.classList.add("has-gallery");
        thumbs.hidden = false;
        display.setAttribute("role", "tabpanel");
        display.tabIndex = 0;
        var mobileGallery = matchMedia("(max-width: 540px)");
        function setGalleryOrientation() {
            thumbs.setAttribute(
                "aria-orientation",
                mobileGallery.matches ? "horizontal" : "vertical"
            );
        }
        mobileGallery.addEventListener("change", setGalleryOrientation);
        setGalleryOrientation();
        function selectView(index) {
            var view = views[index];
            buttons.forEach(function (button, i) {
                button.setAttribute("aria-selected", String(i === index));
                button.tabIndex = i === index ? 0 : -1;
            });
            display.setAttribute("aria-labelledby", buttons[index].id);
            photo.src = view.img;
            photo.alt = en.alt + " — " + view.en;
        }
        views.forEach(function (view, index) {
            var button = document.createElement("button");
            button.type = "button";
            button.id = "vp-view-" + index;
            button.className = "pd-thumb";
            button.setAttribute("role", "tab");
            button.setAttribute("aria-controls", "vp-display");
            var thumb = document.createElement("img");
            thumb.src = view.img;
            thumb.alt = "";
            thumb.width = thumb.height = 64;
            button.appendChild(thumb);
            make("span", button, "vp.view" + index, view.en, view.hi).className = "sr-only";
            button.addEventListener("click", function () {
                selectView(index);
            });
            button.addEventListener("keydown", function (event) {
                var next = index;
                if (["ArrowRight", "ArrowDown"].includes(event.key))
                    next = (index + 1) % views.length;
                else if (["ArrowLeft", "ArrowUp"].includes(event.key))
                    next = (index + views.length - 1) % views.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = views.length - 1;
                else return;
                event.preventDefault();
                buttons[next].focus();
                selectView(next);
            });
            buttons.push(button);
            thumbs.appendChild(button);
        });
        selectView(0);
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
            make("th", tr, prefix + i, r[0], hiRows[i][0]).scope = "row";
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

    // The powder page has a short overview and a separate, clearly ordered reading flow.
    if (p.layout === "powder") {
        document.body.classList.add("pd-powder");
        var hero = document.querySelector(".pd-hero");
        var aboutSection = $("vp-about-box").closest("section");
        var detailsSection = $("vp-details").closest("section");
        var detailsBox = $("vp-details").closest(".pd-two").firstElementChild;
        var useBox = $("vp-use").parentElement;
        var nutritionBox = $("vp-nut-box");
        var aboutBox = $("vp-about-box");

        var jump = document.createElement("nav");
        jump.className = "container pd-jump";
        jump.setAttribute("aria-label", "Product information");
        [
            ["overview", "Why choose it", "क्यों चुनें"],
            ["how-to-use", "How to use", "कैसे इस्तेमाल करें"],
            ["nutrition", "Nutrition", "पोषण जानकारी"],
            ["pack-details", "Pack details", "पैक विवरण"],
        ].forEach(function (item, i) {
            make("a", jump, "vp.jump" + i, item[1], item[2]).href = "#" + item[0];
        });
        hero.after(jump);
        aboutSection.id = "overview";
        aboutSection.className = "section pd-overview";
        aboutBox.parentElement.classList.add("pd-one");
        put(
            aboutBox.querySelector("h2"),
            "vp.overviewTitle",
            "Simple ingredients. Everyday possibilities.",
            "सरल सामग्री। रोज़ के खाने में नया स्वाद।"
        );

        var useSection = document.createElement("section");
        useSection.id = "how-to-use";
        useSection.className = "section section-tint pd-how";
        var useContainer = document.createElement("div");
        useContainer.className = "container";
        useSection.appendChild(useContainer);
        useContainer.appendChild(useBox);
        aboutSection.after(useSection);
        useBox.querySelector("a.btn-wa").remove();
        useBox.querySelector(".pd-note").remove();
        var storage = make(
            "p",
            useBox,
            "vp.storage",
            "Keep it fresh: store in a cool, dry place, away from moisture. Keep the jar airtight after opening.",
            "ताज़गी बनाए रखें: ठंडी, सूखी जगह पर नमी से बचाकर रखें। खोलने के बाद जार अच्छी तरह बंद रखें।"
        );
        storage.className = "pd-storage";

        var nutritionSection = document.createElement("section");
        nutritionSection.id = "nutrition";
        nutritionSection.className = "section pd-nutrition";
        var nutritionContainer = document.createElement("div");
        nutritionContainer.className = "container pd-two";
        nutritionSection.appendChild(nutritionContainer);
        var nutritionIntro = document.createElement("div");
        nutritionIntro.className = "pd-nutrition-intro";
        nutritionContainer.appendChild(nutritionIntro);
        make(
            "p",
            nutritionIntro,
            "vp.nutEyebrow",
            "Know your food",
            "अपने भोजन को जानें"
        ).className = "eyebrow";
        make("h2", nutritionIntro, "vp.nutTitle", "What is in the jar?", "जार में क्या है?");
        make(
            "p",
            nutritionIntro,
            "vp.nutCopy",
            "A clear view of the nutrition declared on our current label. Compare quantities on the same 100 g basis; the amount in your meal depends on how much powder you use.",
            "हमारे वर्तमान लेबल पर दी गई पोषण जानकारी। तुलना प्रति 100 ग्राम के आधार पर करें; आपके भोजन में मात्रा इस्तेमाल किए गए पाउडर पर निर्भर करेगी।"
        );
        var stats = document.createElement("div");
        stats.className = "pd-nut-stats";
        nutritionIntro.appendChild(stats);
        [
            ["19.0 g", "Protein", "प्रोटीन"],
            ["39.1 g", "Dietary fibre", "डाइटरी फाइबर"],
        ].forEach(function (item, i) {
            var stat = document.createElement("div");
            stats.appendChild(stat);
            make("strong", stat, "vp.stat" + i, item[0]);
            make("span", stat, "vp.statLabel" + i, item[1], item[2]);
        });
        make(
            "p",
            nutritionIntro,
            "vp.statBasis",
            "Approximate values per 100 g · not per serving",
            "प्रति 100 ग्राम अनुमानित मात्रा · एक सर्विंग की मात्रा नहीं"
        ).className = "pd-note";
        nutritionContainer.appendChild(nutritionBox);
        useSection.after(nutritionSection);

        detailsSection.id = "pack-details";
        detailsSection.className = "section section-tint pd-pack";
        var detailsContainer = detailsBox.parentElement;
        detailsContainer.classList.add("pd-one");
        var disclosure = document.createElement("details");
        disclosure.className = "pd-pack-disclosure";
        make(
            "summary",
            disclosure,
            "vp.packSummary",
            "Ingredients, batch & pack details",
            "सामग्री, बैच और पैक विवरण"
        );
        detailsBox.querySelector("h2").remove();
        detailsBox.before(disclosure);
        disclosure.appendChild(detailsBox);

        var contact = document.createElement("div");
        contact.className = "pd-bottom-cta";
        detailsContainer.appendChild(contact);
        make(
            "h2",
            contact,
            "vp.contactTitle",
            "Bring it to your kitchen.",
            "अपनी रसोई में शामिल करें।"
        );
        make(
            "p",
            contact,
            "vp.contactCopy",
            "Tell us how many jars you need and your location. We will confirm availability, price and delivery or pickup. Bulk enquiries welcome.",
            "जार की संख्या और अपना पता बताएं। हम उपलब्धता, दाम और डिलीवरी या पिकअप की जानकारी देंगे। थोक ऑर्डर के लिए भी संपर्क करें।"
        );
        var order = make("a", contact, "vp.order", "Order on WhatsApp", "WhatsApp पर ऑर्डर करें");
        order.className = "btn btn-wa";
        order.href = "https://wa.me/917223047175";
        order.dataset.waKind = "order";
        order.dataset.wa = "powderOrder";
        order.target = "_blank";
        order.rel = "noopener";
        var brochure = make(
            "a",
            contact,
            "brochure.download",
            "Download product brochure (PDF)",
            "उत्पाद ब्रोशर डाउनलोड करें (PDF)"
        );
        brochure.className = "pd-brochure-link";
        brochure.href = "/assets/pdf/mahishmati-agro-product-brochure.pdf";
        brochure.download = "mahishmati-agro-product-brochure.pdf";
        document.querySelector('.pd-actions [data-wa]:not([data-wa-kind="order"])').remove();
    }

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
