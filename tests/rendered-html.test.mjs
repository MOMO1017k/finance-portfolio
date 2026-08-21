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
  assert.match(html, /18651708315/);
  assert.match(html, /125 万条文本和 104 万张图片/);
  assert.match(html, /19 维监控指标体系/);
  assert.match(html, /约 1\.8 亿元历史负债/);
  assert.match(html, /LATEST/);
  assert.match(html, /财务与分析经验/);
  assert.match(html, /同济大学/);
  assert.match(html, /CFA Level I 通过/);
  assert.match(html, /统计建模/);
  assert.doesNotMatch(html, /CET-6/);
  assert.match(html, />能力</);
  assert.match(html, />项目</);
  assert.match(html, />经历</);
  assert.match(html, /下一阶段接入/);
  assert.match(html, /15221824019@163\.com/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("ships portfolio assets and site metadata", async () => {
  const [page, layout, packageJson, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /FINANCE ANALYTICS · SHANGHAI/);
  assert.match(page, /01 \/ PROJECT/);
  assert.match(page, /02 \/ CAPABILITIES/);
  assert.match(page, /04 \/ CONTACT/);
  assert.match(page, /href="\/resume\.pdf"/);
  assert.match(page, /href="\/resume-en\.pdf"/);
  assert.match(page, /className="text-cta" href="#contact"/);
  assert.match(page, /href="tel:18651708315"/);
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
  assert.doesNotMatch(css, /\.profile-metrics|\.marquee/);
  assert.match(css, /\.footer-main > \.overline \{ color: var\(--white\)/);
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
