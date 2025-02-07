/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3002', // Backend server's port
        pathname: '/uploads/**', // Path to your image folder
      },
    ],
  },
};

module.exports = nextConfig;
