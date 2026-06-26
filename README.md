# lurher-lp

Private landing page assets for YouCan — **Lure Her Parfum** (men's pheromone perfume, COD, Morocco).

## What's in git

| Path | Purpose |
|------|---------|
| `src/page.html` | Landing page markup (Arabic-first, RTL) |
| `src/styles.css` | Styles — bordeaux + gold luxe theme |
| `src/script.js` | Behaviour + i18n (ar / fr) |
| `src/loader.js` | Paste into YouCan footer — fetches `src/*` from GitHub |
| `images/hero/` | Hero gallery slides + `manifest.json` |
| `images/product/` | Order-card / sticky bottle thumbnail |

## Deploy flow

1. Edit `src/` or `images/`, push to `main`.
2. YouCan footer loader fetches from `raw.githubusercontent.com/chafiyounes/lurher-lp/main/`.
3. Hard-refresh the store page to bust cache (loader cache-busts CSS/HTML/JS automatically).

## Offer

- Price **189 MAD** (was 250) + a free premium bonus perfume with every order.
- COD, free shipping across Morocco, inspect-before-pay.

## ⚠️ Before going live (YouCan wiring)

The express-checkout still uses the **old V34 product/field IDs** as placeholders. On the
Lure Her YouCan page you must reconcile, in `src/page.html`:

- `input[name="id"]` → the Lure Her product ID.
- the **city** field name `extra_fields[custom_field_...]` → the Lure Her product's city custom-field name.
- `region` (address) and `first_name` / `phone` names — confirm they match YouCan's native form.

Price and field labels auto-sync from the native YouCan checkout at runtime
(`syncPricesFromYouCan` / `syncFormLabelsFromYouCan`), so set the real price/compare on YouCan.

## Images

`images/hero/0{1-4}.png` and `images/product/bottle.png` are **AI-generated placeholders**.
Replace them with real Lure Her product photos (keep the same filenames) and push.

Cursor skills, rules, and design knowledge stay **local only** (see `.gitignore`).
