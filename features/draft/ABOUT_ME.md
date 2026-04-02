# Feature: About Me Section

## Description

Add an "About Me" section below the splash page, reachable via the splash CTA button. This section introduces the person with a short bio, skills list, and key attributes.

It should feel connected to the splash style, maintain clean typography, and be scannable for a quick read.

## Requirements

- Navigation: The splash “scroll to next section” button must smoothly scroll to the About Me section with a named anchor or `id="about-me"`.
- Layout: Two-column layout on desktop (text left, profile details/stat cards right), single-column on mobile.
- Content:
  - Heading: “About Me” or similar.
  - 2–3 short paragraphs about background and passion.
  - Bullet list of core skills/tech.
  - Optional quick links: resume, LinkedIn, GitHub.
- Spacing: Adequate padding above/below section and between elements.
- Animation: Fade/slide in from bottom when section enters viewport; keep consistent style with splash animations.
- Accessibility:
  - Use semantic HTML (section + h2).
  - Ensure contrast meets WCAG.
  - All links/buttons keyboard focus visible, aria-labels on icon-only controls.
- Styling: Follow existing palette in `index.css`; aims for warm accent with neutral backgrounds (matching splash).
- Performance: Lazy-load any large media, keep the section lightweight.

## Metrics

- Must pass basic layout sanity in desktop/mobile breakpoints.
- Smooth scroll offset should align section top below fixed header if any.
- Verify the new section is the `scroll destination` target in the splash button.
