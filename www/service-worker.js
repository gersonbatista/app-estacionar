'use strict';

console.log('Service Worker Started', self);


self.addEventListener('activate', function (event) {

});

self.addEventListener('fetch', function (event) {

});

self.addEventListener('push', function (event) {
    console.log('Push message received', event);
    const title = 'New article on bitsofco.de';
    event.waitUntil(
        self.registration.showNotification(title, {
            body: 'Click to read the latest article',
            icon: './img/icon128.png',
            tag: 'new-article'
        })
    );

});

