/* Product data for /view-product/?product=P0001 (fresh), P0002 (dried), P0003 (powder).
   To add a product: add one more entry here with the next code. Nothing else changes.
   Every value comes from the pack labels or the home page. Do not invent facts:
   use null when something is not known yet (e.g. price: null shows "ask on WhatsApp").
   price: { now: selling price, mrp: MRP (struck out when now is lower), unit: "kg" or null }
   en.offer / hi.offer: small badge next to an offer price, e.g. "10% off".
   source: optional references shown under "About this item" (links: [{topic: {en, hi}, url, cite}], en/hi text).
   en = English, hi = Hindi (same order and number of items in each list).
   keywords: comma-separated search words for this product (English and Hindi).
   gallery: optional photo list [{img, en, hi}], displayed in order.
   Image paths are from the site root. */
window.PRODUCTS = {
    P0001: {
        img: "/assets/img/products/fresh-oyster-mushroom.jpg",
        wa: "fresh",
        price: { now: null, mrp: "35" },
        en: {
            name: "Fresh Oyster Mushroom",
            alt: "Mahishmati Agro fresh oyster mushrooms in a punnet",
            tag: "Organic & fresh",
            lead: "Soft, tender oyster mushrooms with a mild taste, freshly picked from our farm in Maharajpur, Mandla. Great in curries, pulao, pakoda, soups and stir-fries.",
            priceNote: "Incl. of all taxes · Net weight 125 g pack",
            badges: ["Organic", "Freshly picked", "Hand harvested", "Retail & bulk"],
            about: [
                [
                    "Fresh from the farm.",
                    "Picked by hand at the right time and packed soon after, so it reaches you soft, white and fresh.",
                ],
                ["Organic.", "Grown on straw in clean, controlled rooms, the natural way."],
                [
                    "Mild and tender.",
                    "A soft texture and gentle taste that goes well with Indian spices, vegetables, dal and rice.",
                ],
                [
                    "Light and healthy.",
                    "Naturally low in fat and calories, with plant protein and fibre.",
                ],
                [
                    "For home and business.",
                    "125 g retail packs, and bulk supply for hotels, caterers and shops.",
                ],
            ],
            nutrition: {
                sub: "Approximate values per 100 g raw",
                rows: [
                    ["Energy", "33 kcal"],
                    ["Protein", "3.3 g"],
                    ["Carbohydrate", "6.1 g"],
                    ["Dietary fibre", "2.3 g"],
                    ["Fat", "0.4 g"],
                ],
            },
            details: [
                ["Product", "Organic fresh oyster mushroom"],
                ["Net weight", "125 g pack (bulk on request)"],
                ["Price", "MRP ₹35 per 125 g pack, incl. of all taxes"],
                ["Best before", "4 days from packing"],
                ["Storage", "Keep refrigerated at 8–10°C. Wash just before cooking."],
                ["FSSAI Lic. No.", "21426250001720"],
                ["Grown & packed by", "Mahishmati Agro, Maharajpur, Mandla, Madhya Pradesh 481665"],
                ["Packed on", "Printed on the pack"],
            ],
            useTitle: "Cooking tips",
            use: [
                "Clean the mushrooms and tear or cut them as needed.",
                "Start with a light fry on high heat.",
                "Add to sabzi, pulao, soups, pakoda or stir-fries, and cook through.",
                "Keep chilli and spices to your taste.",
            ],
            keywords:
                "fresh oyster mushroom, organic oyster mushroom, buy fresh mushroom, mushroom Mandla, mushroom Maharajpur, mushroom 125 g pack, ताज़ा ऑयस्टर मशरूम, ताज़ा मशरूम मंडला, Mahishmati Agro",
            meta: "Mahishmati Agro organic fresh oyster mushroom, 125 g pack, MRP ₹35. Freshly picked in Maharajpur, Mandla. Order on WhatsApp +91 72230 47175.",
        },
        hi: {
            name: "ताज़ा ऑयस्टर मशरूम",
            tag: "जैविक और ताज़ा",
            lead: "हल्के स्वाद वाला नरम, मुलायम ऑयस्टर मशरूम, महाराजपुर, मंडला के हमारे फार्म से ताज़ा तोड़ा हुआ। सब्जी, पुलाव, पकोड़ा, सूप और फ्राई के लिए बढ़िया।",
            priceNote: "सभी करों सहित · 125 ग्राम का पैक",
            badges: ["जैविक", "ताज़ा तोड़ा", "हाथ से तुड़ाई", "फुटकर और थोक"],
            about: [
                [
                    "सीधे फार्म से ताज़ा।",
                    "सही समय पर हाथ से तोड़कर जल्दी पैक किया जाता है, ताकि आप तक नरम, सफेद और ताज़ा पहुंचे।",
                ],
                ["जैविक।", "साफ, नियंत्रित कमरों में भूसे पर प्राकृतिक तरीके से उगाया गया।"],
                [
                    "हल्का और मुलायम।",
                    "नरम बनावट और हल्का स्वाद, जो भारतीय मसालों, सब्जियों, दाल और चावल के साथ अच्छा लगता है।",
                ],
                [
                    "हल्का और सेहतमंद।",
                    "प्राकृतिक रूप से कम वसा और कम कैलोरी, पौधों से मिलने वाले प्रोटीन और फाइबर के साथ।",
                ],
                [
                    "घर और व्यापार के लिए।",
                    "125 ग्राम के पैक, और होटल, कैटरर्स व दुकानों के लिए थोक सप्लाई।",
                ],
            ],
            nutrition: {
                sub: "प्रति 100 ग्राम कच्चे मशरूम में अनुमानित मात्रा",
                rows: [
                    ["ऊर्जा", "33 kcal"],
                    ["प्रोटीन", "3.3 ग्राम"],
                    ["कार्बोहाइड्रेट", "6.1 ग्राम"],
                    ["डाइटरी फाइबर", "2.3 ग्राम"],
                    ["वसा", "0.4 ग्राम"],
                ],
            },
            details: [
                ["उत्पाद", "जैविक ताज़ा ऑयस्टर मशरूम"],
                ["शुद्ध वज़न", "125 ग्राम का पैक (थोक भी उपलब्ध)"],
                ["दाम", "एमआरपी ₹35 प्रति 125 ग्राम पैक, सभी करों सहित"],
                ["उपयोग की अवधि", "पैकिंग से 4 दिन तक"],
                ["भंडारण", "8–10°C पर फ्रिज में रखें। पकाने से ठीक पहले धोएं।"],
                ["FSSAI लाइसेंस नं.", "21426250001720"],
                ["उगाया और पैक किया", "महिष्मति एग्रो, महाराजपुर, मंडला, मध्य प्रदेश 481665"],
                ["पैकिंग तारीख", "पैक पर छपी है"],
            ],
            useTitle: "पकाने की छोटी बातें",
            use: [
                "मशरूम साफ करके जरूरत के अनुसार तोड़ें या काटें।",
                "तेज आंच पर हल्का भूनने से शुरुआत करें।",
                "सब्जी, पुलाव, सूप, पकोड़ा या फ्राई में डालें और अच्छी तरह पकाएं।",
                "अपनी पसंद के अनुसार मिर्च और मसालों की मात्रा रखें।",
            ],
        },
    },

    P0002: {
        img: "/assets/img/products/dried-oyster-mushroom.jpg",
        wa: "dried",
        price: { now: "2,000", mrp: null, unit: "kg" },
        en: {
            name: "Dried Oyster Mushroom",
            alt: "Mahishmati Agro dried oyster mushrooms in a resealable pouch",
            tag: "Long shelf life",
            lead: "Carefully dried oyster mushrooms from our own farm that keep for months. Soak in warm water for 20–30 minutes and cook like fresh.",
            priceNote: "Price per kg, incl. of all taxes · ask on WhatsApp for smaller packs",
            badges: ["Organic", "Dried on our farm", "Keeps for months", "Light to carry"],
            about: [
                [
                    "From our own mushrooms.",
                    "Made from oyster mushrooms we grow and dry ourselves in Maharajpur, Mandla.",
                ],
                [
                    "Keeps for months.",
                    "Stays good for months when stored airtight, away from moisture and sunlight.",
                ],
                [
                    "Cooks like fresh.",
                    "Soak in warm water for 20–30 minutes, drain, cut and cook as you would fresh mushrooms.",
                ],
                [
                    "Light to store and carry.",
                    "Handy for the kitchen cupboard, travel, and places where fresh mushrooms are hard to get.",
                ],
                ["For many dishes.", "For sabzi, pulao, soups and gravies."],
            ],
            nutrition: null,
            details: [
                ["Product", "Dried oyster mushroom"],
                ["Price", "₹2,000 per kg, incl. of all taxes"],
                ["Pack size", "Ask on WhatsApp"],
                ["Storage", "Store airtight in a cool, dry place, away from moisture."],
                ["FSSAI Lic. No.", "21426250001720"],
                ["Grown & packed by", "Mahishmati Agro, Maharajpur, Mandla, Madhya Pradesh 481665"],
                ["Packed on", "Printed on the pack"],
            ],
            useTitle: "Using dried oyster mushroom",
            use: [
                "Clean the dried mushrooms and soak them in warm water for about 20–30 minutes.",
                "When soft, drain the water and cut them as needed.",
                "Cook well in sabzi, pulao, soups and other dishes.",
            ],
            keywords:
                "dried oyster mushroom, dry mushroom, dried mushroom price per kg, organic dried mushroom, mushroom Mandla, सूखा ऑयस्टर मशरूम, सूखा मशरूम, Mahishmati Agro",
            meta: "Mahishmati Agro dried oyster mushroom from our farm in Mandla. ₹2,000 per kg. Keeps for months; soak 20–30 minutes and cook like fresh. Order on WhatsApp +91 72230 47175.",
        },
        hi: {
            name: "सूखा ऑयस्टर मशरूम",
            tag: "लंबे समय तक चले",
            lead: "हमारे अपने फार्म का सावधानी से सुखाया गया ऑयस्टर मशरूम, जो महीनों तक चलता है। गरम पानी में 20–30 मिनट भिगोएं और ताज़े मशरूम की तरह पकाएं।",
            priceNote: "प्रति किलो दाम, सभी करों सहित · छोटे पैक के लिए WhatsApp पर पूछें",
            badges: ["जैविक", "हमारे फार्म पर सुखाया", "महीनों तक चले", "ले जाने में हल्का"],
            about: [
                [
                    "हमारे अपने मशरूम से।",
                    "महाराजपुर, मंडला में हमारे खुद उगाए और सुखाए ऑयस्टर मशरूम से बना।",
                ],
                [
                    "महीनों तक चलता है।",
                    "नमी और धूप से दूर, वायुरुद्ध डिब्बे में रखने पर महीनों तक अच्छा रहता है।",
                ],
                [
                    "ताज़े की तरह पकता है।",
                    "गरम पानी में 20–30 मिनट भिगोएं, पानी निकालें, काटें और ताज़े मशरूम की तरह पकाएं।",
                ],
                [
                    "रखने और ले जाने में हल्का।",
                    "रसोई, सफर और उन जगहों के लिए जहां ताज़ा मशरूम मिलना मुश्किल है।",
                ],
                ["कई व्यंजनों के लिए।", "सब्जी, पुलाव, सूप और ग्रेवी के लिए।"],
            ],
            nutrition: null,
            details: [
                ["उत्पाद", "सूखा ऑयस्टर मशरूम"],
                ["दाम", "₹2,000 प्रति किलो, सभी करों सहित"],
                ["पैक साइज़", "WhatsApp पर पूछें"],
                ["भंडारण", "ठंडी, सूखी जगह पर वायुरुद्ध डिब्बे में, नमी से बचाकर रखें।"],
                ["FSSAI लाइसेंस नं.", "21426250001720"],
                ["उगाया और पैक किया", "महिष्मति एग्रो, महाराजपुर, मंडला, मध्य प्रदेश 481665"],
                ["पैकिंग तारीख", "पैक पर छपी है"],
            ],
            useTitle: "सूखे ऑयस्टर मशरूम का उपयोग",
            use: [
                "सूखे मशरूम साफ करके गरम पानी में लगभग 20–30 मिनट भिगोएं।",
                "नरम होने पर पानी निकालें और जरूरत के अनुसार काटें।",
                "सब्जी, पुलाव, सूप और अन्य व्यंजनों में अच्छी तरह पकाएं।",
            ],
        },
    },

    P0003: {
        layout: "powder",
        img: "/assets/img/products/mushroom-powder-front.webp",
        gallery: [
            {
                img: "/assets/img/products/mushroom-powder-front.webp",
                en: "Front",
                hi: "सामने",
            },
            {
                img: "/assets/img/products/mushroom-powder-left.webp",
                en: "Nutrition side",
                hi: "पोषण जानकारी वाला भाग",
            },
            {
                img: "/assets/img/products/mushroom-powder-right.webp",
                en: "Pack details side",
                hi: "पैक विवरण वाला भाग",
            },
        ],
        wa: "powder",
        price: {
            now: null,
            mrp: "376",
        },
        en: {
            name: "Mushroom Powder",
            alt: "Mahishmati Agro mushroom powder in the actual tall PET jar with a gold cap",
            tag: "100 g jar",
            lead: "Sun-dried mushrooms, finely ground for a rich, savoury flavour. A simple addition to everyday dal, soups, curries and gravies, grown and packed in Maharajpur, Mandla.",
            priceNote: "100 g jar · MRP includes all taxes",
            badges: ["Single ingredient", "Zero additives", "Zero preservatives"],
            about: [
                [
                    "A deeper, savoury flavour",
                    "Bring natural mushroom umami to everyday cooking, a little at a time.",
                ],
                [
                    "Just mushroom powder",
                    "Made with mushrooms, with no added fillers, additives or preservatives.",
                ],
                [
                    "Protein & fibre, clearly listed",
                    "The pack lists 19.0 g protein and 39.1 g dietary fibre per 100 g. See the full nutrition table below.",
                ],
                [
                    "Direct from our farm",
                    "We grow, sun-dry, grind and pack our mushrooms in Maharajpur, Mandla.",
                ],
            ],
            nutrition: {
                sub: "Approximate values per 100 g, as declared on the current pack. These are not per-teaspoon values.",
                rows: [
                    ["Energy", "244 kcal"],
                    ["Protein", "19.0 g"],
                    ["Carbohydrate", "33.1 g"],
                    ["Total sugars", "0.0 g"],
                    ["Added sugars", "0.0 g"],
                    ["Dietary fibre", "39.1 g"],
                    ["Total fat", "2.9 g"],
                    ["Saturated fat", "0.4 g"],
                    ["Trans fat", "0.0 g"],
                    ["Cholesterol", "0 mg"],
                    ["Sodium", "28 mg"],
                ],
            },
            details: [
                ["Ingredients", "100% Organic Mushroom Powder"],
                ["Net weight", "100 g"],
                ["MRP", "₹376, inclusive of all taxes"],
                ["Batch number", "MA-MP-BT-2608"],
                ["Manufactured", "NOV-2026"],
                ["Best before", "2 years from packing; check the label on your jar."],
                ["FSSAI Lic. No.", "21426250001720"],
                ["Udyam Reg. No.", "UDYAM-MP-29-0021697"],
                [
                    "Grown, packed & marketed by",
                    "Mahishmati Agro, Maharajpur, Mandla, Madhya Pradesh - 481665, India",
                ],
            ],
            useTitle: "A little goes into everyday cooking",
            use: [
                "Start with a little: add 1–2 teaspoons to a pot of soup, dal, curry or gravy, to suit your taste.",
                "Stir into the dish while cooking so the powder mixes evenly. You can also use it in sauces and marinades.",
                "Taste, adjust and enjoy. Keep the jar closed after use and always use a clean, dry spoon.",
            ],
            keywords:
                "mushroom powder, mushroom powder 100 g, Mandla, Maharajpur, मशरूम पाउडर, Mahishmati Agro",
            meta: "Mahishmati Agro mushroom powder, 100 g jar, MRP ₹376. Sun-dried mushrooms for dal, soups, curries and gravies. View ingredients, current pack nutrition and order directly.",
        },
        hi: {
            name: "मशरूम पाउडर",
            tag: "100 ग्राम का जार",
            lead: "धूप में सुखाए मशरूम से बना बारीक पाउडर, जो दाल, सूप, सब्जी और ग्रेवी में भरपूर स्वाद जोड़ता है। महाराजपुर, मंडला में हमारे फार्म पर उगाया और पैक किया गया।",
            priceNote: "100 ग्राम का जार · एमआरपी में सभी कर शामिल",
            badges: ["केवल मशरूम", "कोई एडिटिव नहीं", "कोई प्रिज़र्वेटिव नहीं"],
            about: [
                [
                    "रोज़ के खाने में भरपूर स्वाद",
                    "मशरूम का प्राकृतिक उमामी स्वाद। अपनी पसंद के अनुसार थोड़ी मात्रा से शुरुआत करें।",
                ],
                [
                    "केवल मशरूम पाउडर",
                    "मशरूम से बना, बिना अतिरिक्त फिलर, एडिटिव या प्रिज़र्वेटिव के।",
                ],
                [
                    "प्रोटीन और फाइबर की स्पष्ट जानकारी",
                    "पैक के अनुसार प्रति 100 ग्राम में 19.0 ग्राम प्रोटीन और 39.1 ग्राम डाइटरी फाइबर। पूरी जानकारी नीचे देखें।",
                ],
                [
                    "सीधे हमारे फार्म से",
                    "हम महाराजपुर, मंडला में मशरूम उगाते, धूप में सुखाते, पीसते और पैक करते हैं।",
                ],
            ],
            nutrition: {
                sub: "वर्तमान पैक के अनुसार प्रति 100 ग्राम अनुमानित मात्रा। ये एक चम्मच की मात्रा नहीं हैं।",
                rows: [
                    ["ऊर्जा", "244 kcal"],
                    ["प्रोटीन", "19.0 ग्राम"],
                    ["कार्बोहाइड्रेट", "33.1 ग्राम"],
                    ["कुल शर्करा", "0.0 ग्राम"],
                    ["अतिरिक्त शर्करा", "0.0 ग्राम"],
                    ["डाइटरी फाइबर", "39.1 ग्राम"],
                    ["कुल वसा", "2.9 ग्राम"],
                    ["संतृप्त वसा", "0.4 ग्राम"],
                    ["ट्रांस वसा", "0.0 ग्राम"],
                    ["कोलेस्ट्रॉल", "0 मि.ग्रा."],
                    ["सोडियम", "28 मि.ग्रा."],
                ],
            },
            details: [
                ["सामग्री", "100% जैविक मशरूम पाउडर"],
                ["शुद्ध वज़न", "100 ग्राम"],
                ["एमआरपी", "₹376, सभी करों सहित"],
                ["बैच नंबर", "MA-MP-BT-2608"],
                ["निर्माण", "NOV-2026"],
                ["बेस्ट बिफोर", "पैकिंग से 2 वर्ष; अपने जार का लेबल देखें।"],
                ["FSSAI लाइसेंस नं.", "21426250001720"],
                ["उद्यम पंजीकरण नं.", "UDYAM-MP-29-0021697"],
                [
                    "उगाया, पैक और विपणन किया",
                    "महिष्मति एग्रो, महाराजपुर, मंडला, मध्य प्रदेश - 481665, भारत",
                ],
            ],
            useTitle: "रोज़ के खाने में आसानी से मिलाएं",
            use: [
                "थोड़ी मात्रा से शुरू करें: स्वाद के अनुसार सूप, दाल, सब्जी या ग्रेवी में 1–2 छोटे चम्मच मिलाएं।",
                "पकाते समय अच्छी तरह मिलाएं, ताकि पाउडर समान रूप से घुल जाए। इसे सॉस और मैरिनेड में भी इस्तेमाल कर सकते हैं।",
                "चखें और स्वाद के अनुसार मात्रा रखें। इस्तेमाल के बाद जार बंद करें और हमेशा साफ, सूखा चम्मच लें।",
            ],
        },
    },
};
