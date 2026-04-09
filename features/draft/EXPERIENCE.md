# Feature: Experience Section

## Description

Add an "Experience" section below the about me, reachable either via scroll-down or a quick handy shortcut button not visually in the center. 
This section introduces the person's work experience.

It should feel connected to the splash style, maintain clean typography, and be scannable for a quick read.

Most importantly, the styling, layout, transitions/animations should give off a "journey", "timeline" or "discovery" style vibe, I would like the timeline to be slightly but not overly interactive - rely on the scroll wheel.


## Requirements

### UI/UX Requirements

- **Layout:** Vertical timeline layout positioned on the left or right side of the viewport, with vertically navigable content, the opposite side should be used to fill out less titular details, e.g. achievements, skills, location, etc.
- **Visual Style:** Match splash page aesthetic with consistent color palette, typography, and spacing
- **Typography:** Clean, readable fonts with clear hierarchy—role titles prominent, company names secondary, dates subtle
- **Timeline Element:** Vertical line connecting experience entries, with visible nodes/dots at each milestone
- **Scroll Interaction:** Timeline nodes animate or highlight as user scrolls through the section
- **Navigation Button:** Floating shortcut button positioned off-center (e.g., bottom-right or bottom-left corner) to jump to Experience section
- **Responsive:** Timeline collapses to a single-column layout on mobile with nodes positioned inline

### Functionality Requirements

- **Content Entries:** Each experience entry includes role, company, duration, location (optional), and bullet points for key achievements
- **Scroll Trigger:** Timeline nodes respond to scroll position—active node highlighted as it enters viewport
- **Smooth Scroll:** Clicking shortcut button smoothly scrolls to Experience section
- **Animation:** Subtle fade-in or slide-in animations for timeline entries as they come into view
- **Data Source:** Experience content managed in `src/data/content.ts` by the Librarian

### Accessibility Requirements

- **Semantic HTML:** Use `<section>`, `<article>`, `<time>`, and proper heading hierarchy
- **Keyboard Navigation:** Shortcut button focusable and operable via keyboard
- **ARIA Labels:** Timeline structure labeled appropriately for screen readers
- **Reduced Motion:** Respect `prefers-reduced-motion` for scroll animations

### Acceptance Criteria

- [ ] Experience section renders below About Me section
- [ ] Timeline visually represents career journey with connected nodes
- [ ] Scroll interaction highlights current position in timeline
- [ ] Shortcut button visible but not centered; clicking scrolls to section
- [ ] All experience data loads from `content.ts`
- [ ] Animations are subtle and enhance the "discovery" vibe
- [ ] Passes accessibility audit (no ARIA violations, proper semantics)
- [ ] Responsive design works on mobile viewports
