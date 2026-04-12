const CACHE_NAME = "tree-app-v2";

const urlsToCache = [
  "./",
  "./index.html",
  "./model/model.json",
  "./model/metadata.json",
  "./model/weights.bin",
  "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.21.0",
  "https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"
];

// インストール
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// リクエスト処理
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
