# Lure Her — Website Copy

**Source of truth for all page text.** Edit this file first, then sync to `src/script.js` (`I18N` object).

| | |
|---|---|
| **Brand / product name** | **Lure Her** |
| **"Magnétique"** | Adjective only (= magnetic / attractive). **Never** a product or brand name. |
| **Default language** | Arabic (`ar`) — Darija |
| **Languages** | `fr` · `ar` · `en` |
| **Keys** | Match `data-i18n="…"` in `src/page.html` |

### Pricing

| Compare | Sale | Savings | Gift |
|---------|------|---------|------|
| 250 DH | 189 DH | 61 DH | Free 10ml (mystery — shown as silhouette) |

### Copy rules

1. Product is always **Lure Her**, never "MAGNÉTIQUE".
2. **Never** mention inspiration recipes (Eros, Bianco Latte, Layton, Versace, etc.) — keep the formula mysterious.
3. Gift = **10ml offert** — do not reveal what it is; visual = black cylinder silhouette + red ribbon.

---

## S0 — Announce bar

### `announce`
**fr:** ✓ Paiement à la livraison · 🚚 Livraison gratuite partout au Maroc  
**ar:** ✓ الدفع عند الاستلام · 🚚 توصيل مجاني في كل المغرب  
**en:** ✓ Cash on delivery · 🚚 Free shipping across Morocco  

### `announce_stock` — `{n}` = dynamic stock count
**fr:** 🔥 Plus que **{n}** pièces  
**ar:** 🔥 ما بقاوش غير **{n}** قطعة  
**en:** 🔥 Only **{n}** pieces left  

---

## Nav

### `brand_sub` — **fr/ar/en:** PARFUM
### `nav_shop` — **fr:** Commander · **ar:** اطلب الآن · **en:** Order Now

---

## Home view (`#home`)

### `home_hero_h` — **fr/ar/en:** Lure Her
### `home_hero_sub`
**fr:** Le parfum auquel elle ne pourra pas résister.  
**ar:** العطر اللي ما غاديش تقدر تقاوموا.  
**en:** The perfume she won't be able to resist.  
### `home_cta` — **fr:** Découvrir le parfum · **ar:** اكتشف العطر · **en:** Discover the scent

---

## S1 — Hero (form column)

### `hero_badge` — **fr/ar/en:** Lure Her

### `land_hero_h`
**fr:** Le parfum auquel elle ne pourra pas résister  
**ar:** العطر اللي ما غاديش تقدر تقاوموا  
**en:** The perfume she won't be able to resist  

### `land_hero_sub`
**fr:** Un parfum magnétique — exclusif, puissant et irrésistible.  
**ar:** عطر مغناطيسي — حصري، قوي ومثير للإغراء.  
**en:** A magnetic scent — exclusive, powerful and irresistible.  

### `gift_note`
**fr:** 🎁 Avec chaque commande : 10ml offert en cadeau  
**ar:** 🎁 مع كل طلب: 10ml هدية مجانية  
**en:** 🎁 With every order: free 10ml gift  

### `price_subnote`
**fr:** Le luxe des parfums à plus de 1 000 DH — pour 189 DH  
**ar:** فخامة عطور بأكثر من 1000 درهم — بـ 189 درهم  
**en:** The luxury of 1,000+ DH perfumes — for 189 DH  

### `savings_tag` — **fr:** Économisez 61 DH · **ar:** وفّرت 61 درهم · **en:** You save 61 DH

### Checkout badges
- **`ct_ship`:** Livraison gratuite / توصيل مجاني / Free delivery
- **`trust_cod`:** Paiement à la livraison / الدفع عند الاستلام / Cash on Delivery
- **`ct_guarantee`:** 100% authentique / أصلي 100% / 100% authentic

### Form
- **`form_name` / `form_name_ph`:** Nom complet / الإسم الكامل / Full Name
- **`form_phone` / `form_phone_ph`:** Numéro de téléphone / رقم الهاتف / Phone Number
- **`form_city` / `form_city_ph`:** Ville / المدينة / City
- **`form_address` / `form_address_ph`:** Adresse / العنوان / Address
- **`form_secure`:** Vos informations sont sécurisées / معلوماتك آمنة ومحمية / Your information is safe and secure
- **`submit_order`:** 🛒 COMMANDER — Paiement à la livraison / 🛒 اطلب الآن — الدفع عند الاستلام / 🛒 ORDER — Cash on delivery

