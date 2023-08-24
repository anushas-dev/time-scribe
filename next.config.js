/** @type {import('next').NextConfig} */

const { withGrafbase } = require('@grafbase/nextjs-plugin')

const nextConfig = () =>
  withGrafbase({
    reactStrictMode: true,
    swcMinify: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.icons8.com',
        },
      ],
    }
  })

module.exports = nextConfig
