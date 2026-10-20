# Publishing and updates / 发布与更新

The canonical source is [JasonHMY/personal-finance-visualizer](https://github.com/JasonHMY/personal-finance-visualizer). Release tags use semantic versions (`v1.0.0`). The installed skill declares its version in `SKILL.md`; `check_update.py` compares that version with GitHub's latest stable release only when explicitly run. It sends no financial data and never updates code automatically.

正式源码在 [JasonHMY/personal-finance-visualizer](https://github.com/JasonHMY/personal-finance-visualizer)。发布标签采用语义化版本号（如 `v1.0.0`）。已安装 Skill 在 `SKILL.md` 声明版本；只有明确运行 `check_update.py` 时，才与 GitHub 最新稳定版比较。检查不发送财务数据，也不自动更新代码。

## Release / 发布

1. Change the version in `SKILL.md` metadata and `scripts/check_update.py`, and describe changes in `CHANGELOG.md`. Keep the two README files equivalent.
2. Run the Python and Node tests, inspect the UI with fictional data, and review the exact public file list. No personal inputs, reports, captures, logs or local paths may be committed.
3. Commit reviewed source, tag the release and build the ZIP using the explicit package allowlist. Attach the ZIP to a GitHub release. Verify the remote files and release before reporting success.
4. Publish the same skill directory to ClawHub if authenticated. Use an explicit version and inspect the registry response and moderation state. GitHub release availability does not imply a registry listing is live.

1. 修改 `SKILL.md` 元数据及 `scripts/check_update.py` 中的版本，在 `CHANGELOG.md` 记录变更，并保持两版 README 内容一致。
2. 运行 Python 和 Node 测试，用虚构数据检查界面，并审阅确切的公开文件清单。不得提交个人输入、报告、截图、日志或本地路径。
3. 提交已审阅源码、创建版本标签，再按明确的文件白名单制作 ZIP 并附到 GitHub Release。回读远端文件和发布记录后再报告成功。
4. 已登录 ClawHub 时，把同一 Skill 目录按明确版本发布，检查返回结果和审核状态。GitHub 已发布不代表注册表已经上架。

```bash
python3 scripts/package_release.py /tmp/personal-finance-visualizer-1.0.0.zip
```

## Registries / 注册表

- **skills.sh:** the [official CLI](https://github.com/vercel-labs/skills) installs directly from a public GitHub source and offers `check` and `update`. Installation support and leaderboard indexing are separate. Keep `DISABLE_TELEMETRY=1` for the documented privacy-first install; do not enable telemetry just to manufacture a listing or install count.
- **ClawHub:** [official publishing documentation](https://docs.openclaw.ai/clawhub/quickstart) uses `clawhub skill publish`. Its [CLI contract](https://docs.openclaw.ai/clawhub/cli) publishes skills under MIT-0, which this project already uses. Login and registry moderation may affect availability. Never bulk-sync unrelated local skills.
- Other catalogs can reference this public GitHub repository. No unverified catalog submission is claimed.

- **skills.sh：**[官方 CLI](https://github.com/vercel-labs/skills)可直接从公开 GitHub 来源安装，并提供 `check` 和 `update`。支持安装与进入排行榜是两个状态。文档中的安装命令保留 `DISABLE_TELEMETRY=1`，不为制造上榜或安装量而开启遥测。
- **ClawHub：**[官方发布文档](https://docs.openclaw.ai/clawhub/quickstart)使用 `clawhub skill publish`。[CLI 合同](https://docs.openclaw.ai/clawhub/cli)规定 Skill 以 MIT-0 发布，与本项目许可一致。登录和平台审核可能影响可用性，不批量同步无关的本地 Skill。
- 其他目录可以引用本项目的公开 GitHub 仓库。不把未经核验的提交说成已经完成。
