self.__precacheManifest = [
  {
    "url": "/CouponIt/_next/static/D8KaxrPGnBU12JCqcGnTH/pages/_app.js",
    "revision": "f987a73c59573d6ed372"
  },
  {
    "url": "/CouponIt/_next/static/D8KaxrPGnBU12JCqcGnTH/pages/_error.js",
    "revision": "9e9a9cc1423a99cd55e1"
  },
  {
    "url": "/CouponIt/_next/static/D8KaxrPGnBU12JCqcGnTH/pages/index.js",
    "revision": "13cd9a919df5642977de"
  },
  {
    "url": "/CouponIt/_next/static/D8KaxrPGnBU12JCqcGnTH/pages/otherPage.js",
    "revision": "bec7fdbc6f4ffd96d3ad"
  },
  {
    "url": "/CouponIt/_next/static/chunks/commons.dd350127c4aabb3f702f.js",
    "revision": "9b8bdbc79b2c4924b24c"
  },
  {
    "url": "/CouponIt/_next/static/css/commons.bbea3502.chunk.css",
    "revision": "9b8bdbc79b2c4924b24c"
  },
  {
    "url": "/CouponIt/_next/static/runtime/main-a21604b48a41d27a172b.js",
    "revision": "9d250441aa08cd347361"
  },
  {
    "url": "/CouponIt/_next/static/runtime/webpack-8ed9452df514b4d17d80.js",
    "revision": "c9d4f4ac318bec9c37e2"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"https-calls","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
