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

## Checks run (all passing)

- **End-to-end browser test (30 checks):**
  - All 19 HTML pages load with no script errors.
  - Estimator → quote form prefill → validation → submit → thank-you page.
  - The lead email includes phone, preferred contact, lead source (UTM tag), online estimate, and "heard about us".
  - When sending fails, the backup email/phone message appears.
- **Price table vs. estimator:** every homepage price matches the live
  estimator for all home sizes (0 mismatches).
- **Links and data:** no broken internal links or images. Structured data
  for Google parses on every page. Every public page is in `sitemap.xml`.
- **Brand rule:** no copy claims trucks, driving, delivery, or transport.
- **Consistency:** rates, 2-hour minimum, and payment methods are the same
  on the website, ads, profiles, email templates, and both AI knowledge
  bases.
- **New materials (AI search, Instagram/X, logo, print):** every price on
  the flyers, Instagram graphics, and `llms.txt` matches the live
  estimator. The FAQ's hidden data matches the visible FAQ word for word.
  All 4 QR codes scan to a text to (971) 302-0120 with the right message.
  No copy offers trucks or driving, and no old logo is left in use.

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
4. Replace `[WEBSITE URL]` in the listing files, and fill in `[YEAR]` and
   `[#]` employees in the Yelp and Angi files.
5. Verify Google Business Profile (`GET_CUSTOMERS_NOW.md` Part 1).
6. Sign up on U-Haul Moving Help + HireAHelper. Post Craigslist Ads 1 and 5.
7. Create the Facebook, Nextdoor, and Yelp pages using the launch kit.
8. Decide on a cancellation policy and add it to `faq.html` and
   `SERVICE_AGREEMENT_TEMPLATE.md`.
9. Add real crew and job photos (`IMAGE_GUIDE.md`).
10. Set up Bing Webmaster Tools, Bing Places, and Apple Business Connect (`AI_SEARCH_VISIBILITY.md` Part 2).
11. Consider general liability insurance. Google Local Services Ads
    requires it, and some apartment buildings ask movers for an insurance
    certificate before they can use elevators or loading docks.
