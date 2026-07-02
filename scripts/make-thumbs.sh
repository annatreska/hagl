#!/bin/bash
# Generate square grid thumbnails (center-cropped, like CSS object-fit: cover)
# WITHOUT touching the originals. Mirrors the folder structure under
# _strona_HaGL/miniatury/. Skips thumbnails that are already up to date,
# so it is safe (and fast) to re-run after adding new images.
#
# Usage:
#   scripts/make-thumbs.sh
#
# Run from the repo root after adding new images, then commit the
# new files in _strona_HaGL/miniatury/.

set -euo pipefail

SIZE=600          # thumbnail edge in px (square)
QUALITY=72        # JPEG quality for thumbs

ROOT="_strona_HaGL"
OUT="$ROOT/miniatury"
SOURCES=("$ROOT/archiwum_obrazow" "$ROOT/wydarzenia")

made=0
skipped=0

thumb_one() {
  local src="$1"
  local rel="${src#"$ROOT"/}"
  local dest="$OUT/$rel"

  # Skip if thumb exists and is newer than the source
  if [[ -f "$dest" && "$dest" -nt "$src" ]]; then
    skipped=$((skipped+1))
    return
  fi

  mkdir -p "$(dirname "$dest")"
  cp "$src" "$dest"

  # Resize so the SHORT edge equals SIZE (keeps proportions), then
  # center-crop to SIZE×SIZE — same result as CSS object-fit: cover.
  local w h
  w=$(sips -g pixelWidth  "$dest" | awk '/pixelWidth/{print $2}')
  h=$(sips -g pixelHeight "$dest" | awk '/pixelHeight/{print $2}')
  if [[ "$w" -lt "$h" ]]; then
    sips --resampleWidth  "$SIZE" "$dest" >/dev/null
  else
    sips --resampleHeight "$SIZE" "$dest" >/dev/null
  fi
  sips -c "$SIZE" "$SIZE" "$dest" >/dev/null
  sips -s format jpeg -s formatOptions "$QUALITY" "$dest" >/dev/null

  local before after
  before=$(stat -f%z "$src")
  after=$(stat -f%z "$dest")
  printf "%-70s %6dKB -> %4dKB\n" "$rel" "$((before/1024))" "$((after/1024))"
  made=$((made+1))
}

for dir in "${SOURCES[@]}"; do
  [[ -d "$dir" ]] || continue
  while IFS= read -r -d '' f; do
    thumb_one "$f"
  done < <(find "$dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0)
done

echo ""
echo "Done: $made thumbnail(s) created, $skipped already up to date."
