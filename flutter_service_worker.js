'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "79037c94fd090992b85ccfbc16ce1cbf",
"/": "79037c94fd090992b85ccfbc16ce1cbf",
"main.dart.js": "8a23d8604683ce4a4a71ca356de3cd1e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e738928d48088a3a449b71309d8a284f",
"assets/LICENSE": "31b2b27d833d363dced05d2493cd2f9f",
"assets/AssetManifest.json": "fb5f9e9f6af7b7757777987c5b2d42fd",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/ongoing.jpg": "6ed27729a29280dedd77a07d4f69033e",
"assets/assets/images/twitter.png": "f29106f6f82f24c14018283fd2e3a917",
"assets/assets/images/insta.png": "0e19f2fe7f866bd17bda9b0b62091227",
"assets/assets/images/linkedin.png": "34c68c57b8cedbf66c2ea14becfc3ff8",
"assets/assets/images/facebook.png": "8f5ce27564945d2c9a10ef827549a78c"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
