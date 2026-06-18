# Portfolio Visual Redesign: Breaking The AI Template

## Problem Statement

Peer feedback identified that the current portfolio looks too close to the common AI-generated developer portfolio pattern:

1. No strong visual element tied to the actual subject matter: CVE research, temporal security analysis, and LLM evaluation.
2. Every section uses a similar card-grid rhythm.
3. Typography has little identity beyond one font at different weights.
4. Metric tiles repeat across the page and start to feel templated.
5. The blue-on-dark palette, glass cards, and particle background read as default AI portfolio styling.

**Goal:** Redesign the visual layer while preserving the existing content, data architecture, and research narrative. The result should look like it belongs to someone who builds LLM systems and benchmarks their failure modes, not a generic developer template.

**Narrative structure:** Section order is deliberate: the hero states the claim, the research spotlight proves the "benchmark failure modes" half, and the projects prove the "build LLM systems" half.

---

## Final Decisions

### Dark Mode Only

The redesign is dark-only. The security research and terminal aesthetic is stronger in a dark environment, and removing light mode reduces implementation and QA scope.

Implementation implications:

- Remove the theme toggle from navigation and mobile menus.
- Remove `next-themes` usage from the root layout.
- Keep a single dark token set in `globals.css`.
- Do not maintain a parallel light palette during this redesign.

### Minimal Background

Use a minimal warm radial gradient as the page background. No canvas, no particles, no mouse interaction, and no background animation.

The research spotlight typewriter is the one deliberate motion moment. The background should stay quiet so that moment has room to register.

### Small Contact Section

Add a real closing contact section, but keep it restrained.

Include:

- One short invitation line.
- Email, LinkedIn, and GitHub as compact circular icon buttons.
- Resume download button.

Avoid:

- Contact forms.
- Testimonials.
- Oversized "let's work together" hero treatment.
- Terminal framing or stat tiles.

### Hero Subtitle

Use this line:

`I build LLM systems and benchmark their failure modes.`

Reasoning: it has two clear verbs, makes the work immediately legible, and bridges directly into the research and project sections.

---

## Design Decisions

### 1. Gold Accent: Supporting Cast, Not Signature

Gold replaces Tailwind blue as the main accent. It adds warmth and avoids the default blue-on-black look, but it is not the only differentiator. The real signature comes from the research spotlight and asymmetric section layouts.

If the accent ever needs to change, it should be a one-token swap, not a structural redesign.

### 2. Tri-State Dots: Research Spotlight Only

The amber, red, and green tri-state dots appear only in the research spotlight terminal window, where they double as window controls and connect to the Tri-State Temporal Framework.

They should not appear in:

- Navbar branding.
- Hero decorations.
- Project cards.
- Generic UI accents.

The motif earns meaning by appearing in the section where the research context is present.

### 3. Terminal Voice: One-Time Flourish

Terminal styling is used exclusively in the Research Spotlight section on the homepage.

It should not leak into:

- Hero copy.
- Project descriptions.
- General CTAs.
- Footer/contact.

Inside the research spotlight:

- Stats render as terminal-like output.
- The CTA may use command-style copy: `./explore --full-findings`.
- The terminal framing should support the research evidence, not become a decorative gimmick.

### 4. Resume Remains Easy To Find

Even if the hero CTA row becomes "View Work" and "Read Research," the resume stays highly accessible:

- Navbar: one-click resume link.
- Mobile menu: resume link.
- Contact section: resume button.

### 5. Bento Sizing Matches Skill Priority

The Capabilities section uses asymmetric sizing:

- Large: LLM Applications.
- Medium: Data Engineering and Backend Systems.
- Compact: ML Systems and Deployment/MLOps.

This communicates that the primary identity is LLM applications and evaluation, supported by data engineering, backend systems, and ML practice.

### 6. Motion Strategy: One Deliberate Moment

The research spotlight typewriter is the one orchestrated animation moment.

Everything else should use quick, subtle opacity transitions. Avoid uniform slide-up animations on every section.

---

## Visual System

### Color Palette: Warm Terminal

```css
--background: #0a0a0b;
--surface: #141416;
--surface-raised: #1c1c1f;
--border: #2a2a2e;
--foreground: #e8e6e3;
--muted: #8a8885;
--accent: #c9a55a;
--accent-dim: #a07d3a;
--danger: #e05252;
--safe: #4ade80;
--warning: #f59e0b;
```

`--danger`, `--safe`, and `--warning` are not general-purpose accents. They appear only in the research spotlight and research deep-dive visualizations.

### Typography

```text
Display: Space Grotesk
Body:    Inter
Code:    JetBrains Mono
```

Use Space Grotesk sparingly:

- Hero name.
- Section headings.
- Research page title.

Everything else stays Inter or JetBrains Mono.

---

## Proposed Changes

### Design Foundation

Modify `src/app/globals.css`:

- Replace existing color variables with the warm terminal palette.
- Remove `glass-card`.
- Add `card-base` for general cards.
- Add `terminal-window` for the research spotlight.
- Add typewriter/cursor animation utilities.
- Replace or remove `bg-grid-pattern`.
- Update text selection colors.

Modify `tailwind.config.ts`:

- Add `accent-dim`, `danger`, `safe`, `warning`, and `surface-raised`.
- Add `font-display` mapped to `--font-display`.

Modify `src/app/layout.tsx`:

- Import `Space_Grotesk`.
- Add `--font-display` to the body class.
- Remove `ThemeProvider` usage.
- Keep existing metadata unless copy needs a later pass.

