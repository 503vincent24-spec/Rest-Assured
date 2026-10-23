# Online Listings Launch Kit — Rest Assured Moving LLC

One place to set up **Facebook, Craigslist, Yelp, Angi, and Nextdoor** (plus
Google, which matters most). It covers the exact business details to paste
everywhere, the order to do things in, which image goes where, and links to
the full copy for each platform.

> **Why one kit:** Google cross-checks your name, phone, and website across
> the web. If every listing matches exactly, local search ranking improves.
> If they don't match ("Rest Assured Movers" on one, a different phone on
> another), ranking suffers. Copy from the block below every time. Don't
> retype it.

---

## 1. Master Business Info (copy these exact details)

```
Business name:  Rest Assured Moving LLC
Phone:          (971) 302-0120
Email:          Shawn@restassuredmoving.net
Website:        https://[WEBSITE URL]
City / ZIP:     Salem, OR 97301   (hide street address — service-area business)
Hours:          Monday–Saturday 7:00 AM – 7:00 PM · Sunday closed
Service area:   Salem, Keizer, Woodburn, Albany, McMinnville, Beaverton,
                Hillsboro, Tigard, Portland Metro
Rates:          $95/hr (2 movers) · $130/hr (3 movers) · 2-hour minimum
Payment:        Cash, credit/debit card, Venmo, Zelle, Cash App, PayPal
Tagline:        Rest assured, it's handled.
Scope:          LABOR ONLY — loading, unloading, packing, unpacking,
                furniture assembly. We never provide trucks or transport.
```

### Descriptions by length

**Short (≈100 characters): Facebook intro, Nextdoor tagline, Angi headline**
```
Licensed & insured moving labor in Salem, OR. You bring the truck — we bring the crew.
```

**Medium (≈250 characters): directory "short description" fields**
```
Rest Assured Moving LLC provides licensed, insured moving labor in Salem and
Portland Metro: truck and PODS loading, unloading, packing, unpacking, and
furniture assembly. Flat hourly pricing from $95/hr. No fuel or mileage fees.
```

**Long (≈750 characters):** use the Yelp *Specialties* text in
`YELP_PROFILE.md` §3. It fits Google, Angi, Nextdoor, and Facebook "About" too.

---

## 2. Setup Order (one evening per step)

> For the Google verification walkthrough, the labor marketplaces (U-Haul
> Moving Help, HireAHelper, TaskRabbit, Thumbtack), and a 14-day plan, see
> `GET_CUSTOMERS_NOW.md`.

| # | Platform | Time | Cost | Why this order | Full copy |
|---|---|---|---|---|---|
| 1 | **Google Business Profile** | 45 min + postcard/video verification | Free | Biggest source of local calls. Verification takes days, so start it first | `GBP_CONTENT.md` |
| 2 | **Facebook Page** | 45 min | Free | Needed for Nextdoor/Facebook ads and the Meta Pixel. Customers check it for activity | `FACEBOOK_CONTENT.md` + §3 below |
| 3 | **Nextdoor Business** | 20 min | Free | Neighbor recommendations bring high-trust leads | `NEXTDOOR_GUIDE.md` |
| 4 | **Yelp** | 30 min | Free | Customers check it. Claim it before someone else creates a messy listing | `YELP_PROFILE.md` |
| 5 | **Craigslist** | 20 min per ad | About $5 per post | Fastest way to get your first paid jobs this week | `CRAIGSLIST_ADS.md` |
| 6 | **Angi** | 45 min + background check | Paid leads | Set up once you can answer leads within 5 minutes | `ANGI_PROFILE.md` |

**Before step 1:** use one password manager (Bitwarden is free) for every
login below, turn on two-step verification everywhere, and sign up for
everything with `Shawn@restassuredmoving.net`, never a personal Gmail. That
way the accounts belong to the business.

---

## 3. Creating the Facebook Page (step by step)

Facebook requires a **personal profile** to own a business Page. The Page
appears under the business name. Your personal profile is never shown
on it.

1. Log in to your personal Facebook account (or create one with your real
   name. Facebook bans "business" personal profiles).
2. Go to **facebook.com/pages/create**.
3. **Page name:** `Rest Assured Moving LLC`
4. **Category:** type `Mover` and choose the closest result, then add
   `Furniture Assembly Service` and `Home Service` if offered (3 max).
5. **Bio:** paste the *Short description* from §1.
6. Choose **Create Page**, then fill in:
   - **Contact:** phone, email, website (add
     `?utm_source=facebook&utm_medium=social&utm_campaign=fb-page` to the
     website URL)
   - **Location:** choose *service area* (not a street address) and add
     the 9 cities
   - **Hours:** Mon–Sat 7–7
   - **Price range:** `$$`
