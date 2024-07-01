/** @type {import('next').NextConfig} */
const nextConfig = {
    env : {
        NEXT_PUBLIC_API_URL:  process.env.NODE_ENV === "production" ? "https://tufailtest.com" : "http://localhost:3000",
        NEXT_PUBLIC_EDAMAM_BASE_URL : 'https://api.edamam.com',
        NEXT_PUBLIC_EDAMAM_API_KEY : '0eab1f91e9f3da505092b5450259ba03',
        NEXT_PUBLIC_EDAMAM_ACCOUNT_ID : 'a41cf35e',
    }
};

export default nextConfig;
