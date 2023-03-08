// @ts-nocheck

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
    appDir: true,
  },

  env: {
    RESERVOIR_URL: process.env.RESERVOIR_URL,
    RESERVOIR_API_KEY: process.env.RESERVOIR_API_KEY,
  },
};

export default config;
