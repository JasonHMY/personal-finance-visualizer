# Publishing and updates / 发布与更新

The canonical source is [JasonHMY/personal-finance-visualizer](https://github.com/JasonHMY/personal-finance-visualizer). Release tags use semantic versions (`v1.0.0`). The installed skill declares its version in `SKILL.md`; `check_update.py` compares that version with GitHub's latest stable release only when explicitly run. It sends no financial data and never updates code automatically.

正式源码在 [JasonHMY/personal-finance-visualizer](https://github.com/JasonHMY/personal-finance-visualizer)。发布标签采用语义化版本号（如 `v1.0.0`）。已安装 Skill 在 `SKILL.md` 声明版本；只有明确运行 `check_update.py` 时，才与 GitHub 最新稳定版比较。检查不发送财务数据，也不自动更新代码。

## Release / 发布

### Privacy review before every upload / 每次上传前的隐私审核

Publish only reusable functionality, necessary documentation and examples invented from scratch. This boundary covers the publisher and every Skill user. Never include personal identity or contact information, account identifiers, credentials, real records or transaction excerpts, private URLs, saved personal settings, reports, logs, caches, or screenshots that expose them. Renaming a real record does not make it fictional.

只发布通用功能、必要说明和从零构造的虚构示例。保护范围包括发布者和所有Skill使用者；不得包含个人身份与联系方式、账户标识、凭据、真实记录或交易摘录、私人网址、个人设置、报告、日志、缓存及相关截图。真实记录改名后仍不能作为虚构示例。

Review the exact outgoing Git diff/file list, ZIP entries, catalog description and attachments. Trace fixtures to fictional generators and visually inspect public images, including browser chrome and metadata. Check text for accidental credentials, identifying paths and private links, but do not treat pattern scans or a clean allowlist as proof of absence. Read only the approved public materials; do not collect private records for this review. Keep required public license attribution.

逐次审核实际发出的Git差异和文件清单、ZIP内容、平台描述与附件。核对样例来自虚构生成器，查看截图中的正文、浏览器界面和元数据；检查文本中误带的凭据、识别性路径和私人链接。扫描和白名单只是辅助，不能代替内容审核。仅检查获准的公开材料，不为审核额外收集私人记录；保留必要的公开许可署名。

If a file's provenance or contents are uncertain, remove it or resolve the uncertainty before upload. Save the exact reviewed file list and artifact hashes in local release evidence outside the public repository. Any subsequent change requires a review of the affected files. Compare uploaded artifacts with that reviewed version before reporting completion.

来源或内容有疑点的文件，先移除或查明，再上传。把审核文件清单和产物哈希保存在公开仓库之外的本机发布记录中；后续内容变化后重新检查受影响文件。上传后比对已审版本，再报告完成。

1. Change the version in `SKILL.md` metadata and `scripts/check_update.py`, and describe changes in `CHANGELOG.md`. Keep the two README files equivalent.
2. Run the Python and Node tests, inspect the UI with fictional data, and review the exact public file list. No personal inputs, reports, captures, logs or local paths may be committed.
3. Commit reviewed source, tag the release and build the ZIP using the explicit package allowlist. Attach the ZIP to a GitHub release. Verify the remote files and release before reporting success.
4. Extract the allowlisted release ZIP into a clean staging directory and publish that directory to ClawHub if authenticated. Never publish the working directory: Python tests can create bytecode caches. Use an explicit version and inspect the registry response and moderation state. GitHub release availability does not imply a registry listing is live.

1. 修改 `SKILL.md` 元数据及 `scripts/check_update.py` 中的版本，在 `CHANGELOG.md` 记录变更，并保持两版 README 内容一致。
2. 运行 Python 和 Node 测试，用虚构数据检查界面，并审阅确切的公开文件清单。不得提交个人输入、报告、截图、日志或本地路径。
3. 提交已审阅源码、创建版本标签，再按明确的文件白名单制作 ZIP 并附到 GitHub Release。回读远端文件和发布记录后再报告成功。
4. 已登录 ClawHub 时，先将白名单 ZIP 解压到干净暂存目录，再将该目录按明确版本发布；不要直接提交可能包含测试缓存的工作目录，检查返回结果和审核状态。GitHub 已发布不代表注册表已经上架。

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

## ClawHub submission / ClawHub 提交记录

On 20 October 2026, ClawHub accepted version `1.0.0` with the same 12 files as the GitHub release package. Publication is pending the registry’s scan and review; the listing is currently hidden from the public catalog. Check the [listing](https://clawhub.ai/jasonhmy/skills/personal-finance-visualizer) for its current availability. The GitHub release remains available.

2026 年 10 月 20 日，ClawHub 已接收 `1.0.0`，文件与 GitHub 发布包中的 12 个文件一致。目前等待平台扫描和审核，尚未在公开目录展示。当前可用状态请查看[发布页](https://clawhub.ai/jasonhmy/skills/personal-finance-visualizer)；GitHub 发布版仍可下载。

Version `1.1.0` restores the maintained circular report interface and is available on GitHub. ClawHub accepted the same 12-file package on 20 October 2026; its publication is still pending registry review.

`1.1.0` 已还原固定维护的圆环报表界面，并在 GitHub 发布。ClawHub 于 2026 年 10 月 20 日接收了同一份 12 文件发布包，目前仍等待平台审核。

## Other distribution channels / 其他分发渠道

See the [distribution status](distribution.md) for verified public listings, review queues and unresolved platform requirements.

已核验的公开页面、审核队列及各平台尚缺条件，见[分发状态清单](distribution.zh-CN.md)。
