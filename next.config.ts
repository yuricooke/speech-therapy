import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removido output: 'export' para permitir API routes e server functions na Vercel
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
