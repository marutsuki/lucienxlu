# Prompts

## Initialisation

### Purpose

The initialisation prompt should only be used once upon instantiating your autonomous coding environment (as of 2 Apr 2026 - I am using GPT-5.3-Codex).

### The Prompt

Role: Act as The Orchestrator.
Objective: Initialize the React + TypeScript + Tailwind v4.0 project scaffold.

Tasks:

    Architect Handoff: Spawn the Architect to create src/components/ui, src/data, src/types, src/pages and other necessary directories/files to create the basic scaffolding and layout.

    Librarian Handoff: Spawn the Librarian to parse RESUME.md and populate src/data/content.ts using the new types. Always refer to `CODING_GUIDELINES.md`.

    Artisan Handoff: Spawn the Artisan to create a basic Layout component using lucide-react for a navigation sidebar. Always refer to `CODING_GUIDELINES.md`.

Constraint: Do not proceed to UI placement until python scripts/handoff.py records that the Data and Types are synchronized.

## Feature Addition

### Purpose

The feature addition prompt should be used when introducing a change into the static web-app.

### The Prompt

Act as The Orchestrator, direct the sub-agents to build out the <insert_feature>. 
Use the Librarian to extract the relevant data from `RESUME.md` and provide the relevant entries to be used for content. 
Use the Artisan to design/update the <component_descriptions> to be used for this feature if necessary. 
Run the Auditor once the page is rendered to ensure SEO compliance. 

Spawn sub-agents as needed.