# Hismile V34 — Requirement Sheet & Validation

Consolidated from `new issues.txt`, `newissues2.txt`, `newissues3.txt`, `newissues4.txt`
plus the two latest live asks. Each row: requirement → current status → where it lives.

Status legend: **DONE** = implemented & verified in code · **PARTIAL** = partly done / needs polish ·
**OPEN** = not done / must verify on live · **N/A** = obsolete or superseded.

---

## A. Layout & scaling (phone-first)

| # | Requirement | Status | Evidence / Notes |
|---|-------------|--------|------------------|
| A1 | Nothing squished on phone — sections fill the screen width | DONE | `@media(max-width:639px)` full-width `.section-container`, `overflow-x: clip` |
| A2 | Hero = images on top, form sticks out below, guarantees under form; form visible from top | DONE | `#view-landing` order: gallery → `#checkout-section`; hero text hidden on mobile |
| A3 | Images are the FIRST thing seen (no big white space above) | DONE | carousel `aspect-ratio:595/856`, hero `padding-top:0` |
| A4 | Form takes the WHOLE screen width on phone; on desktop capped to phone width | DONE | `<640` card full-bleed (padding moved to inner sections); `≥640` capped `--checkout-phone-w:430px` |
| A5 | Hero carousel = drag/side-by-side scroll on phone, not fade | DONE | `isMobileCarousel → media-carousel--scroll`, `crossfade:false`, scroll-snap |
| A6 | Can scroll page freely while over the before/after slider | DONE | slider uses pointer events, `touch-action: pan-y` on viewport |
| A7 | Prev/next arrows hidden on phone | DONE | `.media-carousel-btn{display:none}` `<640` |

## B. Checkout / form

| # | Requirement | Status | Evidence / Notes |
|---|-------------|--------|------------------|
| B1 | Remove the "Complete your order" headline above form | DONE | `.checkout-headline{display:none}` |
| B2 | Field size ~70% of original, tighter gaps, more top margin | DONE | compact field `min-height:36px`, `premium-form gap:8px`, `padding-top:36px` |
| B3 | Top-of-form purple gradient must not break — use solid | DONE | `.order-card-top{background:#faf7ff}` (no gradient) |
| B4 | Remove mirror/reflection effect under form | DONE | no reflection rule present |
| B5 | Guarantees: under the price, before fields; title only | DONE | `.checkout-assurance--inline` inside card; subtitles hidden |
| B6 | Guarantee copy: توصيل مجاني و سريع / الدفع عند الاستلام / ضمان استرجاع الأموال | DONE | `ct_ship` combined; `trust_cod`; `ct_guarantee` |
| B7 | Guarantees must stand out (dark bg, white text) — not stale gray | DONE | inline strip `linear-gradient(#5b009e→#3a0068)`, white text |
| B8 | Remove shopping-bag icon from order button | DONE | icon span removed from submit button |
| B9 | Button icon padding not flush to edge | DONE | label `flex:0 1 auto`, padded `btn-full` |
| B10 | Remove the 350 compare price; pull real price (and compare if present) from YouCan | DONE | `syncPricesFromYouCan()`; compare hidden unless found |
| B11 | Pull field labels/placeholders from YouCan express-checkout form | DONE | `syncFormLabelsFromYouCan()` |
| B12 | All buttons must NOT show "Send" | OPEN | Our button uses `data-i18n="submit_order"`; native `#app` hidden by loader. **Verify on live after re-paste**; defensive label enforcement added |

## C. Nav / header / announce bar

