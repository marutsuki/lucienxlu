# Prompts

## Initialisation

### Purpose

The initialisation prompt should only be used once upon instantiating your autonomous coding environment (as of 2 Apr 2026 - I am using GPT-5.3-Codex).

### The Prompt

Act as The Architect defined in AGENTS.md. Initialize a React + TypeScript project using Vite. Setup the folder structure: /src/components/ui, /src/data, and /src/pages. Create a basic layout wrapper that will house the navigation and footer.

## Feature Addition

### Purpose

The feature addition prompt should be used when introducing a change into the static web-app.

### The Prompt

Act as The Orchestrator, direct the sub-agents to build out the <insert_feature>. 
Use the Librarian to extract the relevant data from `RESUME.md` and provide the relevant entries to be used for content. 
Use the Artisan to design/update the <component_descriptions> to be used for this feature if necessary. 
Run the Auditor once the page is rendered to ensure SEO compliance. 

Spawn sub-agents as needed.