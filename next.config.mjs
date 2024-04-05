/** @type {import('next').NextConfig} */
const nextConfig = {  
    
    images: {
    domains: ["picsum.photos", "images.unsplash.com", "images.pexels.com"],
    // remotePatterns: [
    //     {
    //       protocol: 'https',
    //       hostname: 'picsum.photos',
    //       port: '',
    //       pathname: '/my-bucket/**', 
    //     },
    //   ],
},};

export default nextConfig;
