/*
 * Service Worker – PWA
 * Cachea el app shell para uso offline.
 */

const CACHE_NAME = 'tfp-pwa-v1';

const ASSETS_TO_CACHE = [
  'index.html',
  'book-page.html',
  'search.html',
  'profile.html',
  'css/style.css',
  'css/style-mobile.css',
  'js/data.js',
  'js/main.js',
  'js/review-form-data.js',
  'js/search-page.js',
  'manifest.json'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (name) { return name !== CACHE_NAME; })
          .map(function (name) { return caches.delete(name); })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      if (cached) return cached;
      return fetch(event.request);
    })
  );
});
