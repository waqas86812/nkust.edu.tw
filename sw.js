self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll([
        'C:\Users\avita\Documents\code\20220422\image',
        'C:\Users\avita\Documents\code\20220422\image\index.html',
        'C:\Users\avita\Documents\code\20220422\image\index.js',
        'C:\Users\avita\Documents\code\20220422\image\style.css',
        'C:\Users\avita\Documents\code\20220422\image\fox1.jpg',
        'C:\Users\avita\Documents\code\20220422\image\fox2.jpg',
        'C:\Users\avita\Documents\code\20220422\image\fox3.jpg',
        'C:\Users\avita\Documents\code\20220422\image\fox4.jpg',
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });