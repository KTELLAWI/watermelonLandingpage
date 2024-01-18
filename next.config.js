/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false,net:false,dns:false };

    return config;
  },
    images: {
        // unoptimized: true,

        domains: ['i.imgur.com', '*'],// Allow loading images from any domain
      },
    // output: 'export',

}

module.exports = nextConfig