7. **Profile picture:** `assets/social/profile-1000.png`
8. **Cover photo:** `assets/social/facebook-cover-1640x624.png`
9. **Action button:** *Edit button* → **Get Quote** (or *Call Now* →
   (971) 302-0120). Point *Get Quote* to `https://[WEBSITE URL]/quote.html`.
10. **Username:** Settings → Username → `@RestAssuredMovingLLC`
11. **Turn on messaging auto-reply:** Meta Business Suite → Inbox →
    Automations → *Instant reply*:
    ```
    Thanks for messaging Rest Assured Moving! We reply within the hour
    (Mon–Sat 7am–7pm). For the fastest quote, send your move date, home
    size, the truck/PODS you're using, and pickup + drop-off cities —
    or call/text (971) 302-0120.
    ```
12. **Add a backup admin** (spouse or partner) under Settings → Page
    access, so losing one login never locks you out.
13. Publish **Post 1** from `FACEBOOK_CONTENT.md` and **pin** it. Schedule
    Posts 2–6 for the next two weeks in Meta Business Suite.
14. Invite friends to like the Page, and join 3–5 local Salem/Keizer
    community and buy-nothing groups as the Page where allowed. Read each
    group's rules before posting anything promotional.

---

## 4. Image Map: Which File Goes Where

All files are in `assets/social/` unless noted. To change wording on the
images, edit `tools/social-images.html` and re-run
`node tools/render-social-images.js`.

| Platform | Profile / logo | Cover / banner | Posts / gallery |
|---|---|---|---|
| Google Business Profile | `profile-1000.png` | `facebook-cover-1640x624.png` (as cover) | Real job photos + `square-post-1080.png` |
| Facebook | `profile-1000.png` | `facebook-cover-1640x624.png` | `square-post-1080.png` |
| Nextdoor | `profile-1000.png` | `facebook-cover-1640x624.png` | `square-post-1080.png` |
| Yelp | `profile-1000.png` | — | Real photos first, then `craigslist-ad-2-1200x900.png` |
| Angi | `profile-1000.png` | — | `square-post-1080.png` + real job photos |
| Craigslist | — | — | `craigslist-ad-1-1200x900.png` (lead image), `craigslist-ad-2-1200x900.png` |
| Website link previews | `assets/og-image.png` (1200×630, used automatically when anyone shares the site) | | |

---

## 5. Lead Tracking (knowing what actually pays)

Every listing's website link has a `utm_source` tag (facebook, yelp, angi,
craigslist), and the quote form's *How did you hear about us?* menu now
lists Craigslist, Yelp, and Angi. Each lead email shows both. At the end
of every month, fill in:

| Source | Leads | Booked | Revenue | Spend | Cost per booked job |
|---|---|---|---|---|---|
| Google | | | | $0 | |
| Facebook | | | | | |
| Nextdoor | | | | | |
| Yelp | | | | $0 | |
| Craigslist | | | | | |
| Angi | | | | | |
| Referral | | | | $0 | |

Put more time and money into the top two. Drop anything whose cost per
booked job stays above 40% of an average job's revenue.

---

## 6. Launch Checklist

**Before going live**
- [ ] Website deployed and `./tools/set-domain.sh <domain>` run (README Step 2–3)
- [ ] Replace `[WEBSITE URL]` in this kit and every platform file with the live domain
- [ ] FormSubmit activated: a test quote arrived in the inbox (README Step 1)
- [ ] `[YEAR]` founded and `[#]` employees filled into `YELP_PROFILE.md` / `ANGI_PROFILE.md`
- [ ] Certificate of insurance PDF ready to upload

**Accounts**
- [ ] Google Business Profile claimed and verification requested
- [ ] Facebook Page created (§3), Post 1 pinned
- [ ] Nextdoor business page claimed, 9 cities added
- [ ] Yelp page claimed, address hidden, 3 categories set
- [ ] Craigslist account made; Ad 1 (Salem) and Ad 5 (Portland) posted
- [ ] Angi: per-lead prices in writing, budget cap set, only labor-only tasks turned on

**Consistency check (do once all are live)**
- [ ] Search Google for `"Rest Assured Moving LLC" Salem`. Every result
      shows the same name, phone, and website
- [ ] No listing says or implies we provide trucks, driving, or transport

**First 30 days**
- [ ] Answer every lead within 15 minutes (5 minutes on Angi)
- [ ] Ask every finished job for a **Google** review (never ask for Yelp reviews)
- [ ] Renew Craigslist ads on schedule (`CRAIGSLIST_ADS.md` §4)
- [ ] Post on Facebook 3× a week, on Nextdoor 1× a week
- [ ] Fill in the §5 tracking table at month end
