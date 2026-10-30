#!/usr/bin/env bash
# Point the site and the listing copy at the live domain:
#   [YOUR-DOMAIN]  → canonical URLs, Open Graph tags, schema, sitemap, robots.txt,
#                    llms.txt (website files in the repo root)
#   [WEBSITE URL]  → listing, ad, profile, email, and print copy (*.md, *.txt,
#                    *.html, *.svg in the repo root). `[WEBSITE URL]` written as
#                    inline code (instructions about it) is left alone.
#
#   ./tools/set-domain.sh restassuredmoving.net            # custom domain
#   ./tools/set-domain.sh 503vincent24-spec.github.io/Rest-Assured   # GitHub Pages URL
#
# Run from anywhere; only files in the repo root are touched. Safe to re-run.
set -euo pipefail

domain="${1:-}"
domain="${domain#http://}"; domain="${domain#https://}"; domain="${domain%/}"
if [[ -z "$domain" || "$domain" == *" "* || "$domain" != *.* ]]; then
  echo "usage: $0 <domain, e.g. restassuredmoving.net>" >&2
  exit 1
fi

cd "$(dirname "$0")/.."
count=0

files=$(grep -l '\[YOUR-DOMAIN\]' ./*.html ./*.xml ./*.txt 2>/dev/null || true)
for f in $files; do
  n=$(grep -o '\[YOUR-DOMAIN\]' "$f" | wc -l)
  sed -i.bak "s#\[YOUR-DOMAIN\]#${domain}#g" "$f" && rm -f "$f.bak"
  count=$((count + n))
  echo "  $f ($n)"
done

# `[WEBSITE URL]` written as inline code is an instruction about the
# placeholder, not a use of it, so it stays.
files=$(grep -l '\[WEBSITE URL\]' ./*.md ./*.txt ./*.html ./*.svg 2>/dev/null || true)
for f in $files; do
  n=$(perl -ne '$c += () = /(?<!`)\[WEBSITE URL\](?!`)/g; END { print $c + 0 }' "$f")
  [[ "$n" -eq 0 ]] && continue
  DOMAIN="$domain" perl -pi -e 's/(?<!`)\[WEBSITE URL\](?!`)/$ENV{DOMAIN}/g' "$f"
  count=$((count + n))
  echo "  $f ($n)"
done

if [[ "$count" -eq 0 ]]; then
  echo "No [YOUR-DOMAIN] or [WEBSITE URL] placeholders left — nothing to do."
  exit 0
fi
echo "Replaced $count placeholder(s) with ${domain}"
echo "Next: submit https://${domain}/sitemap.xml in Google Search Console."
