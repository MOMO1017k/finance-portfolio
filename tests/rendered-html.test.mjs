import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio framework", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>李子默｜Finance Analytics Portfolio<\/title>/);
  assert.match(html, /把财务问题，转化为可行动的数据答案/);
  assert.match(html, /Aelita/);
  assert.match(html, /OPEN TO WORK/);
  assert.match(html, /经营&amp;财务分析、长期预测、预算管理/);
  assert.match(html, /经营分析 · FP&amp;A · AI Commercial Finance/);
  assert.match(html, /15221824019/);
  assert.match(html, /电话\/微信/);
  assert.match(html, /李子默 · 上海长宁/);
  assert.match(html, /125万/);
  assert.match(html, /104万/);
  assert.match(html, /游戏运营舆情风险预警与归因/);
  assert.match(html, />全部</);
  assert.match(html, />FP&amp;A</);
  assert.match(html, />游戏运营分析</);
  assert.match(html, /海外业务成本分摊与滚动预测/);
  assert.match(html, /参数化长期预测模型/);
  assert.match(html, /PAGE 01 \/ 02/);
  assert.match(html, /结果与证据摘要/);
  assert.match(html, /危机池外异常发现/);
  assert.match(html, /LATEST/);
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
  assert.match(experienceTimeline, /财务流程数字化起点/);
  assert.match(experienceTimeline, /从数据治理到管理分析/);
  assert.match(experienceTimeline, /连接业务驱动与经营决策/);
  assert.match(experienceTimeline, /约 1\.8 亿元历史负债/);
  assert.match(experienceTimeline, /career-curve/);
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
  assert.match(projectSection, /filterLabels = \{ all: "全部", fpa: "FP&A", game: "游戏运营分析" \}/);
  assert.match(projectSection, /海外业务成本分摊与滚动预测/);
  assert.match(projectSection, /Power BI 经营报告自动化/);
  assert.match(projectSection, /project-progress-track/);
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
  assert.match(css, /\.capability-section \.section-space \{[^}]*min-height: calc\(100svh - 82px\)/);
  assert.match(css, /\.capability-grid article \{[^}]*min-height: clamp\(300px, 39vh, 340px\)/);
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
  assert.doesNotMatch(css, /#dfff00|#ff5b35/i);

  await Promise.all([
    access(new URL("../public/resume.pdf", import.meta.url)),
    access(new URL("../public/resume-en.pdf", import.meta.url)),
    access(new URL("../public/feature-system.png", import.meta.url)),
    access(new URL("../public/detection-framework.png", import.meta.url)),
    access(new URL("../public/results-overview.png", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);
});
