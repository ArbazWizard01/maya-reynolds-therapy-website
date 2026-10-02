import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the project root so Turbopack ignores stray lockfiles higher up (e.g. in the home folder).
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // Object form without `search`, so Unsplash URLs with query params (?auto=format&w=…) are allowed.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" }],
    qualities: [75, 85],
  },
};

export default nextConfig;
