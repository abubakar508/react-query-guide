/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: "default",
        minimumCacheTTL: 60,
        domains: ["image.tmdb.org"],
      }
};


export default nextConfig;

