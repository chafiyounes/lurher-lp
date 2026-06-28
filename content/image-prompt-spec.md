# Lure Her — Image generation spec

**Use this file before every GenerateImage call.** Copy the LOCKED PRODUCT block verbatim into each prompt so proportions stay consistent.

## LOCKED PRODUCT (never change)

```
50ml Lure Her bottle — identical in every asset:
- Shape: straight matte BLACK cylinder body + glossy BLACK cylindrical cap
- Cap: ~18% of total bottle height; thin polished GOLD ring where cap meets body
- Logo: metallic GOLD male-symbol (circle + arrow) with cursive "Lure her" inside; vertically CENTERED on matte black body (equal black margin above/below logo)
- Volume: small gold "1.7 fl.oz./50ml" below logo
- Proportions: body height = 4.5× body width; total height (cap+body) = 5.4× body width
- NO stickers, NO label wraps, NO color shifts between images
```

## Gift silhouette (04-gift only)

```
- Plain matte black cylinder, NO logo
- Red satin ribbon bow at center
- Height = 95% of full 50ml bottle height INCLUDING cap (cap tip to base)
- Width = ~62% of main bottle body width
- Same surface/lighting as main bottle
```

## Shot list & angles

| File | Angle | Style |
|------|-------|--------|
| `00-brand.png` | Hero banner | Minimal dark mood: couple intimacy + bottle foreground. No heavy smoke. Editorial COD ad. |
| `01-main.png` | Front packshot | Clean bottle centered, dark gradient, minimal props — **master reference** |
| `02-lifestyle.png` | In-hand / evening | Man in suit, upscale night, bottle visible, shallow DOF |
| `03-product.png` | Bottle + box | Product with matte black gift box, gold branding on box |
| `04-gift.png` | Coffret | 50ml bottle + gift silhouette side by side |
| `bottle.png` | Same as 01-main | Copy of master |
| `uv-logo.png` | Macro | Logo detail, centered in frame |
| `fakes-pile.png` | Top-down pile | Varied cheap knockoffs (not our bottle) |

## Prompt checklist

1. Paste LOCKED PRODUCT block
2. State aspect ratio (1:1 square for carousel)
3. State "photorealistic, minimal, no text overlays unless hero banner"
4. Attach refs: `reference images/box/box1.png` + previous `01-main.png` for consistency
5. For gift: paste Gift silhouette block + "measure against bottle in same frame"

## What to avoid

- Different bottle shapes (tapered, rounded square, clear glass for main product)
- Logo drifting to bottom of body
- Gift taller than 95% or same width as 50ml
- Busy smoke, lens flare overload, baked-in UI text (except optional rating badge on hero banner)
