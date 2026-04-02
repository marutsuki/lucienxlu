import json
import os
from datetime import datetime

MANIFEST_PATH = "manifest.json"

def initialize_manifest():
    if not os.path.exists(MANIFEST_PATH):
        initial_data = {
            "project_name": "Portfolio-Static-Site",
            "last_updated": str(datetime.now()),
            "current_state": "Initialization",
            "active_agent": "None",
            "completed_tasks": [],
            "pending_tasks": [],
            "file_registry": []
        }
        with open(MANIFEST_PATH, 'w') as f:
            json.dump(initial_data, f, indent=4)

def update_handoff(agent_name, task_summary, files_touched, next_agent=None, next_task=None):
    with open(MANIFEST_PATH, 'r') as f:
        data = json.load(f)

    # Update global state
    data["last_updated"] = str(datetime.now())
    data["active_agent"] = next_agent if next_agent else "None"
    
    # Log the work done
    data["completed_tasks"].append({
        "agent": agent_name,
        "task": task_summary,
        "timestamp": str(datetime.now())
    })

    # Update file registry (unique files only)
    for file in files_touched:
        if file not in data["file_registry"]:
            data["file_registry"].append(file)

    # Set the queue for the next agent
    if next_task:
        data["pending_tasks"].append({
            "target_agent": next_agent,
            "task_description": next_task
        })

    with open(MANIFEST_PATH, 'w') as f:
        json.dump(data, f, indent=4)
    
    print(f"✅ Handoff successful. Next up: {next_agent}")

# Example usage for your Codex agents:
if __name__ == "__main__":
    initialize_manifest()
    # Example: update_handoff("Librarian", "Updated content.ts with experience", ["src/data/content.ts"], "Architect", "Refresh Project Cards")