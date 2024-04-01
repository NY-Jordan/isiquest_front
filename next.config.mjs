/** @type {import('next').NextConfig} */

const nextConfig = {
  rewrites: async () => {
   
    return [
      {
        source: '/',
        destination: '/auth/login',
      },
    ];
  },
  i18n: {
    locales: ['en', 'default','fr'],
    defaultLocale: 'default',
  },
  trailingSlash: true,
  
};

export default nextConfig;