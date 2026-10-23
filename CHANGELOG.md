# Changelog

## 1.4.0 — 2026-10-23

- Keep cards visible while rings, center totals and identity-matched list amounts transition continuously. Stagger list entries; refine dialogs, disclosures, menus and tooltips with reduced-motion support.
- Add optional merchantDisplayNames for display and search only. Preserve original merchants, descriptions, grouping and accounting.
- 卡片保持可见，圆环、中心总额和按身份对应的列表金额连续过渡；列表依次渐显，完善弹窗、折叠项、菜单及提示，支持减少动态效果。
- 增加可选 merchantDisplayNames，仅用于简称展示与搜索；保留原商户、描述、分组及核算。

## 1.3.0 — 2026-10-22

- Add searchable, filterable and sortable transaction details with filtered totals.
- Add area/bar trends, a coverage-aware date picker and consistent, interruptible transitions.
- Allow cards to be reordered across sections within each view, with keyboard support and local layout persistence.
- Keep everyday merchant cards; place secondary tables and notes inside collapsed More information. Render collapsed details only when opened.
- Ask users to clarify ambiguous transactions before completing affected charts; reuse confirmed answers.
- Keep the accounting engine unchanged and preserve the bundled EasyUI MIT notice.

- 明细支持搜索、分类与账户筛选、排序及筛选合计。
- 增加面积／柱状趋势图、按资料覆盖范围选择日期的弹出控件，以及一致、可中断的切换动效。
- 同一视图的卡片可跨区域重排，支持键盘操作并在本地保存布局。
- 保留日常商户卡片，将附加表格与说明收入默认折叠的“更多信息”；明细展开时才生成。
- 不明确的交易先向用户确认，再完成受影响的图表；复用已有回答。
- 核算引擎不变，保留内置 EasyUI MIT 声明。

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
