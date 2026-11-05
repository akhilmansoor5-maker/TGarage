import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";
const basePath = githubPages ? "/TGarage" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  turbopack: { root: __dirname },
  images: { unoptimized: true },
  agentRules: false,
  ...(githubPages ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
