# Prompt History

## 2 Apr 2026

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