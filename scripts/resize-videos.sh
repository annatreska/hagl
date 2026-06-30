#!/bin/bash
# Resize and compress videos for the website WITHOUT touching the
# originals. Scales to 480p (height) and re-encodes to a web-friendly
# H.264/AAC mp4. Reads from one or more input files/directories,
# writes compressed copies into an output directory (preserving
# subfolder structure for directory inputs).
#
# Usage:
#   scripts/resize-videos.sh -o <output-dir> <file-or-directory> [...]
#
# Examples:
#   scripts/resize-videos.sh -o _strona_HaGL/wydarzenia/happening3 ~/Desktop/nowe_filmiki
#   scripts/resize-videos.sh -o _strona_HaGL/wydarzenia/happening3 ~/Desktop/klip.mov

set -euo pipefail

HEIGHT=480
CRF=28   # lower = better quality / bigger file (18-28 is a sane web range)

# Find ffmpeg: PATH first, then the local install used when Homebrew
# isn't available.
FFMPEG="$(command -v ffmpeg || true)"
if [[ -z "$FFMPEG" && -x "$HOME/.local/bin/ffmpeg" ]]; then
  FFMPEG="$HOME/.local/bin/ffmpeg"
fi
if [[ -z "$FFMPEG" ]]; then
  echo "ffmpeg not found (checked PATH and ~/.local/bin/ffmpeg)." >&2
  exit 1
fi

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

  case "$ext_lower" in
    mp4|mov|m4v|avi|mkv) ;;
    *) return ;;
  esac

  mkdir -p "$(dirname "$dest")"
  dest="${dest%.*}.mp4"

  "$FFMPEG" -y -i "$src" \
    -vf "scale=-2:'min($HEIGHT,ih)'" \
    -c:v libx264 -crf "$CRF" -preset slow \
    -c:a aac -b:a 128k \
    -movflags +faststart \
    "$dest" -loglevel error

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
    done < <(find "$target" -type f \( -iname "*.mp4" -o -iname "*.mov" -o -iname "*.m4v" -o -iname "*.avi" -o -iname "*.mkv" \) -print0)
  elif [[ -f "$target" ]]; then
    resize_one "$target" "$OUT_DIR/$(basename "$target")"
  fi
done
