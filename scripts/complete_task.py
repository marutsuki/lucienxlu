import argparse
import json
from datetime import datetime
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
MANIFEST_PATH = ROOT_DIR / "manifest.json"


def initialize_manifest():
    if not MANIFEST_PATH.exists():
        initial_data = {
            "project_name": "Portfolio-Static-Site",
            "last_updated": str(datetime.now()),
            "current_state": "Initialization",
            "active_agent": "None",
            "completed_tasks": [],
            "pending_tasks": [],
            "file_registry": [],
        }
        with MANIFEST_PATH.open("w", encoding="utf-8") as file_obj:
            json.dump(initial_data, file_obj, indent=4)


def normalize_files(files_touched):
    normalized = []
    for file_name in files_touched:
        for item in file_name.split(","):
            cleaned = item.strip()
            if cleaned:
                normalized.append(cleaned)
    return normalized


def complete_tasks(task_ids):
    initialize_manifest()
    with MANIFEST_PATH.open("r", encoding="utf-8") as file_obj:
        data = json.load(file_obj)

    timestamp = str(datetime.now())
    normalized_files = normalize_files(files_touched)

    data["last_updated"] = timestamp
    data["active_agent"] = next_agent if next_agent else "None"
    data["current_state"] = f"Waiting on {next_agent}" if next_agent else "Idle"
    data["completed_tasks"].append(
        {"agent": agent_name, "task": task_summary, "timestamp": timestamp}
    )

    for file_name in normalized_files:
        if file_name not in data["file_registry"]:
            data["file_registry"].append(file_name)

    if next_task:
        data["pending_tasks"].append(
            {
                "target_agent": next_agent if next_agent else "Unassigned",
                "task_description": next_task,
            }
        )

    with MANIFEST_PATH.open("w", encoding="utf-8") as file_obj:
        json.dump(data, file_obj, indent=4)

    next_label = next_agent if next_agent else "None"
    print(f"Handoff successful. Next up: {next_label}")


def parse_args():
    parser = argparse.ArgumentParser(description="Record an agent handoff in manifest.json.")
    parser.add_argument("--agent", required=True, help="Name of the current agent.")
    parser.add_argument(
        "--summary",
        nargs="+",
        required=True,
        help="Summary of completed work. Multi-word values are supported without quotes.",
    )
    parser.add_argument(
        "--files",
        nargs="+",
        required=True,
        help="Files created or modified. Supports space-separated and comma-separated values.",
    )
    parser.add_argument("--next", dest="next_agent", help="Agent responsible for the next step.")
    parser.add_argument(
        "--todo",
        dest="next_task",
        nargs="+",
        help="Pending task for the next agent. Multi-word values are supported without quotes.",
    )
    args = parser.parse_args()
    args.summary = " ".join(args.summary)
    if args.next_task:
        args.next_task = " ".join(args.next_task)
    return args


if __name__ == "__main__":
    args = parse_args()
    update_handoff(
        agent_name=args.agent,
        task_summary=args.summary,
        files_touched=args.files,
        next_agent=args.next_agent,
        next_task=args.next_task,
    )
