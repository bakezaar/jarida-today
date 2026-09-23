import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/jarida-today",
  assetPrefix: "/jarida-today/",
  trailingSlash: true,
};

export default nextConfig;