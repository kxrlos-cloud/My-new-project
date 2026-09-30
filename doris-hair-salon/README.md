# Hair by Doris — first-look prototype

Static HTML/CSS/JS prototype for client design review.

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
- **Bestbuy** hair (side company): short on-site mention that it is currently on offer; ask in-salon or WhatsApp. No fake catalog, prices, logos, or URLs.
- Placeholders remain for service prices, clock hours, street address text, and about history.

## Future work

**Bestbuy product browse (deferred).** Hair by Doris is linked with **Bestbuy** hair — currently on offer (light mention on the site already). A dedicated browse/catalog section should wait until Carlos asks with real SKUs/photos/prices. Do not invent a product grid. See project note `docs/doris-future-braids-shop.md` in the agent store.
