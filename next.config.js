/** @type {import('next').NextConfig} */

module.exports = {
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