---

## S2 — Trust band (single guarantee)

### `guarantee_title`
**fr:** Payez seulement après avoir testé  
**ar:** خلّص فقط من بعد ما تجرّب  
**en:** Pay only after you've tested it  

### `guarantee_sub`
**fr:** Vous le voyez, vous le sentez, et s'il ne vous plaît pas — vous le retournez, sans souci. Paiement à la livraison.  
**ar:** تشوف العطر، تشمّو، وإيلا ما عجبكش — ترجعو بلا أي مشكل. الدفع عند الاستلام.  
**en:** See it, smell it, and if you don't like it — send it back, no hassle. Cash on delivery.  

### Meta (below guarantee text — not redundant chips)
- **`guarantee_meta_1`:** Livraison en 2 à 4 jours partout au Maroc / توصيل من 2 إلى 4 أيام في كل المغرب / Delivery in 2–4 days across Morocco
- **`guarantee_meta_2`:** 10ml offert avec chaque commande / 10ml هدية مجانية مع كل طلب / Free 10ml gift with every order

---

## S3 — Comparison (VS creative)

### `reframe_eyebrow` — Pourquoi nous sommes différents / علاش حنا مختلفين / Why we're different

### `reframe_h`
**fr:** Un seul qui fonctionne vaut mieux que cinq qui ne font rien  
**ar:** وحدة كتخدم خير من خمسة ما كيديرو والو  
**en:** One that works beats five that do nothing  

### `reframe_p1`
**fr:** Ces parfums bon marché vendus 5 pour 200 ? Ils sentent l'alcool, s'évaporent en une heure et ne produisent aucun effet.  
**ar:** هاد العطور الرخيصة اللي كيبيعو 5 بـ200؟ كيبانو ريحة الكحول، كيطيرو فساعة، وما كيديرو حتى تأثير.  
**en:** Those cheap perfumes sold 5 for 200? They smell of alcohol, fade in an hour and produce no effect.  

### `reframe_p3`
**fr:** Ce n'a jamais été une question de quantité. C'est une question de parfum qui fait vraiment effet.  
**ar:** ماشي مسألة كمية. مسألة عطر كيدير تأثير بصح.  
**en:** It was never about quantity. It's about a perfume that actually works.  

### VS labels
- **`vs_us_label`:** Lure Her
- **`vs_them_label`:** Contrefaçons & parfums 5 pour 200 / المقلّدات والعطور الرخيصة 5 بـ200 / Fakes & cheap perfumes, 5 for 200
- **`vs_them_short`:** Les autres / الباقي / The rest

### VS table
| Key | fr | ar | en |
|-----|----|----|-----|
| `vs_f1` | Forte concentration d'huiles authentiques | تركيز عالي من الزيوت الأصلية | High concentration of authentic oils |
| `vs_f2` | Tient toute la journée | ثبات يدوم طول اليوم | Lasts all day long |
| `vs_f3` | Logo UV DTF imprimé sur le flacon | شعار UV DTF مطبوع على القنينة | UV DTF logo printed on the bottle |
| `vs_f4` | 10ml offert avec chaque commande | 10ml هدية مع كل طلب | Free 10ml gift with every order |

**Images:** Win side = real Lure Her bottle · Lose side = `images/compare/fakes-pile.png` (fake Lure Her copies + generic bottles)

---

## S4 — Benefits

### `ben_eyebrow` — Les bénéfices / الفوائد / The benefits
### `land_benefits_h` — Ce que Lure Her vous apporte / شنو كيوفّر ليك Lure Her / What Lure Her gives you

| Key | Title (fr) | Sub (fr) |
|-----|-----------|----------|
| `ben_1` | Un parfum irrésistible | Un sillage qui fait demander ce que vous portez. |
| `ben_2` | De la confiance dès la première vaporisation | Vous sentez la différence dès la vaporisation. |
| `ben_3` | Masculin, frais et raffiné | Une formule exclusive à forte concentration. |
| `ben_4` | Le vrai effet, dans l'étreinte | Conçu pour les moments rapprochés qui marquent. |

*(Full ar/en strings in `src/script.js`)*

---

## S5 — Proof / characteristics

