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
│   ├── quote.html                         ← 3-step quote request form
│   ├── thank-you.html                     ← Post-form confirmation page
│   ├── 404.html                           ← Custom not-found page
│   ├── blog.html                          ← Blog landing page
│   ├── blog-preparing-for-moving-day.html ← Blog post 1
│   ├── blog-packing-fragile-items.html    ← Blog post 2
│   ├── blog-furniture-assembly-best-practices.html ← Blog post 3
│   ├── style.css                          ← Full design system (all components)
│   ├── script.js                          ← Nav · form · FAQ · stats · year
│   ├── robots.txt                         ← Crawl rules + sitemap pointer
│   ├── sitemap.xml                        ← 11-page XML sitemap
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

## Step 1 — Replace All Placeholders (do this before anything else)

Global find-and-replace across the entire project folder:

| Placeholder | Replace with | Used in |
|---|---|---|
| `(971) 302-0120` | `(503) 555-XXXX` | Website, GBP, templates, collateral |
| `Shawn@restassuredmoving.net` | `your@email.com` | Website, GBP, templates, collateral |
| `[WEBSITE URL]` | `https://restassuredmovingllc.com` | Website meta, templates, collateral |
| `[YOUR-DOMAIN]` | `restassuredmovingllc.com` | Canonical URLs, schema, sitemap |
| `97301` | Your Salem ZIP | Schema markup in index.html |
| `95` | Your hourly rate (e.g. `85`) | services.html, FAQ, AI knowledge base |
| `[#]` (crew size) | Default crew size (e.g. `2`) | Services, FAQ, templates |
| `2024` | Year business founded | about.html |
| `[REVIEW LINK]` | Your Google review URL | Email templates, AI knowledge base |
| `25` (referral) | Referral discount amount | Referral cards |
| `Cash, Cash App, Zelle, Venmo, card and Paypal` | Your accepted methods | FAQ, invoice, AI knowledge base |
| `Shawn Vincent` | Your full name | Business card back |
| `Owner` | Your title (e.g. `Owner`) | Business card back |
| `[PIXEL-ID]` | Meta Pixel ID (from Business Manager) | Advertising strategy instructions |

**In VS Code:** Ctrl+Shift+H → check "Search across files" → find each placeholder → replace all.

**Replace testimonials on index.html** — the 3 testimonial cards are marked as placeholders. Swap them with real customer reviews before publishing.

---

## Step 2 — Deploy to GitHub Pages

**Quickest path (5 minutes):**
1. Create a GitHub account at github.com
2. New repository → name it (e.g., `restassuredmoving`)
3. Upload all files from the `website/` folder to the repository root
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
- Update all `[YOUR-DOMAIN]` placeholders with your real domain
- Submit `sitemap.xml` to Google Search Console
- Verify domain in Meta Business Manager (for Facebook advertising)

---

## Step 3 — Pre-Launch Checklist

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
- [ ] Quote form tested end-to-end (submit → email opens correctly)
- [ ] Contact form tested end-to-end
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

## Step 4 — Going Live (Day of Launch)

- [ ] Push all files to GitHub → confirm live URL loads
- [ ] Test quote form from a real phone (critical path)
- [ ] Upload photos to Google Business Profile (minimum: logo + cover)
- [ ] Publish Facebook page (set to Public)
- [ ] Post the pinned intro post (Post 1 from `FACEBOOK_CONTENT.md`)
- [ ] Tell 5 people the business is live and ask for feedback
- [ ] Ask first customers for Google reviews

---

## Step 5 — First 30 Days After Launch

**Week 1:** Google Business Profile active → request first reviews from any completed jobs
**Week 2:** Facebook posting underway (3x/week from `FACEBOOK_CONTENT.md`)
**Week 3:** Apply for Google Local Services Ads (read ADVERTISING_STRATEGY.md first — mover verification warning)
**Week 4:** Review analytics — which pages get traffic, where do visitors leave the site

---

## Key Technical Notes

**style.css** — All colors, fonts, spacing are CSS custom properties at the top of the file. Change a value once to update it everywhere.

**script.js** — Vanilla JS. Controls: mobile nav toggle, multi-step quote form (3 steps), form validation, FAQ accordion, stat counter animation, year auto-update, smooth scroll.

**Schema markup** — JSON-LD blocks are in every page's `<head>`. Update `[YOUR-DOMAIN]`, `(971) 302-0120`, and `Shawn@restassuredmoving.net` for full SEO benefit.

**Forms** — Both forms (quote.html and contact.html) use `mailto:` to open the user's email client. This requires no backend and no monthly cost. To upgrade to a true form backend, see Formspree.io or Netlify Forms (README deployment notes).

**estimate-template.html / invoice-template.html** — Open in any browser → File → Print → Save as PDF for a clean branded PDF. Or print directly.

---

## Brand Constraint (always applies)

Rest Assured Moving LLC is a **moving labor company**. It does not provide transportation, truck rental, hauling, or driving. This distinction must be preserved in every piece of content, collateral, and communication this project produces.

Every file in this project maintains that constraint. Before adding any new content — verify it does not imply we drive or transport belongings between locations.

*Rest assured, it's handled.* ✅
