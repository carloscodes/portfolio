/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.healthyfood.com', 'cdnb.artstation.com', 'ozcxfgsvtlcbxasohewy.supabase.co']
  },
  async rewrites() {
    return [
      {
        source: '/api/contact',
        destination: '/',
      },
    ]
  },
}

module.exports = nextConfig
