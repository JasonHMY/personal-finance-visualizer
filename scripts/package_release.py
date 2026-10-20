#!/usr/bin/env python3
"""Package only the explicit public skill files; never discover user inputs."""
import argparse
from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parents[1]
SKILL = ROOT / "skills/personal-finance-visualizer"
FILES = ["SKILL.md", "LICENSE", "agents/openai.yaml", "references/schema.md",
         "references/workflow.md", "assets/report.html", "assets/report.css",
         "assets/app.js", "assets/engine.js", "scripts/report.py",
         "scripts/demo_data.py", "scripts/check_update.py"]


def package(destination):
    with zipfile.ZipFile(destination,"x",compression=zipfile.ZIP_DEFLATED) as archive:
        for name in FILES:
            path=SKILL/name
            if path.is_symlink() or not path.resolve().is_relative_to(SKILL.resolve()):
                raise ValueError("Package entries must be ordinary public skill files")
            content=path.read_bytes()
            if b"/Users/" in content or b"/home/" in content:
                raise ValueError("A local absolute home path must not enter the public package")
            archive.writestr("personal-finance-visualizer/"+name,content)
    return len(FILES)

if __name__=="__main__":
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument("output",help="New ZIP path; never overwrites an existing file")
    args=parser.parse_args()
    print(f"Packaged {package(args.output)} public files.")
