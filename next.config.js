/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'chatgpt.com',
        pathname: '/backend-api/**',
      },
      {
        protocol: 'https',
        hostname: 'forensicservicesindia.com',
        pathname: '/assets/**',
      },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig


