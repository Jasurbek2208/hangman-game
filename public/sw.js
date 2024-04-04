const CacheKey = "hangman-uzbcha-ismlar-cache-v1";

const assetUrls = [
  '/',
  '../index.html',
  '../vercel.json',
  './names.json',
  '../src/main.tsx',
  '../src/App.tsx',
  './script.js',
  '../src/assets/styles/fonts.css',
  '../src/assets/styles/global.js',
  '../src/components/Fireworks.tsx',
  '../src/components/Keyboard.tsx',
  '../src/components/Modal.tsx',
  '../src/pages/Hangman.tsx'
]

const initCache = () => {
  return caches.open(CacheKey).then((cache) => {
    return cache.addAll(assetUrls);
  }, (error) => {
    console.log(error)
  });
};

const tryNetwork = (req, timeout) => {
  console.log(req)
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(reject, timeout);
    fetch(req).then((res) => {
      clearTimeout(timeoutId);
      const responseClone = res.clone();
      caches.open(CacheKey).then((cache) => {
        cache.put(req, responseClone)
      })
      resolve(res);
      // Reject also if network fetch rejects.
    }, reject);
  });
};

const getFromCache = (req) => {
  console.log('network is off so getting from cache...')
  return caches.open(CacheKey).then((cache) => {
    return cache.match(req).then((result) => {
      return result || Promise.reject("no-match");
    });
  });
};

self.addEventListener("install", (e) => {
  console.log("Installed");
  e.waitUntil(initCache());
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CacheKey) {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log("Try network and store result or get data from cache");
  // Try network and if it fails, go for the cached copy.
  e.respondWith(tryNetwork(e.request, 400).catch(() => getFromCache(e.request)));
});