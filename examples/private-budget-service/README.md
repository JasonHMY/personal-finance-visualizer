# Optional private settings service / 可选私密设置服务

This adapter serves an authorized report from Private Blob and stores budget settings through same-origin `/api/budget`. It is separate from the default 12-file Skill package. **It has no built-in authentication:** the hosting platform must protect every deployment, domain and API route before any personal content is uploaded. Same-origin checks prevent cross-site writes; they do not authenticate a user.

此适配器通过 Private Blob 读取已授权报告，并经同源 `/api/budget` 保存预算设置。它独立于默认12文件Skill包。**适配器不自带身份认证**：放入个人内容前，宿主平台必须保护所有部署、域名和API路径。同源检查防止跨站写入，不等于用户登录验证。

1. Obtain explicit authorization for private hosting. Verify the account's current protection features, access members, plan and costs. Do not infer that a free plan or this source code provides the required protection.
2. Configure login protection for all deployments and domains and a private Blob store scoped to the intended project. Do not create public exceptions or bypass links. Keep credentials in the host's protected environment, never in HTML or Git.
3. Install the pinned dependencies with `npm ci`. Deploy only this generic service source. Verify anonymous GET/HEAD/POST requests are denied on `/`, `/index.html`, `/api/report` and `/api/budget`, including deployment URLs and aliases. First use fictional fixtures in an isolated store.
4. Store the report privately at `reports/current.html` and set its budget endpoint to `/api/budget`. Settings use `budget/settings.json`; isolated previews may use the allowlisted `reports/previews/<name>.html` and `budget/previews/<name>.json` paths. Report replacements must not replace settings.
5. Verify signed-in loading, saving, reload on another page, stale-write conflicts, and failed-save messages. Writes use `X-Budget-Revision` and conditional Blob updates. Verify private direct URLs deny anonymous access and retain a private rollback version.

1. 先取得私密托管授权，核对账号当前的访问保护、成员、方案和费用；不能假定免费方案或源码本身已经提供保护。
2. 为全部部署和域名设置登录保护，私有Blob仅关联目标项目；不设置公开例外或绕过链接。凭据只放宿主受保护环境，不放HTML或Git。
3. 用 `npm ci` 安装锁定依赖，仅部署此通用服务源码。先在隔离存储用虚构资料，验证 `/`、`/index.html`、`/api/report`、`/api/budget` 及部署网址、别名的匿名GET/HEAD/POST均受拦截。
4. 报告私密保存至 `reports/current.html`，预算endpoint设为 `/api/budget`；设置独立保存在 `budget/settings.json`。隔离预览可用白名单中的 `reports/previews/<name>.html` 和 `budget/previews/<name>.json`。替换报告不能重置设置。
5. 核对登录后的读取、保存、另页刷新、旧页面冲突及失败提示。写入使用 `X-Budget-Revision` 和Blob条件更新。核对私密直链拒绝匿名访问，并保留私密回退版本。

`lib/finance-engine.cjs` is the same source as the Skill's `assets/engine.js`; update and test both together. From the repository root, run `node tests/budget-api.test.mjs`. These mocked tests do not verify a real deployment's authentication.

`lib/finance-engine.cjs` 与Skill的 `assets/engine.js` 是同一源码，更新时应同步并测试。仓库根目录运行 `node tests/budget-api.test.mjs`；模拟测试不代替真实部署的登录保护核验。
