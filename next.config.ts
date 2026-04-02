import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/landing-tio-tony",
  images: { unoptimized: true },
};

export default nextConfig;
