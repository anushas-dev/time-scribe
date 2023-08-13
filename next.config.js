/** @type {import('next').NextConfig} */

const { withGrafbase } = require('@grafbase/nextjs-plugin')

const nextConfig = () =>
  withGrafbase({
    reactStrictMode: true,
    swcMinify: true
  })

module.exports = nextConfig
