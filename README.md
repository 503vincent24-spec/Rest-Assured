# Rest Assured Moving LLC — Complete Business System
Version 2.0 | 42 files | GitHub Pages ready | All tasks validated

---

## The Brief — Completion Status

| Task | Status | Key files |
|---|---|---|
| 1. Website (7 pages) | ✅ Complete | `website/index.html` → `quote.html` + blog + 404 + thank-you |
| 2. HTML/CSS/JS + image guide | ✅ Complete | `style.css` · `script.js` · `IMAGE_GUIDE.md` |
| 3. Branding guide + cards | ✅ Complete | `branding/BRANDING_GUIDE.md` · business card SVGs |
| 4. Local SEO content | ✅ Complete | `seo/LOCAL_SEO_CONTENT.md` |
| 5. Google Business Profile | ✅ Complete | `google-business-profile/GBP_CONTENT.md` |
| 6. Facebook content | ✅ Complete | `social-media/FACEBOOK_CONTENT.md` (20 posts) |
| 7. Customer email templates | ✅ Complete | `customer-communications/EMAIL_TEMPLATES.md` (5 templates) |
| 8. Estimate + invoice | ✅ Complete | `operations/estimate-template.html` + `invoice-template.html` |
| 9. AI knowledge base | ✅ Complete | `operations/AI_KNOWLEDGE_BASE.md` |
| 10. Organized files | ✅ Complete | 9 folders, every file clearly named |

**Additional deliverables beyond the brief:** Blog posts (3), advertising strategy, social media campaign strategy, Instagram guide, marketing collateral (flyer + door hanger + newsletter + referral cards), booking workflow, job site checklist.

---

## Complete File Structure

> In this repository every file sits at the root (only `assets/` and `tools/` are subfolders) so GitHub Pages can serve it directly. The tree below groups files by purpose.

```
rest-assured-moving/
│
├── README.md                              ← This file
│
├── website/                               ← Deploy entire folder to GitHub Pages
│   ├── index.html                         ← Homepage
│   ├── services.html                      ← Services detail (6 services, anchored)
│   ├── about.html                         ← Company story and values
│   ├── contact.html                       ← General inquiries form
│   ├── faq.html                           ← 20+ questions with FAQPage schema
│   ├── service-area.html                  ← 9-city local SEO page
│   ├── quote.html                         ← 3-step quote request form (sends leads to your inbox)
│   ├── estimate.html                      ← Instant cost estimator → pre-fills the quote form
│   ├── thank-you.html                     ← Post-form confirmation page
│   ├── 404.html                           ← Custom not-found page
│   ├── blog.html                          ← Blog landing page
│   ├── blog-preparing-for-moving-day.html ← Blog post 1
│   ├── blog-packing-fragile-items.html    ← Blog post 2
│   ├── blog-furniture-assembly-best-practices.html ← Blog post 3
│   ├── style.css                          ← Full design system (all components)
│   ├── script.js                          ← Lead delivery · attribution · quote form · nav · FAQ
│   ├── robots.txt                         ← Crawl rules + sitemap pointer
│   ├── sitemap.xml                        ← 12-page XML sitemap
│   ├── tools/set-domain.sh                ← Fills [YOUR-DOMAIN] everywhere in one command
│   ├── IMAGE_GUIDE.md                     ← Page-by-page image specs + photo brief
│   └── assets/
│       ├── logo-mark.svg                  ← Shield mark (favicon, nav, avatars)
│       ├── logo-lockup.svg                ← Horizontal lockup (letterhead, email)
│       └── favicon.svg                    ← Browser tab icon
│
├── branding/
│   ├── BRANDING_GUIDE.md                  ← Colors, type, slogans, voice, logo usage
│   ├── business-card-front.svg            ← Print-ready front (3.5×2in SVG)
│   └── business-card-back.svg            ← Print-ready back (navy, contact details)
│
├── seo/
│   └── LOCAL_SEO_CONTENT.md               ← Keyword map · city copy · citations · schema
│
├── google-business-profile/
│   └── GBP_CONTENT.md                     ← Description · services · Q&A · posts · photos
│
├── social-media/
│   ├── FACEBOOK_CONTENT.md                ← About section + intro + 20 complete posts
│   ├── SOCIAL_MEDIA_CAMPAIGN_STRATEGY.md  ← 12-week calendar + seasonal campaigns
│   └── INSTAGRAM_GUIDE.md                 ← Bio · highlights · Reels ideas · captions
│
├── advertising/
│   └── ADVERTISING_STRATEGY.md            ← Google LSA/Search · Facebook · Nextdoor
│
├── customer-communications/
│   └── EMAIL_TEMPLATES.md                 ← 5 templates: quote → review request
│
├── operations/
│   ├── estimate-template.html             ← Print-ready branded estimate
│   ├── invoice-template.html              ← Print-ready branded invoice
│   ├── AI_KNOWLEDGE_BASE.md               ← System prompt + FAQs + escalation triggers
│   ├── BOOKING_WORKFLOW.md                ← 6-stage process: inquiry to follow-up
│   └── JOB_SITE_CHECKLIST.md             ← Arrival · walkthrough · standards · sign-off
│
└── marketing-collateral/
    ├── flyer.html                          ← 8.5×11 print-ready promotional flyer
    ├── door-hanger.html                    ← 4.25×11 door hanger with die-cut guide
    ├── email-newsletter-template.html      ← Outlook-safe HTML newsletter template
    ├── referral-card-front.svg            ← Referral card front (business card size)
    └── referral-card-back.svg             ← Referral card back (terms + contact)
```

