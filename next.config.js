/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
    loader: 'custom',
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
