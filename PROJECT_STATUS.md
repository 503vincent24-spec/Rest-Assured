# Project Status — Rest Assured Moving LLC

A one-page summary of everything built so far, what has been checked, and
what only the owner can do. Start here.

**Business:** Rest Assured Moving LLC, a labor-only moving company (loading,
unloading, packing, unpacking, furniture assembly) in Salem, OR. Owner:
Shawn · (971) 302-0120 · Shawn@restassuredmoving.net. Rates $95/hr
(2 movers) and $130/hr (3 movers), 2-hour minimum. **Never provides trucks
or transport.**

---

## What was asked for, and where it is

| Request | Status | Where |
|---|---|---|
| Website design | ✅ Built, reviewed, fixed, tested | `index.html` and the other 13 pages, `style.css`, `script.js` |
| Facebook page | ✅ Copy, 20 posts, step-by-step page setup, profile and cover images | `FACEBOOK_CONTENT.md`, `ONLINE_LISTINGS_LAUNCH_KIT.md` §3 |
| Craigslist ad | ✅ 5 ready-to-post ads, rules, schedule, reply scripts, 2 ad images | `CRAIGSLIST_ADS.md`, `assets/social/craigslist-ad-*.png` |
| Yelp | ✅ Every profile field, review-policy rules, reply templates | `YELP_PROFILE.md` |
| Angie's List (now Angi) | ✅ Setup, lead-cost math, labor-only task list, 60-day scorecard | `ANGI_PROFILE.md` |
| Neighborhood app (Nextdoor) | ✅ Profile, description, posting guide | `NEXTDOOR_GUIDE.md` |
| Google verification | ✅ Owner walkthrough (only the owner can verify) | `GET_CUSTOMERS_NOW.md` Part 1 |
| Bring in customers and work | ✅ Marketplaces (U-Haul Moving Help, HireAHelper, TaskRabbit, Thumbtack), 14-day plan, sales playbook | `GET_CUSTOMERS_NOW.md`, `SALES_PLAYBOOK.md` |
| Reviews from Cherry City Movers | ❌ Not done on purpose | See "Decisions" below |
| Improve appeal and sales | ✅ Price table, promises, text buttons, estimator fixes, easier quote form | Homepage, `estimate.html`, `quote.html` |
| Delete duplicate `mnt/` folder | ✅ Done | — |
| Instagram and X (Twitter) accounts | ✅ Setup guide, 6 post graphics + 9-post plan, 5 highlight covers, X header | `INSTAGRAM_GUIDE.md`, `ONLINE_LISTINGS_LAUNCH_KIT.md` §3a–3b, `assets/social/instagram/` |
| Logo (trust, honesty, family) + business cards + flyers for laundromats and apartments | ✅ New logo applied everywhere; print-ready PDFs with a QR code that has been scan-tested | `assets/logo-sheet.png`, `print/` |
| Show up in AI search (ChatGPT, Google AI, Perplexity, etc.) | ✅ Site side done; owner steps listed | `AI_SEARCH_VISIBILITY.md`, `llms.txt`, `robots.txt` |
| Premium price point: blankets + shrink wrap on all furniture | ✅ "Full Wrap" option in the estimator, homepage price table, FAQ, quote form; supply and labor costs worked out | `PRICING_GUIDE.md` §6, `estimate.html` |
| Same-day service option | ✅ $115/hr (2 movers), $155/hr (3), call or text by 12 pm; in the estimator, homepage, FAQ, quote form, AI notes, booking workflow; costs worked out | `PRICING_GUIDE.md` §5b, `estimate.html` |
| Real job photos on the website and social profiles | ✅ 8 photos cropped, faces/plate removed, phone data stripped; homepage gallery, services and About pages, 3 Instagram posts, photo covers for Facebook and X, upload set for Google/Yelp/Angi/Nextdoor | `assets/photos/`, `IMAGE_GUIDE.md` §0, `ONLINE_LISTINGS_LAUNCH_KIT.md` §4 |

## Checks run (all passing, last full audit Oct 30, 2026)

