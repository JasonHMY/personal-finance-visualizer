# 分发渠道与实际状态

## 2026-10-22 更新：v1.3.0

- [GitHub v1.3.0](https://github.com/JasonHMY/personal-finance-visualizer/releases/tag/v1.3.0) 已公开，提交 `ecc3d13`。用户级安装已同步，12 个文件逐字节核对一致；原安装已留本机备份。
- 新版加入明细搜索、筛选、排序及筛选合计，面积／柱状趋势图、日期选择器、各视图卡片布局保存，以及默认收起的“更多信息”。不明确的交易先向用户确认，再完成受影响图表。双语说明和 10 张纯虚构演示截图已更新，核算引擎未改变。
- 6 项 Python 测试、12 项核算测试、JavaScript 语法和 Skill 格式检查通过。沿用交接包的交互验证，并回读四个视图、明细、折叠区、中英文、明暗主题及窄屏截图。发布包保留 EasyUI MIT 声明。
- 养虾池下载链接及简介已更新到 v1.3.0，下载 ZIP 与 GitHub 发布包逐字节一致；平台独立 version 字段仍不能据此视为已更新。
- ClawHub 已接收干净的 12 文件 v1.3.0 包，状态为 `pending-publication`；提交后公开 latest 仍为 v1.2.1，不重复上传。
- Skillstore 已受理固定 v1.3.0 标签，[新回执](https://skillstore.io/submissions/17a53e88-5ec9-45c4-a40a-da24eade9b7c)为 Processing。提交前无本项目待审 PR；尚未确认新版公开可安装。
- OpenAgentSkill 本批提交返回 HTTP 500，没有成功回执。随后在 Ego Lite 查询旧回执仍为 HTTP 503，目录页面明确显示暂不可用。不能确认新版是否受理，服务恢复后先查已有记录再决定补交。
- Skillz.directory 公开条目仍指向 GitHub，安装模板修复 [PR #4](https://github.com/keyman500/skills/pull/4) 仍未合并，Vercel 仍需维护者授权。其他目录的历史审核和账号条件见下方记录，不以本次 GitHub 发布代替它们的上线核验。
- 复用原每日检查任务，目标更新为 v1.3.0，并继续包含 myagents 原申请及 Skillz.directory 的线上安装说明验收。没有新建账号、付费、发送宣传消息或开启额外任务。

## 2026-10-22 后续渠道核验

- ClawHub 和 Skillstore 当前均已公开 v1.2.1。
- [Skillz.directory](https://www.skillz.directory/skills/personal-finance-visualizer) 已公开，来源指向本项目 GitHub。平台通用安装模板只说明复制 SKILL.md，缺少必需脚本和资源；应按项目 README 安装完整 Skill 目录。页面没有作者修改入口，未重复提交。已定位为平台公共安装模板问题，并提交 [PR #4](https://github.com/keyman500/skills/pull/4)，改为复制完整 Skill 目录及支持文件；线上修复仍待维护者合并和部署。
- myagents 精确名称搜索没有结果。提交页明确说明人工审核通常需要几天；原提交距今两天，没有可见的拒绝理由、补件请求或状态修改入口，继续等待原申请，不重复提交。
- OpenAgentSkill 在 Ego Lite 内查询原回执仍返回 503 和 Unable to read submission status；当前无法确认审核进展，不据空队列判断申请丢失。
- skills.sh 官方说明按真实 CLI 安装遥测自动收录，不是人工审核。已关闭遥测运行 --list，成功发现本项目唯一 Skill，源码结构可识别；不通过虚构安装量或开启遥测制造收录。

## 2026-10-22 每日检查

后续已用 Ego Lite 实际核验：OpenAgentSkill 搜索页面也显示最新信息暂不可用、目录无法加载，因此无法确认当前审核结果。Skillstore 提交页为 Processing，工作流 39690978028 已成功抓取 v1.2.1 对应提交，正在处理。ClawHub 发布者版本列表可见 1.2.1，但默认安装和公开审计仍为 1.1.0，新版未确认公开可安装；未重复上传或改动审核中的文件。每日检查已加入接口故障时直接使用 Ego Lite 的兜底流程。

GitHub 最新稳定版仍为 v1.2.1。Skillstore 目录为 v1.2.0，旧更新已合并且无待审 PR，因此已提交 v1.2.1 固定标签，当前[新回执](https://skillstore.io/submissions/6e32bebd-8f0e-4dc6-b732-24f020b25f83)为 Pending。ClawHub 公开最新版仍为 v1.1.0，不重复提交已有待审包。OpenAgentSkill 状态接口本次两次返回 503，未能确认新进展。养虾池下载链接仍指向 v1.2.1，平台版本字段仍为旧值。本批未全部完成，每日检查继续。

## 2026-10-21 更新：v1.2.1

- GitHub 已发布 v1.2.1，用户级安装已同步。养虾池的下载地址已改为该版本的 12 文件 ZIP，下载内容逐字节核对一致；平台 version 字段仍显示旧值，简介已标明 v1.2.1。
- 新版包括六行滚动图例、直接切换视图的按钮、图表金额／占比／笔数提示、柱顶金额和并发预览服务。6 项 Python 测试与 12 项核算测试通过，Skill 格式检查通过，核算引擎未改动。
- ClawHub 已接收 v1.2.1，回执为 12 个文件、pending-publication；公开 latest 仍为 1.1.0。此前 1.2.0 的提交含两个 Python 测试缓存，已由干净的 1.2.1 包替代为推荐版本，不能声称旧待审版本已撤回。
- Skillstore 的旧 PR #3852 已合并，目录副本仍为 1.1.0；[新版提交](https://skillstore.io/submissions/927eb347-ad7f-4c70-b110-a0ecac73f3e7)已受理，等待处理，尚未确认最终抓取版本。
- OpenAgentSkill 的旧提交状态已变为 listed；新版另按版本源码提交。提交受理不等于新版已公开。
- 其他渠道仍沿下方 10 月 20 日记录：GitHub 来源已更新，不能据此认定平台副本或索引已刷新。账号、身份验证、费用及人工审核条件尚未补齐；没有重复提交仍在等待的旧申请。

以下为 2026-10-20 的渠道基线，旧版本和待审状态只作历史记录。

[English](distribution.md) · [项目首页](../README.zh-CN.md) · [版本发布流程](publishing.md)

核查日期：2026 年 10 月 20 日。本轮核查了 26 个相关渠道，包括 Skills 注册表、目录、自动索引站和官方插件目录；不保证穷尽全网。

本次新增处理了 5 个渠道：养虾池已公开，Skillstore、OpenAgentSkill、myagents 和 Skillz.directory 已受理、待审核。ClawHub 是此前已提交、目前仍待审的渠道。提交成功、社区队列可见和正式上架分别记录。

| 平台／官方依据 | 接收方式 | 本轮结果 |
| --- | --- | --- |
| [GitHub](https://github.com/JasonHMY/personal-finance-visualizer) | 仓库及 Release | 已公开：v1.1.0 和图文说明。 |
| [养虾池](https://www.agent-skills.net.cn/api/docs) | Agent 注册及发布 API | [已公开上架](https://www.agent-skills.net.cn/skills/432)，下载包内 12 个 Skill 文件与 v1.1.0 一致。 |
| [Skillstore](https://skillstore.io/submit) | 匿名提交仓库或目录 | 已生成[审核 PR #3852](https://github.com/aiskillstore/marketplace/pull/3852)，三项检查通过，等待最终审核。 |
| [OpenAgentSkill](https://www.openagentskill.com/api-docs) | 校验 API 及提交 API | 已受理，在[社区队列](https://www.openagentskill.com/skills/new)可见；标记需要审核，未进入正式目录。 |
| [myagents](https://www.myagents.center/submit) | 免费匿名网页表单 | 已提交审核，保存名称为 personal-finance-visualizer，人工批准后才公开。 |
| [ClawHub](https://docs.openclaw.ai/clawhub/quickstart) | 登录后通过 CLI 发布版本包 | 此前提交的 v1.1.0 仍待发布，接口尚未返回公开的最新版本。 |
| [SkillsMP](https://skillsmp.com/docs/faq) | GitHub 自动索引 | 已添加官方要求的 claude-skills topic；尚未确认收录。官方暂未开放手动提交系统。 |
| [skills.sh](https://www.skills.sh/docs/faq) | GitHub 安装及安装统计驱动的发现 | 已验证可以安装；没有独立发布 API，未确认进入排行榜，未制造安装量。 |
| [agentskill.sh](https://agentskill.sh/submit) | GitHub 导入表单 | 已尝试一次，平台提示提交过多、一小时后重试；本次未受理。 |
| [OmniSkill Registry](https://omniskill.online/) | 仓库验证及提交表单 | 已尝试一次，返回网络／JSON 解析错误，没有成功回执。 |
| [Skillz.directory](https://www.skillz.directory/submit) | 仓库表单，官方源码含提交 API | 已通过网页表单受理，成功页确认等待审核，尚未公开上架。 |
| [SkillHub.fyi](https://docs.skillhub.fyi/docs/cli/publish) | 目录打包、公开注册表及 CLI | 当前浏览器未登录；需要账号及注册表发布权限，公开测试期免费。 |
| [腾讯 SkillHub](https://skillhub.cn/ai/release.md) | 网页、CLI 或 Agent 发布 | 需要手机号验证、人脸实名认证及发布 Token；身份验证须本人完成。 |
| [讯飞 Astron SkillHub](https://iflytek.github.io/skillhub/guide/skill-publish.html) | CLI／REST 技能包发布 | 需要 Token 和命名空间权限；本轮未核验生产账号申请资格。 |
| [SkillsBot](https://www.skillsbot.cn/help) | 注册开发者后创建或上传 | 注册要求手机号、邮箱及密码；未核实公开发布 API。 |
| [MyLevis Hub](https://mylevis.com/docs/skill-publishing/) | 导入技能包后提交市场审核 | 需要账号及创作协议；个人导入不等于公开上架。 |
| [Agensi](https://www.agensi.io/sell) | 完整 ZIP、商品说明及审核 | 提交入口跳转登录；未核实发布 API，免费条目是否需要收款设置仍不确定。 |
| [SkillsHub.Network](https://skillshub.network/docs) | 账号登录后上传文件发布 | 作者文档要求 Stripe Connect，免费 Skill 是否可免收款开户尚未确认。 |
| [OpenAI Plugins Directory](https://developers.openai.com/plugins/deploy/submission) | 纯 Skills 插件 ZIP 及开发者后台 | 需要插件打包、已验证开发者身份和审核；未把普通 Skill 直接提交为插件。 |
| [Claude plugin directory](https://claude.com/resources/articles/build-plugins-for-claude) | GitHub 插件包及提审后台 | 官方后台面向付费 Claude 计划，需要插件打包及审核；本次未提交。 |
| [Skills 中文网](https://cnskills.com/llms.txt) | GitHub 精选聚合及镜像 | 未核实作者提交入口，不宣称已经收录。 |
| [Agent Skills Hub](https://agentskillshub.top/) | GitHub 自动发现 | 官网说明定期索引；未找到作者发布 API，未确认收录。 |
| [SkillMD.ai](https://skillmd.ai/terms/) | GitHub／ZIP 提交，需要邮箱 | 条款禁止未经授权的自动工具访问；未找到授权发布 API，因此未自动提交。 |
| [Agent Skills Market](https://agent-skills.market/submit) | 表单／API 及付费审核 | 收取 25 美元上架费；未授权或执行付款。 |
| [agent-skills.shop](https://www.agent-skills.shop/upload) | 单个 SKILL.md 上传及验证码 | 只上传单文件会缺少本项目必需代码和资源，因此未提交；另需邮箱及验证码。 |
| [TheSkillMD](https://theskillmd.com/submit/) | 邮件提交 | 没有自助 API 或表单；未发送邮件，需要具体邮件的发送授权。 |

## 核验边界

- 提交的文件包只含公开项目文件及说明；已向 Skillz.directory 私下提供发布者批准的联系邮箱，用于审核通知。没有发送真实账单或财务记录。
- 养虾池下载的是公开仓库源码压缩包；已逐一比对其中 12 个 Skill 文件与 v1.1.0 一致。它的 API 版本字段仍显示默认 `1.0.0`，更新该字段的请求未改变返回值，因此已在公开简介明确标注真实源码版本及 GitHub 安装入口。安装以项目 README 为准，不把平台生成的命令当作已验证路径。
- Skillstore 的 PR 包含完整 Skill 目录和平台生成的报告；三项检查通过，但维护者尚未合并。OpenAgentSkill 将含脚本的包转入人工审核，当前不在正式目录中。myagents 明确返回已保存、等待人工审核。
- API Key 和带私密 token 的查询回执保存在发布者本机，未提交到此仓库。没有启用新定时任务、Webhook、自动评分或虚构安装统计。

## 后续如何继续

先沿已有回执检查审核结果，避免重复提交。平台限流解除后再重试 agentskill.sh；需要邮箱、账号、身份验证、协议或费用的渠道，先补齐对应条件。后续版本先更新 GitHub，再按各平台的版本和审核流程分发；GitHub 更新不代表其他平台已同步。

AgentSkills.io 是格式规范入口，不是作者上架商店。同名 SkillHub 服务属于不同运营方，登录凭据和 CLI 不能混用。
