/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
