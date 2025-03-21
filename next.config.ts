// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '1mb', // example value
      allowedOrigins: ['*'], // example value
    }, // jika kamu pakai fitur ini
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Untuk gambar lokal saat development
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/images/**',
      }
    ],
  },
  // Optional: Tambahkan fitur lain
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
