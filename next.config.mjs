/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.levapoteur-discount.fr",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
      },
      {
        protocol: "https",
        hostname: "fr-pipeline.com",
      },
      {
        protocol: "https",
        hostname: "media.taffe-elec.com",
      },
    ],
  },
};

export default nextConfig;
