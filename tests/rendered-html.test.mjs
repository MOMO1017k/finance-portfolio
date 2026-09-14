import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("exports a CloudBase-ready static portfolio", async () => {
  const html = await readFile(new URL("../dist/client/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>李子默｜Finance Analytics Portfolio<\/title>/);
  assert.match(html, /把财务问题，转化为可行动的数据答案/);
  assert.match(html, /Aelita/);
  assert.match(html, /OPEN TO WORK/);
  assert.match(html, /经营&amp;财务分析、长期预测、预算管理/);
  assert.match(html, /经营分析 · FP&amp;A · AI Commercial Finance/);
  assert.match(html, /15221824019/);
  assert.match(html, /电话\/微信/);
  assert.match(html, /李子默 · 上海长宁/);
  assert.doesNotMatch(html, /localhost:3000/);
  assert.match(html, /125万/);
  assert.match(html, /104万/);
  assert.match(html, /游戏运营舆情风险预警与归因/);
  assert.match(html, />经营分析</);
  assert.match(html, />游戏运营分析</);
  assert.doesNotMatch(html, />全部</);
  assert.doesNotMatch(html, /海外业务成本分摊与滚动预测/);
  assert.doesNotMatch(html, /PAGE 01 \/ 02/);
  assert.match(html, /结果与证据摘要/);
  assert.match(html, /危机池外异常发现/);
  assert.match(html, /工作经历<!-- --> · <!-- -->阶段 3 \/ 3/);
  assert.match(html, /财务与分析/);
  assert.match(html, /同济大学/);
  assert.match(html, /CFA Level I 通过/);
  assert.match(html, /统计建模/);
  assert.match(html, /LSTM · TFT · SAC/);
  assert.doesNotMatch(html, /CET-6/);
  assert.match(html, />能力</);
  assert.match(html, />项目</);
  assert.match(html, />经历</);
  assert.match(html, /查看完整案例/);
  assert.doesNotMatch(html, /下一阶段接入/);
  assert.match(html, /15221824019@163\.com/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("ships portfolio assets and site metadata", async () => {
  const [page, projectSection, experienceTimeline, layout, packageJson, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/project-section.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/experience-timeline.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /FINANCE ANALYTICS · SHANGHAI/);
  assert.match(page, /01 \/ EXPERIENCE/);
  assert.match(page, /02 \/ CAPABILITIES/);
  assert.match(projectSection, /03 \/ PROJECT/);
  assert.match(page, /04 \/ CONTACT/);
  assert.match(page, /href="#experience">经历<\/a><a href="#capabilities">能力<\/a><a href="#work">项目<\/a><a href="#contact">联系/);
  assert.match(page, /<ExperienceTimeline \/>[\s\S]*id="capabilities"[\s\S]*<ProjectSection \/>/);
  assert.match(page, /从财务流程数字化起步，让数据与技术进入经营分析与业务决策支持。/);
  assert.match(page, /Business Performance & FP&A/);
  assert.match(page, /BI & Data Modeling/);
  assert.match(page, /Predictive & Advanced Analytics/);
  assert.match(page, /FINANCE FOUNDATION/);
  assert.match(page, /财务报告/);
  assert.match(experienceTimeline, /工作经历是主线，学习与技术是持续汇入主线的能力支流。/);
  assert.match(experienceTimeline, /财务管理基础积累/);
  assert.match(experienceTimeline, /基础财务与总账/);
  assert.match(experienceTimeline, /主动标准化作业流/);
  assert.match(experienceTimeline, /报表与财务分析/);
  assert.match(experienceTimeline, /业务理解与数据驱动的分析决策/);
  assert.match(experienceTimeline, /BI建模与经营分析/);
  assert.match(experienceTimeline, /上海对外经贸大学/);
  assert.match(experienceTimeline, /同济大学/);
  assert.match(experienceTimeline, /约1\.8亿元历史负债/);
  assert.match(experienceTimeline, /company: "唯渡科技"/);
  assert.match(experienceTimeline, /role: "高级财务分析师"/);
  assert.match(experienceTimeline, /role: "会计学（国际方向）本科"/);
  assert.match(experienceTimeline, /获奖情况/);
  assert.match(experienceTimeline, /preserveAspectRatio="none"/);
  assert.match(experienceTimeline, /career-curve/);
  assert.match(experienceTimeline, /2019年至2027年/);
  assert.match(experienceTimeline, /type="range"/);
  assert.match(experienceTimeline, /统计建模、机器学习与强化学习、时间序列分析/);
  assert.doesNotMatch(experienceTimeline, /并行成长线|数据治理与财务信息化|career-detail-mark/);
  assert.match(page, /href="\/resume\.pdf"/);
  assert.match(page, /href="\/resume-en\.pdf"/);
  assert.match(page, /className="text-cta" href="#contact"/);
  assert.match(page, /href="tel:15221824019"/);
  assert.match(page, /className="footer-content"/);
  assert.match(page, /className="resume-row"/);
  assert.match(projectSection, /游戏运营舆情风险预警与归因/);
  assert.match(projectSection, /多模态数据管线/);
  assert.match(projectSection, /19项风险指标体系/);
  assert.match(projectSection, /分层检测与自适应更新/);
  assert.match(projectSection, /文本与视觉归因/);
  assert.match(projectSection, /危机池外异常发现/);
  assert.match(projectSection, /filterLabels = \{ business: "经营分析", game: "游戏运营分析" \}/);
  assert.match(projectSection, /useState<ProjectFilter>\("game"\)/);
  assert.match(projectSection, /className="project-list"/);
  assert.doesNotMatch(projectSection, /海外业务成本分摊与滚动预测/);
  assert.doesNotMatch(projectSection, /project-progress-track/);
  assert.doesNotMatch(page, /className="wordmark"|className="monogram"/);
  assert.doesNotMatch(page, /profile-metrics|className="marquee"/);
  assert.match(layout, /const title = "李子默｜Finance Analytics Portfolio"/);
  assert.match(layout, /openGraph:/);
  assert.match(layout, /<html lang="zh-CN">/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /max-width: 1220px/);
  assert.match(css, /letter-spacing: 2mm/);
  assert.match(css, /Microsoft YaHei/);
  assert.match(css, /\.overline \{[^}]*font-size: 13px/);
  assert.match(css, /\.site-header \{[^}]*height: 82px/);
  assert.match(css, /\.hero-status \{[^}]*margin-bottom: clamp\(28px, 3vw, 44px\)/);
  assert.match(css, /scroll-snap-type: y proximity/);
  assert.match(css, /min-height: 100svh/);
  assert.match(css, /\.work-section\.section-space \{[^}]*min-height: calc\(100svh - 82px\)[^}]*padding-bottom: clamp\(28px, 3\.4vh, 42px\)[^}]*padding-top: clamp\(28px, 3\.4vh, 42px\)/);
  assert.match(css, /\.project-section-intro h2 \{ margin-top: clamp\(16px, 2vh, 24px\)/);
  assert.match(css, /\.featured-case-card, \.case-detail \{[^}]*margin-top: clamp\(14px, 2vh, 20px\)/);
  assert.match(css, /\.capability-section \.section-space \{[^}]*min-height: calc\(100svh - 82px\)/);
  assert.match(css, /\.capability-grid article \{[^}]*background: rgba\(251,252,253,\.82\)[^}]*min-height: clamp\(300px, 38vh, 342px\)/);
  assert.match(css, /\.capability-foundation \{[^}]*background: rgba\(251,252,253,\.82\)/);
  assert.doesNotMatch(css, /\.profile-metrics|\.marquee/);
  assert.match(css, /\.footer-content \{[^}]*justify-content: center/);
  assert.match(css, /\.footer-content > \.overline \{ color: var\(--white\)/);
  assert.match(css, /\.contact-card \{[^}]*border-radius: 8px/);
  assert.match(css, /\.contact-card small \{ color: var\(--paper\)/);
  assert.match(css, /\.resume-row \{[^}]*max-width: 820px/);
  assert.match(css, /\.resume-row a \{[^}]*justify-content: center/);
  assert.match(css, /\.contact-card:hover, \.resume-row a:hover \{ background: var\(--paper\)/);
  assert.match(css, /footer \{[^}]*min-height: calc\(100svh - 82px\)/);
  assert.match(css, /\.footer-bottom \{[^}]*font-size: 13px[^}]*min-height: 82px/);
  assert.match(css, /\.footer-bottom \{[^}]*margin-top: auto/);
  assert.match(css, /\.featured-case-tags span \{[^}]*font-size: 13px/);
  assert.match(css, /\.featured-case-evidence-heading strong \{[^}]*font-size: 18px/);
  assert.match(css, /\.featured-case-evidence-heading small \{[^}]*color: var\(--ink\)[^}]*font-size: 11px/);
  assert.match(css, /\.featured-case-evidence-stack h4 \{[^}]*color: var\(--ink\)[^}]*font-size: 13px/);
  assert.match(css, /\.featured-case-range \{[^}]*grid-template-columns: repeat\(2, max-content\)[^}]*justify-content: start/);
  assert.match(css, /\.featured-case-known > strong \{[^}]*font-size: 23px/);
  assert.doesNotMatch(css, /#dfff00|#ff5b35/i);

  await Promise.all([
    access(new URL("../dist/client/index.html", import.meta.url)),
    access(new URL("../dist/client/_next", import.meta.url)),
    access(new URL("../public/resume.pdf", import.meta.url)),
    access(new URL("../public/resume-en.pdf", import.meta.url)),
    access(new URL("../public/feature-system.png", import.meta.url)),
    access(new URL("../public/detection-framework.png", import.meta.url)),
    access(new URL("../public/results-overview.png", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);
});
