/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  transpilePackages: ['lumir-design-components', 'lumir-design-tokens']
};

module.exports = nextConfig; 