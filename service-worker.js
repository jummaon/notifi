self.addEventListener('install', (event) => {
    console.log('Service Worker установлен');
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close(); // Закрытие уведомления

    // Открыть сайт, если уведомление нажато
    event.waitUntil(
        clients.openWindow('https://yourwebsite.com') // Замените на ваш URL
    );
});
