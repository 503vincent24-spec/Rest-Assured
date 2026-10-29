# Pricing Guide — Rest Assured Moving LLC

This document helps you set, structure, and adjust hourly rates with
confidence. The $95 placeholder throughout the project needs a real
number — this guide helps you find it.

---

## 1. The Pricing Model

**Flat hourly rate per crew.** Not per mover — per crew as a unit.
- Clock starts on arrival, stops after the end-of-job walkthrough
- No fuel surcharges, no mileage fees within service area
- Materials (boxes, paper) billed separately only if you supply them
- Moving blankets and shrink wrap are included in the hourly rate
  (furniture goes into blankets *or* shrink wrap)
- **Full Wrap** (optional): blankets *and* sealed stretch wrap on every
  piece. Extra wrapping time billed hourly + a flat supply fee (§6)

---

## 2. Calculate Your Minimum Viable Rate

### Direct labor cost per crew-hour
| Item | Amount |
|---|---|
| Crew wages (e.g., 2 movers × $[WAGE]/hr) | $[TOTAL WAGES] |
| Payroll taxes (~15% of wages) | $[TAX] |
| Workers' compensation (~5–8% of wages) | $[WC] |
| **Direct labor cost/hour** | **$[SUBTOTAL]** |

### Overhead per billable hour
Divide monthly overhead by estimated monthly billable hours.

| Monthly cost | Amount |
|---|---|
| Vehicle fuel + maintenance | $[X] |
| Equipment depreciation | $[X] |
| General liability insurance | $[X] |
| Phone, software, admin | $[X] |
| Marketing costs | $[X] |
| **Total monthly overhead** | **$[X]** |

If you run ~48 billable hours/month (3 jobs/week × 4 hours avg):
**Overhead per hour = Monthly overhead ÷ 48**

### Minimum rate
```
Minimum = Labor cost + Overhead per hour + Profit target
Example: $42 + $18 + $25 = $85/hour minimum for a 2-person crew
```

---

## 3. Oregon Market Rate Research

Research before finalizing your rate:
- Search "moving labor Salem Oregon" — visit competitors with published rates
- Check Thumbtack and Angi for listed Oregon moving labor rates
- Note what's included in each competitor's quote (some add fuel/travel)

**Typical Oregon range (verify current rates — these change):**
- 2-person crew: $90–$140/hour
- 3-person crew: $120–$180/hour
- 4-person crew: $150–$220/hour

**Positioning:** Start at or slightly below the market median while building
reviews. Once you have 15+ Google reviews at 4.8+, your reviews justify
a premium.

---

## 4. Rate Tiers by Crew Size

| Crew | Best for | Rate |
|---|---|---|
| 2 movers | Studio, 1BR, assembly only | $[BASE] |
| 3 movers | 2BR, packing jobs | $[BASE × ~1.4] |
| 4 movers | 3BR+, large homes | $[BASE × ~1.7] |

Increment between tiers: roughly 40–50% of the 2-person rate.

---

## 5. Minimum Job Policy

**Recommended: 2-hour minimum.** State it clearly in quotes:
> "Our rate is $[X]/hour for a crew of 2, with a 2-hour minimum.
> After that we bill in 30-minute increments."

---

## 5b. Same-Day Service

**Rates:** **$115/hr for 2 movers, $155/hr for 3**, with the same 2-hour
minimum (so at least $230). That's **+$20/hr** (21%) and **+$25/hr** (19%)
over the regular $95 and $130. Next-day and later bookings are regular
price.

**What it is:** the crew arrives the same day the customer books. Requests
come by call or text by 12 pm, Mon–Sat, and only when a crew is actually
free. The web form is answered within a business day, so it can't take
same-day jobs; the site tells customers to call or text instead.

