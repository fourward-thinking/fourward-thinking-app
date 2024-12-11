/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    // Create a shallow copy of the config object to avoid direct mutation
    const newConfig = { ...config };

    // Enable source maps for easier client-side debugging in development
    if (!isServer) {
      newConfig.devtool = 'source-map';
    }

    // Return the modified config object
    return newConfig;
  },

  // Other configuration settings can go here if needed
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
