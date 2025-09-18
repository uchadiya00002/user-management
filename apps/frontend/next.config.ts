/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      root: "../../", // adjust path if needed to point to monorepo root
    },
  },
};

export default nextConfig;
