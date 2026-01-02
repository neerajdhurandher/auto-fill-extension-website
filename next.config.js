/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/auto-fill-extension-website',
  assetPrefix: '/auto-fill-extension-website/',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    // Ignore ESLint errors during build
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
