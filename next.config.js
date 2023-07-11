/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "media.kitsu.io"
            }
        ]
    }
}

module.exports = nextConfig
