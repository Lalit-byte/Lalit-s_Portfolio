/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "avatars.githubusercontent.com"],
  },
  async rewrites() {
    return [
      { source: "/portfolio", destination: "/" },
      { source: "/home", destination: "/" },
      { source: "/index", destination: "/" },
      { source: "/preview", destination: "/" },
      { source: "/portfolio-preview", destination: "/" },
    ];
  },
};

export default nextConfig;
