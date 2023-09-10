const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["naszsklep-api.vercel.app"],
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    typedRoutes: true,
    mdxRs: true,
  },
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/products/1',
        permanent: true,
      }
    ]
  }
};

module.exports = withMDX(nextConfig);
