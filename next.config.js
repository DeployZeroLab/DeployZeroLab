/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/DeployZeroLab',
  assetPrefix: '/DeployZeroLab',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
