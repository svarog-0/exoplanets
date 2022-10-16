/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/api/graphql',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
