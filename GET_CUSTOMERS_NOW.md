# Get Customers Now — Google Verification + Booking Marketplaces

What to do this week to turn the website and listings into **booked jobs**.
Part 1 gets Google Business Profile verified. Part 2 puts the business on
the marketplaces where people already book moving labor. Part 3 is a 14-day
plan.

---

## Part 1 — Getting Verified on Google

The business owner has to do verification from their own Google account.
Google checks that a real person runs the business, and nobody else can do
it for you. Plan on about 1 hour of work and roughly 2–7 business days of
review.

### 1. Create the profile correctly (avoid the common rejections)

1. Go to **business.google.com** and sign in with the Google account that
   will own the business. Use a business Gmail or Google Workspace account
   on `Shawn@restassuredmoving.net`, not a shared or personal throwaway.
2. **Business name:** `Rest Assured Moving LLC`, exactly. Don't add keywords
   ("Rest Assured Moving – Salem Movers Cheap"). That is the #1 cause of
   suspensions.
3. **Category:** primary `Mover`. Add `Furniture assembly service` if it's
   offered.
4. **"Do you want to add a location customers can visit?"** → **No.** You
   work at customers' homes, so you're a *service-area business*. Enter the
   business address privately; Google won't show it.
5. **Service areas:** Salem, Keizer, Woodburn, Albany, McMinnville,
   Beaverton, Hillsboro, Tigard, Portland.
6. **Phone / website:** `(971) 302-0120` and the live site URL. The website
   must be live and show the same name and phone number.
7. Paste the description, services, and hours from `GBP_CONTENT.md`.

### 2. Verify

Google chooses the method. For service-area businesses it is usually a
**video recording**, sometimes a phone/text code, email, or a live video
call.

**Before recording the video, get these ready:**
- [ ] Something branded: a Rest Assured shirt or hoodie, printed business
      cards (`business-card-front.svg` / `-back.svg`), a printed estimate or
      invoice with the logo
- [ ] Proof you run the business: your Oregon Secretary of State LLC
      registration (on screen or printed) and your business bank or payment app showing the business name
- [ ] Your work equipment: moving blankets, dollies, straps, tool bag
- [ ] A street sign or landmark in Salem you can film to show location

**Recording the video:** one continuous clip, no edits, about 30–60
seconds, phone held steady. Shoot it in this order:
1. **Where you are.** Film a street sign or landmark in Salem, then the
   outside of where you keep your equipment (house, garage, or storage
   unit).
2. **Your equipment and branding.** Blankets, dollies, tools, a branded
   shirt, business cards.
3. **Proof you run the business.** Open the garage or storage unit with
   your own key, and show the LLC registration with the business name
   visible.

Upload it in the Google Business Profile app. Don't film customers' homes
or faces, and don't show a rental truck as if it's yours.

