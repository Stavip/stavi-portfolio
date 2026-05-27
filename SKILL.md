---
name: stavi-portfolio-design
description: Use this skill to generate well-branded interfaces, assets, and writing for Stavroula (Stavi) Papadaki's personal portfolio. Contains design tokens, type and color systems, photography placeholders, the SP monogram, voice guidelines, and a working React UI kit recreating the portfolio site. Warm taupe / wine / cream palette with European editorial typography; reflective first-person voice with no em-dashes.
user-invocable: true
---

# Stavi Papadaki Portfolio — Skill

Read `README.md` first for the full system: color, type, content fundamentals (voice, tone, casing, punctuation rules), visual foundations (cards, shadows, motion, photography), and iconography.

Then explore:

- `colors_and_type.css` — drop-in CSS variables and semantic classes. Always `@import` or `<link>` this at the top of any HTML you write for Stavi.
- `assets/` — the SP monogram, grain overlay, and warm photography placeholders. Reference these directly instead of drawing your own.
- `ui_kits/portfolio_site/` — the working portfolio site as a clickable React prototype. Lift components (`Card`, `WineCard`, `Eyebrow`, `Button`, `PhotoCard`, `Monogram`, etc.) from `components.jsx` when building anything new.
- `preview/` — small specimen cards for each system token, useful for orientation.

## When this skill is invoked

If creating visual artifacts (slides, mocks, a new section for the portfolio, a personal one-pager, throwaway prototypes), copy the relevant assets out and create static HTML files for the user to view. Match the visual system precisely — taupe background, layered cream + wine cards with warm shadows, Cormorant Garamond display, Manrope body, Italiana eyebrows.

If working on production code, lift the CSS variables and React primitives.

## Non-negotiable brand rules

- **No em-dashes** in copy. Use commas, periods, colons, or parentheses.
- **No emoji** anywhere.
- **First-person voice**, reflective and warm, lifted from how Stavi actually writes. Never bio-speak.
- **Chania, Greece** is where she's from. Not Athens.
- **Pure black and pure white are forbidden.** Everything is warm-tinted.
- **Cards are physical objects on taupe.** Generous radii, warm brown-tinted shadows, occasional slight tilt.

## If the user invokes the skill with no other guidance

Ask them what they want to build or design (a new portfolio section? a slide deck for a talk? a personal Read.cv-style page?), ask a few clarifying questions about the audience and the surface, then act as an expert designer who outputs HTML artifacts or production code depending on the need.
