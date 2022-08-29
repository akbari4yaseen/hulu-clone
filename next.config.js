/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["press.hulu.com", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
