#!/usr/bin/env bash
# Point every canonical URL, Open Graph tag, schema block, sitemap entry and
# robots.txt line at the live domain, replacing the [YOUR-DOMAIN] placeholder.
#
#   ./tools/set-domain.sh restassuredmoving.net            # custom domain
#   ./tools/set-domain.sh 503vincent24-spec.github.io/Rest-Assured   # GitHub Pages URL
#
# Run from anywhere; only website files in the repo root are touched.
set -euo pipefail

domain="${1:-}"
domain="${domain#http://}"; domain="${domain#https://}"; domain="${domain%/}"
if [[ -z "$domain" || "$domain" == *" "* || "$domain" != *.* ]]; then
  echo "usage: $0 <domain, e.g. restassuredmoving.net>" >&2
  exit 1
fi

cd "$(dirname "$0")/.."
files=$(grep -l '\[YOUR-DOMAIN\]' ./*.html ./*.xml ./*.txt 2>/dev/null || true)
if [[ -z "$files" ]]; then
  echo "No [YOUR-DOMAIN] placeholders left — nothing to do."
  exit 0
fi

count=0
for f in $files; do
  n=$(grep -o '\[YOUR-DOMAIN\]' "$f" | wc -l)
  sed -i.bak "s#\[YOUR-DOMAIN\]#${domain}#g" "$f" && rm -f "$f.bak"
  count=$((count + n))
  echo "  $f ($n)"
done
echo "Replaced $count placeholder(s) with https://${domain}/"
echo "Next: submit https://${domain}/sitemap.xml in Google Search Console."
