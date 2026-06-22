# Website Fixes — Task List (v2)

## Read this first — context & cross-cutting rules

- **Deployment:** work happens in the Cursor workspace → push to GitHub → the youcan.shop loader pulls it into the live site. Verify on the live test page after push: **https://cleopatra.beauty/pages/test2** (or your local preview if you have one — set the URL the agent should use).
- **Verification is behavioral.** Verify every task in the browser with Playwright MCP — navigate/swipe/click/snapshot — not by reading code. Mobile-only tasks (section A): test at iPhone-13 / ~390px. All-platform tasks (B) and Perf/SEO (C): test on **desktop AND mobile**.
- **Treat this file as a contract.** Check off a `- [ ]` box only when its **Done when** check passes in the browser.

**Cross-cutting rules (apply everywhere):**
- **Language:** all Arabic copy must be **MSA (Modern Standard Arabic / فصحى)**, NOT Darija — **except testimonials**, which stay as-is (may be rewritten later by the owner). Keep all copy RTL-aware.
- **Section headers (Technology, Benefits, FAQ, etc.):** make the section title **much bigger and clearer, with a distinct font, and NO box/container around it.** Define this header style once and apply it to every section header. (See task B11.)
- **Files in the repo to use:** `express-checkout-form.html` (source of form fields, labels, and prices), `images/logos` (lowercase logo asset), `image.png` (reference screenshot for the guarantees layout).
- **Margins/overflow:** when a task involves squished elements, wrong margins, or horizontal scroll, use the method in the **Appendix** as the pass/fail check.

---

## A. Mobile-only tasks (verify at ~390px)

### [x] A1. Fix mobile scaling — elements squished instead of filling the screen
- Some elements get squished/letterboxed instead of filling the screen width (also the root cause of A6, the form not going full width).
- Audit fixed `width`/`min-width`, missing `max-width:100%`, `100vw` usage, and `box-sizing`. Use the **Appendix overflow finder** to locate offenders.
- **Done when:** the Appendix script returns **zero** offenders at 390px, there's no horizontal scrollbar, and hero + form fill the screen edge-to-edge.

### [x] A2. Replace the fade scroll with a drag (swipe) carousel
- Hero gallery should be side-by-side images you swipe/drag left-right, not a cross-fade. Simplest: `overflow-x:auto; scroll-snap-type:x mandatory`, each image `scroll-snap-align:start; flex:0 0 100%`.
- **Done when:** on mobile you swipe horizontally and images move side-by-side with clean snapping (no cross-fade).

### [x] A3. Restructure the hero (confirmed layout)
- Top to bottom on mobile: **image carousel at top → top edge of the form "peeks in" at the bottom of the first screen → short scroll reveals the full fillable form (form replaces the old hero text — remove it) → guarantees directly under the form → more info continues below.**
- **Done when:** first screen shows images + the top of the form peeking in; a short scroll reveals the full form; guarantees sit right under it; no old hero paragraph text remains.

### [x] A4. Fix the guarantees layout
- The guarantees under the form are not set up properly — see `image.png` in the repo for the current broken state.
- Lay them out cleanly under the form (consistent spacing/alignment, no squish/overlap), matching the intended design.
- **Done when:** the guarantees render aligned and evenly spaced under the form on mobile, with no overlap, clipping, or uneven margins (cross-check against `image.png`).

### [x] A5. Allow free vertical scrolling over the before/after slider
- The before/after slider traps the touch gesture so you can't scroll the page. Set `touch-action: pan-y` on the slider so vertical swipes scroll the page while horizontal drag still moves the handle.
- **Done when:** you can rest a finger on the before/after image and scroll the page down; horizontal drag still moves the comparison.

### [x] A6. Form must fill the whole screen on phone
- Same root cause as A1 — fix there. **Done when:** the form spans full mobile width and reads as full-screen.

### [x] A7. Hide the side-to-side arrow buttons on phone
- The hero prev/next arrows shouldn't show on mobile (swipe from A2 replaces them); desktop keeps arrows.
- **Done when:** no arrows at 390px, swipe still works; arrows still present on desktop.

### [x] A8. Full mobile design audit (screenshots + margin sweep)
- The phone design isn't fully reviewed. Walk the **entire page** at ~390px: take Playwright screenshots section by section *as if on a phone*, and fix every visual flaw (margins, spacing, alignment, overflow, font sizes, tap targets).
- Use the **Appendix** method on each section.
- **Done when:** screenshots of every section at 390px show no margin/overflow/alignment flaws, and the Appendix overflow finder returns zero offenders for the whole page.

---

## B. All-platform content & copy (verify desktop AND mobile)

