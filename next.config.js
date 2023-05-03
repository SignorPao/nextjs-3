/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["raw.githubusercontent.com", "img.freepik.com"],
  },
};

module.exports = nextConfig;
