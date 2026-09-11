import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CloudBase 静态网站托管只接收浏览器可直接访问的静态文件。
  // vinext 会把预渲染后的站点输出到 dist/client。
  output: "export",
};

export default nextConfig;
