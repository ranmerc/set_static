/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/events',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['drive.google.com'],
  },
};

module.exports = nextConfig;
