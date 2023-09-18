const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['naszsklep-api.vercel.app', 'picsum.photos'],
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    typedRoutes: true,
    mdxRs: true,
  },
};

module.exports = withMDX(nextConfig);
