# Changelog

## 1.2.1 — 2026-10-21

- Publish registry packages from the release ZIP allowlist to exclude Python test caches. Report behavior is unchanged from 1.2.0.
- 注册表改用发布 ZIP 的文件白名单，排除 Python 测试缓存。报表功能与 1.2.0 相同。

## 1.2.0 — 2026-10-21

- Show six legend rows per ring card, with internal scrolling and edge fades.
- Add direct view buttons, rounded row feedback, accessible chart tooltips and labeled, horizontally scrollable bars.
- Handle preview requests concurrently and close idle connections after ten seconds.
- Keep accounting calculations unchanged.

- 圆环卡片显示最多六行，超出部分内部滚动，边缘渐隐。
- 增加直接切换视图的按钮、圆角悬停反馈、支持键盘的图表提示，以及带金额标注和横向滚动的柱状图。
- 预览服务并发处理请求，十秒后关闭空闲连接。
- 核算口径不变。

## 1.1.0

- Restore the circular report layout, dark theme, title-adjacent view selector, merchant breakdown rings and original view hierarchy.
- Preserve this maintained template in the skill instructions.
- Add optional confirmed income/loan classifications and merchant grouping fields.

- 还原圆环报表、深色主题、标题旁的视图选择、商户细分圆环及各视图原有层级。
- 在 Skill 中明确保留这套维护中的模板。
- 增加可选的已确认收入／借款分类及商户归组字段。

## 1.0.0 — 2026-10-20

- Initial Agent Skill and local interactive finance report.
- English and Simplified Chinese interfaces; overview, spending, income and transfer views across daily, weekly, monthly and yearly periods.
- Normalized JSON/CSV input, transaction drill-down, confirmed personal shares, full refunds and transfer settlements.
- Memory-first loopback delivery and explicitly requested local HTML export.
- Fictional demo data, equivalent bilingual documentation and an explicit public-version checker.
- Python standard-library runtime, no report telemetry, remote assets or automatic update requests.
