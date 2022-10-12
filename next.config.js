/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  //image loader
  images: {
    domains: ['media.graphassets.com'],
  },
  env: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    cool : 'cool'
  }
}

module.exports = nextConfig
