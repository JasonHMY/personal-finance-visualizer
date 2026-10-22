# Distribution channels and actual status

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
