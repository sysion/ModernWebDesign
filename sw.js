const staticCacheName = 'mwd_cache_v1';
const runtimeCacheName = 'runtime_cache_v1';
const offlineUrl = './ModernWebDesign/offline.html';
const maxCacheSize = 150;

const cachedAssets = [
  './ModernWebDesign/',
  './ModernWebDesign/index.html',
  './ModernWebDesign/behaviour.html',
  './ModernWebDesign/taxevolution.html',
  './ModernWebDesign/biology.html',
  './ModernWebDesign/ecology.html',
  './ModernWebDesign/humanrelation.html',
  './ModernWebDesign/offline.html',
  './ModernWebDesign/sw.js',
  './ModernWebDesign/js/main.js',
  './ModernWebDesign/js/picturefill.min.js',
  './ModernWebDesign/js/prefixfree.min.js',
  './ModernWebDesign/manifest.json',
  './ModernWebDesign/css/style.css',
  './ModernWebDesign/css/normalize.css',
  './ModernWebDesign/css/fonts/oxygen-v15-latin/oxygen-v15-latin-700.ttf',
  './ModernWebDesign/css/fonts/oxygen-v15-latin/oxygen-v15-latin-700.eot',
  './ModernWebDesign/css/fonts/oxygen-v15-latin/oxygen-v15-latin-regular.woff',
  './ModernWebDesign/css/fonts/oxygen-v15-latin/oxygen-v15-latin-regular.ttf',
  './ModernWebDesign/css/fonts/oxygen-v15-latin/oxygen-v15-latin-700.woff',
  './ModernWebDesign/css/fonts/oxygen-v15-latin/oxygen-v15-latin-regular.svg',
  './ModernWebDesign/css/fonts/oxygen-v15-latin/oxygen-v15-latin-regular.eot',
  './ModernWebDesign/css/fonts/oxygen-v15-latin/oxygen-v15-latin-700.woff2',
  './ModernWebDesign/css/fonts/oxygen-v15-latin/oxygen-v15-latin-700.svg',
  './ModernWebDesign/css/fonts/oxygen-v15-latin/oxygen-v15-latin-regular.woff2',
  './ModernWebDesign/css/fonts/tangerine-v17-latin/tangerine-v17-latin-700.ttf',
  './ModernWebDesign/css/fonts/tangerine-v17-latin/tangerine-v17-latin-regular.woff2',
  './ModernWebDesign/css/fonts/tangerine-v17-latin/tangerine-v17-latin-700.svg',
  './ModernWebDesign/css/fonts/tangerine-v17-latin/tangerine-v17-latin-regular.woff',
  './ModernWebDesign/css/fonts/tangerine-v17-latin/tangerine-v17-latin-700.eot',
  './ModernWebDesign/css/fonts/tangerine-v17-latin/tangerine-v17-latin-700.woff',
  './ModernWebDesign/css/fonts/tangerine-v17-latin/tangerine-v17-latin-regular.ttf',
  './ModernWebDesign/css/fonts/tangerine-v17-latin/tangerine-v17-latin-regular.eot',
  './ModernWebDesign/css/fonts/tangerine-v17-latin/tangerine-v17-latin-regular.svg',
  './ModernWebDesign/css/fonts/tangerine-v17-latin/tangerine-v17-latin-700.woff2',
  './ModernWebDesign/favicon.ico',
  './ModernWebDesign/image/walking-dog.jpg',
  './ModernWebDesign/image/walking-dog-480.jpg',
  './ModernWebDesign/image/sarabi-dog-280.jpg',
  './ModernWebDesign/image/wilde_huendin.jpg',
  './ModernWebDesign/image/header-background-320.jpg',
  './ModernWebDesign/image/dog-skeleton-480.jpg',
  './ModernWebDesign/image/cerberus-blake-480.jpg',
  './ModernWebDesign/image/dog-skeleton-320.jpg',
  './ModernWebDesign/image/wilde_huendin-920.jpg',
  './ModernWebDesign/image/brooks_chase_ranger-768.jpg',
  './ModernWebDesign/image/cerberus-blake-920.jpg',
  './ModernWebDesign/image/black_dog-320.jpg',
  './ModernWebDesign/image/walking-dog-920.jpg',
  './ModernWebDesign/image/sarabi-dog-480.jpg',
  './ModernWebDesign/image/cerberus-blake-768.jpg',
  './ModernWebDesign/image/golden_retriever-920.jpg',
  './ModernWebDesign/image/header-background-568.jpg',
  './ModernWebDesign/image/wilde_huendin-768.jpg',
  './ModernWebDesign/image/sarabi-dog-320.jpg',
  './ModernWebDesign/image/golden_retriever-320.jpg',
  './ModernWebDesign/image/walking-dog-568.jpg',
  './ModernWebDesign/image/walking-dog-768.jpg',
  './ModernWebDesign/image/header-background-920.jpg',
  './ModernWebDesign/image/black_dog-280.jpg',
  './ModernWebDesign/image/header-background-280.jpg',
  './ModernWebDesign/image/nursing-puppies-280.jpg',
  './ModernWebDesign/image/dog-skeleton.jpg',
  './ModernWebDesign/image/sarabi-dog.jpg',
  './ModernWebDesign/image/golden_retriever-768.jpg',
  './ModernWebDesign/image/sarabi-dog-568.jpg',
  './ModernWebDesign/image/brooks_chase_ranger-280.jpg',
  './ModernWebDesign/image/wilde_huendin-320.jpg',
  './ModernWebDesign/image/cerberus-blake-280.jpg',
  './ModernWebDesign/image/labrador_retriever-480.jpg',
  './ModernWebDesign/image/labrador_retriever-280.jpg',
  './ModernWebDesign/image/nursing-puppies-568.jpg',
  './ModernWebDesign/image/black_dog-768.jpg',
  './ModernWebDesign/image/labrador_retriever-568.jpg',
  './ModernWebDesign/image/black_dog-920.jpg',
  './ModernWebDesign/image/labrador_retriever-920.jpg',
  './ModernWebDesign/image/nursing-puppies-480.jpg',
  './ModernWebDesign/image/black_dog.jpg',
  './ModernWebDesign/image/labrador_retriever-320.jpg',
  './ModernWebDesign/image/black_dog-568.jpg',
  './ModernWebDesign/image/labrador_retriever.jpg',
  './ModernWebDesign/image/dog-skeleton-768.jpg',
  './ModernWebDesign/image/walking-dog-320.jpg',
  './ModernWebDesign/image/nursing-puppies-768.jpg',
  './ModernWebDesign/image/dog-skeleton-280.jpg',
  './ModernWebDesign/image/sarabi-dog-768.jpg',
  './ModernWebDesign/image/nursing-puppies-320.jpg',
  './ModernWebDesign/image/wilde_huendin-480.jpg',
  './ModernWebDesign/image/nursing-puppies-920.jpg',
  './ModernWebDesign/image/black_dog-480.jpg',
  './ModernWebDesign/image/golden_retriever-568.jpg',
  './ModernWebDesign/image/cerberus-blake-568.jpg',
  './ModernWebDesign/image/golden_retriever-480.jpg',
  './ModernWebDesign/image/sarabi-dog-920.jpg',
  './ModernWebDesign/image/brooks_chase_ranger-320.jpg',
  './ModernWebDesign/image/brooks_chase_ranger-920.jpg',
  './ModernWebDesign/image/nursing-puppies.jpg',
  './ModernWebDesign/image/dog-skeleton-568.jpg',
  './ModernWebDesign/image/golden_retriever-280.jpg',
  './ModernWebDesign/image/cerberus-blake-320.jpg',
  './ModernWebDesign/image/golden_retriever.jpg',
  './ModernWebDesign/image/brooks_chase_ranger-480.jpg',
  './ModernWebDesign/image/header-background-768.jpg',
  './ModernWebDesign/image/cerberus-blake.jpg',
  './ModernWebDesign/image/wilde_huendin-280.jpg',
  './ModernWebDesign/image/brooks_chase_ranger.jpg',
  './ModernWebDesign/image/labrador_retriever-768.jpg',
  './ModernWebDesign/image/header-background.jpg',
  './ModernWebDesign/image/walking-dog-280.jpg',
  './ModernWebDesign/image/dog-skeleton-920.jpg',
  './ModernWebDesign/image/brooks_chase_ranger-568.jpg',
  './ModernWebDesign/image/wilde_huendin-568.jpg',
  './ModernWebDesign/image/header-background-480.jpg',
  './ModernWebDesign/icons/icon-512x512.png',
  './ModernWebDesign/icons/icon-384x384.png',
  './ModernWebDesign/icons/icon-256x256.png',
  './ModernWebDesign/icons/icon-192x192.png'
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