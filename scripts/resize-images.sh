#!/bin/bash
# Resize and compress images for the website WITHOUT touching the
# originals. Reads from one or more input files/directories, writes
# smaller copies into an output directory (preserving subfolder
# structure for directory inputs).
#
# Usage:
#   scripts/resize-images.sh -o <output-dir> <file-or-directory> [...]
#
# Examples:
#   scripts/resize-images.sh -o _strona_HaGL/archiwum_obrazow ~/Desktop/nowe_zdjecia
#   scripts/resize-images.sh -o _strona_HaGL/wydarzenia/nowy_event ~/Desktop/event_photos
#   scripts/resize-images.sh -o _strona_HaGL/archiwum_obrazow ~/Desktop/99_F_Nowa.jpg

set -euo pipefail

MAX_DIM=2000
QUALITY=78

usage() {
  echo "Usage: $0 -o <output-dir> <file-or-directory> [file-or-directory ...]" >&2
  exit 1
}

OUT_DIR=""
ARGS=()
while [[ $# -gt 0 ]]; do
  case "$1" in
    -o)
      OUT_DIR="$2"
      shift 2
      ;;
    *)
      ARGS+=("$1")
      shift
      ;;
  esac
done

[[ -z "$OUT_DIR" ]] && usage
[[ ${#ARGS[@]} -eq 0 ]] && usage

mkdir -p "$OUT_DIR"

resize_one() {
  local src="$1"
  local dest="$2"
  local ext="${src##*.}"
  local ext_lower
  ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')

  if [[ "$ext_lower" != "jpg" && "$ext_lower" != "jpeg" && "$ext_lower" != "png" ]]; then
    return
  fi

  mkdir -p "$(dirname "$dest")"
  cp "$src" "$dest"

  local w h long_edge
  w=$(sips -g pixelWidth "$dest" | awk '/pixelWidth/{print $2}')
  h=$(sips -g pixelHeight "$dest" | awk '/pixelHeight/{print $2}')
  long_edge=$(( w > h ? w : h ))

  if [[ "$long_edge" -gt "$MAX_DIM" ]]; then
    sips -Z "$MAX_DIM" "$dest" >/dev/null
  fi

  if [[ "$ext_lower" == "jpg" || "$ext_lower" == "jpeg" ]]; then
    sips -s format jpeg -s formatOptions "$QUALITY" "$dest" >/dev/null
  fi

  local before after
  before=$(stat -f%z "$src")
  after=$(stat -f%z "$dest")
  printf "%-60s %6dKB -> %6dKB  =>  %s\n" "$src" "$((before/1024))" "$((after/1024))" "$dest"
}

for target in "${ARGS[@]}"; do
  if [[ -d "$target" ]]; then
    while IFS= read -r -d '' f; do
      rel="${f#"$target"/}"
      resize_one "$f" "$OUT_DIR/$rel"
    done < <(find "$target" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0)
  elif [[ -f "$target" ]]; then
    resize_one "$target" "$OUT_DIR/$(basename "$target")"
  fi
done
