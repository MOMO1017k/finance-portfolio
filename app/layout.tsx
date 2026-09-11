import type { Metadata } from "next";
import "./globals.css";

const title = "李子默｜Finance Analytics Portfolio";
const description = "李子默的 Finance Analytics 作品集：FP&A、经营分析、游戏运营分析、财务数据分析与可控自动化。";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const metadataBase = configuredSiteUrl ? new URL(configuredSiteUrl) : undefined;
const socialImages = metadataBase ? [new URL("/og.png", metadataBase).toString()] : undefined;

export const metadata: Metadata = {
  metadataBase,
  title,
  description,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title, description, images: socialImages },
  twitter: { card: "summary_large_image", title, description, images: socialImages },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
