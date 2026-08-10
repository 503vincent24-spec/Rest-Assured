# Booking Workflow — Rest Assured Moving LLC
Complete process from first inquiry to post-job follow-up.
Consistency here is what separates professional operations from ad-hoc chaos.

---

## Overview

Every booking follows this 6-stage process:

```
INQUIRY → QUOTE → CONFIRMATION → PREP → JOB DAY → FOLLOW-UP
```

The email templates in `customer-communications/EMAIL_TEMPLATES.md` are
pre-written for stages 2, 3, 4, and 6. The AI knowledge base covers stage 1
responses. This document ties them together into a complete, repeatable workflow.

---

## Stage 1 — Inquiry (Day 0)

**Trigger:** Customer submits the website quote form, calls, emails, or messages via Facebook/Google.

**Respond within:** 2 hours during business hours (9am–5pm). Within 24 hours maximum. Fast response time is a major trust signal and directly affects Google Business Profile ranking for phone-based leads.

**What to capture (always):**
- Full name
- Phone number + best time to call
- Email address
- Move date (and whether it's flexible)
- Services needed (loading? unloading? packing? assembly?)
- Home size (studio, 1BR, 2BR, 3BR+)
- Pickup address and drop-off address (if applicable)
- Truck/container arranged? If yes, which type?
- Any special items: piano, safe, antiques, items needing extra care?
- How they found you (for marketing attribution)

**If inquiry comes via phone:** Take all notes during the call. Follow up with a written quote by email within 2 hours so the customer has a record.

**If inquiry comes via form:** Review the submitted details. If anything critical is missing (no date, no address, unclear scope), reply with one targeted clarifying question before quoting — not a list of 5 questions.

---

## Stage 2 — Quote (Day 0–1)

**Send within:** Same day if inquiry arrives by 2pm. Next morning if evening inquiry.

**Use:** Quote Response Template from `EMAIL_TEMPLATES.md`.

**What the quote must include:**
- Specific service(s) listed
- Crew size
- Estimated hours (give a range: e.g., 3–5 hours)
- Flat hourly rate — no ranges, one number
- Estimated total range (rate × low hours to rate × high hours)
- Explicit statement that materials and fuel are not added to the rate
- Clear note that a truck/container is customer's responsibility
- How to confirm the booking

**Pricing discipline:**
- Never quote a lower rate than your standard rate to close a booking
- Never give an open-ended "we'll see how long it takes" without a rate
- Never use the word "approximately" for the rate — the rate is flat, not approximate

**Follow-up if no response:** Use the No-Response Follow-Up Template from `EMAIL_TEMPLATES.md` if 3–5 business days pass with no response. Send once only. If still no response, close the lead.

---

## Stage 3 — Booking Confirmation (Day of booking)

**Trigger:** Customer verbally confirms or replies to the quote with "let's do it" or similar.

**Send within:** Same business day.

**Use:** Booking Confirmation Template from `EMAIL_TEMPLATES.md`.

**What to do when confirming:**
- [ ] Mark the date and time in your calendar
- [ ] Block the crew for that date
- [ ] Note any special requirements from the inquiry (piano, safe, fragile collections)
- [ ] Assign a job reference number (e.g., RAM-0001, incrementing)
- [ ] Log the booking in your job tracking spreadsheet or system

**Job tracking (minimum viable):** A Google Sheet with columns:
Date | Customer Name | Phone | Email | Services | Address | Crew Size | Est. Hours | Rate | Status | Job # | Notes

---

## Stage 4 — Day-Before Prep (Day before job)

**Complete by:** 5pm the day before the job.

**Crew prep:**
- [ ] Confirm crew availability (explicitly — don't assume)
- [ ] Confirm start time and pickup address with crew
- [ ] Brief crew on any special items or access challenges at this job
- [ ] Confirm equipment is loaded: moving blankets, shrink wrap, dollies, tools for assembly (if booked)

**Customer reminder:**
- [ ] Send reminder email using Appointment Reminder Template from `EMAIL_TEMPLATES.md`
- [ ] OR send a reminder text if the customer prefers text communication

**Confirm logistics:**
- [ ] Truck/container pickup confirmed by customer
- [ ] Parking for crew vehicle confirmed
- [ ] Elevator booked if high-rise building
- [ ] Access code or key arrangement if needed

---

## Stage 5 — Job Day

**Crew arrival procedure** (see also `JOB_SITE_CHECKLIST.md`):

**On arrival:**
1. Call or text customer 30 minutes before arriving
2. Greet customer, introduce the crew
3. Walk the space before touching anything — identify fragile items, special-care pieces, items NOT being moved
4. Confirm the plan (what leaves today, what order, destination room assignments)
5. Confirm truck/container is accessible and in position
6. Begin work

**During the job:**
- Never move an item that hasn't been confirmed "yes, move this"
- Wrap all furniture before carrying; do not wrap on the truck
- If something looks fragile, treat it as fragile — ask if unsure
- Keep customer updated on progress, especially if pace differs from estimate

**At completion:**
1. Complete the end-of-job walkthrough (see `JOB_SITE_CHECKLIST.md`)
2. Confirm customer satisfaction before leaving
3. Collect payment
4. Issue a receipt (handwritten or photo of invoice)
5. Leave a review card or verbally mention the review request

**If job runs over estimate:**
- Notify customer before exceeding the estimate by more than 1 hour
- Get verbal agreement to continue at the same rate before proceeding
- Document this conversation

**If something is damaged:**
- Stop. Do not attempt to hide or minimize.
- Notify the customer immediately and calmly
- Photograph the damage before moving on
- Note it in writing (text or email to yourself)
- Follow up with the customer in writing the same day
- Escalate to the owner if not already present

---

## Stage 6 — Post-Job Follow-Up (Day 1–2 after job)

**Send within:** 24–48 hours of job completion.

**Use:** Post-Move Follow-Up Template from `EMAIL_TEMPLATES.md`.

**What to do after sending:**
- [ ] Update job log with completion status and actual hours/revenue
- [ ] Note any issues for future reference
- [ ] If the job generated photos (with customer permission), save them for GBP and social
- [ ] If the customer responds with positive feedback, reply warmly and explicitly ask for the Google review
- [ ] If the customer raises a concern, escalate immediately — do not delay

**Review request timing:**
- Best window: 24–72 hours after job completion while experience is fresh
- Direct link to Google review page is essential — don't ask customers to find it themselves
- One ask is appropriate; don't follow up with a second review request

---

## Booking Metrics to Track (Monthly)

| Metric | Why it matters |
|---|---|
| Inquiry-to-quote rate | What % of inquiries get a quote sent? (Should be 95%+) |
| Quote-to-booking rate | What % of quotes convert to a booking? (Track for pricing signal) |
| Lead source | Where did each booking come from? (Google, Facebook, referral, etc.) |
| Average job value | Revenue per completed job |
| Review conversion rate | What % of completed jobs result in a Google review? |
| Repeat customer rate | What % of customers book again? |

---

## Common Workflow Failures (and fixes)

**Failure: Quote sent, no follow-up**
Fix: Set a 3-day calendar reminder for every quote sent. If no response, use the follow-up template once.

**Failure: Booking confirmed but no written confirmation sent**
Fix: Make sending the confirmation email the last step before hanging up or closing the chat. If it's not sent, the booking isn't complete.

**Failure: Crew not properly briefed on special items**
Fix: The Stage 4 crew briefing is non-optional. Special items (piano, safe, antiques) require explicit pre-job discussion — not a discovery on arrival.

**Failure: Review request not sent**
Fix: Schedule the follow-up email the same evening as the job completion. Do not rely on memory.

**Failure: Job ran long, customer surprised**
Fix: The "notify before exceeding estimate by 1 hour" rule in Stage 5 prevents this. Make it a crew standard.
