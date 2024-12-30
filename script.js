// Кнопка для запроса разрешения
const notifyBtn = document.getElementById('notify-btn');

// Функция для запроса разрешения
notifyBtn.addEventListener('click', async () => {
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
        alert('Уведомления разрешены! Мы отправим уведомление через несколько минут.');
        scheduleNotification();
    } else {
        alert('Вы отклонили разрешение на уведомления.');
    }
});

// Функция для планирования уведомления
function scheduleNotification() {
    // Регистрация Service Worker
    navigator.serviceWorker.register('service-worker.js').then((registration) => {
        console.log('Service Worker зарегистрирован');

        // Отправка уведомления через 1 минуту
        setTimeout(() => {
            registration.showNotification('Возвращайтесь!', {
                body: 'Мы скучаем по вам! Загляните на сайт ещё раз!',
                icon: 'https://via.placeholder.com/128', // Добавьте ссылку на иконку
                tag: 'return-notification', // Уникальный тег уведомления
            });
        }, 60000); // 60000 мс = 1 минута
    });
}
