/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // unoptimized: true,

        domains: ['i.imgur.com', '*'],// Allow loading images from any domain
      },
    // output: 'export',

}

module.exports = nextConfig