---

## Step 1 — Turn On Lead Delivery (do this first — it's how the site makes money)

Both forms (`quote.html`, `contact.html`) now send leads **directly to `Shawn@restassuredmoving.net`** through [FormSubmit](https://formsubmit.co) — free, no account, no server. The visitor never needs an email app.

1. Deploy the site (Step 3), open `quote.html` on the live site, and submit a test request.
2. FormSubmit emails `Shawn@restassuredmoving.net` an **"Activate Form"** link. Click it. **Until you do, no leads are delivered** (visitors get the email fallback below instead).
3. Submit a second test — it should land in the inbox as a formatted table, and the visitor lands on `thank-you.html`.
4. *(Recommended)* FormSubmit's activation email includes a random alias. Paste it into `FORM_ID` at the top of `script.js` so the real address isn't in the page source (reduces spam).

**What every lead email contains:** name, phone, email, best time to call, services, move date + flexibility, home size, truck status, pickup, destination, notes, "how did you hear about us", the instant estimate they saw (if they came from `estimate.html`), and **lead source** (UTM tags / `gclid` / `fbclid` / referrer) — so you can see which ads and channels actually produce jobs.

**Safety nets — a lead is never silently dropped:**
- If FormSubmit is down, not activated, or the network fails, the visitor gets a one-tap pre-filled email to you plus the phone number.
- With JavaScript disabled, the form posts to FormSubmit natively.
- A hidden honeypot field filters bot spam.
- Each submission pushes a `generate_lead` event to `dataLayer` (and `fbq('track','Lead')` if the Meta Pixel is installed), so Google Ads / GA4 / Meta conversion tracking works as soon as you add their tags.

**Changing the destination email:** edit `LEAD_EMAIL` in `script.js` and the `action="https://formsubmit.co/…"` attribute on the two `<form>` tags, then re-activate.

---

## Step 2 — Set Your Domain

Canonical URLs, Open Graph tags, schema, `sitemap.xml` and `robots.txt` still contain `[YOUR-DOMAIN]`. Once you know the live address, run:

```bash
./tools/set-domain.sh restassuredmoving.net                  # custom domain
# or, before you have one:
./tools/set-domain.sh 503vincent24-spec.github.io/Rest-Assured
```

Then submit `https://<domain>/sitemap.xml` in Google Search Console.

### Business details already filled in

| Detail | Current value | Where to change it |
|---|---|---|
| Phone | `(971) 302-0120` (links use `tel:+19713020120`) | All pages, `script.js` (`PHONE`, `TEL`) |
| Email | `Shawn@restassuredmoving.net` | All pages, `script.js` (`LEAD_EMAIL`), form `action`s |
| Hourly rate | `$95` (2-person) / `$130` (3-person) | `estimate.html` (`RATE`, `RATE3`), services, FAQ |
| Payment methods | Cash, Cash App, Zelle, Venmo, card and PayPal | FAQ, invoice, AI knowledge base |

Still to replace by hand: `[REVIEW LINK]` (email templates / AI knowledge base), `[PIXEL-ID]` (advertising strategy), and the placeholder testimonials on `index.html` — swap in real reviews before running ads.

---

## Step 3 — Deploy to GitHub Pages

**Quickest path (5 minutes):**
1. Create a GitHub account at github.com
2. New repository → name it (e.g., `restassuredmoving`)
3. The website already lives at this repository's root (pages, `style.css`, `script.js`, `assets/`), so there is nothing to move
4. Repository Settings → Pages → Source: `main` branch, `/ (root)` folder → Save
5. Site goes live at `https://[username].github.io/[repo-name]/`

**Custom domain (recommended):**
1. Pages settings → Custom domain → enter your domain
2. At your registrar, add A records pointing to GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   And a CNAME record: `www → [username].github.io`
3. Wait 10–60 min for DNS propagation
4. Enable "Enforce HTTPS" in Pages settings

**After deploying:**
- Run `./tools/set-domain.sh <your-domain>` (Step 2)
- Submit `sitemap.xml` to Google Search Console
- Verify domain in Meta Business Manager (for Facebook advertising)

---

## Step 4 — Pre-Launch Checklist

**Content:**
- [ ] All placeholders replaced globally
- [ ] Testimonials replaced with real customer reviews
- [ ] Stats on homepage updated (`500+ Jobs`, etc.) with real numbers
- [ ] Real payment methods listed in FAQ and invoice template
- [ ] Hours confirmed accurate in header, footer, FAQ, GBP, AI knowledge base

**Technical:**
- [ ] Site tested in Chrome, Safari, Firefox
- [ ] Site tested on a real mobile device
- [ ] All nav links work
- [ ] FormSubmit activated (Step 1) and a test quote arrived in the inbox
- [ ] Contact form test message arrived in the inbox
- [ ] Footer `data-year` auto-updates (confirm it shows current year)
- [ ] Phone numbers are clickable on mobile (tel: links)

**SEO:**
- [ ] Google Search Console property created and verified
- [ ] Sitemap submitted to Search Console
- [ ] Google Business Profile created, verified, and fully filled out

**Images:**
- [ ] Logo PNG exported and uploaded to GBP and Facebook
- [ ] OG image (1200×630px) created and saved to `website/assets/og-image.png`
- [ ] Real crew/job photos added to website, GBP, and social profiles
- [ ] Full image checklist in `website/IMAGE_GUIDE.md`

---

## Step 5 — Going Live (Day of Launch)

- [ ] Push all files to GitHub → confirm live URL loads
- [ ] Submit a real quote from a phone and confirm it lands in the inbox (critical path)
- [ ] Upload photos to Google Business Profile (minimum: logo + cover)
- [ ] Publish Facebook page (set to Public)
- [ ] Post the pinned intro post (Post 1 from `FACEBOOK_CONTENT.md`)
- [ ] Tell 5 people the business is live and ask for feedback
- [ ] Ask first customers for Google reviews

---

## Step 6 — First 30 Days After Launch

**Week 1:** Google Business Profile active → request first reviews from any completed jobs
**Week 2:** Facebook posting underway (3x/week from `FACEBOOK_CONTENT.md`)
**Week 3:** Apply for Google Local Services Ads (read ADVERTISING_STRATEGY.md first — mover verification warning)
**Week 4:** Review analytics — which pages get traffic, where do visitors leave the site

---

## Key Technical Notes

**style.css** — All colors, fonts, spacing are CSS custom properties at the top of the file. Change a value once to update it everywhere.

**script.js** — Vanilla JS. Controls: lead delivery + fallback, lead-source attribution, multi-step quote form with validation and estimator prefill, mobile nav, FAQ accordion, stat counter animation, year auto-update, smooth scroll.

**Schema markup** — JSON-LD blocks are in every page's `<head>`. `./tools/set-domain.sh` fills in the domain.

**Forms** — `quote.html` and `contact.html` POST to FormSubmit via `fetch`, fall back to a pre-filled `mailto:` if delivery fails, and redirect to `thank-you.html` on success. `quote.html` is a 3-step form; the steps collapse only when JavaScript runs, so it still works without JS. `estimate.html` passes the visitor's answers and ballpark price into `quote.html` via the URL. Config lives at the top of `script.js`.

**estimate-template.html / invoice-template.html** — Open in any browser → File → Print → Save as PDF for a clean branded PDF. Or print directly.

---

## Brand Constraint (always applies)

Rest Assured Moving LLC is a **moving labor company**. It does not provide transportation, truck rental, hauling, or driving. This distinction must be preserved in every piece of content, collateral, and communication this project produces.

Every file in this project maintains that constraint. Before adding any new content — verify it does not imply we drive or transport belongings between locations.

*Rest assured, it's handled.* ✅
