/* Allows you to import images in Nextjs */
const withImages = require("next-images");

/**
 * @type {import('next').NextConfig}
 */
const config = {
  images: {
    domains: [
      "images.sifted.eu",
      "via.placeholder.com",
      "www.datocms-assets.com",
    ],
    path: "",
    loader: "imgix",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [];
  },
};

module.exports = withImages(config);
