/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow the local network origin to access Next.js dev assets
  allowedDevOrigins: [
    'http://192.168.1.2'
  ],
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
