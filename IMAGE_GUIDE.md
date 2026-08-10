# Image Guide — Rest Assured Moving LLC
Covers every image used on the website: required dimensions, photography brief,
alt text templates, and where/how to source each one.

---

## Why images matter for this business

For a local service business, authentic photography outperforms stock photos
dramatically — especially on Google Business Profile, where photos directly
affect visibility. Prioritize real crew photos. Even phone-camera quality beats
generic stock when the subject is real.

---

## 1. Logo & Brand Assets (already created as SVG)

| File | Location | Use |
|---|---|---|
| `logo-mark.svg` | `website/assets/` | Favicons, nav, social avatars |
| `logo-lockup.svg` | `website/assets/` | Letterhead, email signature |
| `favicon.svg` | `website/assets/` | Browser tab icon |

**PNG exports needed (SVG → PNG conversion):**

| Output | Dimensions | Where used |
|---|---|---|
| `logo-mark-720.png` | 720 × 720px | Google Business Profile logo |
| `logo-mark-180.png` | 180 × 180px | Facebook page profile photo |
| `logo-mark-512.png` | 512 × 512px | Apple Touch icon |
| `favicon-32.png` | 32 × 32px | Fallback favicon (older browsers) |
| `og-image.png` | 1200 × 630px | Open Graph / social share image (see Section 5) |

**How to export:** Open `logo-mark.svg` in a browser → right-click → inspect
the SVG element → or use cloudconvert.com / Figma / Canva → export at each
size above.

---

## 2. Page-by-Page Image Requirements

### index.html — Homepage

| Image | Purpose | Dimensions | Format |
|---|---|---|---|
| Hero background (optional) | Atmosphere behind hero grid | 1600 × 900px | JPG, <200KB |
| Crew working (loading/wrapping) | Social proof photo | 800 × 600px | JPG, <150KB |
| Manifest card (CSS component — no image needed) | — | — | — |

**Alt text template:**
```
<img src="assets/crew-loading.jpg" alt="Rest Assured Moving crew loading a rental truck in Salem, Oregon" width="800" height="600" loading="lazy">
```

**Photography note:** The homepage hero is currently text + manifest card only
(no image required). Adding a real photo of the crew loading a truck as a
background to the hero would significantly increase visual credibility. If you
add it, use `background-image` in CSS with a dark overlay, not an `<img>` tag,
so the text remains readable.

---

### about.html — About Page

| Image | Purpose | Dimensions | Format |
|---|---|---|---|
| Owner headshot | Puts a face to the business | 400 × 400px (square) | JPG, <100KB |
| Team photo | Shows the full crew | 1000 × 667px | JPG, <200KB |

**How to use:**
```html
<img src="assets/owner-headshot.jpg" 
     alt="Shawn Vincent, owner of Rest Assured Moving LLC" 
     width="400" height="400" loading="lazy"
     style="border-radius:50%;max-width:160px;">
```

**Photography note:** A natural, approachable headshot (not a formal suit
portrait) outperforms a posed one for a local moving labor business. Outdoors
in front of a clean background, or inside a home/office, works well.

---

### services.html — Services Page

| Image | Purpose | Dimensions | Format |
|---|---|---|---|
| Loading in action | Illustrates loading service | 800 × 533px | JPG, <150KB |
| Packing fragile items | Illustrates packing service | 800 × 533px | JPG, <150KB |
| Furniture assembly | Illustrates assembly service | 800 × 533px | JPG, <150KB |

**Note:** These are optional enhancement images — the page currently works
without photos. If you add them, place each inside the relevant `.ledger-row`
section. Add `loading="lazy"` to all.

---

### blog posts — All three posts

| Image | Purpose | Dimensions | Format |
|---|---|---|---|
| Featured image per post | Social sharing + visual anchor | 1200 × 630px | JPG, <200KB |
| Inline images (optional) | Illustrate technique steps | 700 × 467px | JPG, <120KB |

**Post 1 — Preparing for Moving Day:**
Suggested image: A labeled, organized set of moving boxes in a clean room.

**Post 2 — Packing Fragile Items:**
Suggested image: Plates being edge-stacked in a dish-pack box, or glassware
individually wrapped in packing paper.

**Post 3 — Furniture Assembly:**
Suggested image: Labeled hardware bags next to a disassembled bed frame.

**Add featured images to the page hero section:**
```html
<img src="assets/blog-moving-day.jpg" 
     alt="Organized labeled moving boxes ready for moving day" 
     width="1200" height="630" loading="lazy">
```

---

## 3. Google Business Profile Photos

GBP listings with 10+ photos receive more clicks and calls.
Upload these in order of priority:

| Photo | Priority | What to shoot | Min size |
|---|---|---|---|
| **Logo (square)** | 1 — Urgent | `logo-mark-720.png` | 720 × 720px |
| **Cover photo** | 1 — Urgent | Crew loading a truck, wide shot | 1332 × 750px |
| Crew at work 1 | 2 | Loading boxes into truck | 1200 × 900px |
| Crew at work 2 | 2 | Wrapping furniture | 1200 × 900px |
| Crew at work 3 | 2 | Carrying a couch or large item | 1200 × 900px |
| Furniture assembly | 3 | Reassembling a bed frame | 1200 × 900px |
| Team photo | 3 | Full crew together, smiling | 1200 × 900px |
| Before/after 1 | 4 | Empty truck → fully loaded truck | 1200 × 900px |
| Before/after 2 | 4 | Pile of furniture → assembled room | 1200 × 900px |
| Owner photo | 4 | Natural headshot of owner | 720 × 720px |

**Shooting guidelines:**
- Natural light > artificial light
- Crew wearing branded shirts/caps if available
- Clean background — avoid cluttered, messy areas in frame
- Smiling crew builds more trust than posed professional expressions
- Never crop out the truck in loading photos — seeing the scale helps customers

