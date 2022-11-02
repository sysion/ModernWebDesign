const staticCacheName = 'mwd_cache_v1';
const runtimeCacheName = 'runtime_cache_v1';
const offlineUrl = './offline.html';
const maxCacheSize = 150;

const cachedAssets = [
  './',
  './index.html',
  './behaviour.html',
  './taxevolution.html',
  './biology.html',
  './ecology.html',
  './humanrelation.html',
  './offline.html',
  './sw.js',
  './js/main.js',
  './js/picturefill.min.js',
  './js/prefixfree.min.js',
  './manifest.json',
  './css/style.css',
  './css/normalize.css',
  './css/fonts/oxygen-v15-latin/oxygen-v15-latin-700.ttf',
  './css/fonts/oxygen-v15-latin/oxygen-v15-latin-700.eot',
  './css/fonts/oxygen-v15-latin/oxygen-v15-latin-regular.woff',
  './css/fonts/oxygen-v15-latin/oxygen-v15-latin-regular.ttf',
  './css/fonts/oxygen-v15-latin/oxygen-v15-latin-700.woff',
  './css/fonts/oxygen-v15-latin/oxygen-v15-latin-regular.svg',
  './css/fonts/oxygen-v15-latin/oxygen-v15-latin-regular.eot',
  './css/fonts/oxygen-v15-latin/oxygen-v15-latin-700.woff2',
  './css/fonts/oxygen-v15-latin/oxygen-v15-latin-700.svg',
  './css/fonts/oxygen-v15-latin/oxygen-v15-latin-regular.woff2',
  './css/fonts/tangerine-v17-latin/tangerine-v17-latin-700.ttf',
  './css/fonts/tangerine-v17-latin/tangerine-v17-latin-regular.woff2',
  './css/fonts/tangerine-v17-latin/tangerine-v17-latin-700.svg',
  './css/fonts/tangerine-v17-latin/tangerine-v17-latin-regular.woff',
  './css/fonts/tangerine-v17-latin/tangerine-v17-latin-700.eot',
  './css/fonts/tangerine-v17-latin/tangerine-v17-latin-700.woff',
  './css/fonts/tangerine-v17-latin/tangerine-v17-latin-regular.ttf',
  './css/fonts/tangerine-v17-latin/tangerine-v17-latin-regular.eot',
  './css/fonts/tangerine-v17-latin/tangerine-v17-latin-regular.svg',
  './css/fonts/tangerine-v17-latin/tangerine-v17-latin-700.woff2',
  './favicon.ico',
  './image/walking-dog.jpg',
  './image/walking-dog-480.jpg',
  './image/sarabi-dog-280.jpg',
  './image/wilde_huendin.jpg',
  './image/header-background-320.jpg',
  './image/dog-skeleton-480.jpg',
  './image/cerberus-blake-480.jpg',
  './image/dog-skeleton-320.jpg',
  './image/wilde_huendin-920.jpg',
  './image/brooks_chase_ranger-768.jpg',
  './image/cerberus-blake-920.jpg',
  './image/black_dog-320.jpg',
  './image/walking-dog-920.jpg',
  './image/sarabi-dog-480.jpg',
  './image/cerberus-blake-768.jpg',
  './image/golden_retriever-920.jpg',
  './image/header-background-568.jpg',
  './image/wilde_huendin-768.jpg',
  './image/sarabi-dog-320.jpg',
  './image/golden_retriever-320.jpg',
  './image/walking-dog-568.jpg',
  './image/walking-dog-768.jpg',
  './image/header-background-920.jpg',
  './image/black_dog-280.jpg',
  './image/header-background-280.jpg',
  './image/nursing-puppies-280.jpg',
  './image/dog-skeleton.jpg',
  './image/sarabi-dog.jpg',
  './image/golden_retriever-768.jpg',
  './image/sarabi-dog-568.jpg',
  './image/brooks_chase_ranger-280.jpg',
  './image/wilde_huendin-320.jpg',
  './image/cerberus-blake-280.jpg',
  './image/labrador_retriever-480.jpg',
  './image/labrador_retriever-280.jpg',
  './image/nursing-puppies-568.jpg',
  './image/black_dog-768.jpg',
  './image/labrador_retriever-568.jpg',
  './image/black_dog-920.jpg',
  './image/labrador_retriever-920.jpg',
  './image/nursing-puppies-480.jpg',
  './image/black_dog.jpg',
  './image/labrador_retriever-320.jpg',
  './image/black_dog-568.jpg',
  './image/labrador_retriever.jpg',
  './image/dog-skeleton-768.jpg',
  './image/walking-dog-320.jpg',
  './image/nursing-puppies-768.jpg',
  './image/dog-skeleton-280.jpg',
  './image/sarabi-dog-768.jpg',
  './image/nursing-puppies-320.jpg',
  './image/wilde_huendin-480.jpg',
  './image/nursing-puppies-920.jpg',
  './image/black_dog-480.jpg',
  './image/golden_retriever-568.jpg',
  './image/cerberus-blake-568.jpg',
  './image/golden_retriever-480.jpg',
  './image/sarabi-dog-920.jpg',
  './image/brooks_chase_ranger-320.jpg',
  './image/brooks_chase_ranger-920.jpg',
  './image/nursing-puppies.jpg',
  './image/dog-skeleton-568.jpg',
  './image/golden_retriever-280.jpg',
  './image/cerberus-blake-320.jpg',
  './image/golden_retriever.jpg',
  './image/brooks_chase_ranger-480.jpg',
  './image/header-background-768.jpg',
  './image/cerberus-blake.jpg',
  './image/wilde_huendin-280.jpg',
  './image/brooks_chase_ranger.jpg',
  './image/labrador_retriever-768.jpg',
  './image/header-background.jpg',
  './image/walking-dog-280.jpg',
  './image/dog-skeleton-920.jpg',
  './image/brooks_chase_ranger-568.jpg',
  './image/wilde_huendin-568.jpg',
  './image/header-background-480.jpg',
  './icons/icon-512x512.png',
  './icons/icon-384x384.png',
  './icons/icon-256x256.png',
  './icons/icon-192x192.png',
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  console.log('[Service Worker] installed');

  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => cache.addAll(cachedAssets))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [staticCacheName, runtimeCacheName];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {  // get from cache
      if (cachedResponse) {
        return cachedResponse;
      }
      
      return caches.open(runtimeCacheName).then(cache => {  // open dynamic cache
        return fetch(event.request).then(response => {  // get from network
          // Put a copy of the response in the runtime cache.
          return cache.put(event.request, response.clone()).then(() => {
            limitCacheSize = (runtimeCacheName, maxCacheSize);    // limit runtimeCacheName size to maxCacheSize
            return response;
          });
        });
      });
    }).catch(err => {  // cache and network failed, return offline.html
        console.log(err);
       
        return caches.match(offlineUrl);
      })
  );
});

let limitCacheSize = (name, size) =>{
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if (keys.length > size){
        cache.delete(key[0]).then(limitCacheSize = (name, size));  // recursive call
      }
    })
  })
};