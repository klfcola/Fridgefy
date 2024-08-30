/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["img.spoonacular.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