---

## 4. Social Media Image Specs

| Platform | Use | Dimensions | Format |
|---|---|---|---|
| Facebook | Profile photo | 180 × 180px (displayed 40×40) | PNG |
| Facebook | Cover photo | 820 × 312px | JPG |
| Facebook | Post image | 1200 × 630px | JPG |
| Facebook | Story | 1080 × 1920px | JPG/MP4 |
| Instagram | Profile photo | 180 × 180px | PNG |
| Instagram | Feed post | 1080 × 1080px (square) or 1080 × 1350px (portrait) | JPG |
| Instagram | Reel | 1080 × 1920px | MP4 |
| Nextdoor | Profile photo | 300 × 300px | PNG |

**Manifest card social graphic:**
The "Move Manifest" checklist card from the website hero makes an excellent
branded social graphic. Recreate it in Canva at 1080 × 1080px using the exact
brand colors and monospace font — it's visually distinctive and on-brand.

---

## 5. Open Graph (OG) Image

Every page has an `og:image` meta tag pointing to `assets/og-image.png`.
This image appears when anyone shares a page link on Facebook, iMessage,
Slack, or LinkedIn.

**Specifications:**
- Dimensions: 1200 × 630px exactly
- Format: PNG or JPG, under 300KB
- Safe zone: Keep all important content within the center 1000 × 482px
  (platforms crop the edges on smaller displays)

**Suggested design (create in Canva):**
- Navy background (`#0F2547`)
- Logo mark (white version) top-left
- Headline: "Moving Labor in Salem, Oregon" (large, white, Georgia font)
- Subline: "Loading · Unloading · Packing · Unpacking · Assembly" (Courier, emerald)
- Company name bottom-right

Once created, save as `website/assets/og-image.png` and replace the
`[YOUR-DOMAIN]` placeholder in all `og:image` meta tags.

---

## 6. Alt Text Templates

Good alt text describes the image accurately and naturally includes keywords
where it genuinely fits. Bad alt text is keyword-stuffed and reads unnaturally.

**Crew/action photos:**
```
alt="Rest Assured Moving crew loading a rental truck in Salem, Oregon"
alt="Moving labor team wrapping furniture for a residential move"
alt="Movers carrying a couch through a doorway during a Keizer, OR move"
```

**Assembly photos:**
```
alt="Furniture assembly crew reassembling a bed frame after a move in Salem, OR"
alt="Hardware bags labeled by component next to a disassembled bookshelf"
```

**Packing photos:**
```
alt="Packing service team wrapping glassware for a Salem, Oregon move"
alt="Dishes edge-stacked in a dish-pack box for safe transport"
```

**Logo:**
```
alt="Rest Assured Moving LLC logo" (on brand/identity usage)
alt="" (when used decoratively, e.g., repeated in footer alongside company name)
```

**Rule:** Decorative images (the logo when the company name is already in text
nearby, dividers, icons) should use `alt=""` so screen readers skip them.
Informational images (crew photos, assembly steps) need descriptive alt text.

---

## 7. Image Optimization Guidelines

Before uploading any image to the website:

1. **Resize** to the exact dimensions needed (no browser-side scaling)
2. **Compress** using squoosh.app (free, browser-based, excellent quality)
   - JPG: quality 75–85 is typically ideal
   - PNG: use PNG-8 for logos/icons with transparency
3. **Target file sizes:**
   - Hero/full-width: under 200KB
   - Content images: under 120KB
   - Icons and logos: under 20KB
4. **Add `loading="lazy"`** to all images below the fold (everything except
   the very first image/logo a user sees)
5. **Always specify `width` and `height` attributes** to prevent layout shift

**Correct implementation:**
```html
<img 
  src="assets/crew-loading.jpg" 
  alt="Rest Assured Moving crew loading a rental truck in Salem, Oregon"
  width="800" 
  height="533" 
  loading="lazy">
```

---

## 8. Placeholder Image Sources (free, no attribution required)

Until real crew photos are available, these free stock sources offer relevant
moving/labor/home imagery:

- **Unsplash.com** — search "moving boxes," "movers," "home moving"
- **Pexels.com** — same search terms; all photos free for commercial use
- **Pixabay.com** — additional options; confirm license on each image

**Important:** Replace stock photos with real crew photos as soon as they are
available. Google Business Profile specifically rewards real, location-verified
photos in local search ranking. Stock photos used on GBP provide no benefit.

---

## 9. Add Images to the Website (implementation checklist)

- [ ] Export logo PNGs at sizes listed in Section 1
- [ ] Create og-image.png (Section 5) and save to `website/assets/`
- [ ] Take or source crew/action photos and optimize per Section 7
- [ ] Save all photos to `website/assets/` with descriptive filenames
  (e.g., `crew-loading-truck.jpg`, not `IMG_4823.jpg`)
- [ ] Add `<img>` tags with alt text and lazy loading to relevant page sections
- [ ] Upload GBP photos in priority order (Section 3)
- [ ] Update Facebook profile photo and cover photo (Section 4)
- [ ] Verify all `og:image` meta tags point to the real hosted URL of `og-image.png`

---

## 10. Ongoing Photography Content

Every time a job is completed (with customer permission), capture:
- 1 loading shot (truck or container being filled)
- 1 room-placement shot (unloaded destination, organized)
- 1 assembly shot if furniture assembly was performed

Store them dated and organized. This builds a content library for:
- Google Business Profile (fresh photos improve ranking)
- Facebook and Instagram posts
- Website content updates
- Future before/after case studies

A good crew member who's comfortable with a phone can capture this in under
2 minutes per job without interrupting workflow.
