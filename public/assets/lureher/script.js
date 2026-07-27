
(function () {
  "use strict";

  (function injectPageFonts() {
    if (document.getElementById("v34-page-fonts")) return;
    var icons =
    "block,chevron_left,chevron_right,expand_more,favorite,forum,home,language," +
    "local_mall,local_shipping,location_on,lock,mic,payments,person,phone,photo_camera,published_with_changes," +
      "schedule,science,verified,verified_user";
    var fonts =
      "https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700" +
      "&family=Outfit:wght@400;500;600;700" +
      "&family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600" +
      "&family=El+Messiri:wght@500;600;700&display=swap";
    var symbols =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" +
      "&icon_names=" + icons + "&display=swap";
    var wrap = document.createElement("div");
    wrap.id = "v34-page-fonts";
    wrap.innerHTML =
      '<link rel="stylesheet" href="' + fonts + '">' +
      '<link rel="stylesheet" href="' + symbols + '">';
    while (wrap.firstChild) document.head.appendChild(wrap.firstChild);
  })();

  var I18N = {

    announce_cod: {
      ar: "الدفع عند الاستلام، توصيل مجاني",
      en: "Cash on delivery, free shipping",
      fr: "Paiement à la livraison, livraison gratuite"
    },
    announce_ship: {
      ar: "مخزون محدود، العرض الحصري ديال هاد الشهر فقط",
      en: "Limited stock, this month's exclusive offer only",
      fr: "Stock limité, offre exclusive de ce mois seulement"
    },
    announce_brand: {
      ar: "LureHer، عطور الرجال الحقيقيين",
      en: "LureHer, perfumes for real men",
      fr: "LureHer, les parfums des vrais hommes"
    },
    announce_official: {
      ar: "الموزع الرسمي الوحيد ديال LureHer فالمغرب، LureHer.ma",
      en: "The only official LureHer provider in Morocco, LureHer.ma",
      fr: "Le seul fournisseur officiel LureHer au Maroc, LureHer.ma"
    },
    announce_guarantee: {
      ar: "ضمان 7 أيام من يوم التوصيل",
      en: "7-day guarantee from delivery",
      fr: "Garantie 7 jours après livraison"
    },
    announce_occasion: {
      ar: "عندك عطر لكل مناسبة",
      en: "A perfume for every occasion",
      fr: "Un parfum pour chaque occasion"
    },
    announce_stock: {
      ar: "بقا <strong>{n}</strong> باك فقط هاد الشهر",
      en: "Only <strong>{n}</strong> packs left this month!",
      fr: "Plus que <strong>{n}</strong> packs ce mois-ci !"
    },
    announce_order: {
      ar: "اطلب باقتك الآن",
      en: "Order your pack now",
      fr: "Commandez votre pack maintenant"
    },
    nav_shop: { ar: "اطلب الآن", en: "Order Now", fr: "Commander" },
    brand_sub: { ar: "PARFUM", en: "PARFUM", fr: "PARFUM" },

    home_hero_h: { ar: "Lure Her", en: "Lure Her", fr: "Lure Her" },
    home_hero_sub: { ar: "العطر اللي ما غاتقدرش تقاومو.", en: "The perfume she won't be able to resist.", fr: "Le parfum auquel elle ne pourra pas résister." },
    home_cta: { ar: "اكتشف العطر", en: "Discover the scent", fr: "Découvrir le parfum" },

    hero_badge: { ar: "Lure Her", en: "Lure Her", fr: "Lure Her" },

    land_hero_h: {
      ar: "الباك الكامل اللي غادي يخليك فقمة الجاذبية ديالك، ليل ونهار",
      en: "The complete pack that keeps you at the top of your attraction, night and day",
      fr: "Le pack complet qui vous garde au sommet de votre attraction, nuit et jour"
    },
    land_hero_sub: {
      ar: "غتسمع \"ريحتك زوينة\" 1000 مرة",
      en: "1,000 compliments, guaranteed.",
      fr: "1000 compliments garantis."
    },
    product_title: {
      ar: "LureHer Night × LureHer Day، ‏249 درهم <span class=\"hpt-tag\">عندك عطر لكل مناسبة</span>",
      en: "LureHer Night × LureHer Day, 249 DH <span class=\"hpt-tag\">a perfume for every occasion!</span>",
      fr: "LureHer Night × LureHer Day, 249 DH <span class=\"hpt-tag\">un parfum pour chaque occasion !</span>"
    },
    offer_name: {
      ar: "LureHer Night 50ml × LureHer Day 50ml",
      en: "LureHer Night 50ml × LureHer Day 50ml",
      fr: "LureHer Night 50ml × LureHer Day 50ml"
    },

    trust_attract: { ar: "يلفت الأنظار", en: "Turns heads", fr: "Attire les regards" },
    trust_lasting: { ar: "ثبات 8 ساعات", en: "Lasts 8 hours", fr: "Tient 8 heures" },
    trust_authentic: { ar: "أصلي 100%", en: "100% authentic", fr: "100% authentique" },
    trust_cod: { ar: "الدفع عند الاستلام", en: "Cash on Delivery", fr: "Paiement à la livraison" },

    gift_note: {
      ar: "مع كل طلب: 10ml هدية مجانية",
      en: "With every order: free 10ml gift",
      fr: "Avec chaque commande : 10ml offert en cadeau"
    },
    savings_tag: { ar: "وفّرت 129 درهم", en: "You save 129 DH", fr: "Économisez 129 DH" },

    ct_ship: { ar: "توصيل مجاني", en: "Free delivery", fr: "Livraison gratuite" },
    ct_guarantee: { ar: "جرّب جوج العطور قبل ما تخلّص!", en: "Try both perfumes before you pay!", fr: "Essayez les deux parfums avant de payer !" },
    trust_shipping: { ar: "توصيل مجاني في كل المغرب", en: "Free shipping in Morocco", fr: "Livraison gratuite au Maroc" },

    tb_cod: {
      ar: "الدفع عند الاستلام، ما كتخلّص حتى يوصلك المنتج ليديك",
      en: "Cash on delivery, you only pay once the product is in your hands",
      fr: "Paiement à la livraison, vous ne payez qu'une fois le produit en main"
    },
    tb_ship: {
      ar: "توصيل مجاني لجميع مدن المغرب",
      en: "Free delivery to every city in Morocco",
      fr: "Livraison gratuite dans toutes les villes du Maroc"
    },
    tb_return: {
      ar: "جرّبو بكل ثقة، إيلا ما عجبكش العطر أو شككتي فأصالتو، ترجعو بلا أي مشكل",
      en: "Try with confidence, if you don't like the perfume or doubt its authenticity, you send it back, no hassle",
      fr: "Essayez en toute confiance, si le parfum ne vous plaît pas ou si vous doutez de son authenticité, vous le renvoyez, sans souci"
    },
    guarantee_title: {
      ar: "ضمانتنا كتحميك",
      en: "Our guarantee protects you",
      fr: "Notre garantie vous protège"
    },
    guarantee_sub: {
      ar: "الضمانة كتغطي طلبك فهاد الحالات: ضرر فالتوصيل، أو عدم الرضا على الريحة. صالحة 7 أيام من يوم التوصيل.",
      en: "The guarantee covers your order in these cases: shipping damage, or dissatisfaction with the scent. Valid 7 days from delivery.",
      fr: "La garantie couvre votre commande dans ces cas : dommage à la livraison, ou insatisfaction du parfum. Valable 7 jours après la livraison."
    },
    guarantee_form: {
      ar: "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">verified_user</span> ضمانتنا كتحمي طلبك: ضرر فالتوصيل، أو عدم الرضا على الريحة. صالحة 7 أيام من يوم التوصيل.",
      en: "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">verified_user</span> Our guarantee protects your order: shipping damage, or dissatisfaction with the scent. Valid 7 days from delivery.",
      fr: "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">verified_user</span> Notre garantie protège votre commande : dommage à la livraison, ou insatisfaction du parfum. Valable 7 jours après la livraison."
    },
    guarantee_meta_1: {
      ar: "توصيل من 24 إلى 48 ساعة في كل المغرب",
      en: "Delivery in 24–48 hours across Morocco",
      fr: "Livraison en 24 à 48 h partout au Maroc"
    },
    guarantee_meta_2: {
      ar: "10ml هدية مجانية مع كل طلب",
      en: "Free 10ml gift with every order",
      fr: "10ml offert avec chaque commande"
    },

    reframe_eyebrow: { ar: "علاش حنا مختلفين", en: "Why we're different", fr: "Pourquoi nous sommes différents" },
    reframe_h_win: {
      ar: "باك واحد كيدير التأثير",
      en: "One pack that works",
      fr: "Un pack qui fait effet"
    },
    reframe_h_lose: {
      ar: "خمسة \"مقلدين\" ريحتهم غير الكحول",
      en: "Five \"copies\" that smell only of alcohol",
      fr: "Cinq \"copies\" qui ne sentent que l'alcool"
    },
    reframe_p1: {
      ar: "هاد العطور الرخيصة اللي كيبيعو 5 بـ200؟ كيبانو ريحة الكحول، كيطيرو فساعة، وما كيديرو حتى تأثير.",
      en: "Those cheap perfumes sold 5 for 200? They smell of alcohol, fade in an hour and produce no effect.",
      fr: "Ces parfums bon marché vendus 5 pour 200 ? Ils sentent l'alcool, s'évaporent en une heure et ne produisent aucun effet."
    },
    reframe_p2: {
      ar: "حنا درنا العكس. فورمولة حصرية بتركيز عالي من الزيوت، قنينة وحدة كتدير تأثير بصح.",
      en: "We did the opposite. An exclusive high-concentration formula, one bottle that actually works.",
      fr: "Nous avons fait l'inverse. Une formule exclusive à forte concentration d'huiles, un seul flacon qui fait vraiment effet."
    },
    reframe_p3: {
      ar: "صدقني، اللي بغيتي هو النتيجة، ماشي العدد!",
      en: "Believe me, you want the outcome, not the numbers!",
      fr: "Croyez-moi, c'est le résultat que vous voulez, pas les chiffres !"
    },
    creed_kicker: {
      ar: "ماغاديش نبيعو ليك 5 عطور ريحتهم غير الكحول.",
      en: "We won't sell you 5 perfumes that smell like alcohol.",
      fr: "On ne vous vendra pas 5 parfums qui sentent l'alcool."
    },
    creed_lead: {
      ar: "غانبيعو ليك جوج عطور متناسقين غادي تستعملهم بصح كل نهار، غادي تهضر عليهم لصحابك، وغادي تعاود تطلب ملي يساليو. عارفينها حيت مئات الزبناء داروها قبل منك.",
      en: "We'll sell you two harmonic perfumes you'll genuinely wear every day. You'll tell your friends, and you'll order again when they run out. We know it, because hundreds of our clients did it before you.",
      fr: "On vous vend deux parfums harmonieux que vous porterez vraiment chaque jour. Vous en parlerez à vos amis, et vous recommanderez quand ils seront finis. On le sait, des centaines de nos clients l'ont fait avant vous."
    },
    creed_close: {
      ar: "عافاك ماتشريش عطر رخيص! العطر هو الانطباع اللي كتعطي على راسك قبل ما تحل فمك.",
      en: "Please don't buy a cheap perfume! It's the impression you give of yourself before you even open your mouth.",
      fr: "S'il vous plaît, n'achetez pas un parfum bon marché ! C'est l'impression que vous donnez de vous-même avant même d'ouvrir la bouche."
    },
    vs_us_label: { ar: "LureHer Night × LureHer Day", en: "LureHer Night × LureHer Day", fr: "LureHer Night × LureHer Day" },
    vs_them_label: { ar: "5 عطور مقلّدة بـ 200 درهم", en: "5 fakes for 200 DH", fr: "5 faux produits pour 200 DH" },
    vs_them_short: { ar: "الباقي", en: "The rest", fr: "Les autres" },
    vs_f1: { ar: "تركيز عالي من الزيوت الأصلية", en: "High concentration of authentic oils", fr: "Forte concentration d'huiles authentiques" },
    vs_f2: { ar: "ثبات 8 ساعات", en: "Lasts 8 hours", fr: "Tient 8 heures" },
    vs_f3: { ar: "شعار LureHer الحقيقي مطبوع فالقنينات، ماشي ستيكر", en: "The real LureHer logo printed on the bottles, not a sticker", fr: "Le vrai logo LureHer imprimé sur les flacons, pas un sticker" },
    vs_f4: { ar: "جوج عطور كيحيدو ليك الحاجة لأي عطر آخر، عندك عطر لكل مناسبة", en: "Two perfumes that completely remove your need for any other perfume, one for every occasion", fr: "Deux parfums qui suppriment votre besoin de tout autre parfum, un pour chaque occasion" },

    proof_eyebrow: { ar: "الكيمياء بيناتهم", en: "Their chemistry", fr: "Leur alchimie" },
    proof_h: { ar: "جوج عطور، وريحة ثالثة سرية", en: "Two perfumes, and a secret third scent", fr: "Deux parfums, et un troisième parfum secret" },
    proof_1: {
      ar: "شعار LureHer الحقيقي مطبوع فالقنينات. الستيكر هو المنتوج المقلد اللي ريحتو غير الكحول، رد بالك منو.",
      en: "The real LureHer logo is printed on the bottles. The sticker is the fake product that smells of alcohol, be wary of it.",
      fr: "Le vrai logo LureHer est imprimé sur les flacons. Le sticker, c'est le faux produit qui sent l'alcool, méfiez-vous-en."
    },
    proof_2: {
      ar: "متناسقين فالتركيبة، كيكملو بعضياتهم بلا ما يتضاربو",
      en: "Harmonized compositions, they complete each other without clashing",
      fr: "Des compositions harmonisées, ils se complètent sans jamais se heurter"
    },
    proof_4: {
      ar: "جرب طبقهم بجوج: رشة Day ومن بعد رشة Night، كتخرج ريحة جديدة غامضة اللي غير ديالك",
      en: "Try layering them: a spray of Day then a spray of Night, a new mysterious scent comes out that is yours alone",
      fr: "Essayez de les superposer : un spray de Day puis un de Night, il en sort un nouveau parfum mystérieux qui n'appartient qu'à vous"
    },
    proof_attn: {
      ar: "هاد الريحة الثالثة غادي تكتشفها غير ملي تجرب، وغادي تفهم علاش الزبناء كيعاودو الطلب",
      en: "You'll only discover that third scent once you try, and you'll understand why customers reorder",
      fr: "Ce troisième parfum, vous ne le découvrirez qu'en essayant, et vous comprendrez pourquoi les clients recommandent"
    },
    proof_close: {
      ar: "بجوج elixir de parfum بتركيز عالي، ثبات 8 ساعات",
      en: "Both are high-concentration elixirs de parfum, 8-hour longevity",
      fr: "Les deux sont des élixirs de parfum très concentrés, 8 heures de tenue"
    },

    box_eyebrow: { ar: "شنو غادي توصلك", en: "What you receive", fr: "Ce que vous recevez" },
    box_h: { ar: "كل باك فيه جوج عطور كاملين", en: "Every pack contains two full perfumes", fr: "Chaque pack contient deux parfums complets" },
    box_desc: {
      ar: "وحدة لليل ووحدة للنهار، ما تحتاج حتى عطر آخر",
      en: "One for the night, one for the day, you'll never need another perfume",
      fr: "Un pour la nuit, un pour le jour, vous n'aurez plus besoin d'aucun autre parfum"
    },
    box_1_title: { ar: "LureHer Night، إكسير الفيرومون", en: "LureHer Night, the pheromone elixir", fr: "LureHer Night, l'élixir de phéromones" },
    box_1_sub: {
      ar: "50ml / 1.7oz، عطر الليل والخرجات، كيخلي الناس يقربو ليك بلا ما يعرفو علاش",
      en: "50ml / 1.7oz, the night-out perfume, it draws people closer without them knowing why",
      fr: "50ml / 1.7oz, le parfum des sorties, il attire les gens sans qu'ils sachent pourquoi"
    },
    box_2_title: { ar: "LureHer Day، إكسير الحضور", en: "LureHer Day, the presence elixir", fr: "LureHer Day, l'élixir de présence" },
    box_2_sub: {
      ar: "50ml / 1.7oz، عطر النهار والخدمة، كيفرض الحضور فالاجتماعات والمواعيد",
      en: "50ml / 1.7oz, the daytime and work perfume, it commands presence in meetings and appointments",
      fr: "50ml / 1.7oz, le parfum du jour et du travail, il impose votre présence en réunion comme en rendez-vous"
    },
    box_cta: { ar: "اطلب الآن", en: "Order now", fr: "Commander" },
    box_foot: {
      ar: "القنينة وحدها كتباع بـ189 درهم، فالباك الثانية كتجيك غير بـ60 درهم",
      en: "One bottle alone sells for 189 DH, in the pack the second costs you only 60 DH",
      fr: "Un flacon seul se vend 189 DH, dans le pack le second ne vous coûte que 60 DH"
    },
    coffret_strike: { ar: "378 درهم", en: "378 DH", fr: "378 DH" },
    coffret_now: { ar: "249 درهم", en: "249 DH", fr: "249 DH" },

    notes_eyebrow: { ar: "النوتات العطرية", en: "Fragrance notes", fr: "Notes olfactives" },
    notes_h: { ar: "شنو كاين فكل قنينة", en: "What's inside each bottle", fr: "Ce qu'il y a dans chaque flacon" },
    notes_night_sub: { ar: "عطر الجاذبية، للخرجات والمناسبات والليل", en: "The attraction perfume, for nights out and occasions", fr: "Le parfum de l'attraction, pour les sorties et les grandes occasions" },
    notes_day_sub: { ar: "عطر الحضور، للخدمة والاجتماعات والنهار", en: "The presence perfume, for work, meetings and daytime", fr: "Le parfum de la présence, pour le travail, les réunions et la journée" },
    notes_top: { ar: "الافتتاحية:", en: "Top:", fr: "Tête :" },
    notes_heart: { ar: "القلب:", en: "Heart:", fr: "Cœur :" },
    notes_base: { ar: "القاعدة:", en: "Base:", fr: "Fond :" },
    notes_night_top: { ar: "نعناع منعش، تفاحة خضرا، ليمون", en: "fresh mint, green apple, lemon", fr: "menthe fraîche, pomme verte, citron" },
    notes_night_heart: { ar: "فانيلا حليبية، كراميل، تونكا", en: "milky vanilla, caramel, tonka", fr: "vanille lactée, caramel, fève tonka" },
    notes_night_base: { ar: "عنبر، خشب الأرز، مسك أبيض", en: "amber, cedarwood, white musk", fr: "ambre, bois de cèdre, musc blanc" },
    notes_day_top: { ar: "تفاحة، برغموت، لافندر", en: "apple, bergamot, lavender", fr: "pomme, bergamote, lavande" },
    notes_day_heart: { ar: "جيرانيوم، ياسمين، بنفسج", en: "geranium, jasmine, violet", fr: "géranium, jasmin, violette" },
    notes_day_base: { ar: "فانيلا، فلفل أسود، خشب الصندل", en: "vanilla, black pepper, sandalwood", fr: "vanille, poivre noir, bois de santal" },
    notes_tech: {
      ar: "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">schedule</span> جوج القنينات elixir de parfum بتركيز عالي، ثبات أكثر من 8 ساعات على الجلد",
      en: "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">schedule</span> Both bottles are high-concentration elixirs de parfum, 8+ hours on skin",
      fr: "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">schedule</span> Les deux flacons sont des élixirs de parfum très concentrés, plus de 8 heures sur la peau"
    },

    rev_eyebrow: { ar: "آراء الزبناء", en: "Customer reviews", fr: "Avis clients" },
    rev_title: { ar: "جرّبو باك LureHer", en: "They tried the LureHer pack", fr: "Ils ont essayé le pack LureHer" },
    rev_sub: {
      ar: "+2000 طلبية وصلات للمغرب",
      en: "+2,000 orders delivered in Morocco",
      fr: "+2 000 commandes livrées au Maroc"
    },
    rev_rating_label: { ar: "من 327 تقييم", en: "from 327 ratings", fr: "sur 327 avis" },
    rev_photos_note: {
      ar: "تعليقات بصور من زبنائنا",
      en: "Photo reviews from our customers",
      fr: "Avis avec photos de nos clients"
    },
    rev_verified: { ar: "طلبية مؤكدة", en: "Verified order", fr: "Commande vérifiée" },
    rev1_name: { ar: "يوسف", en: "Youssef", fr: "Youssef" },
    rev1_city: { ar: "الدار البيضاء", en: "Casablanca", fr: "Casablanca" },
    rev1_text: {
      ar: "طلبت الباك، Night للخرجات وDay للخدمة. جوج فيهم كيدومو بزاف، مراتي عجبها Night. غادي نطلب واحد آخر لخويا قبل ما يسالي العرض",
      en: "I ordered the pack, Night for going out and Day for work. Both last long, my wife loves Night. Ordering another one for my brother before the offer ends.",
      fr: "J'ai commandé le pack, Night pour les sorties et Day pour le travail. Les deux tiennent longtemps, ma femme adore Night. J'en recommande un pour mon frère avant la fin de l'offre."
    },
    rev3_name: { ar: "مهدي", en: "Mehdi", fr: "Mehdi" },
    rev3_city: { ar: "طنجة", en: "Tangier", fr: "Tanger" },
    rev3_text: {
      ar: "الباك زوين، Night كيدوم بزاف وجاباتني عليه بزاف ديال المجاملات. Day خفيف شوية على ذوقي فالصيف، ولكن بجوج كيستاهلو الثمن",
      en: "Nice pack, Night lasts long and got me plenty of compliments. Day is a bit light for my taste in summer, but together they're worth the price.",
      fr: "Beau pack, Night tient longtemps et m'a valu plein de compliments. Day est un peu léger à mon goût en été, mais les deux valent le prix."
    },
    rev4_name: { ar: "رضا", en: "Reda", fr: "Reda" },
    rev4_city: { ar: "أكادير", en: "Agadir", fr: "Agadir" },
    rev4_text: {
      ar: "ولا عندي عطر لكل وقت، Day كنحطو كل صباح للخدمة وNight للمناسبات. الباك بدل ليا الروتين كامل، خدمة ممتازة كننصح بيها",
      en: "Now I have a perfume for every moment, Day each morning for work and Night for occasions. The pack changed my whole routine, excellent service, I recommend.",
      fr: "J'ai maintenant un parfum pour chaque moment, Day le matin pour le travail et Night pour les occasions. Le pack a changé toute ma routine, service excellent, je recommande."
    },
    rev5_name: { ar: "سفيان .ك", en: "Sofiane K.", fr: "Sofiane K." },
    rev5_city: { ar: "فاس", en: "Fes", fr: "Fès" },
    rev5_text: {
      ar: "تصويرة من بعد ما وصلني الباك، جوج القنينات أصليين والتغليف محترف. إيلا بقى العرض غادي نشري باك آخر نهديه لبا",
      en: "Photo right after the pack arrived, both bottles are genuine and the packaging is professional. If the offer holds I'm buying another pack as a gift for my father.",
      fr: "Photo juste après réception du pack, les deux flacons sont authentiques et l'emballage est soigné. Si l'offre tient, j'en achète un autre pour mon père."
    },
    rev_audio_label: {
      ar: "رسالة صوتية من الزبون",
      en: "Voice note from customer",
      fr: "Message vocal du client"
    },

    form_name: { ar: "الإسم الكامل", en: "Full Name", fr: "Nom complet" },
    form_phone: { ar: "رقم الهاتف", en: "Phone Number", fr: "Numéro de téléphone" },
    form_city: { ar: "المدينة", en: "City", fr: "Ville" },
    form_address: { ar: "العنوان", en: "Address", fr: "Adresse" },
    form_name_ph: { ar: "الإسم الكامل :", en: "Full name:", fr: "Nom complet :" },
    form_phone_ph: { ar: "رقم الهاتف :", en: "Phone number:", fr: "Numéro de téléphone :" },
    form_city_ph: { ar: "المدينة :", en: "City:", fr: "Ville :" },
    form_address_ph: { ar: "العنوان :", en: "Address:", fr: "Adresse :" },
    form_secure: { ar: "معلوماتك آمنة ومحمية", en: "Your information is safe and secure", fr: "Vos informations sont sécurisées" },
    submit_order: { ar: "اطلب الآن", en: "ORDER", fr: "COMMANDER" },
    submit_sub: { ar: "كتخلّص غير ملي يوصلك", en: "You only pay on delivery", fr: "Vous ne payez qu'à la réception" },
    form_proof: { ar: "⭐ 4.9 · +2000 طلبية فالمغرب", en: "⭐ 4.9 · 2,000+ orders in Morocco", fr: "⭐ 4,9 · +2 000 commandes au Maroc" },
    footer_line: {
      ar: "الدفع عند الاستلام · توصيل 24–48 ساعة · إرجاع بلا مشكل",
      en: "Cash on delivery · 24–48h delivery · easy returns",
      fr: "Paiement à la livraison · Livraison 24–48 h · Retour sans souci"
    },

    sticky_name: { ar: "LureHer Night × LureHer Day", en: "LureHer Night × LureHer Day", fr: "LureHer Night × LureHer Day" },
    sticky_price: { ar: "249 درهم", en: "249 DH", fr: "249 DH" },
    sticky_cta: { ar: "اطلب الآن", en: "Order Now", fr: "Commander" },

    fcta_h: { ar: "باك واحد يقدر يبدّل كلشي", en: "One pack can change everything", fr: "Un seul pack peut tout changer" },
    fcta_offer: {
      ar: "LureHer Night 50ml + LureHer Day 50ml · 500 درهم ← 249 درهم · الدفع عند الاستلام · توصيل مجاني",
      en: "LureHer Night 50ml + LureHer Day 50ml · 500 DH → 249 DH · Cash on delivery · Free shipping",
      fr: "LureHer Night 50ml + LureHer Day 50ml · 500 DH → 249 DH · Paiement à la livraison · Livraison gratuite"
    },
    fcta_cta: { ar: "اطلب الآن", en: "ORDER", fr: "COMMANDER" },
    fcta_stock: { ar: "ما بقاوش غير 30 باك", en: "Only 30 packs left", fr: "Plus que 30 packs" },

    faq_eyebrow: { ar: "أسئلة شائعة", en: "FAQ", fr: "FAQ" },
    faq_title: { ar: "كل ما خصك تعرف قبل ما تطلب", en: "Everything to know before ordering", fr: "Tout savoir avant de commander" },
    faq_cta: { ar: "اطلب الآن", en: "Order now", fr: "Commander maintenant" },
    faq_q1: { ar: "واش العطور أصلية؟", en: "Are the perfumes authentic?", fr: "Les parfums sont-ils authentiques ?" },
    faq_a1: {
      ar: "أيه، جوج القنينات فيهم شعار LureHer الحقيقي مطبوع، ماشي ستيكر.",
      en: "Yes, both bottles carry the real LureHer logo, printed, not a sticker.",
      fr: "Oui, les deux flacons portent le vrai logo LureHer, imprimé, pas un sticker."
    },
    faq_q2: { ar: "شحال كيدوم؟", en: "How long does it last?", fr: "Combien de temps tient-il ?" },
    faq_a2: {
      ar: "8 ساعات.",
      en: "8 hours.",
      fr: "8 heures."
    },
    faq_q3: { ar: "كيفاش كنخلّص؟", en: "How do I pay?", fr: "Comment je paie ?" },
    faq_a3: {
      ar: "الدفع عند الاستلام، كتخلّص ملي يوصلك الباك ليديك.",
      en: "Cash on delivery, you pay once the pack is in your hands.",
      fr: "Paiement à la livraison, vous payez quand le pack est entre vos mains."
    },
    faq_q4: { ar: "إمتى غادي يوصلني؟", en: "When will I be delivered?", fr: "Quand serai-je livré ?" },
    faq_a4: {
      ar: "من 24 لـ 48 ساعة، توصيل مجاني لكل المغرب.",
      en: "24–48 hours, free delivery across Morocco.",
      fr: "Sous 24–48 h, livraison gratuite partout au Maroc."
    },
    faq_q5: { ar: "واش نقدر نرجعو؟", en: "Can I return it?", fr: "Puis-je le renvoyer ?" },
    faq_a5: {
      ar: "إيلا ما كنتيش راضي على المنتوج، صيفط شكاية للمساعد اللي تبع طلبك، وغادي تستافد من تبديل فأقرب وقت!",
      en: "If you're dissatisfied with the product, raise a complaint with the agent who followed your order, and you'll get a replacement as fast as possible!",
      fr: "Si vous n'êtes pas satisfait du produit, signalez-le à l'agent qui a suivi votre commande, et vous bénéficierez d'un remplacement au plus vite !"
    },
    faq_q6: { ar: "شنو الفرق بين Night و Day؟", en: "What's the difference between Night and Day?", fr: "Quelle est la différence entre Night et Day ?" },
    faq_a6: {
      ar: "Night عطر الجاذبية، حلو وقوي، للخرجات والمناسبات والليل. Day عطر الحضور، منعش ومحترف، للخدمة والنهار. بجوج كيكملو بعضياتهم.",
      en: "Night is the attraction perfume, sweet and strong, for nights out and occasions. Day is the presence perfume, fresh and professional, for work and daytime. Together they complete each other.",
      fr: "Night est le parfum de l'attraction, doux et puissant, pour les sorties et les occasions. Day est le parfum de la présence, frais et professionnel, pour le travail et la journée. Ensemble ils se complètent."
    },
    faq_q7: { ar: "واش نقدر نشري غير قنينة وحدة؟", en: "Can I buy just one bottle?", fr: "Puis-je acheter un seul flacon ?" },
    faq_a7: {
      ar: "أيه، القنينة وحدها بـ189 درهم. ولكن مع الباك، الثانية كتجيك غير بـ60 درهم، وهادشي علاش أغلب الزبناء كياخدو الباك.",
      en: "Yes, one bottle alone is 189 DH. But with the pack the second one costs you only 60 DH, which is why most customers take the pack.",
      fr: "Oui, un flacon seul est à 189 DH. Mais avec le pack, le second ne vous coûte que 60 DH, c'est pourquoi la plupart des clients prennent le pack."
    }
  };

  var langs = ["ar", "fr"];
  var DEFAULT_LANG = "ar";
  var LANG_LABELS = { fr: "Français", ar: "العربية" };

  // Ad-link ?lang= (e.g. ...?lang=fr) overrides any saved preference, so a
  // French ad always lands in French even for a returning visitor.
  function langFromUrl() {
    try {
      var m = /[?&]lang=([a-zA-Z]{2})/.exec(window.location.search || "");
      if (m) {
        var v = m[1].toLowerCase();
        if (v === "en") return DEFAULT_LANG;
        if (langs.indexOf(v) !== -1) return v;
      }
    } catch (e) {}
    return null;
  }

  function resolveInitialLang() {
    var fromUrl = langFromUrl();
    if (fromUrl) return fromUrl;
    try {
      var savedLang = localStorage.getItem("lureher_lang");
      if (savedLang === "en") return DEFAULT_LANG;
      if (savedLang && langs.indexOf(savedLang) !== -1) return savedLang;
    } catch (e) {}
    if (window.__V34_INITIAL_LANG) {
      if (window.__V34_INITIAL_LANG === "en") return DEFAULT_LANG;
      if (langs.indexOf(window.__V34_INITIAL_LANG) !== -1) return window.__V34_INITIAL_LANG;
    }
    return DEFAULT_LANG;
  }

  var currentLangIndex = langs.indexOf(resolveInitialLang());
  if (currentLangIndex < 0) currentLangIndex = 0;


  function localize(root, l) {
    root = root || document;
    var nodes = root.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute("data-i18n");
      if (I18N[k] && I18N[k][l] != null) {
        nodes[i].innerHTML = I18N[k][l];
      }
    }
    var phNodes = root.querySelectorAll("[data-i18n-placeholder]");
    for (var j = 0; j < phNodes.length; j++) {
      var pk = phNodes[j].getAttribute("data-i18n-placeholder");
      if (I18N[pk] && I18N[pk][l] != null) {
        phNodes[j].setAttribute("placeholder", I18N[pk][l]);
      }
    }
  }

  function applyLang(index) {
    currentLangIndex = index;
    var l = langs[currentLangIndex];
    try { localStorage.setItem("lureher_lang", l); } catch (e) {}
    var app = document.querySelector(".app");

    if (app) {
      app.setAttribute("lang", l);
      app.setAttribute("dir", l === "ar" ? "rtl" : "ltr");
    }

    localize(document, l);


    var submitLabel = document.querySelector("#checkout-section .order-submit .btn-label");
    if (submitLabel && I18N.submit_order && I18N.submit_order[l]) {
      submitLabel.textContent = I18N.submit_order[l];
    }

    var label = document.getElementById("langLabel");
    if (label) label.textContent = LANG_LABELS[l] || l;


    var titleDict = {
      ar: "LureHer Night × LureHer Day — الباك الأصلي · الدفع عند الاستلام",
      en: "LureHer Night × LureHer Day — The original pack, cash on delivery",
      fr: "LureHer Night × LureHer Day — Le pack original, paiement à la livraison"
    };
    document.title = titleDict[l] || "LureHer Night × LureHer Day";
    updateHeroGalleryAlts();
    updateStockLabels(window.__V34_STOCK_COUNT || computeDeterministicStock());
    if (window.__V34_REFRESH_ANNOUNCE) window.__V34_REFRESH_ANNOUNCE();
    loadDeferredLangAssets(l);
    syncPricesFromYouCan();
    syncFormLabelsFromYouCan();
  }

  function updateStockLabels(n) {
    var l = langs[currentLangIndex];
    var tpl = I18N.announce_stock && I18N.announce_stock[l] ? I18N.announce_stock[l] : "Only <strong>{n}</strong> left in stock";
    var html = tpl.replace("{n}", String(n));
    document.querySelectorAll(".announce-stock").forEach(function (el) {
      el.innerHTML = html;
    });
  }

  document.addEventListener("click", function (e) {
    if (!e.target || !e.target.closest) return;
    if (e.target.closest("#langToggle")) {
      var nextIndex = (currentLangIndex + 1) % langs.length;
      applyLang(nextIndex);
    }
  });

  function handleScroll() {
    var reveals = document.querySelectorAll(".reveal:not(.active)");
    for (var i = 0; i < reveals.length; i++) {
      var wh = window.innerHeight;
      var et = reveals[i].getBoundingClientRect().top;
      if (et < wh - 40) {
        reveals[i].classList.add("active");
      }
    }

    var bottomCta = document.getElementById("bottom-cta");
    if (bottomCta && !window.__stickyCtaIO) {
      if (window.scrollY > 120) {
        bottomCta.classList.add("visible");
      } else {
        bottomCta.classList.remove("visible");
      }
    }
  }

  function initStickyCta() {
    var bottomCta = document.getElementById("bottom-cta");
    var stickyBtn = document.getElementById("stickyBtn");
    if (!bottomCta) return;

    window.__stickyCtaIO = true;
    bottomCta.classList.add("visible");

    if (stickyBtn) {
      stickyBtn.addEventListener("click", function () {
        stickyBtn.classList.add("pulse-stopped");
      });
    }
  }

  window.addEventListener("scroll", handleScroll);

  document.addEventListener("click", function (e) {
    if (!e.target || !e.target.closest) return;
    var btn = e.target.closest(".scroll-to-top");
    if (btn) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  document.addEventListener("click", function (e) {
    if (!e.target || !e.target.closest) return;
    var btn = e.target.closest(".scroll-to-checkout");
    if (btn) {
      e.preventDefault();
      var target = document.getElementById("checkout-form") ||
        document.querySelector(".checkout-form-side") ||
        document.getElementById("checkout-section");
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: window.innerWidth < 900 ? "start" : "center"
        });
      }
    }
  });

  var HERO_ASSET_VERSION = 10;
  // lureher page has its OWN manifest — /images/hero/manifest.json belongs to
  // the live lure-her page; editing it there would change the live gallery.
  var HERO_MANIFEST_URL =
    "/images/hero/manifest-lureher.json?v=" + HERO_ASSET_VERSION;

  var HERO_MANIFEST_FALLBACK = {
    baseUrl: "/images/hero/",
    slides: [
      {
        id: "pack",
        image: "h-duo-v3-800.webp",
        thumb: "h-duo-v3-800.webp",
        alt: { ar: "باك LureHer الكامل، Night و Day", en: "The complete LureHer pack, Night and Day", fr: "Le pack LureHer complet, Night et Day" },
        caption: { ar: "الباك الكامل، LureHer Night × LureHer Day", fr: "Le pack complet, LureHer Night × LureHer Day" }
      },
      {
        id: "night",
        image: "h-couple-v2-800.webp",
        thumb: "h-couple-v2-800.webp",
        alt: { ar: "LureHer Night، عطر الجاذبية", en: "LureHer Night, the attraction perfume", fr: "LureHer Night, le parfum de l'attraction" },
        caption: { ar: "LureHer Night، الجاذبية الكاملة، كيقرب الناس ليك فالخرجات والمناسبات", fr: "LureHer Night, l'attraction totale, pour les sorties et les grandes occasions" }
      },
      {
        id: "day",
        image: "h-solo-v2-800.webp",
        thumb: "h-solo-v2-800.webp",
        alt: { ar: "LureHer Day، عطر الحضور", en: "LureHer Day, the presence perfume", fr: "LureHer Day, le parfum de la présence" },
        caption: { ar: "LureHer Day، الثقة الكاملة، حضور محترف فالخدمة والاجتماعات", fr: "LureHer Day, la confiance totale, une présence pro au travail et en réunion" }
      },
      {
        id: "tech",
        image: "h-decant-v2-800.webp",
        thumb: "h-decant-v2-800.webp",
        alt: { ar: "تركيز عالي وثبات أكثر من 8 ساعات", en: "High concentration, 8+ hour longevity", fr: "Haute concentration, plus de 8 h de tenue" },
        caption: { ar: "تركيز elixir de parfum عالي، ثبات أكثر من 8 ساعات فجوج القنينات", fr: "Élixirs de parfum très concentrés, plus de 8 heures de tenue pour les deux flacons" }
      },
      {
        id: "guarantee",
        image: "01-main.webp",
        thumb: "01-main.webp",
        alt: { ar: "ضمان LureHer", en: "The LureHer guarantee", fr: "La garantie LureHer" },
        caption: { ar: "ضمان الجاذبية والحضور، وإيلا ما عجبكش العطر كنبدلوه فـ7 أيام", fr: "Garantie attraction et présence, remplacement sous 7 jours si un parfum vous déçoit" }
      }
    ]
  };

  var heroManifestCache = null;

  function heroSlideAsset(asset, lang, base) {
    if (!asset) return "";
    var file = asset;
    if (typeof asset === "object") {
      file = asset[lang] || asset.en || asset.ar || asset.fr;
      if (!file) {
        var keys = Object.keys(asset);
        file = keys.length ? asset[keys[0]] : "";
      }
    }
    if (!file) return "";
    if (file.indexOf("http") === 0) return file;
    var url = base + file;
    var sep = url.indexOf("?") >= 0 ? "&" : "?";
    return url + sep + "v=" + HERO_ASSET_VERSION;
  }

  function heroSlideAlt(slide, lang) {
    if (slide.alt && slide.alt[lang]) return slide.alt[lang];
    return slide.alt && slide.alt.ar ? slide.alt.ar : "";
  }

  // Slide info sits BELOW the photo, never on top of it — the image has to read
  // clean. One caption element, rewritten on slide change, so the layout under
  // the gallery never jumps as you move between slides.
  function heroCaptionEl() {
    var root = document.getElementById("hero-gallery");
    if (!root) return null;
    var el = root.querySelector(".gallery-caption");
    if (!el) {
      el = document.createElement("p");
      el.className = "gallery-caption";
      var vp = root.querySelector(".media-carousel-viewport");
      if (vp && vp.nextSibling) root.insertBefore(el, vp.nextSibling);
      else root.appendChild(el);
    }
    return el;
  }

  function setHeroCaption(index) {
    var el = heroCaptionEl();
    if (!el || !heroManifestCache || !heroManifestCache.slides) return;
    var lang = langs[currentLangIndex];
    var slide = heroManifestCache.slides[index] || {};
    var text = (slide.caption && (slide.caption[lang] || slide.caption.ar)) || "";
    el.textContent = text;
    el.style.display = text ? "" : "none";
  }

  function bindImageFallback(img, primarySrc, fallbackSrc) {
    img.src = primarySrc;
    if (!fallbackSrc || fallbackSrc === primarySrc) return;
    img.addEventListener("error", function onErr() {
      if (img.dataset.fallbackTried === "1") return;
      img.dataset.fallbackTried = "1";
      if (img.src !== fallbackSrc) img.src = fallbackSrc;
    });
  }

  function assignHeroSlideImage(img, src, eager, fallback) {
    img.width = 800;
    img.height = 800;
    img.removeAttribute("data-src");
    if (eager) {
      img.loading = "eager";
      img.setAttribute("fetchpriority", "high");
      bindImageFallback(img, src, fallback);
      return;
    }
    img.loading = "lazy";
    img.removeAttribute("fetchpriority");
    if (!img.getAttribute("src")) {
      img.setAttribute("data-src", src);
      if (fallback) img.setAttribute("data-fallback-src", fallback);
      return;
    }
    bindImageFallback(img, src, fallback);
  }

  function loadHeroSlideImageByIndex(index) {
    var img = document.querySelector(
      '#hero-gallery-track img[data-slide-index="' + index + '"]'
    );
    if (!img) return;
    var pending = img.getAttribute("data-src");
    if (!pending) return;
    var fallback = img.getAttribute("data-fallback-src") || null;
    img.removeAttribute("data-src");
    img.removeAttribute("data-fallback-src");
    bindImageFallback(img, pending, fallback);
  }

  function preloadAdjacentHeroSlides(index, total) {
    loadHeroSlideImageByIndex(index);
    if (total > 1) loadHeroSlideImageByIndex((index + 1) % total);
  }

  function initMediaCarousel(root, options) {
    if (!root) return null;
    options = options || {};
    var track = root.querySelector(options.trackSelector || ".media-carousel-track");
    if (!track) return null;
    var slideSelector = options.slideSelector || ".media-carousel-slide";
    var btnPrev = root.querySelector(options.prevSelector || ".media-carousel-prev");
    var btnNext = root.querySelector(options.nextSelector || ".media-carousel-next");
    var thumbsWrap = options.thumbsEl || root.querySelector(".media-carousel-thumbs");
    var autoplayMs = options.autoplayMs != null ? options.autoplayMs : 0;
    var crossfade = !!options.crossfade;
    var scrollSnap = !!options.scrollSnap;
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (crossfade) root.classList.add("media-carousel--crossfade");
    if (scrollSnap) root.classList.add("media-carousel--scroll");

    var index = 0;
    var timer = null;

    function slides() {
      return track.querySelectorAll(slideSelector);
    }

    function thumbButtons() {
      return thumbsWrap ? thumbsWrap.querySelectorAll(".media-carousel-thumb") : [];
    }

    function goTo(i) {
      var slideList = slides();
      var total = slideList.length;
      if (!total) return;
      index = (i + total) % total;
      if (crossfade) {
        track.style.transform = "none";
        for (var s = 0; s < slideList.length; s++) {
          slideList[s].classList.toggle("is-active", s === index);
        }
      } else if (scrollSnap && viewport) {
        track.style.transform = "none";
        var targetSlide = slideList[index];
        if (targetSlide && targetSlide.scrollIntoView) {
          targetSlide.scrollIntoView({ inline: "start", block: "nearest", behavior: reducedMotion ? "auto" : "smooth" });
        }
        for (var sSnap = 0; sSnap < slideList.length; sSnap++) {
          slideList[sSnap].classList.toggle("is-active", sSnap === index);
        }
      } else {
        var isRtl = document.querySelector(".app") &&
          document.querySelector(".app").getAttribute("dir") === "rtl";
        var offset = isRtl ? index : -index;
        track.style.transform = "translateX(" + (offset * 100) + "%)";
        for (var s2 = 0; s2 < slideList.length; s2++) {
          slideList[s2].classList.toggle("is-active", s2 === index);
        }
      }
      var thumbs = thumbButtons();
      for (var t = 0; t < thumbs.length; t++) {
        thumbs[t].classList.toggle("is-active", t === index);
        thumbs[t].setAttribute("aria-selected", t === index ? "true" : "false");
      }
      if (options.onChange) options.onChange(index);
    }

    function step(delta) {
      goTo(index + delta);
    }

    function resetAutoplay() {
      if (timer) clearInterval(timer);
      if (!autoplayMs || reducedMotion || document.hidden) return;
      timer = setInterval(function () { step(1); }, autoplayMs);
    }

    if (btnPrev) btnPrev.addEventListener("click", function () { step(-1); resetAutoplay(); });
    if (btnNext) btnNext.addEventListener("click", function () { step(1); resetAutoplay(); });

    var viewport = root.querySelector(options.viewportSelector || ".media-carousel-viewport");
    if (viewport && scrollSnap) {
      viewport.addEventListener("scroll", function () {
        var slideList = slides();
        var w = viewport.clientWidth;
        if (!w || !slideList.length) return;
        var raw = Math.abs(viewport.scrollLeft) / w;
        var i = Math.round(raw);
        if (i < 0) i = 0;
        if (i >= slideList.length) i = slideList.length - 1;
        if (i === index) return;
        index = i;
        var thumbs = thumbButtons();
        for (var t2 = 0; t2 < thumbs.length; t2++) {
          thumbs[t2].classList.toggle("is-active", t2 === index);
          thumbs[t2].setAttribute("aria-selected", t2 === index ? "true" : "false");
        }
        if (options.onChange) options.onChange(index);
      }, { passive: true });
    }
    if (viewport && !scrollSnap) {
      var touchStartX = 0;
      var touchStartY = 0;
      viewport.addEventListener("touchstart", function (e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        if (timer) clearInterval(timer);
      }, { passive: true });
      viewport.addEventListener("touchend", function (e) {
        var dx = e.changedTouches[0].clientX - touchStartX;
        var dy = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) {
          resetAutoplay();
          return;
        }
        var isRtl = document.querySelector(".app") &&
          document.querySelector(".app").getAttribute("dir") === "rtl";
        if (isRtl) dx = -dx;
        step(dx > 0 ? -1 : 1);
        resetAutoplay();
      }, { passive: true });

      if (window.PointerEvent) {
        var pointerStartX = 0;
        viewport.addEventListener("pointerdown", function (e) {
          if (e.pointerType === "mouse" && e.button !== 0) return;
          pointerStartX = e.clientX;
        });
        viewport.addEventListener("pointerup", function (e) {
          if (e.pointerType === "mouse") return;
          var dx = e.clientX - pointerStartX;
          if (Math.abs(dx) < 40) return;
          var isRtl2 = document.querySelector(".app") &&
            document.querySelector(".app").getAttribute("dir") === "rtl";
          if (isRtl2) dx = -dx;
          step(dx > 0 ? -1 : 1);
          resetAutoplay();
        });
      }
    }

    if (autoplayMs) {
      root.addEventListener("mouseenter", function () {
        if (timer) clearInterval(timer);
      });
      root.addEventListener("mouseleave", resetAutoplay);
      document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
          if (timer) clearInterval(timer);
        } else {
          resetAutoplay();
        }
      });
    }

    goTo(0);
    resetAutoplay();

    return {
      goTo: goTo,
      step: step,
      resetAutoplay: resetAutoplay,
      getIndex: function () { return index; }
    };
  }

  var heroGalleryController = null;

  function buildHeroGallery(manifest) {
    var root = document.getElementById("hero-gallery");
    var track = document.getElementById("hero-gallery-track");
    var thumbs = document.getElementById("hero-gallery-thumbs");
    var dots = document.getElementById("hero-gallery-dots");
    if (!root || !track || !thumbs || !manifest || !manifest.slides) return;

    heroManifestCache = manifest;
    var lang = langs[currentLangIndex];
    var base = manifest.baseUrl || "";
    var prerendered = track.querySelector(".media-carousel-slide");
    var startIndex = prerendered ? 1 : 0;

    if (!prerendered) {
      track.innerHTML = "";
    } else {
      while (track.children.length > 1) {
        track.removeChild(track.lastChild);
      }
    }
    thumbs.innerHTML = "";
    if (dots) dots.innerHTML = "";

    manifest.slides.forEach(function (slide, i) {
      var mainSrc = heroSlideAsset(slide.image, lang, base);
      var thumbSrc = heroSlideAsset(slide.thumb || slide.image, lang, base);
      var fallback = slide.fallback || null;
      var alt = heroSlideAlt(slide, lang);

      if (i >= startIndex) {
        var li = document.createElement("li");
        li.className = "media-carousel-slide" + (i === 0 ? " is-active" : "");
        li.setAttribute("data-slide-id", slide.id);
        var img = document.createElement("img");
        img.alt = alt;
        img.decoding = "async";
        img.setAttribute("data-slide-index", String(i));
        img.setAttribute("data-alt-ar", slide.alt && slide.alt.ar ? slide.alt.ar : "");
        img.setAttribute("data-alt-en", slide.alt && slide.alt.en ? slide.alt.en : "");
        img.setAttribute("data-alt-fr", slide.alt && slide.alt.fr ? slide.alt.fr : "");
        assignHeroSlideImage(img, mainSrc, i === 0, fallback);
        li.appendChild(img);
        track.appendChild(li);
      }

      var thumbBtn = document.createElement("button");
      thumbBtn.type = "button";
      thumbBtn.className = "media-carousel-thumb" + (i === 0 ? " is-active" : "");
      thumbBtn.setAttribute("role", "tab");
      thumbBtn.setAttribute("aria-label", alt || "Slide " + (i + 1));
      thumbBtn.setAttribute("aria-selected", i === 0 ? "true" : "false");
      var thumbImg = document.createElement("img");
      thumbImg.alt = "";
      thumbImg.width = 80;
      thumbImg.height = 80;
      thumbImg.loading = "lazy";
      thumbImg.decoding = "async";
      thumbImg.setAttribute("data-slide-index", String(i));
      bindImageFallback(thumbImg, thumbSrc, fallback);
      thumbBtn.appendChild(thumbImg);
      (function (idx) {
        thumbBtn.addEventListener("click", function () {
          if (heroGalleryController) heroGalleryController.goTo(idx);
          if (heroGalleryController) heroGalleryController.resetAutoplay();
        });
      })(i);
      thumbs.appendChild(thumbBtn);

      if (dots) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.className = "media-carousel-dot" + (i === 0 ? " is-active" : "");
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", "Slide " + (i + 1));
        dot.setAttribute("aria-selected", i === 0 ? "true" : "false");
        (function (idx) {
          dot.addEventListener("click", function () {
            if (heroGalleryController) {
              heroGalleryController.goTo(idx);
              heroGalleryController.resetAutoplay();
            }
          });
        })(i);
        dots.appendChild(dot);
      }
    });

    root.style.setProperty("--hero-thumb-cols", String(manifest.slides.length));

    // Scroll-snap at EVERY width, not just mobile. The translateX path
    // mis-steps under dir=rtl (the active slide lands a full slide-width
    // outside the viewport, so the photo on screen disagrees with the dots).
    // The scroll path reads position via Math.abs(scrollLeft), which is
    // direction-agnostic, so RTL and LTR both land correctly.
    var isMobileCarousel = window.matchMedia("(max-width: 639px)").matches;
    root.classList.add("media-carousel--scroll");

    heroGalleryController = initMediaCarousel(root, {
      slideSelector: ".media-carousel-slide",
      autoplayMs: 0,
      crossfade: false,
      scrollSnap: true,
      onChange: function (idx) {
        preloadAdjacentHeroSlides(idx, manifest.slides.length);
        setHeroCaption(idx);
        if (!dots) return;
        var dotList = dots.querySelectorAll(".media-carousel-dot");
        for (var d = 0; d < dotList.length; d++) {
          dotList[d].classList.toggle("is-active", d === idx);
          dotList[d].setAttribute("aria-selected", d === idx ? "true" : "false");
        }
      }
    });
    preloadAdjacentHeroSlides(0, manifest.slides.length);
    setHeroCaption(heroGalleryController ? heroGalleryController.getIndex() : 0);
  }

  function updateHeroGalleryImages() {
    if (!heroManifestCache || !heroManifestCache.slides) return;
    var lang = langs[currentLangIndex];
    var base = heroManifestCache.baseUrl || "";
    var slideImgs = document.querySelectorAll("#hero-gallery-track img[data-slide-index]");
    var thumbImgs = document.querySelectorAll("#hero-gallery-thumbs img[data-slide-index]");
    heroManifestCache.slides.forEach(function (slide, i) {
      var mainSrc = heroSlideAsset(slide.image, lang, base);
      var thumbSrc = heroSlideAsset(slide.thumb || slide.image, lang, base);
      if (slideImgs[i]) {
        slideImgs[i].dataset.fallbackTried = "";
        if (i === 0 || slideImgs[i].getAttribute("src")) {
          assignHeroSlideImage(slideImgs[i], mainSrc, i === 0, slide.fallback || null);
        } else {
          slideImgs[i].setAttribute("data-src", mainSrc);
        }
      }
      if (thumbImgs[i]) {
        thumbImgs[i].dataset.fallbackTried = "";
        thumbImgs[i].src = thumbSrc;
      }
    });
  }

  function updateHeroGalleryAlts() {
    updateHeroGalleryImages();
    if (heroManifestCache && heroGalleryController) setHeroCaption(heroGalleryController.getIndex());
    var lang = langs[currentLangIndex];
    var imgs = document.querySelectorAll("#hero-gallery-track img[data-alt-ar]");
    for (var i = 0; i < imgs.length; i++) {
      var key = "data-alt-" + lang;
      var alt = imgs[i].getAttribute(key) || imgs[i].getAttribute("data-alt-ar") || "";
      imgs[i].alt = alt;
    }
    var thumbBtns = document.querySelectorAll("#hero-gallery-thumbs .media-carousel-thumb");
    for (var j = 0; j < thumbBtns.length; j++) {
      var slideImg = document.querySelectorAll("#hero-gallery-track img")[j];
      if (slideImg) thumbBtns[j].setAttribute("aria-label", slideImg.alt || "Slide " + (j + 1));
    }
  }

  function initHeroGallery() {
    var root = document.getElementById("hero-gallery");
    if (!root) return;

    buildHeroGallery(HERO_MANIFEST_FALLBACK);
    updateHeroGalleryAlts();

    fetch(HERO_MANIFEST_URL, { cache: "no-cache" })
      .then(function (r) {
        if (!r.ok) throw new Error("manifest fetch failed");
        return r.json();
      })
      .then(function (data) {
        buildHeroGallery(data);
        updateHeroGalleryAlts();
      })
      .catch(function () {});
  }

  function initFaq() {
    var faqItems = document.querySelectorAll(".faq-item");
    for (var i = 0; i < faqItems.length; i++) {
      var btn = faqItems[i].querySelector(".faq-question");
      if (btn) {
        btn.addEventListener("click", function () {
          var currentItem = this.closest(".faq-item");
          var isOpen = currentItem.classList.contains("faq-open");
          var allItems = document.querySelectorAll(".faq-item");

          for (var j = 0; j < allItems.length; j++) {
            allItems[j].classList.remove("faq-open");
            var q = allItems[j].querySelector(".faq-question");
            if (q) q.setAttribute("aria-expanded", "false");
          }

          if (!isOpen) {
            currentItem.classList.add("faq-open");
            this.setAttribute("aria-expanded", "true");
          }
        });
      }
    }
  }

  function initCustomCheckout() {
    var form = document.getElementById("custom-express-checkout-form");
    var submitBtn = document.querySelector("#checkout-section .btn-submit") ||
                  document.querySelector("#checkout-section button[type='submit']");
    if (!form || !submitBtn) return;


    // ---- standalone order submission (Cloudflare Pages Function) ----
    // Replaces the old YouCan native-form puppet. Captures utm/fbclid once
    // (first touch wins, survives in sessionStorage) for per-ad attribution.
    var ATTR_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_data", "fbclid"];
    (function captureAttribution() {
      try {
        var qs = new URLSearchParams(window.location.search || "");
        for (var i = 0; i < ATTR_KEYS.length; i++) {
          var k = ATTR_KEYS[i], v = qs.get(k);
          if (v && !sessionStorage.getItem("lh_" + k)) sessionStorage.setItem("lh_" + k, v);
        }
      } catch (err) { /* storage blocked — attribution degrades gracefully */ }
    })();

    function attributionPayload() {
      var out = {};
      try {
        for (var i = 0; i < ATTR_KEYS.length; i++) {
          var v = sessionStorage.getItem("lh_" + ATTR_KEYS[i]);
          if (v) out[ATTR_KEYS[i]] = v;
        }
      } catch (err) {}
      return out;
    }

    // Support line shown after ordering. wa.me wants digits only, no + or spaces.
    var WHATSAPP_LINK = "https://wa.me/212713899778";
    var WHATSAPP_DISPLAY = "+212 713-899778";

    function showOrderSuccess(name) {
      var card = document.querySelector("#checkout-section .order-card") ||
                 document.getElementById("checkout-section");
      if (!card) { return; }
      var l = langs[currentLangIndex];
      var who = String(name || "").replace(/[&<>"]/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
      });
      // Post-order copy has a different job than pre-order copy: reinforce the
      // choice, set a concrete arrival window, and open a channel for questions.
      // It no longer repeats "you only pay on delivery" — before ordering that
      // removes risk, after ordering it just reminds them that backing out is
      // free. The call window is "today or tomorrow" because agents don't always
      // reach same-day and a missed promise costs more than a vaguer one.
      var msg = {
        ar: { h: "مبروك " + who + " طلبك سجل لدينا",
              p: "غادي نتاصلو بك اليوم أو غدا باش نأكدو معلوماتك<br>" +
                 "الطلبية ستتوصلون بها في يومين إلى 3 أيام<br>" +
                 "لكل تساؤل أو إستفسار تواصلوا معنا ف Whatsapp" },
        fr: { h: "Félicitations " + who + ", votre commande est enregistrée",
              p: "Nous vous appelons aujourd'hui ou demain pour confirmer vos informations.<br>" +
                 "Vous recevrez votre commande sous 2 à 3 jours.<br>" +
                 "Pour toute question, contactez-nous sur WhatsApp" },
        en: { h: "Congratulations " + who + ", your order is registered",
              p: "We'll call you today or tomorrow to confirm your details.<br>" +
                 "Your order arrives in 2 to 3 days.<br>" +
                 "For any question, reach us on WhatsApp" }
      };
      var t = msg[l] || msg.ar;
      card.innerHTML =
        '<div class="order-success" style="padding:32px 20px;text-align:center;">' +
        '<h3 style="margin:0 0 10px;">' + t.h + "</h3>" +
        '<p style="margin:0 0 18px;opacity:.85;">' + t.p + "</p>" +
        // dir=ltr so the number renders correctly inside the RTL card
        '<a href="' + WHATSAPP_LINK + '" target="_blank" rel="noopener"' +
        ' style="display:inline-flex;align-items:center;gap:8px;background:#25D366;' +
        'color:#fff;font-weight:600;text-decoration:none;padding:12px 22px;' +
        'border-radius:999px;line-height:1;">' +
        '<svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
        '<path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07s.89 2.4 1.02 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29z"/>' +
        "</svg>" +
        '<span dir="ltr">' + WHATSAPP_DISPLAY + "</span></a></div>";
      try { card.scrollIntoView({ behavior: "smooth", block: "center" }); } catch (err) {}
    }

    function submitOrder(payload, onDone, onFail) {
      fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).then(function (r) {
        if (!r.ok) throw new Error("order api " + r.status);
        return r.json();
      }).then(function () { onDone(); })
        .catch(function () { onFail(); });
    }

    form.addEventListener("input", function (e) {
      if (e.target && e.target.closest) {
        var group = e.target.closest(".form-group, .premium-field");
        if (group && group.classList.contains("has-error")) {
          group.classList.remove("has-error");
          var errEl = group.querySelector(".error-msg");
          if (errEl) errEl.remove();
        }
      }
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (submitBtn.disabled) return;

      var hasError = false;
      var fieldsToValidate = ["first_name", "phone",
        "extra_fields[custom_field_cGzlrqWxXctNnheN]", "region"];
      for (var i = 0; i < fieldsToValidate.length; i++) {
        var name = fieldsToValidate[i];
        var input = form.querySelector('[name="' + name + '"]');
        if (input && !input.value.trim()) {
          hasError = true;
          var parent = input.closest(".form-group, .premium-field");
          if (parent) {
            parent.classList.add("has-error");
            var errEl = parent.querySelector(".error-msg");
            if (!errEl) {
              errEl = document.createElement("div");
              errEl.className = "error-msg";
              parent.appendChild(errEl);
            }
            var l = langs[currentLangIndex];
            errEl.textContent = l === "ar" ? "مطلوب" : l === "fr" ? "Requis" : "Required";
          }
        }
      }

      // Phone must be a reachable Moroccan number — for COD a bad phone is a
      // dead order. Accepts 06/05/07 local formats plus +212 / 00212 prefixes,
      // and normalizes them to the local 0XXXXXXXXX form.
      var phoneInput = form.querySelector('[name="phone"]');
      if (phoneInput && phoneInput.value.trim()) {
        var digits = phoneInput.value.replace(/\D/g, "");
        if (digits.indexOf("00212") === 0) digits = "0" + digits.slice(5);
        else if (digits.indexOf("212") === 0 && digits.length === 12) digits = "0" + digits.slice(3);
        if (!/^0[5-7]\d{8}$/.test(digits)) {
          hasError = true;
          var pParent = phoneInput.closest(".form-group, .premium-field");
          if (pParent) {
            pParent.classList.add("has-error");
            var pErr = pParent.querySelector(".error-msg");
            if (!pErr) {
              pErr = document.createElement("div");
              pErr.className = "error-msg";
              pParent.appendChild(pErr);
            }
            var pl = langs[currentLangIndex];
            pErr.textContent = pl === "ar"
              ? "رقم غير صحيح، مثال: 0612345678"
              : pl === "fr"
                ? "Numéro invalide, ex : 0612345678"
                : "Invalid number, e.g. 0612345678";
          }
        } else if (phoneInput.value !== digits) {
          phoneInput.value = digits;
        }
      }

      if (hasError) return;

      // one event_id shared by the browser pixel + server CAPI -> Meta dedupes
      var eventId = "lh_" + Date.now() + "_" + Math.random().toString(36).slice(2, 10);
      var getVal = function (n) {
        var el = form.querySelector('[name="' + n + '"]');
        return el ? el.value.trim() : "";
      };
      var payload = {
        name: getVal("first_name"),
        phone: getVal("phone"),
        city: getVal("extra_fields[custom_field_cGzlrqWxXctNnheN]"),
        address: getVal("region"),
        lang: langs[currentLangIndex],
        event_id: eventId,
        page: window.location.pathname,
        // Server-side whitelist key -> product "LureHer Night+Day", price 249.
        // The server never trusts a client-sent price, only this key.
        pack: "night-day-249",
        attribution: attributionPayload()
      };

      submitBtn.disabled = true;
      submitBtn.classList.add("loading");

      submitOrder(payload, function onDone() {
        try {
          if (typeof fbq === "function") {
            // Advanced matching: re-init with the buyer's details so the browser
            // Lead carries the same match keys the CAPI event sends (fbevents.js
            // hashes these itself — pass them raw). Phone must match the server's
            // E.164 digits ("212" + local number without its leading 0).
            if (window.LH_PIXEL_ID) {
              fbq("init", window.LH_PIXEL_ID, {
                ph: "212" + payload.phone.slice(1),
                fn: payload.name.toLowerCase(),
                ct: payload.city.toLowerCase().replace(/\s+/g, ""),
                country: "ma"
              });
            }
            fbq("track", "Lead", { currency: "MAD", value: 249 }, { eventID: eventId });
          }
        } catch (err) {}
        showOrderSuccess(payload.name);
      }, function onFail() {
        submitBtn.disabled = false;
        submitBtn.classList.remove("loading");
        var l = langs[currentLangIndex];
        alert(l === "ar" ? "وقع مشكل تقني. عاود المحاولة من فضلك." :
              l === "fr" ? "Erreur technique. Merci de réessayer." :
              "Technical error. Please try again.");
      });
    });
  }

  function syncFormLabelsFromYouCan() {
    return; // standalone: no YouCan to mirror — statics are the source of truth
    var native = document.querySelector("#app #express-checkout-form") ||
      document.querySelector(".express-checkout-form-section form") ||
      document.querySelector("[data-pb-type='single-product'] form");
    var form = document.getElementById("custom-express-checkout-form");
    if (!native || !form) return;

    // YouCan's native fields are Arabic. Only mirror them when the page is Arabic;
    // otherwise keep the localized (e.g. French) placeholders from the i18n dictionary.
    if (langs[currentLangIndex] === "ar") {
    var nativeGroups = native.querySelectorAll(".form-group");
    for (var g = 0; g < nativeGroups.length; g++) {
      var group = nativeGroups[g];
      var label = group.querySelector(".form-label");
      var input = group.querySelector("input:not([type='hidden']), select, textarea");
      if (!input) continue;
      var name = input.getAttribute("name");
      if (!name) continue;
      var ours = form.querySelector('[name="' + name + '"]');
      if (!ours) continue;
      var labelText = label ? label.textContent.replace(/:\s*$/, "").trim() : "";
      var ph = input.getAttribute("placeholder") || labelText;
      if (ph) ours.setAttribute("placeholder", ph);
      var ourLabel = ours.closest(".premium-field, .form-group");
      if (ourLabel) {
        var lbl = ourLabel.querySelector(".field-label");
        if (lbl && labelText) lbl.textContent = labelText;
      }
    }
    }

    var nativeId = native.querySelector('input[name="id"]');
    var ourId = form.querySelector('input[name="id"]');
    if (nativeId && ourId && nativeId.value) ourId.value = nativeId.value;
  }

  function parsePriceNum(text) {
    if (!text) return null;
    var m = String(text).match(/[\d]+(?:[.,]\d+)?/);
    if (!m) return null;
    return parseFloat(m[0].replace(",", "."));
  }

  function syncPricesFromYouCan() {
    // standalone: KILLED — this scanner used to mirror YouCan's product price;
    // without a native store it scraped OUR OWN anchor text and overwrote the
    // real price displays (the "form shows the strike price" bug, 2026-07-17).
    return;
    var nativeRoot = document.getElementById("app") || document.body;
    var priceText = "";
    var compareText = "";
    var selectors = [
      ".express-checkout-form-section .product-price",
      ".single-product-price",
      "[class*='product-price']",
      "[class*='ProductPrice']",
      ".price-current",
      ".final-price"
    ];
    for (var i = 0; i < selectors.length && !priceText; i++) {
      var el = nativeRoot.querySelector(selectors[i]);
      if (el && el.textContent.trim() && !el.closest("#v34-root")) priceText = el.textContent.trim();
    }
    if (!priceText) {
      var nodes = nativeRoot.querySelectorAll("h2, h3, span, div, p");
      for (var j = 0; j < nodes.length; j++) {
        if (nodes[j].closest("#v34-root")) continue;
        var t = nodes[j].textContent.trim();
        if (t.length < 24 && /(\d[\d\s.,]*)\s*(درهم|MAD|د\.?\s*م)/i.test(t)) {
          priceText = t;
          break;
        }
      }
    }
    var compareSelectors = [".compare-price", ".was-price", ".old-price", "[class*='compare']", ".price-before"];
    for (var k = 0; k < compareSelectors.length; k++) {
      var cel = nativeRoot.querySelector(compareSelectors[k]);
      if (cel && cel.textContent.trim() && !cel.closest("#v34-root")) {
        compareText = cel.textContent.trim();
        break;
      }
    }

    var display = document.getElementById("display-price");
    var compareEl = document.getElementById("compare-price-display");
    var savingsEl = document.getElementById("savings-display");
    var finalPrice = document.querySelector(".final-display-price");
    var finalCompare = document.querySelector(".final-compare-price");
    var finalSavings = document.querySelector(".final-savings-tag");
    var stickyPrice = document.querySelector(".sticky-price span:last-child") ||
      document.querySelector(".sticky-price");

    var lang = langs[currentLangIndex];
    function formatPrice(num) {
      return lang === "ar" ? num + " درهم" : num + " DH";
    }

    var cur = parsePriceNum(priceText);
    var cmp = parsePriceNum(compareText);
    // YouCan's price text is Arabic-only ("189 درهم") — re-render the numbers in
    // the page language. When the native store hasn't rendered (or has no
    // compare-at price), fall back to the numbers already on the page so the
    // 250→189 anchor survives; it still only shows when anchor > actual price.
    if (!cur && display) cur = parsePriceNum(display.textContent);
    if (!cmp && compareEl) cmp = parsePriceNum(compareEl.textContent);

    var curText = cur ? formatPrice(cur) : priceText;
    if (curText) {
      if (display) display.textContent = curText;
      if (finalPrice) finalPrice.textContent = curText;
      if (stickyPrice && stickyPrice.tagName === "SPAN") stickyPrice.textContent = curText;
      else if (stickyPrice) {
        var spans = stickyPrice.querySelectorAll("span");
        if (spans.length > 1) spans[spans.length - 1].textContent = curText;
      }
    }

    var showCompare = cmp && cur && cmp > cur;

    function setCompare(el, on, text) {
      if (!el) return;
      if (on) {
        el.textContent = text;
        el.hidden = false;
        el.classList.remove("is-hidden");
      } else {
        el.hidden = true;
        el.classList.add("is-hidden");
      }
    }
    function setSavings(el, on, saved, pct) {
      if (!el) return;
      if (on) {
        el.textContent = lang === "ar"
          ? "وفّرت " + saved + " درهم (" + pct + "%)"
          : lang === "fr"
            ? "Économie " + saved + " DH (" + pct + "%)"
            : "You save " + saved + " DH (" + pct + "%)";
        el.hidden = false;
        el.classList.remove("is-hidden");
      } else {
        el.hidden = true;
        el.classList.add("is-hidden");
      }
    }

    if (showCompare) {
      var saved = Math.round(cmp - cur);
      var pct = Math.round((saved / cmp) * 100);
      setCompare(compareEl, true, formatPrice(cmp));
      setCompare(finalCompare, true, formatPrice(cmp));
      setSavings(savingsEl, true, saved, pct);
      setSavings(finalSavings, true, saved, pct);
    } else {
      setCompare(compareEl, false);
      setCompare(finalCompare, false);
      setSavings(savingsEl, false);
      setSavings(finalSavings, false);
    }
  }


  function computeDeterministicStock() {
    var MIN = 9;
    var DROP_PER_DAY = 3;
    var CYCLE_DAYS = 10;
    var dayIndex = Math.floor(Date.now() / 86400000);
    var cycleIndex = Math.floor(dayIndex / CYCLE_DAYS);
    var dayInCycle = dayIndex - cycleIndex * CYCLE_DAYS;

    var seed = Math.sin(cycleIndex * 127.13 + 11.7) * 10000;
    var rnd = seed - Math.floor(seed);
    var startMax = 30 + Math.floor(rnd * 6);
    var n = startMax - dayInCycle * DROP_PER_DAY;
    return n < MIN ? MIN : n;
  }

  function initStockTicker() {
    window.__V34_STOCK_COUNT = computeDeterministicStock();
    updateStockLabels(window.__V34_STOCK_COUNT);
  }

  // Varone-style marquee announce bar: one continuous scrolling track.
  // Content is duplicated so the -50% translateX loop is seamless; the CSS
  // animation lives in .announce-track (styles.css).
  function initAnnounceRotator() {
    var el = document.getElementById("announce-static");
    if (!el) return;

    function render() {
      var l = langs[currentLangIndex];
      // No stock counter here: the hero pill owns stock scarcity. Marquee owns
      // the offer window + brand + COD, one claim each, no doubling.
      var items = [
        (I18N.announce_ship && I18N.announce_ship[l]) || "",
        (I18N.announce_official && I18N.announce_official[l]) || "",
        (I18N.announce_guarantee && I18N.announce_guarantee[l]) || "",
        (I18N.announce_brand && I18N.announce_brand[l]) || "",
        (I18N.announce_occasion && I18N.announce_occasion[l]) || "",
        (I18N.announce_cod && I18N.announce_cod[l]) || ""
      ];
      var seq = items.filter(Boolean).map(function (t) {
        return '<span class="announce-item">' + t + "</span>";
      }).join('<span class="announce-sep" aria-hidden="true">·</span>');
      // duplicated once: the keyframes travel exactly half the track width
      el.innerHTML =
        '<div class="announce-track">' +
        '<div class="announce-seq">' + seq +
        '<span class="announce-sep" aria-hidden="true">·</span></div>' +
        '<div class="announce-seq" aria-hidden="true">' + seq +
        '<span class="announce-sep" aria-hidden="true">·</span></div>' +
        "</div>";
    }

    render();
    window.__V34_REFRESH_ANNOUNCE = render;
  }

  function loadDeferredLangAssets(lang) {
    if (lang === DEFAULT_LANG) return;
    var imgs = document.querySelectorAll(".img-" + lang);
    for (var i = 0; i < imgs.length; i++) {
      if (imgs[i].dataset.deferredSrc && !imgs[i].getAttribute("src")) {
        imgs[i].setAttribute("src", imgs[i].dataset.deferredSrc);
      }
    }
  }

  function initLazySections() {
    var sels = ["#trust-band", "#ba-section", "#benefits-section", "#why-section", "#coffret-section", ".reviews-section", "#faq-section"];
    for (var i = 0; i < sels.length; i++) {
      var el = document.querySelector(sels[i]);
      if (el) el.setAttribute("data-lazy-section", "");
    }
    if (!("IntersectionObserver" in window)) return;
    var obs = new IntersectionObserver(function (entries) {
      for (var j = 0; j < entries.length; j++) {
        if (entries[j].isIntersecting) entries[j].target.classList.add("is-visible");
      }
    }, { rootMargin: "180px 0px" });
    var lazy = document.querySelectorAll("[data-lazy-section]");
    for (var k = 0; k < lazy.length; k++) obs.observe(lazy[k]);
  }

  function injectPageSeoMeta() {
    var desc = {
      ar: "باك LureHer الكامل، Night للجاذبية وDay للحضور. جوج عطور 50ml أصليين بـ249 درهم، ثبات أكثر من 8 ساعات، الدفع عند الاستلام وتوصيل مجاني في المغرب.",
      en: "The complete LureHer pack, Night for attraction and Day for presence. Two original 50ml perfumes for 249 DH, 8+ hour longevity, cash on delivery and free shipping in Morocco.",
      fr: "Le pack LureHer complet, Night pour l'attraction et Day pour la présence. Deux parfums originaux de 50ml à 249 DH, plus de 8 h de tenue, paiement à la livraison et livraison gratuite au Maroc."
    };
    var l = langs[currentLangIndex];
    var content = desc[l] || desc.ar;
    var m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    if (!m.content || m.content === "test2" || m.content.length < 12) m.content = content;
  }

  function handleHashRoute() {
    // Landing (with the order form) is the default for ANY hash — old ad links
    // carry junk anchors like #PBS-xxxx and must still land on the form.
    // The teaser home view only shows when explicitly requested via #home.
    var hash = window.location.hash || '#landing';
    var views = document.querySelectorAll('.view-container');
    for (var i = 0; i < views.length; i++) {
      views[i].style.display = 'none';
    }

    if (hash === '#home') {
      var home = document.getElementById('view-home');
      if (home) home.style.display = 'block';
    } else {
      var landing = document.getElementById('view-landing');
      if (landing) landing.style.display = 'block';
    }

    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", handleHashRoute);

  function init() {
    injectPageSeoMeta();
    applyLang(currentLangIndex);
    handleHashRoute();
    handleScroll();
    initLazySections();
    initStockTicker();
    initAnnounceRotator();
    initHeroGallery();
    initStickyCta();
    initCustomCheckout();
    syncPricesFromYouCan();
    syncFormLabelsFromYouCan();
    setTimeout(syncPricesFromYouCan, 800);
    setTimeout(syncFormLabelsFromYouCan, 800);
    setTimeout(syncPricesFromYouCan, 2500);
    setTimeout(syncFormLabelsFromYouCan, 2500);
    initFaq();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();

// cache-bump 2
