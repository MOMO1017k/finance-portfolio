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

test("server-renders the completed portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>李子默｜多模态舆情预警案例<\/title>/);
  assert.match(html, /在舆情成为危机之前/);
  assert.match(html, /125万\+/);
  assert.match(html, /6 \/ 10 已知危机被检出/);
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

  assert.match(page, /FINANCE ANALYTICS · CASE STUDY 01/);
  assert.match(page, /href="\/resume\.html"/);
  assert.match(layout, /title: "李子默｜Finance Analytics Portfolio"/);
  assert.match(layout, /<html lang="zh-CN">/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(css, /prefers-reduced-motion/);

  await Promise.all([
    access(new URL("../public/resume.html", import.meta.url)),
    access(new URL("../public/feature-system.png", import.meta.url)),
    access(new URL("../public/detection-framework.png", import.meta.url)),
    access(new URL("../public/results-overview.png", import.meta.url)),
  ]);
});
