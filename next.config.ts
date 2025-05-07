import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/mental-health-platform', // Replace with your repository name
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Add this to ensure all assets are included
  assetPrefix: '/mental-health-platform/',
  trailingSlash: true,
};

export default nextConfig;
