import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // 啟用靜態導出模式
  images: {
    unoptimized: true, // 停用 Next.js 預設的圖片優化（GitHub Pages 必填）
  },
  // 💡 註：因為你的 Repo 名字就是 Ray7808.github.io（個人根網域），
  // 所以這裡「不需要」設定 basePath，直接放空的或維持原樣即可。
};

export default nextConfig;
