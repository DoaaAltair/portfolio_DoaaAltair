import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Turbopack uitschakelen om de bekende bug te vermijden
  experimental: {
    turbo: false,
  },
};

export default nextConfig;
