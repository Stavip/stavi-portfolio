# Portfolio Site — UI Kit

The recreated portfolio website for Stavroula Papadaki, built against the design system in this project root.

**Open `index.html`** to see the full single-page prototype. Sections scroll in order:

1. **Hero** — name, role, intro line, two CTAs, layered portrait card
2. **About** — first-person bio with cream + wine card stack
3. **Leadership** — purpose statement, conditions/operating principles, links to Medium essay + one-pager PDF
4. **Work** — chronological cards: Goalsetter, academic projects, captain roles
5. **Contact** — single-card form, social links, monogram signature
6. **Footer** — minimal cream card

## Components

| File | What it is |
|------|------------|
| `components.jsx` | Primitives: `Card`, `WineCard`, `Eyebrow`, `Button`, `Tag`, `Icon`, `MetaDot`, `Section` |
| `Header.jsx` | Sticky capsule nav with monogram + 5 sections + CTA |
| `Hero.jsx` | Intro card with layered photo + meta tags |
| `AboutSection.jsx` | Two-card split — image + first-person body |
| `LeadershipSection.jsx` | Quote card + conditions / how-I-operate / examples |
| `WorkSection.jsx` | Stacked work experience rows |
| `ContactSection.jsx` | Single cream card with form + social row |
| `Footer.jsx` | Monogram, location, year |

All components consume CSS variables from `/colors_and_type.css`. Interactive bits (hover, scroll, smooth-scroll-to-section) are implemented; data is hard-coded — this is a hi-fi mock, not a production app.
