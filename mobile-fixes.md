# Website Fixes — Task List

## Read this first (context for the agent)

- Tasks are split into two groups: **Mobile-only** (touch/layout issues that only exist on phones) and **All platforms** (content, pricing, copy, performance — same on every screen).
- **Mobile-only tasks:** verify with Playwright MCP using mobile device emulation (e.g. iPhone 13, ~390px viewport).
- **All-platform tasks:** verify on **desktop AND mobile** — they must be correct on both, and desktop must not regress.
- **The site is multilingual and includes RTL (Arabic / Moroccan Darija).** Any text or layout change must be applied to **every supported language**, and must respect RTL direction (mirrored layout, scroll/marquee direction) where relevant.
- **Treat this file as a contract.** Check off a `- [ ]` box only after its **Done when** check actually passes in the browser — not when the code "looks right."
- **Verification is behavioral.** For each item, reproduce the fix in the browser via Playwright (navigate, swipe, click, snapshot) rather than just reading the code.

Task numbers are kept stable (1–13) so they match earlier discussion; they're grouped, not renumbered.

---

## A. Mobile-only tasks

### [x] 1. Fix mobile scaling — elements get squished instead of filling the screen
- **Problem:** On phones, some elements get squished / letterboxed instead of filling the full screen width. This is also the root cause of #6 (the form not taking the full width).
- **Where:** global mobile layout; hero and form containers especially.
- **Fix:** Audit fixed `width` / `min-width` values and missing `width:100%` / `max-width:100%` on the offending containers. Sections should fill the viewport width on mobile with no horizontal overflow.
- **Done when:** At 390px there is **no horizontal scrollbar**, no element is squished narrower than its intended container, and the hero + form fill the screen edge-to-edge (within intended padding). Verify by snapshotting and confirming each section's bounding box spans the viewport width.

### [x] 2. Replace the fade scroll with a drag (swipe) carousel
- **Problem:** The image gallery cross-fades between images; you want images side-by-side that you drag left/right.
- **Where:** hero image gallery / carousel.
- **Fix:** Replace the fade with a horizontally scrollable track — simplest approach is CSS scroll-snap: `overflow-x:auto; scroll-snap-type:x mandatory`, each image `scroll-snap-align:start; flex:0 0 100%`. Keep it simple (no heavy carousel library needed).
- **Done when:** On mobile you can swipe/drag horizontally and images move side-by-side (not cross-fade), snapping cleanly to one image at a time.

### [x] 3. Restructure the hero — images on top, form front-and-center
- **Problem:** The hero leads with text; the form is buried.
- **Where:** hero section (mobile).
- **Fix — mobile layout, top to bottom:**
  1. Image carousel at the very top.
  2. The **top edge of the form "sticks out"** at the bottom of the first viewport, so it's visible immediately (the user can tell there's a form right below the fold).
  3. A short scroll down reveals the **full, fillable form**. The form **replaces the old hero text** (remove that text).
  4. **Guarantees** render directly under the form.
  5. Below that, the rest of the page's info continues for users who keep scrolling.
- **Done when:** On a phone, the first screen shows the images + the top of the form peeking in; a short scroll reveals the full form; guarantees appear immediately beneath it; no leftover hero paragraph text remains. (Layout confirmed: images top → form peeks in at bottom of first screen → short scroll reveals full form → guarantees → more info.)

### [x] 4. Allow free vertical scrolling over the before/after drag slider
- **Problem:** When your finger is on the before/after section, you can't scroll the page down — the slider traps the gesture.
- **Where:** before/after comparison slider.
- **Fix:** Make the slider capture **horizontal** drag only and let **vertical** swipes pass through to page scroll. Set `touch-action: pan-y` on the slider element so the handle still drags horizontally but vertical scrolling isn't trapped.
- **Done when:** On mobile you can rest your finger on the before/after image and scroll the page down normally, while dragging the handle horizontally still moves the comparison.

### [x] 6. Form must fill the whole screen on phone
- Same root cause as **#1** — fix there. **Done when:** the form container spans the full mobile width and reads as full-screen, consistent with #1.

### [x] 11. Hide the side-to-side arrow buttons on phone
- **Problem:** The prev/next arrows for the hero image scroll shouldn't show on mobile (swipe from #2 replaces them).
- **Where:** hero carousel controls.
- **Fix:** Hide the left/right arrow buttons at mobile breakpoints. (Desktop keeps its arrows.)
- **Done when:** at 390px no arrow buttons are visible on the hero; swiping still changes images; arrows still show on desktop.

---

## B. All-platform tasks (verify on desktop AND mobile)

### [x] 5. Remove the hardcoded 350 compare price; pull prices from the YouCan form
- **Problem:** A hardcoded "350" compare price is shown.
- **Where:** pricing display in the hero / form area.
- **Fix:** Remove the hardcoded 350. Pull the **actual price** from the YouCan form. Also pull the **compare / strikethrough price from YouCan if present** — it's currently removed there, so handle absence gracefully: show the compare price only when YouCan provides one, otherwise render nothing (no empty placeholder). If a compare price is added in YouCan later, it should appear automatically.
- **Done when:** "350" appears nowhere; the displayed price matches the YouCan form's price; with no YouCan compare price there is no strikethrough/empty element; adding one in YouCan makes it show up without further code changes.

