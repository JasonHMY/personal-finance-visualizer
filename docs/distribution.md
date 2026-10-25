# Distribution channels and actual status

## 25 October 2026: v1.5.0 daily allowance release

- [GitHub v1.5.0](https://github.com/JasonHMY/personal-finance-visualizer/releases/tag/v1.5.0) is public at source commit `e02e08e`. All 12 installed files match the release package, with a local backup retained. Yangxiachi now downloads v1.5.0; its ZIP matches byte for byte.
- Adds daily allowance, calendar-month budgets, historical/manual category shares and settings editing. Standalone settings remain in page memory. Cross-device persistence requires separately authorized private hosting, authentication, same-origin APIs and private storage; it is not automatic cloud sync. The generic adapter is in `examples/private-budget-service/`; no deployment was performed.
- All 26 new budget/API tests, 18 existing tests, JavaScript syntax and skill validation passed. Fictional browser checks covered settings changes, reset on reload, no budget localStorage and no page overflow at 390px. English, Chinese and phone screenshots are updated; no real financial data was used.
- ClawHub accepted the 12-file v1.5.0 package with pending publication. Skillstore accepted the fixed v1.5.0 tag; its [new receipt](https://skillstore.io/submissions/b720cd58-e673-4896-8201-590c248840f7) is Processing. No matching open review PR existed before submission. Public installation of this version is not yet verified on either platform.
- OpenAgentSkill's existing receipt still returns 503 in the browser, and myagents remains paused; neither received a duplicate. Skillz.directory's installation-template PR #4 remains open. Existing account, verification and maintainer requirements remain unchanged elsewhere.
- The existing daily task now follows v1.5.0 and continues download and user-feedback reports. No new automation or promotional message was created.

## 25 October 2026: daily verification

- GitHub's latest stable release remains v1.4.1. ClawHub's public latest and Yangxiachi's download link remain v1.4.1; previously verified packages were not downloaded again.
- Skillstore now publicly serves v1.4.1, revision r6. The [receipt](https://skillstore.io/submissions/fd268cd7-ac17-4f40-be3a-5efc251d257c) is Published and [PR #3910](https://github.com/aiskillstore/marketplace/pull/3910) is merged. All 12 catalog source files were compared with the release package byte for byte.
- Downloads: ClawHub 238 (+14), Skillstore 5, GitHub release ZIPs 10 total (1 for current v1.4.1), and Yangxiachi 0. The latter three are unchanged. ClawHub's increase may include the previous package-verification download and does not represent new unique users.
- No new user reviews or GitHub issues were observed. ClawHub still reports 0 comments, 1 user reporting an install and 0 stars; GitHub has 1 star, and Yangxiachi has 0 reviews. Skillstore's 87 is a platform score.
- OpenAgentSkill's existing receipt still returns 503 in Ego Lite; myagents remains paused. No duplicates were submitted. Skillz.directory PR #4 remains open and its installation text and both commands still specify only SKILL.md. The corresponding skills.sh page still returns 404.
- The existing daily task continues download and feedback reports and follows these remaining items; completing the main platform updates does not cancel it.

## 24 October 2026: daily verification

- GitHub's latest stable release remains v1.4.1. ClawHub now publicly serves v1.4.1; all 12 source files in the downloaded archive match the release ZIP byte for byte. The registry adds `skill-card.md` and `_meta.json`.
- Skillstore merged the v1.4.0 review PR #3897. Its old receipt is Published, the public page shows v1.4.0/r5, and all 12 catalog source files match that release. After confirming no matching open review PR, the fixed v1.4.1 tag was submitted. The [new receipt](https://skillstore.io/submissions/fd268cd7-ac17-4f40-be3a-5efc251d257c) is Processing; public v1.4.1 availability is not yet verified.
- Yangxiachi still links to the previously verified v1.4.1 ZIP.
- OpenAgentSkill's existing receipt still returns 503 in Ego Lite; no duplicate was submitted. The myagents website now shows Deployment Paused, so the existing application cannot be checked. This is not treated as a rejection.
- Skillz.directory PR #4 remains open, and its public installation text and both command examples still refer only to SKILL.md. The online fix is incomplete. The corresponding skills.sh page still returns 404; no installs or download metrics were manufactured.
- Observed public downloads: ClawHub 224 (+48), Skillstore 5 (unchanged), GitHub release ZIPs 10 (+1, including 1 for v1.4.1), and Yangxiachi 0 (unchanged). The additional GitHub download is our earlier release verification, not evidence of a new external user. No new user comments or issues were observed; Skillstore's 87 is a platform score.
- The existing daily task continues v1.4.1 review follow-up and the original outstanding items, plus ongoing download and feedback reports. No new automation was created.

## 23 October 2026: v1.4.1

- [GitHub v1.4.1](https://github.com/JasonHMY/personal-finance-visualizer/releases/tag/v1.4.1) is public at source commit `8c23cd2`. All 12 installed files match the release package; Yangxiachi's download ZIP matches GitHub byte for byte.
- Phones up to 700px use two half-scale ring/metric cards per row with 12px gaps. Timelines and details stay full-width; drag coordinates account for zoom. The calculation engine and template are unchanged. Bilingual documentation, visual guides and the fictional phone screenshot are updated.
- All 6 Python tests, 12 accounting tests, JavaScript syntax and skill validation passed. Browser checks confirmed two columns without overflow at 320/390/430px and the original desktop grid; the phone screenshot was inspected. Drag swapping and detail checks rely on the approved handoff evidence. This round's emulated pointer input did not reliably hit the drag handle and is not counted as a passed retest.
- ClawHub accepted the complete 12-file package with pending publication; public installation of this version is not yet verified.
- Skillstore's v1.4.0 submission is In Review with [PR #3897](https://github.com/aiskillstore/marketplace/pull/3897) still open. No duplicate v1.4.1 submission was made; submit the fixed new tag after that review completes.
- OpenAgentSkill's existing receipt still returns 503 in the browser; no duplicate was submitted. Other channel requirements remain unchanged. The existing daily task now follows v1.4.1 and continues download and user-feedback checks.

## 23 October 2026: v1.4.0

- [GitHub v1.4.0](https://github.com/JasonHMY/personal-finance-visualizer/releases/tag/v1.4.0) is public at source commit `cb01a2b`. All 12 installed skill files match the release package.
- Adds continuous ring and value transitions, ordered list motion and optional merchant display names. Cards remain visible; reduced motion shows final values directly. Original merchant and bank descriptions remain available; the calculation engine is unchanged. All 18 tests, JavaScript syntax and skill validation passed, with a browser check using fictional data.
- Yangxiachi's download now points to v1.4.0; the ZIP matches GitHub byte for byte. Its separate version field remains stale.
- ClawHub accepted the complete 12-file package with pending publication. Public v1.4.0 installation is not yet verified. The older CLI lacks the current license parameter, so submission used the official API's MIT-0 acceptance field and retained the license file.
- Skillstore accepted the fixed v1.4.0 tag; its [receipt](https://skillstore.io/submissions/2c266594-0cb4-4213-9a86-0c24770e2b09) is Processing. No matching open review PR existed before submission.
- OpenAgentSkill's existing receipt still returns 503 in Ego Lite; no duplicate was submitted. Existing account, review and maintainer requirements for other channels remain as recorded below.
- The existing daily task now follows v1.4.0 and continues daily download and user-feedback reports after publication completes.

## 23 October 2026 verification

- ClawHub now publicly serves v1.3.0. All 12 downloaded source files match the release byte for byte; the registry additionally includes `skill-card.md` and `_meta.json`.
- Skillstore marks this submission Published. Its public page shows v1.3.0, content revision r4; all 12 source files in its catalog repository match this project.
- GitHub's latest stable release and Yangxiachi's download remain v1.3.0. The Yangxiachi ZIP was verified again.
- OpenAgentSkill's old receipt still returns 503 in Ego Lite and its directory remains unavailable. Acceptance of this update is unconfirmed; no duplicate submission was made. Exact-name search on myagents still returns no results; the original application remains pending.
- Skillz.directory PR #4 remains OPEN and unmerged. Daily follow-up continues because the completion conditions are not yet met.

## 22 October 2026 update: v1.3.0

- [GitHub v1.3.0](https://github.com/JasonHMY/personal-finance-visualizer/releases/tag/v1.3.0) is public at commit `ecc3d13`. The user-level installation is synchronized; all 12 files match byte for byte, with the previous installation backed up locally.
- This release adds searchable, filterable and sortable details with filtered totals, area/bar trends, a date picker, per-view saved card layouts and collapsed More information. Unclear transactions are confirmed before affected final charts. Bilingual guidance and 10 fictional screenshots are refreshed; the accounting engine is unchanged.
- Six Python tests, 12 calculation tests, JavaScript syntax and Skill validation passed. Handoff interaction evidence was reused, with fresh checks of all views, details, disclosures, languages, themes and narrow-screen screenshots. The package retains the EasyUI MIT notice.
- Yangxiachi's download link and description now reference v1.3.0. Its downloaded ZIP matches the GitHub release byte for byte; this does not establish that the platform's separate version field changed.
- ClawHub accepted the clean 12-file v1.3.0 package as `pending-publication`. The public latest version remained v1.2.1 after submission; no duplicate upload was made.
- Skillstore accepted the fixed v1.3.0 tag. The [new receipt](https://skillstore.io/submissions/17a53e88-5ec9-45c4-a40a-da24eade9b7c) is Processing. No earlier open PR for this project remained before submission; public installation of the update is not yet verified.
- OpenAgentSkill returned HTTP 500 for this update, without a success receipt. Ego Lite then confirmed HTTP 503 for the old status receipt and an unavailable directory. Acceptance is unknown; check existing records before retrying after service recovery.
- Skillz.directory still points to GitHub. Installation-template [PR #4](https://github.com/keyman500/skills/pull/4) remains open, with Vercel awaiting maintainer authorization. Other historical review/account conditions are recorded below; this GitHub release does not verify their publication.
- The existing daily check now follows v1.3.0, the original myagents application and the deployed Skillz.directory installation correction. No new accounts, payments, promotional messages or additional scheduled tasks were created.

## 22 October 2026 catalog follow-up

- ClawHub and Skillstore now publicly provide v1.2.1.
- [Skillz.directory](https://www.skillz.directory/skills/personal-finance-visualizer) is live and links to this GitHub repository. Its generic installation template copies only SKILL.md and omits required scripts/assets; use the project README to install the complete directory. No author edit control was available, and no duplicate was submitted. [Upstream PR #4](https://github.com/keyman500/skills/pull/4) corrects the shared template to copy the entire skill directory and supporting files. The live fix awaits maintainer merge and deployment.
- myagents exact-name search returned no match. Its submission page says manual review normally takes a few days; the existing submission is two days old. No rejection, request for changes or status-edit control was visible. The original application remains under follow-up.
- OpenAgentSkill returned HTTP 503 and “Unable to read submission status” for the existing receipt from Ego Lite. Current review progress is unknown; an empty queue is not proof that the submission was lost.
- skills.sh discovery is driven by genuine CLI install telemetry, not a manual review queue. A telemetry-disabled --list check found the skill successfully. No artificial installations or telemetry changes were used to manufacture indexing.

## 21 October 2026 update: v1.2.1

- GitHub now publishes v1.2.1 and the user-level installation is synchronized. Yangxiachi links to the same 12-file release ZIP; downloaded bytes match. Its version field still returns the old value, while the description states v1.2.1.
- This release adds six-row scrolling legends, direct view controls, chart amounts/shares/counts, bar labels and concurrent preview serving. All 6 Python and 12 calculation tests pass, skill validation passes, and the accounting engine is unchanged.
- ClawHub accepted v1.2.1 with 12 files and pending-publication status; its public latest remains 1.1.0. The earlier 1.2.0 submission contained two Python test caches. The clean 1.2.1 package is now recommended; withdrawal of the old pending version is not confirmed.
- Skillstore merged the earlier PR #3852, but its catalog copy remains at 1.1.0. The [new submission](https://skillstore.io/submissions/927eb347-ad7f-4c70-b110-a0ecac73f3e7) was accepted for processing; its final captured version is not yet confirmed.
- OpenAgentSkill reports the old submission as listed. New source versions were submitted separately; acceptance does not establish public availability of the update.
- Other channels retain the 20 October baseline below. Updating the GitHub source does not confirm refreshed catalog copies or indexing. Account, identity, payment and manual-review requirements remain unresolved; pending applications were not duplicated.

The following is the 20 October 2026 baseline. Its version and review states are historical.

[简体中文](distribution.zh-CN.md) · [Project home](../README.md) · [Release workflow](publishing.md)

Checked on 20 October 2026. This pass covered 26 relevant channels: skill registries, directories, automatic indexes and official plugin directories. It is not a claim to cover every site on the internet.

Five new channels were processed: the 养虾池 listing is public; Skillstore, OpenAgentSkill, myagents and Skillz.directory accepted submissions for review. ClawHub was submitted earlier and remains pending. Acceptance, community-queue visibility and public publication are recorded separately.

| Platform / official evidence | Intake route | Result in this run |
| --- | --- | --- |
| [GitHub](https://github.com/JasonHMY/personal-finance-visualizer) | Repository + releases | Live: v1.1.0 and illustrated documentation. |
| [养虾池](https://www.agent-skills.net.cn/api/docs) | Agent registration + publish API | [Live listing](https://www.agent-skills.net.cn/skills/432). Download contains all 12 skill files, identical to v1.1.0. |
| [Skillstore](https://skillstore.io/submit) | Anonymous repository/directory submission | [PR #3852](https://github.com/aiskillstore/marketplace/pull/3852) created; three checks passed; awaiting final review. |
| [OpenAgentSkill](https://www.openagentskill.com/api-docs) | Validate API + submit API | Accepted; visible in the [community queue](https://www.openagentskill.com/skills/new), marked needs review and not in the main directory. |
| [myagents](https://www.myagents.center/submit) | Free anonymous web form | Submitted for review; saved as personal-finance-visualizer. Not public until manual approval. |
| [ClawHub](https://docs.openclaw.ai/clawhub/quickstart) | Authenticated CLI + versioned package | Earlier v1.1.0 submission remains pending publication; no public latest version returned. |
| [SkillsMP](https://skillsmp.com/docs/faq) | Automatic GitHub indexing | Added the required claude-skills topic. Awaiting discovery; indexing is not confirmed. No manual submit system documented. |
| [skills.sh](https://www.skills.sh/docs/faq) | GitHub installation + install-based discovery | Installation already verified. No separate publish API; leaderboard inclusion not confirmed. No synthetic install counts sent. |
| [agentskill.sh](https://agentskill.sh/submit) | GitHub import form | Attempted once; site says too many submissions and to retry in one hour. Not accepted in this run. |
| [OmniSkill Registry](https://omniskill.online/) | Repository verification/submit form | Attempted once; form returned a network/JSON parsing error. No successful receipt. |
| [Skillz.directory](https://www.skillz.directory/submit) | Repository form; official API route exists | Accepted through the web form; success page confirmed review is pending. Not yet public. |
| [SkillHub.fyi](https://docs.skillhub.fyi/docs/cli/publish) | Directory package + public registry + CLI | Current browser is signed out. Needs account/login and registry publishing access; free during public beta. |
| [腾讯 SkillHub](https://skillhub.cn/ai/release.md) | Web/CLI/Agent publishing | Requires phone verification, real-name face verification and a publishing token. Human identity steps remain. |
| [讯飞 Astron SkillHub](https://iflytek.github.io/skillhub/guide/skill-publish.html) | CLI/REST package publishing | Needs token and namespace permission. Production account eligibility not verified in this run. |
| [SkillsBot](https://www.skillsbot.cn/help) | Registered developer create/upload flow | Registration asks for phone, email and password. No public publishing API verified. |
| [MyLevis Hub](https://mylevis.com/docs/skill-publishing/) | Import package, then submit to marketplace | Needs platform account and creator agreement. Personal import is not public listing. |
| [Agensi](https://www.agensi.io/sell) | Complete ZIP + listing + review | Submit route redirects to sign-in. No publishing API verified; free-listing payout requirements remain unconfirmed. |
| [SkillsHub.Network](https://skillshub.network/docs) | Account-based file publishing | Publisher docs require Stripe Connect. Whether a free skill can avoid payout onboarding is unconfirmed. |
| [OpenAI Plugins Directory](https://developers.openai.com/plugins/deploy/submission) | Skills-only plugin ZIP + developer portal | Needs plugin packaging, verified developer identity and review. Not submitted as a standalone Skill. |
| [Claude plugin directory](https://claude.com/resources/articles/build-plugins-for-claude) | GitHub plugin bundle + submission portal | Official portal is for paid Claude plans. Needs plugin packaging and review; not submitted. |
| [Skills 中文网](https://cnskills.com/llms.txt) | Curated GitHub aggregation/mirroring | No author submission route verified. No listing claim. |
| [Agent Skills Hub](https://agentskillshub.top/) | Automatic GitHub discovery | Site describes periodic indexing. No author publishing API found; listing not confirmed. |
| [SkillMD.ai](https://skillmd.ai/terms/) | GitHub/ZIP submission with email | Terms prohibit automated access except authorized APIs; no authorized publish API found. Not automated. |
| [Agent Skills Market](https://agent-skills.market/submit) | Form/API + paid review | US$25 listing fee. No payment authorized or made. |
| [agent-skills.shop](https://www.agent-skills.shop/upload) | Single SKILL.md upload + CAPTCHA | A single file omits this skill’s required code/assets. Not submitted; also requires contact email and CAPTCHA. |
| [TheSkillMD](https://theskillmd.com/submit/) | Email-based submission | No self-service API/form. No email sent; per-draft sending approval would be required. |

## Verification boundaries

- Submitted packages contain only public project files and descriptions. A publisher-approved contact email was supplied privately to Skillz.directory for review notices. No real statements or financial records were submitted.
- 养虾池 serves a source archive of the public repository. All 12 skill files were compared with v1.1.0 and match. Its API version field still shows the default `1.0.0`; an update request did not change it. The public description therefore states the actual source version and GitHub installation entry. Follow this project's README; the platform-generated install command is not a verified install path.
- The Skillstore PR contains the complete skill directory and a generated platform report. Three checks passed, but maintainers have not merged it. OpenAgentSkill routes the script-containing package to manual review and has not added it to the main directory. myagents explicitly returned saved and awaiting manual review.
- API keys and token-bearing private status receipts stay on the publisher's machine, outside this repository. No new schedule, webhook, automatic rating or fabricated installation count was enabled.

## Continuing distribution

Check the existing receipts first to avoid duplicates. Retry agentskill.sh after its rate limit clears. Channels requiring email, accounts, identity checks, agreements or fees need those conditions resolved first. For later versions, update GitHub and then follow each registry's version/review process; a GitHub update does not prove that another platform has synced.

AgentSkills.io is a format specification, not an author publication store. Services named SkillHub have different operators; their credentials and CLIs are not interchangeable.
