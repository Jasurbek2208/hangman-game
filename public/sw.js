// service-worker.ts

// Define the cache name
const CACHE_NAME = 'hangman-uzb-names-cache-v1';

// List of URLs to cache
const urlsToCache = [
  '/',
  '/index.html',
  '/main.tsx',
  '/assets/styles/global.ts',
];

// Install event
self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  // Clean up old caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request)
        .then((response) => {
          // If cache is found, return cached response
          if (response) {
            return response;
          }

          // If not found in cache, fetch from network
          return fetch(event.request)
            .then((networkResponse) => {
              // Cache fetched response
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            })
            .catch(() => {
              // If fetch fails, return offline page
              return caches.match('/offline.html');
            });
        });
    })
  );
});
