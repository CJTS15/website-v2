/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "media.kitsu.io", 
                hostname: "openweathermap.org"
            }
        ]
    }
}

module.exports = nextConfig
