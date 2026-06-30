#!/bin/bash
# Resize and compress images for the website.
# Shrinks any image whose long edge exceeds MAX_DIM, and re-compresses
# JPEGs to QUALITY. Run this on new photos before adding them to
# archiwum_obrazow/ or wydarzenia/.
#
# Usage:
#   scripts/resize-images.sh <file-or-directory> [file-or-directory ...]
#
# Examples:
#   scripts/resize-images.sh _strona_HaGL/archiwum_obrazow
#   scripts/resize-images.sh _strona_HaGL/wydarzenia/nowy_event
#   scripts/resize-images.sh _strona_HaGL/archiwum_obrazow/99_F_Nowa.jpg

set -euo pipefail

MAX_DIM=2000
QUALITY=78

resize_one() {
  local f="$1"
  local ext="${f##*.}"
  local ext_lower
  ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')

  if [[ "$ext_lower" != "jpg" && "$ext_lower" != "jpeg" && "$ext_lower" != "png" ]]; then
    return
  fi

  local w h long_edge
  w=$(sips -g pixelWidth "$f" | awk '/pixelWidth/{print $2}')
  h=$(sips -g pixelHeight "$f" | awk '/pixelHeight/{print $2}')
  long_edge=$(( w > h ? w : h ))

  local before after
  before=$(stat -f%z "$f")

  if [[ "$long_edge" -gt "$MAX_DIM" ]]; then
    sips -Z "$MAX_DIM" "$f" >/dev/null
  fi

  if [[ "$ext_lower" == "jpg" || "$ext_lower" == "jpeg" ]]; then
    sips -s format jpeg -s formatOptions "$QUALITY" "$f" >/dev/null
  fi

  after=$(stat -f%z "$f")
  printf "%-70s %6dKB -> %6dKB\n" "$f" "$((before/1024))" "$((after/1024))"
}

for target in "$@"; do
  if [[ -d "$target" ]]; then
    while IFS= read -r -d '' f; do
      resize_one "$f"
    done < <(find "$target" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0)
  elif [[ -f "$target" ]]; then
    resize_one "$target"
  fi
done
