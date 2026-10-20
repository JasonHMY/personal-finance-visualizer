# Personal Finance Visualizer

[English](README.md) · [Agent Skill](skills/personal-finance-visualizer/SKILL.md) · [输入格式](skills/personal-finance-visualizer/references/schema.md) · [ClawHub](https://clawhub.ai/jasonhmy/skills/personal-finance-visualizer)

把用户提供的财务记录做成本地交互报表。按天、周、月或年查看消费、收入、转账和资金变动，再打开每项金额对应的交易。

![使用虚构演示数据的英文消费视图](demo/expenses-en.jpg)

## 支持什么

- 四个视图：收支总览、消费、收入和转账。
- 支持天、周、月和年，期间裁剪到已确认的数据范围；每周从周一开始。
- 支持英文和简体中文控件，可查看交易明细，说明默认简洁并可展开。
- 分开计算按银行入账日统计的资金变动、个人消费，以及已确认的全额退款和费用分摊。
- 接受规范化 JSON/CSV，默认在内存中运行；用户要求保存时可导出独立的本地 HTML。
- 运行时只需 Python 标准库。报表使用原生 HTML、CSS 和 JavaScript。

本项目不连接银行、不索要凭据，也不转账或管理订阅。原始银行 CSV 需要先明确字段映射；PDF 能否提取取决于 Agent 可用的工具，使用前必须核对。本项目不包含通用银行账单解析器。

内置模板固定使用圆环报表布局：三张主要消费圆环、三张分组圆环、商户细分、趋势图和折叠明细。视图下拉框位于标题旁，收入、转账和总览分别保留各自的布局。默认深色，可在本地切换浅色。Skill 直接使用这套模板，不在每次请求时重新设计界面。

## 安装为 Agent Skill

报表需要 **Python 3.10+** 和现代浏览器。可选的 [`skills` 安装工具](https://github.com/vercel-labs/skills)目前需要 **Node.js 22.20+**；运行报表不需要 Node。

```bash
DISABLE_TELEMETRY=1 npx skills add JasonHMY/personal-finance-visualizer --skill personal-finance-visualizer --global
```

按提示选择你的 Agent。`DISABLE_TELEMETRY=1` 会关闭安装工具的遥测和安全审计请求；安装仍会通过网络下载公开代码。

手动安装时，克隆或下载本仓库，再把 `skills/personal-finance-visualizer/` 复制或软链接到 Agent 支持的 Skill 目录。保留其中的脚本、参考资料和资源文件。Agent 需要支持读取 Agent Skills 并在本地运行 Python。

示例请求：

> 用 personal-finance-visualizer 把这些已授权记录做成英文报表，查看每月消费，报表保留在内存中。

> 用 personal-finance-visualizer 把我提供的记录做成中文报表，看看每周花销。先在内存里展示，不保存文件。

除非你指定其他语言，Agent 会按请求使用的语言回复，并选择报表的初始界面语言。

## 试用虚构演示

在仓库根目录运行：

```bash
python3 skills/personal-finance-visualizer/scripts/report.py --demo --language en
python3 skills/personal-finance-visualizer/scripts/report.py --demo --language zh-CN
```

命令会输出一个带随机令牌的本机回环地址。在浏览器中打开，查看期间保持进程运行；结束后按 Ctrl+C 停止。该模式不生成报表文件。

![使用虚构演示数据的中文消费视图](demo/expenses-zh.jpg)

所有演示交易均为虚构。生成器在 [`scripts/demo_data.py`](skills/personal-finance-visualizer/scripts/demo_data.py)，可复现样例在 [`demo/sample.json`](demo/sample.json)。截图只使用这份虚构数据。

## 使用自己的规范化记录

```bash
python3 skills/personal-finance-visualizer/scripts/report.py --input /local/normalized.json --language en
python3 skills/personal-finance-visualizer/scripts/report.py --input /local/normalized.csv --currency USD --start 2024-01-01 --end 2024-03-31 --language zh-CN
```

`--input -` 从标准输入接受 JSON，Agent 可以直接传入规范化记录，不生成中间文件。使用已安装的副本时，把示例中的仓库相对脚本路径换成安装后的 Skill 路径。

字段、金额正负规则、CSV 表头、退款配对和转账结算见[输入格式](skills/personal-finance-visualizer/references/schema.md)。提取和核对方法见[工作流](skills/personal-finance-visualizer/references/workflow.md)。版本 1 每份报表只使用一种货币，支持金额保留两位小数的货币，不做汇率换算。

生成图表前先核对覆盖期、重复记录和银行合计。未明确用途的转入先保留为转账。个人分摊比例必须已确认。已确认的全额退款会在个人消费中同时抵消购买和退款，跨月也如此；资金变动仍保留银行实际入账日。部分退款和未配对退款单独保留。已确认的借还或报销结算会调整对应的对外转账；仅凭姓名、金额或日期相似不能确认配对。

明确需要保存报表时运行：

```bash
python3 skills/personal-finance-visualizer/scripts/report.py --input /local/normalized.json --language en --export /absolute/local/report.html
```

HTML 含交易明细，请保存到本仓库之外、已获授权的本地位置。不要把真实记录、导出文件或私密截图放进公开 Issue、示例或提交。

## 隐私与边界

渲染器和本地报表不含遥测、远程字体或脚本，也不含分析服务或外部请求。默认从进程内存提供报表，通过 `127.0.0.1` 上带令牌的地址访问，不自动生成报表文件、财务日志、截图或记忆回写。请保管好地址，查看结束后停止服务。

这不代表全程离线，也不保证全部副本都已清除。Agent 宿主可能按其配置把数据发送给模型提供方，并保留提示词、工具调用或提供的文件。浏览器可能保留历史和缓存；明确导出的 HTML 会保留到你删除为止。只使用你已授权的记录和工具。Skill 不发布或上传个人报表，处理财务记录期间也不会检查更新。

报表只反映已提供的账户和覆盖范围，不能据此确定完整资产、负债或净资产。不确定的分类和数据缺口应保留在报表说明中。

## 检查和安装更新

需要时手动检查公开发布版本：

```bash
python3 skills/personal-finance-visualizer/scripts/check_update.py
```

这个独立命令只向 GitHub 查询最新公开版本，不读取财务文件，也不安装更改。通过可选安装工具安装的 Skill，可使用其官方命令：

```bash
DISABLE_TELEMETRY=1 npx skills check
DISABLE_TELEMETRY=1 npx skills update personal-finance-visualizer
```

这些命令会明确发起网络操作。当前环境要求见[安装工具官方文档](https://github.com/vercel-labs/skills)。手动安装的用户可获取选定版本，再替换已安装的 Skill 目录。私密输入应保存在该目录之外。

## 开发与发布

Python 3.10+ 用于 CLI 和 Python 测试；Node.js 18+ 用于计算引擎测试。应用无需构建。

```bash
node --test tests/engine.test.cjs
python3 -m unittest discover -s tests -p 'test_*.py'
```

开发、截图和问题反馈只使用虚构样例。浏览器渲染与 Node 测试共用同一个计算模块。[发布说明](docs/publishing.md)记录发布流程和注册表状态。GitHub 分发与 ClawHub 上架是两件独立的事；本 README 不表示注册表发布已经完成。

## 许可

[MIT No Attribution（MIT-0）](LICENSE)。
