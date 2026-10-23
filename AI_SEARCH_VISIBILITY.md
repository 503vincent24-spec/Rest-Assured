# Showing Up in AI Search — Rest Assured Moving LLC

People increasingly ask ChatGPT, Google's AI Overviews and Gemini,
Microsoft Copilot, Perplexity, Claude, and Siri things like *"who can help
me load a U-Haul in Salem?"* This file covers what's already built into
the website and the steps only the owner can take. Most AI answers
come from the off-site sources in Part 2.

No one can *guarantee* an AI will recommend a specific business. These
steps give AI tools as many clear, consistent, trustworthy sources about
the business as possible, which is what they draw on.

---

## Part 1 — Already built into the website ✅

| What | File | Why it matters for AI |
|---|---|---|
| AI crawlers explicitly allowed (ChatGPT, Claude, Perplexity, Gemini, Apple, Copilot/Bing, and others) | `robots.txt` | Blocked crawlers can't read or cite the site |
| `llms.txt`: a plain-language fact sheet (services, prices, area, hours, phone, what we don't do) | `llms.txt` | An emerging standard that gives AI tools the key facts in one short file |
| Business details for Google and AI: business type, owner, slogan, cities, hourly prices, payment, hours, logo | `index.html` (hidden structured data) | Machine-readable facts that search engines and AI tools trust more than plain text |
| All 22 FAQ answers marked up as questions and answers, matching the page word for word | `faq.html` | AI answers are often taken straight from question-and-answer content |
| Clear answer-first content: price table, labor-only explanation, service-area page | Homepage, `services.html`, `service-area.html` | AI tools quote pages that state facts plainly ("$95/hour for 2 movers") |
| Sitemap with last-updated dates | `sitemap.xml` | Helps crawlers find and refresh pages |

After the site is live, run `./tools/set-domain.sh <domain>`. It also fills
the domain into `llms.txt` and `robots.txt`.

---

## Part 2 — Owner to-do (in order of impact)

### 1. Bing (ChatGPT search and Copilot draw on Bing's index)
- [ ] **Bing Webmaster Tools** (bing.com/webmasters): sign in, choose
      *Import from Google Search Console* (fastest), and submit
      `sitemap.xml`.
- [ ] **Bing Places for Business** (bingplaces.com): import your Google
      Business Profile once it's verified. Use the same name, phone, hours,
      and service area.

### 2. Google (AI Overviews and Gemini)
- [ ] Verify Google Business Profile (`GET_CUSTOMERS_NOW.md` Part 1).
      This is the single biggest local signal.
- [ ] **Google Search Console**: add the site, submit `sitemap.xml`, and
      use *URL Inspection → Request indexing* on the homepage, services,
      FAQ, and service-area pages.

### 3. Apple (Siri, Apple Maps, Apple Intelligence)
- [ ] **Apple Business Connect** (businessconnect.apple.com): claim the
      business, add the logo (`assets/social/profile-1000.png`), hours,
      phone, and website.

### 4. Matching listings across the web
AI tools trust a business more when many independent sources agree. Use
the **Master Business Info** block in `ONLINE_LISTINGS_LAUNCH_KIT.md` §1,
copied exactly, on:
- [ ] Yelp · Facebook · Nextdoor · Angi · Thumbtack · U-Haul Moving Help ·
      HireAHelper
- [ ] Better Business Bureau (bbb.org; free listing, accreditation
      optional)
- [ ] Salem Area Chamber of Commerce directory (if you join)
- [ ] After each one goes live, add its URL to the `sameAs` list below
      (see "Linking your profiles")

### 5. Reviews that mention specifics
AI assistants summarize reviews when recommending businesses. Ask every
customer for a **Google** review, and make it easy to mention specifics:
> "If you have a second, it really helps to mention what we did (loading
> your U-Haul, assembling the beds) and your city."

Never write reviews for customers or offer anything in exchange for them,
and never ask for Yelp reviews.

### 6. Get mentioned on other sites
AI answers lean on third-party mentions. Good sources for a local mover:
- Referral partners' sites (apartment complexes, storage facilities,
  real estate agents) listing you as a recommended moving crew
  (`REFERRAL_PARTNER_TOOLKIT.md`)
- Helpful answers in r/SalemOR and local Facebook groups when people ask
  for moving help. Be open that it's your business.
- Local news or community posts (sponsoring a school or charity move, for
  example)

---

## Linking your profiles (do this once listings exist)

Once listings are live, add their URLs to the homepage structured data so
AI tools know they're the same business. In `index.html`, inside the
`LocalBusiness` block, add:

```json
"sameAs": [
  "https://www.facebook.com/RestAssuredMovingLLC",
  "https://www.yelp.com/biz/…",
  "https://nextdoor.com/pages/…",
  "https://www.angi.com/companylist/us/or/salem/…",
  "https://www.movinghelp.com/…"
]
```

Use the **real** URLs. Only list profiles that exist.

---

## Monthly check (10 minutes)

Ask each assistant these questions and note whether Rest Assured Moving
comes up:

| Question | ChatGPT | Google (AI Overview) | Perplexity | Copilot |
|---|---|---|---|---|
| "Who can help me load a U-Haul in Salem, Oregon?" | | | | |
| "Moving labor only near Keizer OR" | | | | |
| "Furniture assembly service Salem OR" | | | | |
| "How much do movers cost per hour in Salem Oregon?" | | | | |

If a competitor shows up and you don't, look at which source the
assistant cites (usually Yelp, Google reviews, or a directory). That is
where to get listed or earn reviews next.

**Timing:** new sites usually take **4–12 weeks** to show up in AI answers
after they go live and are indexed. Listings and reviews speed this up.
