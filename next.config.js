/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false, // Disable App Router since we're using Pages Router
  },
}

module.exports = nextConfig
