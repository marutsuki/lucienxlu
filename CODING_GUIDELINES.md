# RULES.md: Technical Standards & Guardrails

## 🛠 1. Tech Stack & Styling

**Framework:** React (Vite-based) with TypeScript.

**Styling:** Strictly Tailwind CSS v4.0+

- No external .css files allowed
- Use inline utility classes. For complex logic, use `clsx` or `tailwind-merge`
- Rely on consistent styling by creating default styling in index.css for **only** HTML tags

**Icons:** Use `lucide-react` only. Tree-shake imports; do not import entire libraries.

## ⌨️ 2. TypeScript & Data Integrity

**Definitions:** Use `type` for all definitions. Strictly no `interface`.

**No `any`:** The use of `any` is a build-blocking offense. Use `unknown` if a type is truly dynamic, or define a proper type.

**Primitive Control:** Use Type Unions instead of raw strings for categories, status, or roles.

- Example: `type Role = 'Engineer' | 'Tutor' | 'Lead';`

**Date Formatting:** All dates must follow `dd MMM yyyy` format (e.g., `05 Jan 2026`). Use a utility function for consistency across agents.

## 🏗 3. Architectural Patterns

**State Management:** Keep state as local as possible. Do not introduce Redux/Zustand unless explicitly requested.

**Async UX:** Every blocking call or data-fetching operation must be wrapped in a `<Suspense>` boundary or show a visible loading state (Spinner or Skeleton component).

**Component Structure:**

- Functional components with arrow functions
- Props must be destructured in the function signature

## 🤖 4. Agentic Workflow Rules (CRITICAL)

**The "Librarian" Rule:** All data extracted from RESUME.md must map to types in `src/types/schema.ts`.

**The "Artisan" Rule:** Components must be "Atomic." If exceeding 150 lines, break into sub-components.

**The "Fallback-to-Mock" Rule:** The Librarian must always provide data for the in-progress feature. If the Librarian fails to find relevant data for a specific feature in `RESUME.md`, the Librarian should provide mock data instead for the Architect to render the component properly.

**The "Mobile-First" Rule:** All Architect output & Artisan components must be tested for responsiveness using Tailwind's sm:, md:, and lg: prefixes.

**The "Handoff" Rule:** No agent may terminate without executing `python scripts/handoff.py`.

**Tone Consistency:**

- Professional Content: Strategic, leadership-focused, high-impact
- Educational Content: Humble, pastoral, student-centric
