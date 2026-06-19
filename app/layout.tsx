import type { Metadata } from "next";
import Header from "@/components/Header"; // 確認路徑是否正確
import { ThemeProvider } from "@/components/ThemeProvider"; // 👈 引入剛寫好的 Provider
import "./globals.css";

export const metadata: Metadata = {
  title: "HC - Portfolio",
  description: "Portfolio and personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 必須在 html 標籤加上 suppressHydrationWarning，這是 next-themes 官方要求的設定
    <html lang="en" className={` h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col transition-colors duration-300 bg-white dark:bg-black text-black dark:text-white">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