### [x] 7. Rewrite the technology section so the titles carry meaning
- **Problem:** Reading only the current titles gives no useful info. New titles should inform on their own; the body adds detail.
- **Where:** technology section (3 cards/blocks).
- **Fix — replace title + body (English source copy):**
  1. **Instantly Brightens Yellow Teeth** — *Purple colour-correcting technology neutralizes yellow tones for a visibly brighter smile from the very first use.*  (was "Instant color correction")
  2. **Safe Even for Sensitive Teeth** — *Powered by PAP+ technology to gradually whiten teeth without peroxide and without damaging enamel.*  (was "PAP+ Whitening")
  3. **Trusted by Over 10 Million Customers** — *Millions worldwide have chosen V34 as their go-to solution for a brighter-looking smile.*  (was "Tried by millions worldwide")
- **Translate** all three titles + bodies into every supported language (RTL-aware).
- **Done when:** all three cards show the new title + body in each language; nothing references the old titles.

### [x] 8. Dynamic info bar — news ticker + live stock counter
- **Problem:** The top info bar is static; needs a moving news-ticker effect and a second message.
- **Where:** top info/announcement bar.
- **Fix:**
  - Make it a **continuous marquee** where multiple sentences scroll horizontally. Scroll direction follows the language's reading direction (right-to-left for LTR languages; mirror for RTL).
  - Keep "Free shipping anywhere in Morocco" and **add** a second message: **"Only {N} left in stock"**.
  - Make **{N} dynamic**: start at 20, decrement by 1 over time until it reaches 3, then restock back up to 30, then resume dropping — looping forever.
- **Default cadence (adjust if you prefer):** decrement by 1 at a randomized interval of ~6–15s so it feels organic.
- **Done when:** the bar scrolls smoothly in the correct direction per language; both messages appear; the stock number visibly counts down to 3, jumps to 30, and counts down again, on loop.

### [x] 9. Make the site faster
- **Where:** whole page, image pipeline, i18n loading.
- **Fix:**
  - **Lazy-load** the bottom sections and the non-visible carousel images; prioritize load order to match the order things are viewed (top-of-page first).
  - **Right-size images:** images that occupy a small `div` should be served at an appropriately small resolution, not full-size.
  - **Defer other languages:** don't load any non-default-language assets/strings until the default language site has fully loaded.
- **Done when:** below-the-fold sections and off-screen images load on demand (verify via the network panel — they don't fetch until scrolled near); small image slots no longer download oversized files; no secondary-language resources are requested until the default language is fully loaded.

### [x] 10. Use the lowercase logo + optimize the logo image
- **Problem:** The HiSmile logo should be **lowercase** — "hismile", not "HiSmile" / "HISMILE". (Your "minuscule" = French for lowercase.)
- **Where:** header logo (all platforms).
- **Fix:** Use the **lowercase** logo asset from `images/logos`. Resize/optimize/export it appropriately so it doesn't slow the site.
- **Done when:** the header shows the lowercase "hismile" logo on both desktop and mobile; the file actually served is optimized/appropriately sized (no oversized logo download in the network panel).

### [x] 12. Fix the review-box margins (or adopt a cleaner review-card design)
- **Problem:** Review boxes have margin/spacing issues.
- **Where:** reviews/testimonials section.
- **Fix:** First try fixing the existing margins/spacing. If a redesign is cleaner, adopt a review-card design — **check the skills/rules sources available in the project first**; if none fit, search reputable HTML/CSS component galleries for a ready-made review card and adapt it.
- **Done when:** review boxes have consistent, correct margins and spacing on desktop and mobile and look clean (no clipping/overlap/uneven gaps).

### [x] 13. Update the guarantee / return-policy copy
- **Where:** guarantee/return-policy block.
- **Fix:** Combine the existing on-site guarantee with this refund policy into one strong piece of copy, then translate into every supported language.
  - Refund terms: the **15-day window runs from delivery** (we can't track uses — only time since delivery). If a customer sees no results after using the product as directed, they get **200 dh** back — but they must submit the refund claim **with before & after photos before the 15 days from delivery are up**. No claim within 15 days → no refund. (Customer-facing copy can still say "used as directed for 15 days"; the enforceable trigger is the 15-day-from-delivery deadline + photos.)
  - Darija line to incorporate: «إيلا ما شفتيش نتيجة من بعد ما استعملتي المنتج بطريقة صحيحة لمدة 15 يوم، كنرجعو ليك فلوسك مضمونة»
- **Done when:** the combined copy reads naturally, states the 200 dh refund, the before/after-photo requirement, and the 15-day-from-delivery deadline, appears in every language (RTL-aware), and merges cleanly with the existing guarantee text.

---

## Final review loop (do NOT skip — this is the whole point)

After you finish all items, **do not report done yet.** Enter a review phase:

1. Go through tasks 1–13 **one at a time, in order.**
2. For each, **actually verify it in the browser with Playwright MCP**: reproduce the original problem and confirm it's gone, using the task's **Done when** check. Mobile-only tasks → mobile viewport. All-platform tasks → check **desktop and mobile**.
3. If any task does **not** pass its check, fix it and **re-verify that specific task.**
4. **Repeat the entire review phase from task 1** until **every** task passes its Done-when check in the same pass.
5. If you cannot make a specific task pass after **3 attempts**, **stop and explain what's blocking it** — do not skip it, and do not mark it done.

Update the `- [ ]` checkboxes as you go so the current state is always visible. Only report the job complete when all 13 boxes are checked and a full review pass had zero failures.
