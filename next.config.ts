import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // This is needed for GitHub Pages
  output: 'export',

  // 👇 Replace 'nextjs14-ci-cd' with your repo name
  basePath: '/demo-ci-cd-app',

  // 👇 Also set the same prefix for static assets
  assetPrefix: '/demo-ci-cd-app/',
  /* config options here */
};

export default nextConfig;
