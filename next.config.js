/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {   
                protocol: "https",
                hostname: "media.kitsu.io"
            },
            {   
                protocol: "http",
                hostname: "openweathermap.org"
            }
        ]
    }
}

module.exports = nextConfig
