import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  /** @type {import('next').NextConfig} */

  images: {
    // domains: ['m.media-amazon.com'],
    domains: ['m.media-amazon.com', 'your-domain.com'], 
  },
};

export default nextConfig;
