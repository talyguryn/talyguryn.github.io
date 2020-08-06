let CACHE_KEY = 'costperunit';

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_KEY).then(function(cache) {
      return cache.addAll([
        '/costperunit/'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log(`The service worker is serving the asset ${e.request.url}`);

  e.respondWith(fromCache(e.request));

  e.waitUntil(
    update(e.request)
      .then(refresh)
  );
});

function fromCache(request) {
  return caches.open(CACHE_KEY).then(function (cache) {
    return cache.match(request);
  });
}

function update(request) {
  return caches.open(CACHE_KEY).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response.clone()).then(function () {
        return response;
      });
    });
  });
}

function refresh(response) {
  return self.clients.matchAll().then(function (clients) {
    clients.forEach(function (client) {
      var message = {
        type: 'refresh',
        url: response.url,
        eTag: response.headers.get('ETag')
      }

      client.postMessage(JSON.stringify(message));
    });
  });
}