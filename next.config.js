/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.dicebear.com', 'links.papareact.com']
  }
}

module.exports = nextConfig