**If verification fails:** fix whatever Google names (most often a name
with extra keywords, a website that isn't live, or a phone number that
doesn't match), wait 24 hours, and choose **Get verified** again. Don't
create a second profile. Duplicates get both profiles suspended.

### 3. Right after verification (same day)

- [ ] Profile → **Ask for reviews** → copy the short review link and paste
      it in place of `[REVIEW LINK]` in `EMAIL_TEMPLATES.md` and
      `AI_KNOWLEDGE_BASE.md`
- [ ] Upload `assets/social/profile-1000.png` (logo),
      `assets/photos/upload/job-full-wrap.jpg` (cover), and all 8 real job photos in `assets/photos/upload/`
- [ ] Turn on **Messages** and **Booking / Quote** button pointing to
      `/quote.html?utm_source=google&utm_medium=organic&utm_campaign=gbp`
- [ ] Publish the first post from `GBP_CONTENT.md`
- [ ] Apply for **Google Local Services Ads** (see
      `ADVERTISING_STRATEGY.md`). It needs a background check and **proof of
      insurance**, so it isn't available until you have a liability
      policy. Skip it for now.

---

## Part 2 — Marketplaces Where People Book Moving Labor

These sites send customers who have **already rented a truck and need
labor**, which is exactly what you sell. They're often the fastest route to
the first 20 jobs and first 20 reviews.

| Marketplace | Why it fits | Sign up |
|---|---|---|
| **U-Haul Moving Help** (movinghelp.com) | U-Haul offers local labor to every truck and U-Box customer at checkout. It is the biggest single source of labor-only moving jobs | movinghelp.com → *Become a Service Provider* |
| **HireAHelper** | Same model, connected to several truck and container companies | hireahelper.com → *Become a Mover* |
| **TaskRabbit** | Furniture assembly (IKEA, Wayfair) and small "help me move a couch" jobs | taskrabbit.com → *Become a Tasker* |
| **Thumbtack** | Pay-per-lead like Angi, often cheaper for moving labor | thumbtack.com/pro |

**How to win on these sites:**
- **List as `Rest Assured Moving LLC`** with the same phone, logo
  (`profile-1000.png`), and description (`ONLINE_LISTINGS_LAUNCH_KIT.md` §1).
- **Price to rank at first.** Until you have about 10 reviews, set your
  marketplace hourly rate a little below the Salem average shown on the
  site. Raise it once reviews build up.
- **Accept fast and keep your calendar current.** These platforms favor
  providers who respond quickly and rarely cancel.
- **Reviews arrive on their own**, because the platform asks every customer
  after the job. Each review is of *Rest Assured Moving* and builds your
  own track record honestly.
- **Know the fees.** Each platform keeps a share of the job or charges for
  leads. Read the fee terms before you accept your first booking and add
  them to the tracking table in the launch kit.

### About Shawn's past reviews

Reviews that customers wrote about another company, such as Cherry City
Movers, describe *that* company's service. They can't be shown as Rest
Assured Moving reviews or posted to Google, Yelp, Facebook, or the website.
That would break Google's and Yelp's rules and the FTC's rule against
misleading reviews, and could get every listing suspended. What you
honestly *can* say:

- On the website About page and in quote conversations: **"Shawn has
  [X] years of hands-on moving experience and has worked on [hundreds of]
  moves in the Salem and Portland area."** Fill in true numbers.
- If a past customer **personally** knows Shawn's work and later hires
  Rest Assured Moving, they can review Rest Assured from their own
  experience.
- If you want to quote a past review on the website, it has to be clearly
  labeled with where it came from (for example, *"Review of a Cherry City
  Movers crew that included Shawn, MovingHelp.com, Jan 2026"*), and you
  should get that company's permission first. Never put it on a review
  site.

---

## Part 3 — 14-Day Plan to the First Booked Jobs

| Day | Do this | Expected result |
|---|---|---|
| 1 | Deploy the site, run `tools/set-domain.sh`, activate FormSubmit (README Steps 1–3) | Website can capture leads |
| 1 | Create Google Business Profile and start verification (Part 1) | Verification in review |
| 2 | Sign up on U-Haul Moving Help + HireAHelper (Part 2) | Profiles under review |
| 2 | Post Craigslist Ad 1 (Salem) + Ad 5 (Portland) (`CRAIGSLIST_ADS.md`) | First calls and texts within days |
| 3 | Facebook Page live, pin Post 1, share it to your personal profile and 3 local groups | Friends and family referrals |
| 3 | Text 20 people you know: "I've launched Rest Assured Moving — if you or anyone you know is moving, I'd appreciate the referral" | Usually 1–3 leads |
| 4 | Nextdoor business page + intro post (`NEXTDOOR_GUIDE.md`) | Neighbor recommendations |
| 5 | Visit 3–5 local U-Haul dealers, storage facilities, and apartment leasing offices with business cards and flyers (`REFERRAL_PARTNER_TOOLKIT.md`) | Steady referral partners |
| 5 | Claim Yelp (`YELP_PROFILE.md`) | Page claimed |
| 7 | Renew Craigslist ads. Ask every completed job for a **Google** review | First reviews |
| 8–10 | Google verified → do the Part 1 §3 list, apply for Local Services Ads | Showing up in Google Maps |
| 10 | Angi only if you can call leads within 5 minutes (`ANGI_PROFILE.md`) | Paid leads |
| 14 | Fill in the tracking table (`ONLINE_LISTINGS_LAUNCH_KIT.md` §5); double down on the top 2 sources | Clear picture of what works |

**Answer every call, text, and message within 15 minutes.** In moving
labor the first mover to respond usually gets the job. A missed call is a
lost job.