### Background

Modify `src/components/ui/DynamicBackground.tsx`:

- Replace the particle canvas with a CSS-only background layer.
- Use a minimal warm radial gradient.
- Remove animation loops, mouse handling, and theme dependency.

### Navigation

Modify `src/components/layout/Navbar.tsx`:

- Remove the hexagon SVG logo.
- Use clean typographic `S.P.S` in display font.
- Remove `ThemeToggle`.
- Keep Resume prominent.
- Keep mobile menu.
- Use gold hover states.

### Hero

Modify `src/components/sections/Hero.tsx`:

- Use Space Grotesk for the name.
- Use subtitle: `I build LLM systems and benchmark their failure modes.`
- Remove pill badges.
- Keep compact social icons.
- Use two CTAs: `View Work` and `Read Research`.
- Keep resume out of the hero CTA row because it remains in nav and contact.
- Use a simple 400ms opacity fade.

### Capabilities

Modify `src/components/sections/Capabilities.tsx`:

- Rename section to `Engineering Focus`.
- Replace identical cards with an asymmetric bento grid.
- Make `LLM Applications` the large cell.
- Remove bullet lists inside cells.
- Show title, one-line summary, and smaller de-emphasized tech text.
- Remove the repeated Terminal icon.

### Research Spotlight

Modify `src/components/sections/ResearchSpotlight.tsx`:

- Replace the glass card with a terminal-window frame.
- Show the tri-state dots only here.
- Make the research title and status immediately readable.
- Reveal stat lines with a clip/width-based typewriter effect.
- Use real evidence quickly:
  - `assessments: 810`
  - `cves_validated: 30`
  - `lpa_repos: 13`
  - `frontier_models: 3`
- Link to `/research` with command-style CTA copy.

Implementation note: Use width or clip reveal on each stat line, and visually check all four line lengths. The short lines should still feel like typing, not like a mismatched mask.

### Projects

Modify `src/components/sections/Projects.tsx`:

- Rename section to `Selected Work`.
- Feature the top two projects full-width:
  - Kinetic.
  - LLM Vulnerability Detection Benchmark.
- Treat the remaining projects as compact cards.
- Eliminate homepage stat tiles.
- Use prose or inline metrics instead of repeated boxes.
- Keep architecture as a left-accented line, not a code block.

### Experience

Modify `src/components/sections/Experience.tsx`:

- Keep the timeline structure.
- Use Space Grotesk headings.
- Use gold timeline dots.
- Replace education glass cards with simpler bordered rows.
- Use thin left gold borders for publications.
- Use quick opacity fades only.

### Contact

Add a small contact section before the footer or replace the current footer content:

- Short invitation line.
- Email, GitHub, LinkedIn icons.
- Resume download button.
- No card wrapper.
- No terminal styling.

### Research Deep-Dive Page

Modify `src/components/sections/ResearchPage.tsx`:

- Restyle existing content to match the warm terminal design system.
- Replace `glass-card` with `card-base`.
- Use Space Grotesk headings.
- Use warm metric bars.
- Use tri-state color accents only for framework/model visualizations.
- Keep the page data-dense; it is an opt-in deep dive.

Scope note: Do not make `useInView` refactoring a blocker. Restyle first. Refactor hooks only if they cause bugs or make the page harder to maintain.

---

## Section Rhythm Summary

| Section | Layout | Visual Character | Animation |
|---|---|---|---|
| Hero | Full-width typography | Bold, whitespace-heavy | 400ms opacity |
| Capabilities | Asymmetric bento | Dense, scannable | 200ms opacity |
| Research Spotlight | Terminal-window frame | Evidence-first, distinctive | Typewriter moment |
| Projects | 2 feature cases + compact grid | Editorial, asymmetric | 200ms opacity |
| Experience | Timeline | Structured, professional | 200ms opacity |
| Contact | Minimal closing section | Calm exit | None |

No two consecutive sections should share the same layout pattern.

---

## Verification Plan

### Automated Tests

```powershell
npm.cmd run build
```

Build should complete with zero errors.

### Manual Verification

- Inspect `/` and `/research` in browser.
- Check mobile at 375px.
- Check tablet at 768px.
- Check desktop at 1280px or wider.
- Confirm all nav links work.
- Confirm `/research` link works.
- Confirm resume is reachable from nav, mobile menu, and contact section.
- Confirm typewriter animation runs once when the research spotlight enters view.

### Design Checklist

- [ ] Hero subtitle says: `I build LLM systems and benchmark their failure modes.`
- [ ] Section order reads as broad claim -> research proof -> project proof.
- [ ] No two adjacent sections share the same layout pattern.
- [ ] Gold accent replaces blue everywhere outside research-specific tri-state colors.
- [ ] Space Grotesk appears on hero name and section headings.
- [ ] Tri-state dots appear only in the research spotlight terminal window.
- [ ] Terminal voice appears only in the research spotlight.
- [ ] Stat tiles are eliminated from the homepage.
- [ ] Research spotlight passes the "evidentiary, not decorative" test: title, status, and the four stats are legible and register before the terminal-window framing registers as a visual flourish.
- [ ] Projects section has 2 featured case studies plus compact remaining work.
- [ ] Capabilities bento makes LLM Applications the large cell.
- [ ] Resume link is clearly accessible from navbar, mobile menu, and contact section.
- [ ] Background is CSS gradient, not a particle canvas.
- [ ] `/research` page matches the new design system.
