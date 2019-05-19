const withCSS = require('@zeit/next-css')
    
const withOffline = moduleExists('next-offline')
  ? require('next-offline')
  : {};

const nextConfig = {
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/CouponIt' : ''
}

const offline =  moduleExists('next-offline')
? withOffline(nextConfig)
: nextConfig
module.exports = withCSS(offline)

function moduleExists(name) {
  try {
    return require.resolve(name);
  } catch (error) {
    return false;
  }
}