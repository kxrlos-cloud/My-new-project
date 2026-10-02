#!/usr/bin/env bash
# Export Bestbuy business cards at 3.5×2 in / 300 dpi (1050×600 px).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
EXPORTS="$ROOT/exports"
STORE_MEDIA="/cursor/stores/bc-2cb6da21-ea71-43e3-8050-7ae32693b1a6/media/bestbuy-business-card"
CHROME="${CHROME_BIN:-/opt/google/chrome/chrome}"
PROFILE="$(mktemp -d /tmp/bb-card-chrome.XXXXXX)"

mkdir -p "$EXPORTS" "$STORE_MEDIA"

export_side() {
  local html="$1"
  local out="$2"
  local tmp="$EXPORTS/.tmp-$(basename "$out")"

  timeout 45 "$CHROME" \
    --headless=new \
    --disable-gpu \
    --no-sandbox \
    --disable-dev-shm-usage \
    --hide-scrollbars \
    --force-device-scale-factor=1 \
    --font-render-hinting=none \
    --user-data-dir="$PROFILE" \
    --window-size=1050,600 \
    --default-background-color=00000000 \
    --virtual-time-budget=10000 \
    --screenshot="$tmp" \
    "file://$ROOT/$html"

  # Crop / ensure exact 1050×600 if Chrome padded the capture
  python3 - "$tmp" "$out" <<'PY'
import sys
from PIL import Image
src, dest = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGBA")
w, h = im.size
# Prefer top-left crop to exact card size when viewport is larger
if w != 1050 or h != 600:
    im = im.crop((0, 0, min(w, 1050), min(h, 600)))
    if im.size != (1050, 600):
        canvas = Image.new("RGBA", (1050, 600), (0, 0, 0, 0))
        canvas.paste(im, (0, 0))
        im = canvas
im.save(dest, "PNG", dpi=(300, 300), optimize=True)
print(f"wrote {dest} size={im.size}")
PY
  rm -f "$tmp"
}

export_side "card-front.html" "$EXPORTS/bestbuy-card-front.png"
export_side "card-back.html" "$EXPORTS/bestbuy-card-back.png"

cp -f "$EXPORTS/bestbuy-card-front.png" "$STORE_MEDIA/bestbuy-card-front.png"
cp -f "$EXPORTS/bestbuy-card-back.png" "$STORE_MEDIA/bestbuy-card-back.png"

python3 - <<PY
from PIL import Image
from pathlib import Path
for p in [
    Path("$EXPORTS/bestbuy-card-front.png"),
    Path("$EXPORTS/bestbuy-card-back.png"),
    Path("$STORE_MEDIA/bestbuy-card-front.png"),
    Path("$STORE_MEDIA/bestbuy-card-back.png"),
]:
    im = Image.open(p)
    dpi = im.info.get("dpi")
    print(f"OK {p} {im.size} mode={im.mode} dpi={dpi}")
PY

rm -rf "$PROFILE"
echo "Export complete."
