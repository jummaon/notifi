// Проверяем разрешение и планируем уведомление
function requestPermissionAndScheduleNotification() {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Уведомления разрешены');
            scheduleNotification();
        } else {
            console.log('Уведомления запрещены');
        }
    });
}

// Планируем уведомление через минуту
function scheduleNotification() {
    navigator.serviceWorker.register('service-worker.js').then((registration) => {
        console.log('Service Worker зарегистрирован');

        // Уведомление через 1 минуту
        setTimeout(() => {
            registration.showNotification('Привет снова!', {
                body: 'У вас в карзине 2 товар! Купите сегодня и получите 10% скидки и бесплатная доставка😉!',
                icon: 'https://via.placeholder.com/128', // Добавьте вашу иконку
                tag: 'repeat-notification',
            });
        }, 60000); // Через 1 минуту (60 000 мс)
    });
}

// Вызываем функцию каждый раз при загрузке страницы
requestPermissionAndScheduleNotification();
