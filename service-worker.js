self.addEventListener('install', (event) => {
    console.log('Service Worker установлен');
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close(); // Закрыть уведомление
    event.waitUntil(
        clients.openWindow('https://yourwebsite.com') // Замените на ваш URL
    );
});
