import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Se seu repositório se chama "speech-therapy-site", use:
  // basePath: '/speech-therapy-site',
  // Se for o repositório principal (username.github.io), deixe comentado:
  // basePath: '',
  trailingSlash: true,
};

export default nextConfig;
