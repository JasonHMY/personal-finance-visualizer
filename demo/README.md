# Fictional demo / 虚构演示

All records, names, dates and amounts are invented. Nothing is sampled, anonymized or derived from a person's transactions. `sample.json` is reproducible with:

演示中的全部记录、名称、日期和金额均为虚构，没有抽取、匿名化或改写任何人的真实交易。可用以下命令复现 `sample.json`：

```bash
python3 skills/personal-finance-visualizer/scripts/demo_data.py > demo/sample.json
```

The phone screenshot is from 1.4.1; the nine desktop screenshots are from 1.3.0. All use only that fixture. They show the actual UI, including expanded detail and note states. The language switch translates controls; original merchant descriptions and categories stay in the supplied language, apart from the demo's built-in example labels.

手机截图来自1.4.1版，其余九张桌面截图来自1.3.0版，均只使用上述样例。它们展示实际界面，包括展开的明细与说明。语言切换会翻译控件；除演示内置的示例标签外，原始商户说明和分类保留输入语言。

| File / 文件 | View / 内容 |
| --- | --- |
| `expenses-en.jpg` | English spending / 英文消费 |
| `expenses-zh.jpg` | Chinese spending / 中文消费 |
| `merchants-en.jpg` | Merchant breakdown and timeline / 商户细分与趋势 |
| `transaction-details-en.jpg` | Fictional merchant transactions / 虚构商户交易明细 |
| `income-en.jpg` | Income and sources / 收入及来源 |
| `transfers-en.jpg` | Transfers and confirmed loan metrics / 转账及已确认借款指标 |
| `overview.jpg` | Cash movement / 资金总览 |
| `notes-en.jpg` | Expanded explanations / 展开的说明 |
| `expenses-light-en.jpg` | Light theme / 浅色主题 |
| `mobile-en.jpg` | Narrow-screen layout / 窄屏布局 |

## Daily allowance / 每日可花

`budget-en.jpg`, `budget-zh.jpg` and `budget-mobile.jpg` show v1.6.0 using only `budget_demo.py`. It creates fictional records relative to the current UTC date and never reads personal data. Settings and amounts are examples, not recommended defaults. Screenshots are dated snapshots. The fixture includes an invented pending purchase for today, treated as confirmed only within this fictional demonstration.

上述三张预算截图来自v1.6.0，仅使用 `budget_demo.py` 按当前UTC日期生成的虚构记录，不读取个人数据。金额和设置都是示例，不是推荐默认值；截图保留拍摄时状态。样例包含一笔虚构的今日待入账购买，只在此虚构演示中视为已确认。
