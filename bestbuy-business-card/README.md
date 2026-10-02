# Bestbuy business card

Print-ready business card for **Bestbuy** (hair / braids products), linked with Hair by Doris.

## Specs

| | |
|---|---|
| Size | 3.5 × 2 in (89 × 51 mm) |
| Export | 1050 × 600 px @ 300 dpi PNG |
| Colors | Teal `#0F6E72`, cream `#F5EFE0`, gold `#E9C46B` (from BB logo) |
| Content | Name, tagline, WhatsApp/call, Kenyatta Market Stall 221 — no invented social URLs |

## Files

- `index.html` — on-screen preview (front + back)
- `card-front.html` / `card-back.html` — single-side sources
- `css/card.css` — styles
- `assets/bestbuy-bb-icon.png` — BB icon only
- `exports/bestbuy-card-front.png` / `bestbuy-card-back.png` — print PNGs
- `export.sh` — regenerate PNGs with headless Chrome + Pillow

## Preview

Open `index.html` in a browser, or serve the folder:

```bash
cd bestbuy-business-card && python3 -m http.server 8765
# then visit http://localhost:8765/
```

## Regenerate exports

```bash
./export.sh
```

Requires Google Chrome (`/opt/google/chrome/chrome` or set `CHROME_BIN`) and Python Pillow.

## Print tips

1. Use the PNGs in `exports/` (300 dpi, exact trim size).
2. Ask the printer for **standard business card** stock; add **0.125 in (3 mm) bleed** if they require it (these files are trim-size only — keep critical text inside the safe margin already built into the layout).
3. Front is teal with the BB icon; back is cream with WhatsApp + location + “Ask at Hair by Doris — same stall.”
4. Do **not** print Darling / Angels on this card — those are salon partners, not Bestbuy branding.