| # | Requirement | Status | Evidence / Notes |
|---|-------------|--------|------------------|
| C1 | Logo minuscule, from `images/logos/`, resized so it's light | DONE | `logo_text.webp` (~2KB) |
| C2 | Logo must not stick out of the bar; bar a bit taller | DONE | nav heights 56/50px, logo height 46/40px inside bar |
| C3 | Lang labels: Français / العربية; toggle stays on same side when switching | DONE | `LANG_LABELS`, nav `direction:ltr` |
| C4 | Announce bar = news-ticker, multiple sentences scrolling RTL/LTR | DONE | marquee track w/ 2 groups, `announce-scroll(-rtl)` |
| C5 | Add "only N left in stock" sentence; N drops over time then restocks | DONE | `computeDeterministicStock()` day/hour based, 3↔~30 cycle |
| C6 | Marquee speed = half as fast | DONE | `SPEED_PX_PER_SEC=11`, min duration 96s |

## D. Content sections (technology / benefits / BA / FAQ / reviews)

| # | Requirement | Status | Evidence / Notes |
|---|-------------|--------|------------------|
| D1 | Section titles (Technology/Benefits) bigger, clearer, no box, different font | DONE | `.section-head .t-h2` 1.6–2.6rem, no box, Cairo/Outfit |
| D2 | Tech: titles carry the info; body has detail; remove intro paragraph & "10M" distraction | DONE | `land_feat1/2_h` informative; intro removed in landing view |
| D3 | Tech copy clear in simple words (all langs) | DONE | `land_feat1_p`/`land_feat2_p` rewritten |
| D4 | Benefits: remove the paragraph under the title | DONE | `.section-head .section-desc{display:none}` |
| D5 | Benefits image right edge touches screen edge on phone + fills width | DONE | `<640` benefits image bleeds to inline-end |
| D6 | Remove "every day you delay…" section | DONE | not present in markup (`land_order_h` key is dead) |
| D7 | Replace BA heading with "يمكن تدفع آلاف الدراهم…" | DONE | `land_ba_h` updated |
| D8 | Remove FAQ "is it safe for teeth/enamel" question | DONE | not present in FAQ list |
| D9 | Remove descriptive text under FAQ title | DONE | `faq_sub` hidden via section-desc rule |
| D10 | FAQ answers formatted line-by-line where needed (not one blob) | DONE | `<br>` in `faq_a1`/`faq_a6` |
| D11 | FAQ text readable (no gray-on-gray) | DONE | answer color `#2a2438` / open `#1a1520` |
| D12 | FAQ & icon margins consistent (not too close/far from edge) | DONE | `faq-question` padding 16px, answer inset tuned |
| D13 | Review boxes: fix margins / better design | DONE | reviews grid gap + card padding reworked |
| D14 | Return policy: 15-day money-back, send before/after pics → 200 dh back | DONE | `faq_a6` (ar/en/fr) — 200 MAD, 15 days, before/after photos |

## E. i18n / copy

| # | Requirement | Status | Evidence / Notes |
|---|-------------|--------|------------------|
| E1 | Use MSA (الفصحى) for most text, keep testimonials as-is | PARTIAL | landing copy MSA; spot-check remaining darija strings |
| E2 | Default language French | DONE | `DEFAULT_LANG="fr"`, html `lang="fr"` |
| E3 | Don't load non-default language assets until default fully loaded | DONE | `loadDeferredLangAssets()` |

## F. Performance

| # | Requirement | Status | Evidence / Notes |
|---|-------------|--------|------------------|
| F1 | Lazy-load bottom sections | DONE | `[data-lazy-section]` + `content-visibility` |
| F2 | Lazy-load below-the-fold images, ordered by view | DONE | `loading="lazy"` on lower imgs, eager on hero |
| F3 | Right-size images that sit in small divs | PARTIAL | thumbs constrained via CSS; source assets not all resized |

## G. Code quality

| # | Requirement | Status | Evidence / Notes |
|---|-------------|--------|------------------|
| G1 | Remove AI-tell comments | PARTIAL | obvious narration removed; some structural comments remain |

---

### Open items to action
- **B12** — confirm submit button label on the live site after re-pasting the v2-14 footer.
- **E1** — some keys still use darija (الفلوس) vs MSA (الأموال); decide brand voice then sweep.
- **F3** — resize a few source assets that render in small containers.
- **G1** — final pass to strip remaining structural code comments.
