self.__precacheManifest = [
  {
    "url": "/{reponame}/_next/static/chunks/commons.dd350127c4aabb3f702f.js",
    "revision": "9b8bdbc79b2c4924b24c"
  },
  {
    "url": "/{reponame}/_next/static/css/commons.bbea3502.chunk.css",
    "revision": "9b8bdbc79b2c4924b24c"
  },
  {
    "url": "/{reponame}/_next/static/runtime/main-a21604b48a41d27a172b.js",
    "revision": "9d250441aa08cd347361"
  },
  {
    "url": "/{reponame}/_next/static/runtime/webpack-8ed9452df514b4d17d80.js",
    "revision": "c9d4f4ac318bec9c37e2"
  },
  {
    "url": "/{reponame}/_next/static/wsG9TMm183K4oQ2SPzOcD/pages/_app.js",
    "revision": "01c0d87f313e6d947e52"
  },
  {
    "url": "/{reponame}/_next/static/wsG9TMm183K4oQ2SPzOcD/pages/_error.js",
    "revision": "174c9c6587ddac76122c"
  },
  {
    "url": "/{reponame}/_next/static/wsG9TMm183K4oQ2SPzOcD/pages/index.js",
    "revision": "5d1b1a8e268c507c6d9d"
  },
  {
    "url": "/{reponame}/_next/static/wsG9TMm183K4oQ2SPzOcD/pages/otherPage.js",
    "revision": "468a1c65b399873555c4"
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
