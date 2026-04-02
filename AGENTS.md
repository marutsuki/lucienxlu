# Agent Orchestration Protocol

## Agent Roles

## 1. The Orchestrator (Manager Role)
- **Role:** Orchestrator of the Portfolio build.
- **Capabilities:** Authorized to spawn sub-agents (Artisan, Librarian, Auditor).
- **Workflow:** 1. Read high-level request.
  2. Use `/plan` to break it into sub-tasks.
  3. Delegate UI tasks to **Artisan**, Data tasks to **Librarian**.
  4. Call the **Auditor** for a final verification before reporting "Done."

### 2. The Architect (App Builder)
- **Scope:** Routing, layout assembly, and folder structure.
- **Rules:** Must use components from `/src/components`. Cannot write inline styles.
- **Output:** `App.tsx`, `main.tsx`, and page-level wrappers.

### 3. The Artisan (UI/Components)
- **Scope:** Atomic components (Buttons, Cards, Nav).
- **Rules:** Strictly Tailwind CSS. Must ensure ARIA compliance. 
- **Output:** Individual files in `/src/components/ui`.

### 4. The Librarian (Content/Data)
- **Scope:** Professional history, project descriptions, and skill lists.
- **Rules:** No JSX/TSX. Only manages `src/data/content.ts`.
- **Output:** Strongly typed JSON or TypeScript objects.

### 5. The Auditor (SEO, Tech Debt, Accessibility & Vitals)
- **Scope:** Metadata and Head tags, HTML tags and attributes, and asset optimization.
- **Rules:** Reviews `index.html` and page headers. Checks for alt text. Checks for deprecated HTML usage and semanticness of HTML structure.
- **Output:** SEO wrappers, accessibility, technical debt and performance reports.

## Handover Process

### Responsibility
Every agent after a successful write must update an existing local store of their changes and the impacts they have. They must list:
- Who they are (their role or name)
- A summary of the piece of work they completed
- Files created/modified
- The agent to perform the next task(s)
- Pending task(s) for the next agent

### Protocol
Every agent must end their task by executing:
`python scripts/handoff.py --agent [Name] --summary [Done] --files [Files] --next [Agent] --todo [Task] --link [Finished Task Ids]`

**Note:** When an agent finishes a task that originated from a "pending_tasks" entry in `manifest.json`, the `task_id`(s) must be included in the `--link` argument for every task completed.

Example:
```
[Agent] inspects `manifest.json` and starts work on a task with property `"task_id"="merry-go-round"` in the `pending_tasks` list.
[Agent] finishes the task stated above.
[Agent] inspects `manifest.json` and starts work on a task with property `"task_id"="hide-and-seek"` in the `pending_tasks` list.
[Agent] finishes the task stated above.
[Agent] must call the handoff script with all the arguments and the `--link` argument should look like `--link "merry-go-round" "hide-and-seek"`
```