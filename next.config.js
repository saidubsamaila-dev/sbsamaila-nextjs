/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.sbsamailaaccountants.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
