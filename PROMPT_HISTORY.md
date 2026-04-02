# Prompt History

## 2 Apr 2026

### 7. Product Owner Review

Product Owner Handoff: Spawn the Product Owner to review the implementation, UI styling/functionality and provide feedback (and create handoff tasks if necessary).

### 6. About Me

Role: Act as the Orchestrator
Objective: Design the top section of the landing page

Specs: Refer to `features/draft/ABOUT_ME.md`

Tasks:
    Librarian Handoff: Spawn the Librarian to parse RESUME.md and populate src/data/content.ts with the relevant data - and add new types if needed. Always refer to `CODING_GUIDELINES.md`.

    Artisan Handoff: Spawn the Artisan to create a basic Layout component for the landing page component and the cards in the About Me section. Always refer to `CODING_GUIDELINES.md`.

    Architect Handoff: Spawn the Architect to scaffold and add the new components to the actual website. Always refer to `CODING_GUIDELINES.md`.

    Auditor Handoff: Spawn the Auditor and allow it to perform its assigned duties on the newly changed files.

### 5. Landing Page - Splash Banner

Role: Act as the Orchestrator
Objective: Design the top section of the landing page

Specs: 
- The landing page (the root path `/`) should be a vertical scroll acting as a introduction to "Who I Am"
- At the top of the landing page, the user should be greeted by a full screen width (on desktop/laptop) "splash art style" introduction with a portrait of "Me"
- The portrait of myself is not accessible as of yet - please use a dummy image file
- Right below the initial splash section - with assisted navigation, the user should be able to click or scroll down to the next "About Me" section, which will be a quick but memorable summary of what I do and what I specialise in
- The About Me section content should be divided and grouped into "card-like" blocks

Tasks:
    Librarian Handoff: Spawn the Librarian to parse RESUME.md and populate src/data/content.ts with the relevant data - and add new types if needed. Always refer to `CODING_GUIDELINES.md`.

    Artisan Handoff: Spawn the Artisan to create a basic Layout component for the splash screen component and the cards in the About Me section. Always refer to `CODING_GUIDELINES.md`.

    Architect Handoff: Spawn the Architect to scaffold and add the new components to the actual website. Always refer to `CODING_GUIDELINES.md`.

    Auditor Handoff: Spawn the Auditor and allow it to perform its assigned duties on the newly changed files.

### 4. Address Pending Tasks

Act as the Orchestrator, please inspect the "pending_tasks" in `manifest.json` and plan out a high level order of execution. Make to add additional tasks if necessary and ensure the sub-agents properly abides the Handoff Process if necessary to create follow-up tasks.

### 3. Proper Handoff

Can you utilise scripts/handoff.py to create a task for the Artisan (for common components) and the Architect (for the overall web app) - the task needs to address the issues you highlighted and fix them

### 2. Initial Audit

Act as The Auditor, audit the current scaffold base project for any traces of unoptimised SEO, technical debt, web vitals, or accessibility issues.

### 1. Initial Prompt

Role: Act as The Orchestrator.
Objective: Initialize the React + TypeScript + Tailwind v4.0 project scaffold.

Tasks:

    Architect Handoff: Spawn the Architect to create src/components/ui, src/data, src/types, src/pages and other necessary directories/files to create the basic scaffolding and layout.

    Librarian Handoff: Spawn the Librarian to parse RESUME.md and populate src/data/content.ts using the new types. Always refer to `CODING_GUIDELINES.md`.

    Artisan Handoff: Spawn the Artisan to create a basic Layout component using lucide-react for a navigation sidebar. Always refer to `CODING_GUIDELINES.md`.

Constraint: Do not proceed to UI placement until python scripts/handoff.py records that the Data and Types are synchronized.