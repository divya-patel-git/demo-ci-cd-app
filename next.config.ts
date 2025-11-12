/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/demo-ci-cd-app',
  assetPrefix: '/demo-ci-cd-app/',
};

module.exports = nextConfig;


// import type { NextConfig } from "next";
// const isProd = process.env.NODE_ENV === 'production' ?true : false;
// const nextConfig: NextConfig = {
//    output: 'export',
//    //for dev purpose only
// //  basePath: '',
// //  assetPrefix: '',
//   // 👇 Change this to your repo name (or folder name)
//   basePath: isProd ? '/demo-ci-cd-app' : '',
//   assetPrefix: isProd ? '/demo-ci-cd-app/' : '',
//   images: {
//     unoptimized: true, // Required since export disables optimization
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };

// export default nextConfig;
