# Stavroula Papadaki — Portfolio Design System

A personal portfolio design system for **Stavroula Papadaki** (Stanford MS&E '26, D1 Basketball Captain, Greek National Team Captain). The aesthetic is **European editorial luxury**: warm taupe rooms, deep burgundy velvet, cream paper. Think museum invitation meets curated personal profile. Sophisticated, intimate, and specifically *her* — not corporate.

---

## The site at a glance

- **Audience:** Future colleagues, recruiters, collaborators, friends. People who want to know who she is, what she's done, and how she thinks about leadership.
- **Sections:** Home / intro · About · Leadership (linking to a Medium essay + one-pager PDF) · Work experience · Contact.
- **Voice:** Warm, first-person, conversational. Welcomes you in ("Hi, I'm Stavi!") rather than announcing itself. Confident without bragging, soft without being twee.
- **Tone:** *"Museum invitation that opens with a hug."* Editorial restraint visually + personal warmth in the words.

---

## Source materials

These are the canonical inputs the system was built from. Treat the design system as the source of truth; reach for the originals only when you need verbatim copy or context the system didn't capture.

| File | What it is |
|------|------------|
| `uploads/SP_Resume.pdf` | Full resume — education, honors, professional experience, leadership |
| `uploads/stavi_leadership_onepager_v6.pdf` | Leadership profile one-pager (purpose, conditions, examples) |
| `uploads/Screenshot 2026-05-26 at 3.14.33 PM.png` | Visual reference — taupe + burgundy + cream layered cards (the *target* mood) |
| `uploads/Screenshot 2026-05-26 at 3.15.32 PM.png` | Visual reference — editorial layout, magazine-collage card layering |

There is **no Figma** and **no legacy production site** — this design system is the starting point. The portfolio UI lives under `ui_kits/portfolio_site/`.

### Run the portfolio site locally

From the repository root:

```bash
npm install
npm run dev
```

Or from `ui_kits/portfolio_site/` only: `npm install` then `npm run dev`. Vite prints a local URL (typically `http://localhost:5173`).

---

## CONTENT FUNDAMENTALS

### Voice — warm, first-person, reflective

The site is written in Stavi's own voice, lifted directly from how she actually writes about herself on LinkedIn. **First-person ("I")**, conversational, reflective rather than punchy. Sentences run a little long; that's deliberate. She thinks out loud, doesn't deliver one-liners.

A welcoming opener ("Hi, I'm Stavi.") and an open close ("Stay a while, I'd love to show you around.") bracket the page. In between, the prose breathes.

**Yes:**
> *Hi, I'm Stavi. I grew up in Chania, Greece, and I've been thinking about teams ever since.*
> *I grew up in Chania, Greece, and from a young age I was surrounded by teams. Basketball became my world pretty early on, and I quickly realized that what makes a team great is not always talent, but whether people believe in each other.*
> *I never thought of myself as the loudest or most dominant player, but I cared a lot about my teammates and what they were capable of, sometimes more than they did themselves.*

**No:**
> ~~"Stavroula is a senior at Stanford who has demonstrated leadership across multiple domains…"~~
> ~~"As a results-driven team captain and aspiring product manager…"~~
> ~~"Athens taught me to compete. Stanford taught me to build."~~  *(wrong city, and too declarative, too tidy — sounds like a tagline)*

### Tone — warm, specific, lightly literary

The voice has the cadence of a thoughtful letter, not a LinkedIn post. Specificity is the move: name the country, name the score, name the moment. Abstract claims get cut.

- "Greek National Team Captain since 2018" beats "international basketball experience"
- "20-point performance against Croatia" beats "high-performance shooter"
- "15+ person roster through demanding seasons" beats "leadership under pressure"

### Casing

- **Display headings:** Title Case or sentence case in serif. Never all-caps for the big editorial moments. Keep the typography doing the work.
- **Eyebrows & labels:** ALL CAPS with wide letter-spacing (`0.28em`). These are the museum-placard tags above sections.
- **Body copy:** Sentence case. Standard punctuation. Oxford comma.
- **Buttons & nav:** Sentence case ("Read the essay", "Get in touch"), never all-caps. All-caps lives in eyebrows only.

### Punctuation & symbols

- **No em-dashes.** This is a brand rule. Use a comma, a period, a colon, or parentheses instead. Em-dashes feel literary in a way that doesn't match Stavi's voice; she writes in longer, calmer sentences.
- Middle dot `·` as a separator in tag lists and credit lines: `Stanford MS&E · D1 Basketball Captain`.
- Curly quotes always (`"…"` and `'`), never straight.
- Italic for emphasis, never bold (bold is reserved for the body sans).
- Section dividers in copy use the eyebrow tag, not a horizontal rule.

### I vs. you vs. we

- **I** is the default. Everywhere on About, Leadership, Work.
- **You** appears only on the Contact section ("If you're working on something interesting, I'd love to hear from you.") and CTAs.
- **We** is reserved for team contexts ("we finished 3rd as underdogs").

### Emoji

**No emoji.** Anywhere. The aesthetic is European editorial — emoji breaks the spell instantly. If a glyph is needed, use a typographic mark (`·`, `—`, `§`, `*`) or a small line icon from the curated set.

### Stock phrases to avoid

Cut these entirely; they're LinkedIn slop and don't match the voice:

- "Passionate about…" "Driven by…" "Results-oriented"
- "Synergy", "leverage", "stakeholder" (unless verbatim from work history)
- "I'm excited to announce…"
- "Wearing many hats", "in the trenches"
- Any sentence that could appear on any other portfolio site

### Copy examples — calibrated to voice

**Hero / intro:**
> *Hi, I'm Stavi. I grew up in Chania, Greece, and I've been thinking about teams ever since. I'm an MS&E student at Stanford, a D1 basketball captain, and I care a lot about what makes a team worth showing up for.*

**About opener:**
> *I grew up in Chania, Greece, and from a young age I was surrounded by teams. Basketball became my world pretty early on, and I quickly realized that what makes a team great is not always talent, but whether people believe in each other.*

**Leadership eyebrow:**
> *HOW I LEAD — "I believe in people before they believe in themselves."*

**Work-experience row:**
> *Pump · Business Development Representative · Summer 2026*
> Joining Pump this summer to help startups discover and adopt their cloud-cost platform. Pump uses group buying and AI to bring down cloud bills, and it is completely free for the companies that use it.

**Contact close:**
> *I'd genuinely love to hear from you. My inbox is open, and I read every message.*

---

## VISUAL FOUNDATIONS

### Mood

**European luxury editorial meets curated personal profile.** The reference images (`uploads/Screenshot 2026-05-26 at 3.14.33 PM.png`) show the target precisely: warm mushroom-taupe room, cream content cards, burgundy accent cards stacked like physical objects on a table. Imagine a museum invitation, an old opera-house program, a Cereal magazine spread.

### Color

A three-note palette: **mushroom · wine · cream**. Defined in `colors_and_type.css`.

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Page background | `--taupe-300` | `#C4B5A0` | The room. Always behind everything. |
| Card surface (cream) | `--cream-100` | `#F7EFE0` | Primary content cards. The "paper". |
| Accent (wine) | `--wine-500` | `#7A1A1A` | Burgundy cards, primary buttons, links. |
| Deep wine (pressed/shadow) | `--wine-700` | `#5C0F12` | Press states, deep card edges. |
| Ink | `--ink-900` | `#2A1F18` | Text. **Never pure black.** Always brown-tinted. |
| Muted ink | `--ink-500` | `#5C4A3C` | Body copy on cream cards. |
| Gold leaf | `--gold-500` | `#B08A4A` | Restraint only — frame edges, italic flourishes. |

**Color rules**
- Page background is **always taupe** (`--taupe-300`).
- Cream cards sit on taupe; burgundy cards sit on taupe. Never cream-on-burgundy directly — there must be visible margin around each card so it reads as an object.
- Text on burgundy is cream (`--cream-50`), text on cream is brown ink (`--ink-900` / `--ink-700`).
- **No gradients on backgrounds.** A faint warm vignette in a hero photo is fine; CSS gradient fills on UI surfaces are not.
- Avoid pure black and pure white. Everything is warm-tinted.

### Typography

A two-family system with one alternate display face.

| Family | Used for | Substitution note |
|--------|----------|------|
| **Cormorant Garamond** | All display, headings, italic pull-quotes | Google Fonts. Pairs the editorial-magazine feel; ample italics. |
| **Italiana** | Eyebrows, the occasional all-caps label | Google Fonts. Very thin all-caps serif for placard tags. |
| **Manrope** | All body, UI, buttons, captions | Google Fonts. Warm geometric sans, calmer than Inter. |
| **JetBrains Mono** | Code/mono only (rare on this site) | Standard mono |

> **Font substitution flag:** No custom typefaces were provided. Cormorant Garamond + Italiana + Manrope are Google Fonts approximations of the European editorial mood. If Stavi has access to *Editorial New*, *Saol Display*, *GT Super*, *Reckless*, or *Söhne*, those are stronger paid equivalents — drop them in and we'll re-tune sizing.

**Type rules**
- Display copy is set in Cormorant Garamond Medium (500) with tight tracking (`-0.02em`).
- Italics in the display face are a feature — use them for pull-quotes and the occasional emphasised noun in a heading.
- Eyebrows are Italiana or Manrope-medium, ALL CAPS, `0.28em` tracking, 12–14px.
- Body copy is Manrope 400 at 16px with `1.65` line-height — generous breathing room.
- Don't underline links inline. Use a thin custom underline or color shift on hover.

### Spacing

A 4-px base scale (`--space-1` through `--space-32`). The actual layout breathes — generous whitespace is the point.

- Section vertical rhythm: `--space-20` (80px) minimum between major sections.
- Card padding: `--space-8` (32px) inside content cards.
- Inline label gap: `--space-2` (8px) between an icon and a label.

### Backgrounds

- **Solid taupe** is the default. No textures, no patterns.
- **Photography** is the texture. Cinematic, warm, slightly desaturated. Museum interiors, European architecture, basketball stills with warm color grading. Avoid cool/blue tones; avoid harsh flash; avoid sterile studio shots.
- **Image grain** is optional — a subtle film-grain overlay (8–12% opacity) on hero photography is encouraged.
- No full-bleed CSS gradients. No mesh gradients. No "glassmorphism".

### Layered cards — the central motif

Cards are **physical objects on a surface**. They overlap. They tilt occasionally (1–3 degrees, never more). They cast warm shadows downward and slightly right.

**Card anatomy**
- Corner radius: `--r-md` (18px) for standard cards; `--r-lg` (28px) for hero/photo cards; `--r-xl` (40px) for full-bleed photo cards.
- Border: none, OR a `1px` `var(--border-card)` for cream-on-cream stacking.
- Shadow: `--shadow-2` resting, `--shadow-3` for elevated, `--shadow-4` for hero. All shadows are warm-tinted (`rgba(58, 10, 12, …)`), never neutral gray.
- A faint inner highlight (`--shadow-inset`) sells the "paper" quality on cream surfaces.

**Stacking pattern**
- A cream card behind, slightly offset.
- A burgundy or photo card on top, overlapping by 24–48px.
- A third small element (thumbnail row, badge, signature) tucked into a corner with a slight overlap.

### Corner radii

| Token | Px | Where |
|-------|----|-------|
| `--r-xs` | 8 | Small badges, chips |
| `--r-sm` | 12 | Buttons, input fields |
| `--r-md` | 18 | **Default card** |
| `--r-lg` | 28 | Hero cards, photo cards |
| `--r-xl` | 40 | Full-bleed editorial cards |
| `--r-pill` | 999 | Pills, status badges |

Circles (`border-radius: 50%`) are used for thumbnail clusters and avatars only.

### Shadows

Four-step warm shadow system, all tinted with `rgba(58, 10, 12, …)` so they read brown-burgundy, not gray.

```
--shadow-1   resting hover on subtle items
--shadow-2   default card resting state
--shadow-3   elevated / hovered cards
--shadow-4   hero card / focused modal
```

Pair `--shadow-inset` with cream surfaces for paper depth. **Never** use a hard 0-blur shadow — always soft and diffuse.

### Borders & dividers

- Dividers are 1px `var(--border-soft)` — a brown-tinted near-transparent line.
- Card borders are generally absent; let shadow do the lifting.
- Form inputs have a 1px `--border-soft` bottom border (single line, no full box), focus is a wine underline.

### Hover & press states

- **Hover (links & buttons):** color shifts darker (`--wine-700`) or to `--accent-hover` for emphasis. Optional: a 1–2px underline grows in from left.
- **Hover (cards):** shadow steps up one level, the card translates `-2px` upward. Duration `--dur-med` (260ms) with `--ease-out-quart`.
- **Press:** color shifts to `--wine-700`, scale `0.98`. Brief.
- **Focus:** `--focus-ring` (3px wine glow). Always visible — accessibility first.
- **No opacity-only hover.** Color and motion carry meaning here.

### Motion

- Defaults: `--dur-med` 260ms, `--ease-out-quart`.
- Easing has *some* sustain (quart) — editorial motion, not snappy productivity-app motion.
- Page-load: cards fade-and-rise (8–16px) staggered by ~60ms.
- Avoid bouncy springs. Avoid CSS keyframe loops on idle. The site should feel calm.
- Reduce-motion: respect `prefers-reduced-motion`; collapse to opacity-only fades.

### Imagery — color grading & subject

- **Color:** warm, slightly desaturated. Magic-hour, museum-light, candlelight. Avoid blue-hour, fluorescent, or bright-saturated tones.
- **Subject:** European architecture, old interiors, basketball action stills, portraits with sidelight, still-life details (books, espresso, ribbon, hands).
- **Composition:** classical thirds, generous negative space, ample headroom.
- **Treatment:** rounded corners always (`--r-lg` or `--r-xl`). Sometimes a faint grain overlay. Never drop a hard 4-direction outline on a photo.

### Transparency & blur

- Used sparingly. A burgundy card overlapping a photo can use a 6–10% taupe-tinted overlay to lift legibility.
- Backdrop-blur (`backdrop-filter: blur(12px)`) on the sticky top-nav when it overlays content.
- Never use `opacity: 0.5` on body text — use `--fg-muted` or `--fg-subtle` instead.

### Layout rules

- **Single column** is the dominant rhythm — stacked cards down the page.
- Two-column splits (image / text) appear in About and Work sections.
- The top of the page is a fixed taupe header with logo (monogram or wordmark) on the left, four nav links on the right. Backdrop-blurred when scrolled.
- Footer is minimal — a single cream card with name, location, contact icons, year.
- Max content width: `~1200px`. Comfortable reading column inside cards: `~640px`.

### Iconography

See **`ICONOGRAPHY`** section below.

---

## ICONOGRAPHY

Stavi's portfolio uses **a small, restrained icon set** — icons are not the visual star here; cards and photography are. When icons appear, they're thin (`1.5px stroke`), linear, and warm-toned to match the editorial mood.

### Approach

- **Primary set: Lucide.** Loaded from CDN (`https://unpkg.com/lucide@latest/dist/umd/lucide.js`). Lucide's 1.5px stroke aligns with the editorial feel; their `mail`, `arrow-up-right`, `link`, `linkedin`, `download`, `play`, `search`, `menu`, `x`, `chevron-down` are the working set.
- **Stroke:** 1.5px standard; 1.25px at small sizes.
- **Color:** `currentColor`, inheriting `--fg` or `--fg-muted` from context.
- **No emoji.** Not in body copy, not in section headers, not as bullet glyphs.
- **No icon fonts** (FontAwesome, etc.). SVG only, inline or via Lucide.

### Custom marks

A single **monogram** (`SP`) is the only branded mark — drawn as a custom SVG in `assets/monogram-sp.svg`. It uses the display serif italic and lives in:
- The top-left of the header
- The favicon
- The footer signature

### Substitution flag

Lucide was chosen as a CDN-available stand-in. **No custom icons were provided.** If Stavi wants a hand-drawn or commissioned set later (the European editorial aesthetic could support delicate hand-drawn pictograms), this is a natural future iteration.

### Usage rules

- One icon per CTA, leading the label, 16-18px.
- In nav, no icons — only words.
- In section headers, an icon is acceptable as a small Italiana eyebrow companion (rare).
- Avoid stacking icons. A row of 4+ icons starts to look like an app dashboard — the wrong vibe.

---

## INDEX — what's in this folder

```
.
├── README.md                       ← you are here
├── SKILL.md                        ← Agent Skill entrypoint
├── colors_and_type.css             ← CSS variables: color + type tokens
│
├── assets/                         ← logos, monogram, photography placeholders
│   ├── monogram-sp.svg
│   ├── grain.svg
│   ├── photo-placeholder-interior.svg
│   ├── photo-placeholder-portrait.svg
│   ├── photo-placeholder-architecture.svg
│   ├── photo-placeholder-basketball.svg
│   └── photo-placeholder-stilllife.svg
│
├── preview/                        ← Design System tab cards
│   ├── _preview.css
│   ├── color-core.html
│   ├── color-taupe-scale.html
│   ├── color-wine-cream-scale.html
│   ├── color-semantic.html
│   ├── type-families.html
│   ├── type-display.html
│   ├── type-body.html
│   ├── type-scale.html
│   ├── spacing.html
│   ├── radii.html
│   ├── shadows.html
│   ├── card-anatomy.html
│   ├── buttons.html
│   ├── badges.html
│   ├── inputs.html
│   ├── nav.html
│   ├── monogram.html
│   ├── iconography.html
│   ├── photography.html
│   └── voice.html
│
├── ui_kits/
│   └── portfolio_site/             ← the website itself
│       ├── README.md
│       ├── index.html              ← full clickable prototype
│       ├── components.jsx
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── AboutSection.jsx
│       ├── LeadershipSection.jsx
│       ├── WorkSection.jsx
│       ├── ContactSection.jsx
│       └── Footer.jsx
│
└── uploads/                        ← source materials (read-only references)
    ├── SP_Resume.pdf
    ├── stavi_leadership_onepager_v6.pdf
    └── Screenshot 2026-05-26 at *.png
```

---

## How to use this system

1. Link `colors_and_type.css` at the top of any HTML you write.
2. Reach for the semantic classes (`h1`, `.eyebrow`, `.pull-quote`, `.body-lg`) first; drop down to raw CSS variables when you need to compose.
3. Cards stack — design every screen as 2–4 cards on a taupe surface, not as a typical web columns-and-sections grid.
4. Photography matters. Even when a real photo isn't available, use a warm placeholder (`assets/photo-placeholder-*.svg`) at the correct aspect — don't substitute a gray rectangle.
5. When in doubt, **fewer cards, more space, larger type**.
