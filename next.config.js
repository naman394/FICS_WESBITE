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
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig


