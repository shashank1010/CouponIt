const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);

const withCSS = require('@zeit/next-css')
    
const withOffline = moduleExists('next-offline')
  ? require('next-offline')
  : {};

const workboxOpts = {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
        {
        urlPattern: /^https?.*/,
        handler: 'CacheFirst',
        options: {
            cacheName: 'https-calls',
            expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
        },
        },
    ]
}


const exportPathMap = async function( defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
  if (dev) {
      return defaultPathMap;
  }


  // This will copy robots.txt from your project root into the out directory
  await copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt'));
  await copyFile(join(dir, 'sitemap.xml'), join(outDir, 'sitemap.xml'));
  await copyFile(join(dir, '.nojekyll'), join(outDir, '.nojekyll'));
  await copyFile(join(dir, 'README.md'), join(outDir, 'README.md'));
  return defaultPathMap;
}


const nextConfig = {
  workboxOpts,
  exportPathMap,
  target: "serverless"
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