/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["firebasestorage.googleapis.com","res.cloudinary.com"]
        },
        env: {
        API_URL: "http://localhost:3001/api",
        NEXTAUTH_SECRET :"bonjour"
        }
}

module.exports = nextConfig
