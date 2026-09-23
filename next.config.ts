import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: isGitHubPages ? "/jarida-today" : "",
  assetPrefix: isGitHubPages ? "/jarida-today/" : "",

  trailingSlash: true,
};

export default nextConfig;