### [x] B1. Pull ALL form data & field labels from the express checkout form
- Remove the hardcoded **350** compare price.
- Pull the **price**, the **compare/strikethrough price** (only if present in YouCan — otherwise render nothing), AND **all field labels** (e.g. whether a field reads «اسم» vs «الاسم الكامل», etc.) from `express-checkout-form.html` / the YouCan express checkout. The principle: the owner edits it in YouCan, and it changes here automatically — nothing about the form is hardcoded.
- **Done when:** "350" appears nowhere; price + labels on the page match the express checkout source; changing a label or price in YouCan updates the page without code edits; no empty placeholder shows when the compare price is absent.

### [x] B2. Slim down the Technology section
- Remove the descriptive paragraph text under the section title. **Remove the "Trusted by 10 million customers" item entirely** (it's a distraction).
- Keep the **2 technology cards** (color correction + PAP+) with their **titles and body text** as before — only the intro paragraph and 3rd card go.
- **Done when:** section shows header «التكنولوجيا» + 2 cards with body copy; no `land_why_sub` intro; no 10-million card.

### [x] B3. Slim down the Benefits section
- Remove descriptive text under the title — keep **«خصائص المنتج»** (AR) / **Product Characteristics** (EN) as the section title + the infographic items only.
- **Done when:** Benefits shows the correct title in every language with no extra paragraph under it.

### [x] B4. Remove the "every day you delay…" urgency section
- Delete the entire section built around "every day you delay is one with less white teeth." The whole section is gone.
- **Done when:** that section no longer exists anywhere on the page (desktop + mobile, all languages).

### [x] B5. Replace the copy above the before/after slider
- Replace whatever is currently above the before/after slider with this line (MSA):
  «يُمكنك أن تدفع آلاف الدراهم عند الأطباء، أو أن تحصل على منتجٍ مؤكَّد ومضمون من منزلك.»
  *(MSA version of your line; original Darija was «يمكن تدفع آلاف الدراهم عند الأطباء أو يمكن تاخد منتوج مأكد و مضمون و من المنزل».)*
- Provide the equivalent in the other active languages too.
- **Done when:** the new line shows above the slider in each language; the old copy is gone.

### [x] B6. Trim the FAQ
- **Remove** the FAQ item "Is it safe for teeth and enamel?" (it can scare buyers off).
- **Remove the descriptive text under the FAQ section title** — the title alone is enough.
- **Done when:** that FAQ Q&A is gone; the FAQ section shows the header + questions with no sub-paragraph under the title, all languages.

### [x] B7. Info bar: marquee + deterministic stock counter
- Make the top bar a **continuous marquee** of multiple messages scrolling horizontally; direction follows reading direction per language (RTL-aware).
- Messages: keep "Free shipping anywhere in Morocco" (MSA: «شحن مجاني إلى جميع أنحاء المغرب») and add **"Only {N} left in stock"** (MSA: «بقي {N} فقط في المخزون»).
- **{N} is a deterministic function of date+hour, computed ONCE on page load** (it only changes when the page is loaded, not while watching). Shape: a sawtooth that drops ~**3–4 per day** from a max (~30) down to a min (~3), then jumps back to the max and repeats. Starting reference:
  ```js
  const MIN = 3, MAX = 30, DROP_PER_DAY = 3.5;
  const cycleDays = (MAX - MIN) / DROP_PER_DAY;            // ~7.7 days
  const daysFloat = (Date.now() / 36e5) / 24;              // uses day + hour
  const phase = daysFloat % cycleDays;
  const N = Math.max(MIN, Math.round(MAX - phase * DROP_PER_DAY));
  ```
  Tune MIN/MAX/DROP to taste.
- **Done when:** the bar scrolls smoothly in the correct direction per language; both messages show; {N} is computed from date+hour on load, sits within ~3–30, and only changes on reload (not on a live timer).

### [x] B8. Use the lowercase logo + optimize it
- The logo should be **lowercase** ("hismile", not "HiSmile"). Use the lowercase asset in `images/logos`, resized/optimized so it doesn't slow the site.
- **Done when:** header shows the lowercase logo on desktop + mobile; the served file is small/optimized (no oversized download in the network panel).

### [x] B9. Fix review-box margins / design
- Fix the review boxes' margins/spacing; if a redesign is cleaner, adopt a review-card design (check project skills/rules first; otherwise adapt a vetted card from a reputable component gallery). Use the **Appendix** to verify spacing.
- **Done when:** review boxes have consistent, correct margins on desktop + mobile with no clipping/overlap.

### [x] B10. Guarantee / return-policy copy (15-day rule, MSA)
- Merge the existing on-site guarantee with the refund policy into one strong piece of copy; translate into every active language (MSA for Arabic).
- Terms: the **15-day window runs from delivery** (uses can't be tracked, only time since delivery). If the customer sees no results after using the product as directed, they get **200 dh** back — but they must submit the claim **with before & after photos before the 15 days from delivery are up**. No claim within 15 days → no refund.
- MSA copy (refines your Darija line into فصحى):
  «إذا لم تلاحظ أي نتيجة بعد استعمال المنتج بالطريقة الصحيحة لمدة 15 يوماً، نُعيد لك أموالك مضمونة — شرط إرسال صور قبل وبعد قبل انتهاء مدة 15 يوماً من التوصيل.»
- **Done when:** the merged copy reads naturally, states the 200 dh refund + before/after-photo + 15-day-from-delivery deadline, shows in every language, and merges cleanly with the existing guarantee.

### [x] B11. Restyle all section headers
- Section titles like **Technology** and **Benefits** (and other section headers) should be **much bigger, clearer, in a distinct font, with NO box** around them. Define one header style and apply consistently.
- **Done when:** every section header uses the new larger, box-free, distinct-font style consistently on desktop + mobile.

---

## C. Performance & SEO (verify desktop AND mobile)

### [x] C1. Make the site faster
- Lazy-load the bottom sections and off-screen carousel images; order loading to match view order (top first). Serve **right-sized images** (small `div` → small image, not full-res). Don't load non-default-language assets/strings until the default language is fully loaded.
- **Done when:** in the network panel, below-the-fold sections/images load on demand, small slots no longer download oversized files, and no secondary-language resources load until the default language finishes.

### [x] C2. Fix SEO basics
- The page's title, meta description, and OG/Twitter tags are currently all literally **"test2"**. Set a real, keyword-relevant **title** and **meta description**, real **og:title/og:description/og:image**, and Twitter card (these are mostly set in the YouCan page settings). In the injected HTML: add descriptive **alt text** on images, set the correct **lang/dir** on the root, and add **Product structured data** (JSON-LD with name, price, currency, rating) so the listing can show rich results.
- **Done when:** title/description/OG/Twitter are real (not "test2"); images have alt text; lang/dir are correct; Product JSON-LD validates.

---

## Final review loop (do NOT skip)

After all tasks, do not report done. Review phase:
1. Go through every task (A1…C2) **one at a time, in order.**
2. **Verify each in the browser with Playwright** using its Done-when check. Mobile-only → 390px. All-platform/Perf/SEO → desktop AND mobile. For layout tasks, the Appendix overflow finder must return zero offenders.
3. If any task fails, fix it and **re-verify that task.**
4. **Repeat the whole review pass from the top** until one full pass has **zero** failures.
5. If a task won't pass after **3 attempts**, **STOP and explain what's blocking it** — don't skip it, don't fake-complete it, don't check its box.

Update the `- [ ]` boxes as you go. Report complete only when all boxes are checked and a full review pass had zero failures.

---

## Appendix — Finding & fixing bad margins / overflow

Use this whenever something is squished, mis-margined, or causes horizontal scroll.

**1. See every box edge (visual).** Temporarily inject:
```css
* { outline: 1px solid rgba(255,0,0,.35) !important; }
```
Screenshot at 390px. Any outline crossing the screen edge, or an unexpected gap, is a culprit.

**2. List the exact offenders (precise).** Run in the page (or via Playwright `evaluate`) at mobile width:
```js
const vw = document.documentElement.clientWidth;
const offenders = [...document.querySelectorAll('*')]
  .map(el => { const r = el.getBoundingClientRect();
    return { el, right: Math.round(r.right - vw), left: Math.round(-r.left) }; })
  .filter(o => o.right > 1 || o.left > 1)
  .sort((a,b) => b.right - a.right);
console.table(offenders.map(o => ({ tag:o.el.tagName, cls:o.el.className, id:o.el.id, overflowRight:o.right })));
```
This prints the exact elements extending past the viewport — start with the top of the list.

**3. Common root causes & fixes:**
- Missing `box-sizing` → add `*{box-sizing:border-box}` globally.
- `width:100vw` → use `width:100%` (100vw includes the scrollbar and overflows).
- Fixed `width`/`min-width` on a container → use `max-width:100%`.
- Negative margins pushing content past the edge.
- Unconstrained media → `img,video,iframe{max-width:100%;height:auto}`.
- A long unbroken string/URL → `overflow-wrap:anywhere`.

**Pass/fail for the loop:** a layout task is only done when method 2 returns an **empty** list at 390px and the section screenshot looks clean.
