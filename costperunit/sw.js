self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('costperunit').then(function(cache) {
      return cache.addAll([
        '/costperunit/',
        '/costperunit/index.html',
        '/costperunit/script.js',
        '/costperunit/style.css'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});