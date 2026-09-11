# 李子默 Finance Analytics Portfolio

个人财务与经营分析作品集，使用 React、Next.js API 与 vinext 构建。
生产构建会静态导出到 `dist/client`，可直接部署到 CloudBase 静态网站托管。

## 运行环境

- Node.js `22.x`（至少 `22.13.0`）
- pnpm

## 本地运行

```bash
pnpm install --frozen-lockfile
pnpm run dev
pnpm run build
```

构建完成后，入口文件为 `dist/client/index.html`。

## CloudBase 部署

推荐在 CloudBase 的「静态网站托管 → 应用部署」中连接 GitHub、Gitee 或 CNB 仓库：

- Node.js 版本：`22.x`
- 项目框架：`其他`（使用自定义构建配置）
- 安装命令：`pnpm install --frozen-lockfile`
- 构建命令：`pnpm run build`
- 输出目录：`dist/client`
- 部署路径：`/`

拿到 CloudBase 默认域名或绑定自定义域名后，可在构建环境变量中增加：

```text
NEXT_PUBLIC_SITE_URL=https://你的域名
```

这样微信、招聘平台等抓取页面时会使用正确的分享卡片地址。没有配置该变量时，
网站仍可正常访问，只是不输出分享卡片图片地址。

如果只需手动发布一次，也可以先运行 `pnpm run build`，然后上传整个
`dist/client` 文件夹。不要只上传 `index.html`，页面还依赖同目录中的图片、
简历和 `_next` 静态资源。

`cloudbaserc.json` 已包含同样的构建和输出目录配置，可用于 CloudBase CLI。