**Why this price:** labor-only providers on HireAHelper typically add
**10–20%** for same-day jobs and charge normal rates for next-day
([HireAHelper](https://www.hireahelper.com/advice/same-day-moving-help/)).
Other movers add flat rush fees of about $25–$150. An hourly premium is
fairer than a flat fee: a flat $75 would add 39% to a 2-hour job but only 6%
to a 3-bedroom. It also scales with how long you hold a crew off its
schedule.

**What the premium pays for** (per hour of the job):

| | 2 movers | 3 movers |
|---|---|---|
| Same-day premium collected | +$20 | +$25 |
| Same-day bonus to crew called in on short notice (suggested $5/hr per mover) | –$10 | –$15 |
| Left to cover your dispatch time (calls, rearranging the day, about 30 min a job) and the risk of a crew sitting idle | $10 | $10 |

Examples:
- **1-bedroom load, 2–2.5 hrs, 2 movers:** the customer pays $230–$288
  instead of $190–$238 (+$40–$50). The crew bonus is $20–$25, leaving you
  $20–$25 for the scramble.
- **2-bedroom, both ends, 4.5–6.5 hrs, 3 movers:** the customer pays
  $698–$1,008 instead of $585–$845 (+$113–$163). The crew bonus is
  $68–$98, leaving you $45–$65.

If you work the job yourself with no extra crew to call in, the whole
premium is yours.

**Full Wrap on a same-day job:** the supply fee stays the same; the
wrapping time is billed at the same-day rate like the rest of the job.

**Changing the rate:** update `SAME_DAY_RATE` / `SAME_DAY_RATE3` in
`estimate.html`, then the same-day text in `index.html` (visible text and
the hidden business data), `faq.html`, `quote.html`, `llms.txt`, both AI knowledge bases, both
Google profile content files, `SALES_PLAYBOOK.md`, `BOOKING_WORKFLOW.md`,
and this section.

---

## 6. Materials Pricing

If you supply packing materials, bill separately with a 25–40% markup
over your cost. Or offer a flat materials package (e.g., $50 for a
full pack-out) — easier to quote, simpler to invoice.

### Full Wrap: pricing and costs

**What it is:** every piece of furniture padded with moving blankets
*and* sealed in stretch wrap. Standard service already puts each piece in
blankets *or* shrink wrap at no charge, so Full Wrap is priced on the
**extra** work and the extra film only.

**Only on jobs where you load and unload.** The blankets ride in the
customer's truck. On a load-only job they'd leave with the customer, so the
estimator turns Full Wrap off unless both are selected. (For load-only
customers, you can stretch-wrap over pads they rent from U-Haul and quote
the time.)

**Price = extra crew time at the normal hourly rate + a flat supply fee.**
The time is billed like any other work, so the clock never stops and
nothing is double-charged. The fee covers the film you use up and the wear
on your blankets.

#### Supply costs

Supply prices (October 2026):
- **Stretch wrap:** about **$22 per 20" × 1,000 ft roll**, 80-gauge
  cast. ([Zoro](https://www.zoro.com/i/G4267907/),
  [SC Fastening 4-pack](https://catalog.scfastening.com/printitem/material-handling/all-categories-material-handling-wrapping-material/1853-20x100blackwrap))
- **Moving blankets:** about **$18 each by the dozen**, standard weight.
  ([Uline](https://www.uline.com/Product/Detail/S-6082/Moving-Blankets-Pads-and-Supplies/Moving-Blankets-Standard);
  economy grade is $12–$13)

Assumptions to check on your first few Full Wrap jobs:

| Assumption | Value | Why |
|---|---|---|
| Furniture pieces | Studio 10 · 1BR 14 · 2BR 22 · 3BR 30 · 4BR+ 40 | Beds, mattresses, sofas, tables, chairs, dressers, desks, shelves, TV stands |
| Film per piece | 110 ft (two layers + 10% waste) | A sofa takes about 200 ft, a dresser about 100 ft, a chair about 50 ft |
| Blankets per piece | 1.6 | A sofa takes 3, a dresser 2, a chair 1 |
| Cost per blanket use | $0.50 | $18 blanket ÷ about 50 uses, plus laundering and the odd loss |
| Misc. | $3 per job | Tape and trash bags for the used film |
| Markup | 30% | §6 recommends 25–40% |

| Home | Pieces | Stretch wrap | Blanket wear | Misc. | **Your supply cost** | **Supply fee** (cost × 1.3, nearest $5) |
|---|---|---|---|---|---|---|
| Studio | 10 | 1,100 ft (1.1 rolls) = $24.20 | 16 uses = $8.00 | $3 | **$35.20** | **$45** |
| 1 bedroom | 14 | 1,540 ft (1.5 rolls) = $33.88 | 22.4 uses = $11.20 | $3 | **$48.08** | **$65** |
| 2 bedrooms | 22 | 2,420 ft (2.4 rolls) = $53.24 | 35.2 uses = $17.60 | $3 | **$73.84** | **$95** |
| 3 bedrooms | 30 | 3,300 ft (3.3 rolls) = $72.60 | 48 uses = $24.00 | $3 | **$99.60** | **$130** |
| 4+ bedrooms | 40 | 4,400 ft (4.4 rolls) = $96.80 | 64 uses = $32.00 | $3 | **$131.80** | **$170** |

#### Labor

Assumed: **4 extra crew-minutes per piece** for a 2-person crew. That's 3
minutes to pad and wrap at loading, plus 1 minute to cut the film and bag
it at unloading. A 3-person crew is about 1.4× faster.

"Your crew cost" below uses this guide's example of $42 per hour of
2-person crew labor ($63 for 3 people). Swap in your real wage cost from
§2.

| Home | Crew | Extra time | **Customer pays for the time** | Your crew cost |
|---|---|---|---|---|
| Studio | 2 | 40 min | **$63** | $28 |
| 1 bedroom | 2 | 56 min | **$89** | $39 |
| 2 bedrooms | 3 | 63 min | **$136** | $66 |
| 3 bedrooms | 3 | 86 min | **$186** | $90 |
| 4+ bedrooms | 3 | 114 min | **$248** | $120 |

#### What Full Wrap adds to a job

| Home | Customer pays (time + fee) | You spend (supplies + crew) | You keep |
|---|---|---|---|
| Studio | ≈ $108 | ≈ $63 | ≈ $45 (42%) |
| 1 bedroom | ≈ $154 | ≈ $87 | ≈ $66 (43%) |
| 2 bedrooms | ≈ $231 | ≈ $140 | ≈ $91 (40%) |
| 3 bedrooms | ≈ $316 | ≈ $190 | ≈ $126 (40%) |
| 4+ bedrooms | ≈ $418 | ≈ $252 | ≈ $166 (40%) |

The estimator and the homepage table show the full job price with Full
Wrap. For example, a ground-floor 1-bedroom, both ends, is $333–$475
standard and **$445–$635 with Full Wrap**.

**Blanket stock:** Full Wrap ties up about 1.6 blankets per piece for the
whole job: about 48 for a 3-bedroom and 64 for a 4+ bedroom. **4 dozen**
(about $860 at $18, or about $600 in economy grade) covers up to a
3-bedroom. Add two more dozen (6 in all) before quoting 4+ bedrooms. Until then, quote
Full Wrap only for homes your stock covers.

**Changing a number:** all Full Wrap math lives in the `WRAP` block at the
top of the script in `estimate.html`. If you change it, update the homepage
price table, the supply fees in `faq.html`, `services.html`, `llms.txt`,
both AI knowledge bases, and this section.

---

## 7. When to Raise Rates

**Signals:**
- Consistently booking 2–3 weeks out
- Turning away jobs due to availability
- 20+ Google reviews at 4.8+
- Costs have increased (wages, insurance, fuel)
- Competitors charge significantly more
- 12+ months since last increase

**How:** Raise for new bookings only. Honor existing quotes.
Increase in $5–10/hour increments. No apologies — state it as
a reflection of crew quality.

---

## 8. Never Discount for Price-Shoppers

When a customer says a competitor is cheaper:
1. Ask what's included in that price
2. Restate your value: reviews, transparency, no hidden fees
3. Let them decide

Some customers choose on price alone — they're not your target customer.
Discounting to win them trains your market to negotiate rather than accept
your rates.

**Acceptable discounts:** Off-season incentive (Nov–Feb), referral reward
(fixed dollar amount, not percentage), one-time returning-customer courtesy.