### `proof_h` — La qualité que l'écran ne peut pas sentir / الجودة اللي الشاشة ما تقدرش تشمّها / The quality the screen can't smell

| Key | fr |
|-----|-----|
| `proof_1` | Logo UV DTF imprimé sur le flacon — pas un autocollant qui se décolle comme les contrefaçons |
| `proof_2` | Forte concentration d'huiles authentiques = tient toute la journée |
| `proof_4` | Sans odeur d'alcool |

> **`proof_3` removed** — no recipe / inspiration copy.

---

## S6 — Coffret / what you receive

### `box_h` — Chaque commande contient deux parfums / كل طلب فيه عطرين / Every order contains two perfumes

| Key | fr | ar |
|-----|-----|-----|
| `box_1_title` | Lure Her | Lure Her |
| `box_1_sub` | 50ml — puissant et magnétique | 50ml — قوي ومغناطيسي |
| `box_2_title` | 10ml — cadeau offert | 10ml — هدية مجانية |
| `box_2_sub` | Une surprise exclusive avec chaque commande | مفاجأة حصرية مع كل طلب |
| `box_foot` | Les deux ensemble pour seulement 189 DH | الزوج كامل بـ 189 درهم فقط |
| `box_cta` | 🛒 Commander | 🛒 اطلب الآن |

**Image:** `images/hero/04-gift.png` — real 50ml bottle + mysterious black cylinder silhouette with red gift ribbon.

---

## S7 — Reviews

### `rev_title` — Ils ont essayé Lure Her / جرّبو Lure Her / They tried Lure Her
### `rev_sub` — +2 000 commandes livrées au Maroc / +2000 طلبية وصلات للمغرب / +2,000 orders delivered in Morocco

Reviews 1–4: Youssef (Casablanca), Anas (Marrakech), Mehdi (Tanger), Reda (Agadir) — see `src/script.js` for full text. Review 4 mentions **10ml gift**, not PRESTIGE.

---

## S8 — FAQ

| Q | A (fr summary) |
|---|----------------|
| `faq_q1` Authentic? | Oui — formule exclusive à forte concentration, logo UV imprimé. Aucune contrefaçon. |
| `faq_q2` Duration? | Forte concentration d'huiles = tient toute la journée. |
| `faq_q3` Payment? | Paiement à la livraison — payez une fois le parfum en main. |
| `faq_q4` Delivery? | Livraison gratuite, 2–4 jours au Maroc. |
| `faq_q5` Return? | Essayez — si ça ne vous plaît pas, renvoyez sans souci. |

---

## S9 — Final CTA

### `fcta_h` — Un seul parfum peut tout changer / عطر واحد يقدر يبدّل كلشي / One perfume can change everything
### `fcta_offer`
**fr:** Lure Her 50ml + 10ml offert · 250 DH → 189 DH · Paiement à la livraison · Livraison gratuite  
**ar:** Lure Her 50ml + 10ml هدية · 250 درهم ← 189 درهم · الدفع عند الاستلام · توصيل مجاني  
**en:** Lure Her 50ml + free 10ml gift · 250 DH → 189 DH · Cash on delivery · Free shipping  

### `fcta_stock` — 🔥 Plus que 30 pièces / 🔥 ما بقاوش غير 30 قطعة / 🔥 Only 30 pieces left

---

## Sticky CTA

- **`sticky_name`:** Lure Her
- **`sticky_price`:** 189 DH / 189 درهم
- **`sticky_cta`:** Commander / اطلب الآن / Order Now

---

## SEO meta (`injectPageSeoMeta` in script.js)

**fr:** Lure Her — un parfum magnétique pour homme qui tient toute la journée, avec 10ml offert. Paiement à la livraison, livraison gratuite au Maroc à 189 DH.  
**ar:** Lure Her — عطر مغناطيسي كيدوم طول اليوم، مع 10ml هدية. الدفع عند الاستلام وتوصيل مجاني في المغرب بـ 189 درهم.  
**en:** Lure Her — a magnetic men's perfume that lasts all day, with a free 10ml gift. Cash on delivery, free shipping in Morocco for 189 DH.

---

## Sync checklist

1. Edit this file.
2. Mirror changes in `src/script.js` → `I18N`.
3. Update Arabic fallbacks in `src/page.html` (`data-i18n` elements).
4. Push to `main`.