- **Browser tests (all 19 pages, desktop and phone):** every page loads
  with no script errors or missing files and no sideways scrolling.
  Estimator → quote form → thank-you page, including Full Wrap and
  same-day; the lead email carries services, estimate, phone, lead source
  and "heard about us"; the backup message appears if sending fails.
  The contact form, mobile menu, FAQ dropdowns and skip link all work.
- **Prices:** every homepage price, including the Full Wrap column and
  supply fees, matches the live estimator. Same-day rates ($115/$155),
  Full Wrap fees ($45–$170) and regular rates match in every page, ad,
  profile, template and AI knowledge base.
- **Accessibility:** automated WCAG scan (axe) is clean on every page:
  text contrast, a main region and skip link, underlined links in text.
  One advisory note left: some card headings skip a level (h2 → h4).
- **Search data:** the hidden business data parses on every page; the
  FAQ's 24 hidden answers match the visible FAQ word for word; sitemap
  dates are current; no broken links or missing anchors.
- **Rules:** no copy offers trucks, driving, delivery or transport;
  nothing claims insurance; no borrowed or invented reviews; no Yelp
  review requests; no unbacked claims ("guaranteed", "#1", customer
  counts).
- **Images and print:** every rendered image and PDF matches its source
  file; all QR codes scan to a text to (971) 302-0120; job photos carry
  no hidden location data.
- **Domain script:** tested on a copy of the repo: fills all
  `[YOUR-DOMAIN]` and `[WEBSITE URL]` placeholders, leaves instructions
  alone, safe to re-run.

## Decisions on record

- **No borrowed reviews.** Reviews from Cherry City Movers (a separate
  company founded in 2008) describe that company's service. Using them
  for Rest Assured would break Google's and Yelp's rules and the FTC's
  rule against fake reviews. Build real reviews through U-Haul Moving Help
  and by asking every customer for a Google review. Shawn can truthfully
  state his years of moving experience.
- **No invented reviews or stats on the site.** They were replaced with
  real prices and promises. Add genuine reviews, with permission, as they
  come in (marked spots in `index.html` and `quote.html`).
- **Founding year: please confirm.** The About page says "Serving Salem
  since 2024" and the AI knowledge base says founded 2024, but the 90-day
  plan lists `2024` as a value to replace. If 2024 is right, use it for
  `[YEAR]` in the Yelp and Angi files; if not, change all three.
- **Never ask for Yelp reviews** (Yelp's rule). Do ask for Google and Angi
  reviews.
- **Licensed, not insured.** Shawn is licensed but carries no liability
  insurance, so nothing may say "insured", "bonded", or "covered". The FAQ,
  Google Q&A, and AI knowledge base say so honestly when asked. If a policy
  is bought later, search the repo for "liability insurance" to update those
  answers, the service agreement's damage clause, and `llms.txt`.

## Only the owner can do these (in order)

1. **Merge branch `ccr-60a728e4-birtu0` into `main`.** The improvements
   aren't on the public site until this happens.
2. Turn on GitHub Pages and run `./tools/set-domain.sh <domain>` (README
   Steps 2–3).
3. Submit one test quote, then click FormSubmit's **Activate** email.
   Until then no website leads arrive (README Step 1).
4. Fill in `[YEAR]` and `[#]` employees in the Yelp and Angi files. (The
   domain script in step 2 now also fills `[WEBSITE URL]` in the listing
   files.)
5. Verify Google Business Profile (`GET_CUSTOMERS_NOW.md` Part 1).
6. Sign up on U-Haul Moving Help + HireAHelper. Post Craigslist Ads 1 and 5.
7. Create the Facebook, Nextdoor, and Yelp pages using the launch kit.
8. Decide on a cancellation policy and add it to `faq.html` and
   `SERVICE_AGREEMENT_TEMPLATE.md`.
9. Add a photo of Shawn or the crew at work, plus unloading and assembly shots. Eight real truck-load photos are already in use (`IMAGE_GUIDE.md` §0).
10. Set up Bing Webmaster Tools, Bing Places, and Apple Business Connect (`AI_SEARCH_VISIBILITY.md` Part 2).
11. Consider general liability insurance. Google Local Services Ads
    requires it, and some apartment buildings ask movers for an insurance
    certificate before they can use elevators or loading docks.
