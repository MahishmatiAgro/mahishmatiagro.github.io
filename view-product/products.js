/* Product data for /view-product/?product=P0001 (fresh), P0002 (dried), P0003 (powder).
   To add a product: add one more entry here with the next code. Nothing else changes.
   Every value comes from the pack labels or the home page. Do not invent facts:
   use null when something is not known yet (e.g. price: null shows "ask on WhatsApp").
   price: { now: selling price, mrp: MRP (struck out when now is lower), unit: "kg" or null }
   en.offer / hi.offer: small badge next to an offer price, e.g. "10% off".
   source: optional references shown under "About this item" (links: [{topic: {en, hi}, url, cite}], en/hi text).
   en = English, hi = Hindi (same order and number of items in each list).
   keywords: comma-separated search words for this product (English and Hindi).
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
        img: "/assets/img/products/oyster-mushroom-powder.jpg",
        wa: "powder",
        source: {
            links: [
                {
                    topic: { en: "Blood sugar", hi: "ब्लड शुगर" },
                    url: "https://doi.org/10.1002/ptr.5255",
                    cite: "Jayasuriya W.J.A.B.N., Wanigatunge C.A., Fernando G.H., Abeytunga D.T.U., Suresh T.S. Hypoglycaemic activity of culinary Pleurotus ostreatus and P. cystidiosus mushrooms in healthy volunteers and type 2 diabetic patients on diet control and the possible mechanisms of action. Phytotherapy Research 29(2):303–309, 2015",
                },
                {
                    topic: { en: "Metabolism", hi: "मेटाबॉलिज़्म" },
                    url: "https://doi.org/10.1016/s0899-9007(97)00471-1",
                    cite: "Bobek P., Ozdín L., Galbavý S. Dose- and time-dependent hypocholesterolemic effect of oyster mushroom (Pleurotus ostreatus) in rats. Nutrition 14(3):282–286, 1998",
                },
                {
                    topic: { en: "Gut & digestion", hi: "आंत और पाचन" },
                    url: "https://doi.org/10.3390/foods12102010",
                    cite: "Törős G., El-Ramady H., Prokisch J., et al. Modulation of the gut microbiota with prebiotics and antimicrobial agents from Pleurotus ostreatus mushroom. Foods 12(10):2010, 2023",
                },
                {
                    topic: { en: "Gut & digestion", hi: "आंत और पाचन" },
                    url: "https://doi.org/10.3390/molecules25122806",
                    cite: "Mitsou E.K., Saxami G., Stamoulou E., et al. Effects of rich in β-glucans edible mushrooms on aging gut microbiota characteristics: an in vitro study. Molecules 25(12):2806, 2020",
                },
                {
                    topic: { en: "Immunity", hi: "रोग-प्रतिरोधक क्षमता" },
                    url: "https://doi.org/10.1007/s00253-002-1076-7",
                    cite: "Wasser S.P. Medicinal mushrooms as a source of antitumor and immunomodulating polysaccharides. Applied Microbiology and Biotechnology 60(3):258–274, 2002",
                },
                {
                    topic: { en: "Overview", hi: "सारांश" },
                    url: "https://www.ijpsjournal.com/article/a-review-of-oyster-mushroom-as-a-nutraceutical-on-health-care",
                    cite: "Singh R., Vastrakar K., Chandra N. A Review of Oyster Mushroom as a Nutraceutical on Health Care. International Journal of Pharmaceutical Sciences 4(9), 2026. doi:10.5281/zenodo.23763277",
                },
            ],
            en: "The health information above is taken from published research, not from tests on our product:",
            hi: "ऊपर दी गई स्वास्थ्य जानकारी प्रकाशित शोध से ली गई है, हमारे उत्पाद की जाँच से नहीं:",
            enEnd: "Mahishmati Agro does not claim that this product treats, cures or prevents any disease.",
            hiEnd: "महिष्मति एग्रो यह दावा नहीं करता कि यह उत्पाद किसी बीमारी का इलाज करता है, उसे ठीक करता है या रोकता है।",
        },
        price: { now: null, mrp: "376" },
        en: {
            name: "Organic Oyster Mushroom Powder",
            alt: "Mahishmati Agro organic oyster mushroom powder jar",
            tag: "Easy to use",
            lead: "100% pure oyster mushroom powder, made from mushrooms we grow, sun-dry and grind ourselves in Maharajpur, Mandla. One ingredient, nothing extra.",
            priceNote: "Incl. of all taxes · Net weight 100 g",
            badges: ["100% pure", "Sun-dried", "Single ingredient", "No additives", "Vegan"],
            about: [
                [
                    "100% pure & natural.",
                    "Made only from high-quality oyster mushrooms. No additives, preservatives, grains or fillers.",
                ],
                [
                    "Organic & vegan.",
                    "Grown without synthetic pesticides or chemical fertilisers. A plant-based food for vegetarian, vegan and health-conscious kitchens. Naturally gluten-free.",
                ],
                [
                    "High in protein and fibre.",
                    "About 31.7 g protein and 41.4 g dietary fibre in every 100 g.",
                ],
                [
                    "Vitamins and minerals.",
                    "Contains B vitamins (B1 and B2) and essential minerals.",
                ],
                [
                    "Natural goodness.",
                    "Oyster mushrooms naturally contain polysaccharides (beta-glucans) and antioxidants.",
                ],
                [
                    "Blood sugar.",
                    "Helps maintain healthy blood sugar levels that are already within the normal range.",
                ],
                ["Metabolism.", "Supports normal, healthy metabolism."],
                ["Gut & digestion.", "Supports a healthy gut and comfortable digestion."],
                ["Immunity.", "Supports your body's natural immune defences."],
                ["Fine powder.", "Smooth texture that blends easily while cooking."],
                [
                    "Natural umami flavour.",
                    "A mild, rich, savoury mushroom taste that lifts many dishes.",
                ],
                [
                    "Easy to use every day.",
                    "Mix into smoothies, teas, coffee and soups, or cook it into curries, dal and gravies.",
                ],
            ],
            nutrition: {
                sub: "Approximate values per 100 g",
                rows: [
                    ["Energy", "352.15 kcal"],
                    ["Protein", "31.65 g"],
                    ["Total carbohydrate", "51.82 g"],
                    ["Dietary fibre", "41.37 g"],
                    ["Total fat", "2.03 g"],
                    ["Vitamin B1", "0.962 mg"],
                    ["Vitamin B2", "0.756 mg"],
                ],
            },
            details: [
                ["Ingredients", "100% pure sun-dried oyster mushroom powder"],
                ["Net weight", "100 g"],
                ["MRP", "₹376 per 100 g pack, incl. of all taxes"],
                ["Best before", "24 months from packing"],
                ["Storage", "Store cool and dry. Keep the jar airtight and use a dry spoon."],
                ["FSSAI Lic. No.", "21426250001720"],
                ["Grown & packed by", "Mahishmati Agro, Maharajpur, Mandla, Madhya Pradesh 481665"],
                ["Batch & packed on", "Printed on the pack"],
            ],
            useTitle: "Using mushroom powder",
            use: [
                "Mix it in: add 1–2 teaspoons to your smoothies, teas, coffee or soups for a nutritious boost.",
                "Season your meals: sprinkle it into stir-fries, sauces, marinades or spice blends to enhance flavour.",
                "Start with a little and add more to suit your taste.",
                "If you have allergies or medical conditions, please consult your doctor before use.",
            ],
            keywords:
                "oyster mushroom powder, mushroom powder, organic mushroom powder, high protein mushroom powder, vegan mushroom powder, mushroom powder 100 g, मशरूम पाउडर, ऑयस्टर मशरूम पाउडर, Mahishmati Agro",
            meta: "Mahishmati Agro organic oyster mushroom powder, 100 g. 100% pure sun-dried oyster mushroom, no additives. High in protein and fibre. MRP ₹376. Order on WhatsApp +91 72230 47175.",
        },
        hi: {
            name: "जैविक ऑयस्टर मशरूम पाउडर",
            tag: "उपयोग में आसान",
            lead: "100% शुद्ध ऑयस्टर मशरूम पाउडर, उन मशरूमों से बना जिन्हें हम महाराजपुर, मंडला में खुद उगाते, धूप में सुखाते और पीसते हैं। एक ही सामग्री, और कुछ नहीं।",
            priceNote: "सभी करों सहित · शुद्ध वज़न 100 ग्राम",
            badges: ["100% शुद्ध", "धूप में सुखाया", "एक ही सामग्री", "कोई मिलावट नहीं", "वीगन"],
            about: [
                [
                    "100% शुद्ध और प्राकृतिक।",
                    "केवल अच्छी गुणवत्ता के ऑयस्टर मशरूम से बना। कोई मिलावट, प्रिज़र्वेटिव, अनाज या फिलर नहीं।",
                ],
                [
                    "जैविक और वीगन।",
                    "बिना रासायनिक कीटनाशक और रासायनिक खाद के उगाया गया। शाकाहारी, वीगन और सेहत का ध्यान रखने वाली रसोई के लिए पौधों से बना भोजन। प्राकृतिक रूप से ग्लूटेन-मुक्त।",
                ],
                [
                    "प्रोटीन और फाइबर से भरपूर।",
                    "हर 100 ग्राम में लगभग 31.7 ग्राम प्रोटीन और 41.4 ग्राम डाइटरी फाइबर।",
                ],
                ["विटामिन और खनिज।", "इसमें विटामिन B (B1 और B2) और ज़रूरी खनिज होते हैं।"],
                [
                    "प्राकृतिक गुण।",
                    "ऑयस्टर मशरूम में प्राकृतिक रूप से पॉलीसैकेराइड (बीटा-ग्लूकेन) और एंटीऑक्सीडेंट होते हैं।",
                ],
                [
                    "ब्लड शुगर।",
                    "सामान्य दायरे में पहले से मौजूद ब्लड शुगर को स्वस्थ बनाए रखने में मदद करता है।",
                ],
                ["मेटाबॉलिज़्म।", "सामान्य और स्वस्थ मेटाबॉलिज़्म में सहायक।"],
                ["आंत और पाचन।", "स्वस्थ आंत और आरामदायक पाचन में सहायक।"],
                ["रोग-प्रतिरोधक क्षमता।", "शरीर की प्राकृतिक रोग-प्रतिरोधक क्षमता में सहायक।"],
                ["बारीक पाउडर।", "मुलायम बनावट, जो पकाते समय आसानी से मिल जाती है।"],
                [
                    "प्राकृतिक उमामी स्वाद।",
                    "हल्का, भरपूर और नमकीन मशरूम स्वाद, जो कई व्यंजनों का स्वाद बढ़ाता है।",
                ],
                [
                    "रोज़ इस्तेमाल में आसान।",
                    "स्मूदी, चाय, कॉफ़ी और सूप में मिलाएं, या सब्जी, दाल और ग्रेवी में पकाएं।",
                ],
            ],
            nutrition: {
                sub: "प्रति 100 ग्राम अनुमानित मात्रा",
                rows: [
                    ["ऊर्जा", "352.15 kcal"],
                    ["प्रोटीन", "31.65 ग्राम"],
                    ["कुल कार्बोहाइड्रेट", "51.82 ग्राम"],
                    ["डाइटरी फाइबर", "41.37 ग्राम"],
                    ["कुल वसा", "2.03 ग्राम"],
                    ["विटामिन B1", "0.962 मि.ग्रा."],
                    ["विटामिन B2", "0.756 मि.ग्रा."],
                ],
            },
            details: [
                ["सामग्री", "100% शुद्ध धूप में सुखाए ऑयस्टर मशरूम का पाउडर"],
                ["शुद्ध वज़न", "100 ग्राम"],
                ["एमआरपी", "₹376 प्रति 100 ग्राम पैक, सभी करों सहित"],
                ["उपयोग की अवधि", "पैकिंग से 24 महीने तक"],
                ["भंडारण", "ठंडी, सूखी जगह पर रखें। डिब्बा बंद रखें और सूखा चम्मच इस्तेमाल करें।"],
                ["FSSAI लाइसेंस नं.", "21426250001720"],
                ["उगाया और पैक किया", "महिष्मति एग्रो, महाराजपुर, मंडला, मध्य प्रदेश 481665"],
                ["बैच और पैकिंग तारीख", "पैक पर छपी है"],
            ],
            useTitle: "मशरूम पाउडर का उपयोग",
            use: [
                "मिलाकर लें: पोषण के लिए 1–2 छोटे चम्मच स्मूदी, चाय, कॉफ़ी या सूप में मिलाएं।",
                "खाने में स्वाद: स्वाद बढ़ाने के लिए स्टर-फ्राई, सॉस, मैरिनेड या मसालों में छिड़कें।",
                "थोड़ी मात्रा से शुरू करें और स्वाद के अनुसार बढ़ाएं।",
                "अगर आपको एलर्जी या कोई बीमारी है, तो इस्तेमाल से पहले डॉक्टर से सलाह लें।",
            ],
        },
    },
};
