# General Henry Champion House — Site Plan (Draft)

Based on: signed-scope proposal (5 pages, colonial/simple direction), the Trust's IRS mission statement worksheet, the 1972 National Register nomination photos, the IRS 501(c)(3) determination letter, CERT-119, and the photos currently in the project folder. This is a working plan to build from — several items still need Charles's input (flagged below).

## Org facts to use across the site

- **Legal name:** General Henry Champion Trust, Inc.
- **Property:** 526 Westchester Rd, Colchester, CT 06415 (Route 149)
- **EIN:** **41-5346804** — confirmed correct by Charles on 2026-08-01 (this matches CERT-119; the IRS determination letter's 41-5346904 appears to be a typo in that document).
- **501(c)(3) status:** Effective 4/1/2026, public charity under 170(b)(1)(A)(vi), contributions are tax-deductible under Section 170 (per IRS determination letter, dated 6/2/2026).
- **Directors:** Charles Jordan, Maria Jordan, Elizabeth Jordan.
- **Contact:** charlespjordan@icloud.com, (917) 460-2260.
- **House built:** 1790, William Sprats–designed, listed on State and National Registers of Historic Places (NR reference tied to filing 72001323, entered Oct. 1972).

## Design direction (from proposal)

Simple, high-quality, colonial-inspired. Clean/restrained layout reflecting the house's Federal-period architecture: muted, historically appropriate palette (whites, soft grays/blacks, brick red accent from the barn/shutters); classic serif typography; photography-forward. Astro + Tailwind, hosted on Cloudflare Pages. Five pages total, one contact form, no e-commerce, no third-party donation processor setup (just a link/button out).

**Hosting/deployment (decided 2026-08-03):** Cloudflare Workers project (not Pages — Cloudflare's current default for new builds), deployed under Charles's own Cloudflare account, not Randy's — the domain (henrychampionhouse.org) already lives there, and it keeps the nonprofit in control of its own infrastructure. Charles has already invited Randy with what appears to be full admin access. Code repo lives under **Randy's GitHub account**, connected into Charles's Cloudflare Workers project via Workers Builds (Cloudflare's built-in CI) — Randy authorizes the Cloudflare GitHub App on his own repo when connecting it from within Charles's Cloudflare dashboard. `@astrojs/cloudflare` adapter for the Astro build.

---

## Page 1 — Home

**Purpose:** Introduce the property and the Trust's mission; prominent donation CTA.

**Content outline:**
- Hero: house name, one-line framing ("Preserving a 1790 Revolutionary-era landmark in Colchester, Connecticut")
- Short mission excerpt (2–3 sentences pulled from the full mission statement, not the whole legal paragraph)
- "Currently undergoing restoration" callout — ties to the Restoration Progress page
- Donate CTA (button/banner)
- Quick links to History, Restoration Progress, Visit/Contact

**Images:** `image2.jpeg` or `image3.png` as hero (front elevation, well-maintained, patriotic bunting — reads as "cared for, historic, active"). `image1.jpeg` as a strong alternate/secondary hero.

---

## Page 2 — History

**Purpose:** Tell the story of the house, Col. Henry Champion, Gen. Henry Champion, and the Champion family.

**Content outline (now backed by primary sources — see Research findings below):**
- Built 1790–92, designed by house joiner/architect William Sprat (spelled Sprat/Sprats/Spratt across sources — pick one spelling and use consistently, e.g. "William Spratt"), who also designed the Epaphroditus Champion House in East Haddam and the Deming house in Litchfield
- Built by **Col. Henry Champion** (1723–1797) for his son **Gen. Henry Champion** (1751–1836), likely around the General's own 1789 marriage to Abigail Tinker. General Champion then lived in the house until his death in 1836.
- **Col. Henry Champion**: Revolutionary War Commissary General for the Eastern Department; best known for personally driving a herd of cattle 300 miles to feed Washington's starving troops at Valley Forge, winter 1777–78, alongside his son Epaphroditus. Worked directly with Washington and CT Governor Trumbull. (Per Charles, 2026-08-01: leave out the Deborah Champion courier legend — not being used on the site.)
- **Gen. Henry Champion**: born in Westchester (Colchester) March 16, 1751, died there July 13, 1836. Served at the Lexington Alarm and Bunker Hill; acting major of the First Battalion, Light Brigade at the capture of Stony Point (1779) under Washington's direct command — he celebrated "Stony Point Day" every July 15 at this house for the rest of his life, a great specific, tellable detail. Later a CT Assembly deputy (1789, 1793–98, 1800–05), Assistant (1806–17), CT Supreme Court of Errors judge (1806–07), deacon of the Westchester church (1813–28). Major investor in the Connecticut Land Company — the towns of Champion, NY and Champion, OH are named for him. His portrait (Wadsworth Atheneum) shows a map of the Western Reserve.
- Architectural significance (NR nomination language): gambrel roof with a long rear slope nearly to a lean-to; twin brick chimneys; Ionic-columned, triangular-pedimented entry portico with mutules and a substantial frieze; triangular-pedimented dormers with mutules on the front roof; twelve-over-twelve sash throughout the main house (nine-over-nine in the ell); one-and-a-half-story ell to the south with a later conservatory/solarium; historic stone wall with iron gates at the road. The roofline balustrade seen in `Henry_Champion_House.jpg` was still present as of a 1966 survey and was removed sometime before 1972 — a nice detail for a caption.
- National Register listing: added October 10, 1972 (NR reference #72001323), nominated by Susan Babbitt for the Connecticut Historical Commission.
- The house is also a stop on the **Washington–Rochambeau Revolutionary Route (W3R) National Historic Trail**, a National Park Service–designated trail. Confirmed by Charles (2026-08-01) as worth featuring — a second, distinct federal historic designation beyond the National Register listing. Give it a mention/badge on this page.
- The Colchester Historical Society has its own exhibit on the Champion family and worked with the Trust's town on preserving Col. Champion's gravestone — good to credit/link if the Trust wants a "further reading" nod.

**Images:** the 1972 B&W National Register photos (multiple angles: front, north side, south side with conservatory/ell, from `72001323.pdf`) and `Henry_Champion_House.jpg` (older archival photo — shows the roofline balustrade documented as removed between 1966 and 1972, a nice detail for a caption about how the house has changed).

**Decided (2026-08-01):** the History page will visibly cite the Colchester Historical Society as a source (e.g. a "Sources" or "Further Reading" note/link), since a fair amount of the content — the Col./Gen. Champion bios, the Valley Forge cattle-drive story — comes directly from their published exhibits (`Gen_Champion.pdf`, `col-henry.pdf`, "The Story of the Champion Family of Colchester, CT"), not original research.

### Research findings (for fact-checking/copywriting — 2026-08-01)

Pulled directly from the Colchester Historical Society and the National Register nomination text itself (`https://npgallery.nps.gov/NRHP/GetAsset/NRHP/72001323_text`), not just secondary summaries:

- Colchester Historical Society, [General Henry Champion exhibit PDF](https://www.colchesterhistory.org/Customer-Content/www/CMS/files/exhibits/Gen_Champion.pdf) and [Colonel Henry Champion exhibit PDF](https://www.colchesterhistory.org/Customer-Content/www/CMS/files/exhibits/col-henry.pdf)
- Colchester Historical Society, [The Story of the Champion Family of Colchester, CT](https://www.colchesterhistory.org/museum/exhibits/the-story-of-the-champion-family/)
- National Register of Historic Places nomination form, Susan Babbitt, April 17, 1972 — [full text via NPS NPGallery](https://npgallery.nps.gov/NRHP/GetAsset/NRHP/72001323_text)
- Wikipedia: [Henry Champion House](https://en.wikipedia.org/wiki/Henry_Champion_House), [Henry Champion (general)](https://en.wikipedia.org/wiki/Henry_Champion_(general)), [Henry Champion (American revolutionary)](https://en.wikipedia.org/wiki/Henry_Champion_(American_revolutionary))
- CTMQ, [W3R: Colchester](https://www.ctmq.org/w3r-colchester/) — confirms the W3R National Historic Trail connection and notes the house was on the market in August 2023 for $330,000, "totally beat down"
- Journal of the American Revolution, ["Henry Champion: An Officer Resigns"](https://allthingsliberty.com/2019/03/henry-champion-an-officer-resigns/) (Michael Sheehan, 2019) — not yet fetched in full, but cited by Wikipedia for military service detail; worth a read if more depth is wanted on his resignation from the 1st Connecticut Regiment

**One discrepancy to flag:** most sources (NR nomination itself, Colchester Historical Society, mission statement) agree the house was built in 1790 (one Historical Society PDF says "1790–1792"). One Wikipedia article ("Henry Champion (American revolutionary)") states 1799, which conflicts with everything else including the primary NR nomination document — treat 1790 as correct and that Wikipedia figure as a likely typo.

---

## Page 3 — Restoration Progress

**Purpose:** Ongoing record of the restoration (roof, and future work), before/after photos as available.

**Content outline:**
- The "before" story: the property's condition at acquisition — genuinely compelling material here. `image7.jpeg` (corrected/blurred version: `Foreclosure_Sign_Names_Blurred.jpg`) is a photo of the actual **public auction foreclosure sale sign** posted at the property (Jan 20, 2024 auction, $32,500 deposit required) — this is a strong "how the Trust saved the house" narrative anchor. **Resolved 2026-08-03: Charles approved telling this story publicly**, on the condition that the attorney's and previous owner's names on the sign are blurred — done, use `Foreclosure_Sign_Names_Blurred.jpg` on the site, not the original file. (Note: the site plan's image inventory below previously mislabeled this photo as `CCF533F2-868B-4398-A39A-AB2B155886E6.jpeg`, which is actually a real-estate aerial photo — the sign photo is `image7.jpeg`.)
- Before condition: `2024_01_09_12_11_42_943.jpg` (weathered siding, overgrown grounds — real estate/foreclosure-era listing photo), `image5.jpeg` (winter aerial showing full property extent, pool, barn), `image6.jpeg` (bare-winter approach shot up the driveway)
- Roof work in progress: `Screenshot 2025-04-23 at 2.28.37 PM.png` — earlier aerial showing dark tarped/patched sections of roof mid-repair
- **New (2026-08-01), the strongest in-progress material so far** — six photos from the actual weekend re-roofing job, `IMG_8584.jpeg` through `IMG_8614.jpeg`: crew tearing off the old barn roof down to bare decking (cupola, ladders, two rental dumpsters staged on the lawn), new plywood sheathing and fresh asphalt shingles going onto the barn, and the house's own gambrel roof stripped to bare wood shingles near the dormers and chimney, bunting still hanging on the facade below. This is genuinely great documentary material — a proper mid-restoration story rather than a single aerial snapshot. Good candidates for a short "roof week" photo sequence/gallery on this page.
- Current/after state: `image1.jpeg`, `image2.jpeg`, `image3.png` — freshly painted exterior, landscaped grounds, cannon and barn visible, patriotic bunting (nice for a "the house today" section)
- Structure this page so it's easy to append new photos as work continues (roof now, future phases later) — matches the proposal's framing of this as a living/ongoing page

**Images:** as listed above, roughly in this before → in-progress → current sequence.

---

## Page 4 — Visit/Contact

**Purpose:** Property info + contact form for visitors and supporters.

**Content outline:**
- Address: 526 Westchester Rd, Colchester, CT 06415
- Note that the property is a private restoration-in-progress, not yet open for public visits (confirm with Charles what visit access, if any, currently exists — the proposal doesn't specify)
- Contact form (name, email, message)
- Optional: phone/email listed directly

**Images:** `image1.jpeg` or `image3.png` (whichever isn't used on Home), driveway/approach shot (`image6.jpeg`) works well here too as a "how to find us" visual.

**Resolved 2026-08-03:** no public visiting policy — house is under active renovation. This page is for inquiries only at this stage.

---

## Page 5 — Donate

**Purpose:** Mission, EIN, tax-deductibility info, donation link/button.

**Content outline:**
- Full or near-full mission statement (this is well-written, already IRS-approved language — good to reuse largely as-is)
- 501(c)(3) status, EIN (once confirmed), tax-deductibility statement
- Donation link/button — **needs Charles to select and set up a processor** (Givebutter, Stripe, PayPal Giving, etc.); per the proposal this is out of scope for Randy to configure, the page just links out once Charles has one
- Could mention the roof restoration as the current fundraising priority, since that's the active need

**Open items for Charles (from proposal's "Next Steps" + this planning pass):**
1. ~~Confirm correct EIN~~ — resolved 2026-08-01: **41-5346804**.
2. Choose donation processor — still open. Charles has registered a few domains with Cloudflare but hasn't picked a processor; he's said he's open to suggestions (Givebutter is a reasonable nonprofit-friendly default to propose, no processing fees to the org — worth floating to him).
3. ~~Domain preference~~ — resolved 2026-08-01: Charles has domains registered with Cloudflare, likely including **henrychampionhouse.org** (need final confirmation this is the one he wants live).
4. ~~Clarify Col. Henry Champion vs. Gen. Henry Champion~~ — resolved: house belonged to Gen. Henry Champion; Col. Henry Champion was his father and had it built for him.
5. ~~Additional written history material~~ — resolved via web research: Colchester Historical Society exhibits, the full NR nomination narrative text, and Wikipedia all pulled and summarized above. Just needs Charles's sign-off on which details/legends (Deborah Champion's ride, W3R Trail listing, Stony Point Day) he wants told.
6. ~~Foreclosure/rescue story~~ — resolved 2026-08-03: Charles approved telling this story publicly. Requirement: the attorney's and previous owner's names on the auction sign photo must be blurred before use. Done — see `Foreclosure_Sign_Names_Blurred.jpg` (blurred, upright/corrected orientation) in the project folder; use this file in place of the original `image7.jpeg` on the Restoration Progress page.
7. ~~Visit policy~~ — resolved 2026-08-03: no formal visitor policy; house is under active renovation, not open for public visits.
8. Whether to offer a mail-in giving option alongside the online donation link (still need to ask Charles)

---

## Image inventory (all files currently in the project folder)

| File | Description | Suggested page |
|---|---|---|
| `image2.jpeg` | Front elevation, summer, patriotic bunting, cannon, barn — best overall hero shot | Home |
| `image3.png` | Similar to image2, overcast | Home / Visit |
| `image1.jpeg` | Front elevation, spring, freshly painted, cannon, barn | Home / Visit |
| `image6.jpeg` | Winter approach shot up driveway, bare trees | Visit / Restoration (before) |
| `image5.jpeg` | Winter aerial, full property incl. pool + barn | Restoration (before) |
| `Screenshot 2025-04-23 at 2.28.37 PM.png` | Aerial, roof mid-repair (tarped sections visible) | Restoration (in progress) |
| `IMG_8584.jpeg`–`IMG_8614.jpeg` (6 photos) | Weekend re-roofing job, 2026-08-01: barn roof tear-off (crew, cupola, dumpsters), new sheathing/shingles going on the barn, house gambrel roof stripped to bare wood near dormers/chimney | Restoration (in progress) |
| `2024_01_09_12_11_42_943.jpg` | Weathered exterior, foreclosure-era listing photo | Restoration (before) |
| `CCF533F2-868B-4398-A39A-AB2B155886E6.jpeg` | Aerial real-estate/MLS listing photo of the house | Restoration (before) |
| `image7.jpeg` | Photo of the public auction foreclosure sale sign at the property. **Use `Foreclosure_Sign_Names_Blurred.jpg` instead** — attorney and previous owner names blurred per Charles's request | Restoration (before/origin story) |
| `Henry_Champion_House.jpg` | Archival photo, shows former rooftop balustrade | History |
| `72001323.pdf` | 1972 National Register photograph form — multiple B&W archival photos of the house from various angles | History |
| `CT CERT 119.pdf` | CT sales tax exemption certificate — reference doc, not site content | — |
| `IRS_501c3_Determination_Letter.pdf` | 501(c)(3) determination letter — source for Donate page EIN/deductibility language | Donate |
| `Champion_House_Project_Proposal.pdf` / `.docx` | The signed scope document itself | — |
| `Nonprofit Worksheet - Mission Statement.eml` | Source of the full mission statement + org details | Home / Donate |

---

## Contact form (decided 2026-08-04)

Visit/Contact form posts directly to Web3Forms (`api.web3forms.com/submit`) rather than a custom Cloudflare Worker endpoint — simpler, no email service to wire up separately. **Still needs Randy's real Web3Forms access key** dropped into the hidden `access_key` field in `src/pages/visit.astro` before the form actually delivers anywhere; currently a placeholder value.

## Possible future addition (out of current scope)

Randy noted 2026-08-04: if Charles ends up sending a large batch of additional photos ("photo dump"), a dedicated Gallery page is a reasonable addition. This would be a sixth page beyond the five in the signed proposal, so it falls under the proposal's out-of-scope billing ($100/hr in 30-minute increments) rather than the flat $1,500 fee. Not started — just flagged for later.

## Suggested next step

~~Draft actual page copy for Home and Donate first~~ — done, see `Champion_House_Copy_Home_Donate.md`.

History and Visit/Contact copy drafted 2026-08-03 — see `Champion_House_Copy_History_Visit.md`. No badge treatment for the two historic designations (resolved, plain text). Remaining: confirm whether direct email/phone shows on Visit/Contact alongside the form.

Restoration Progress copy drafted 2026-08-03 — see `Champion_House_Copy_Restoration.md`. Foreclosure/rescue story included, anchored by the blurred sign photo. Still open: Charles hasn't reviewed the specific foreclosure-story wording yet (he approved telling it, not this exact copy); new roof photos still pending (delayed by rain); Donate CTA destination TBD pending processor choice.

All five pages now have copy drafts. Remaining before full launch: donation processor selection, mail-in giving decision, new roof photos, and Charles's sign-off on the Restoration Progress wording.
