# Hair by Doris

Static HTML/CSS/JS site for Hair by Doris (Nairobi).

## Open locally

**Option A — open the file**

```bash
# macOS
open doris-hair-salon/index.html

# Linux
xdg-open doris-hair-salon/index.html
```

Or double-click `doris-hair-salon/index.html` in your file browser.

**Option B — simple static server**

```bash
cd doris-hair-salon
python3 -m http.server 8080
```

Then visit <http://localhost:8080>.

## Netlify

Repo root `netlify.toml` sets `publish = "doris-hair-salon"` so previews serve this site (not the root demo HTML files).

## Structure

```
doris-hair-salon/
  index.html
  css/styles.css
  images/          # real client photos
  js/main.js
  js/gallery.js
  js/gallery-data.js
  README.md
```

## Notes

- Brand: **Hair by Doris**
- Book CTAs and the floating WhatsApp button open `wa.me/254724780932`.
- Hero + gallery use real client work photos (lazy-loaded gallery with lightbox + filters).
- Google Reviews: two verified 5★ quotes (Jeptoo K., Joanna K.) from Maps place Kenyatta market stall 221.
- Partners (client-stated): proudly partners with / uses Darling Kenya and Angels braids — no logos or exclusive claims invented.
- **Bestbuy** hair (side company): BB icon + currently on offer; ask in-salon or WhatsApp. No fake catalog, prices, or URLs.
- Location: Kenyatta Market, Stall 221, Nairobi · Mon–Sun 7:00 AM – 7:00 PM · clickable Google Maps panel.
- Gallery filters: Knotless → Loose Braids → Box / Boho → Twists → Goddess / Ombre → All (last). Default shows all looks.

## Future work

**Bestbuy product browse (deferred).** Hair by Doris is linked with **Bestbuy** hair — currently on offer (light mention on the site already). A dedicated browse/catalog section should wait until Carlos asks with real SKUs/photos/prices. Do not invent a product grid. See project note `docs/doris-future-braids-shop.md` in the agent store.
