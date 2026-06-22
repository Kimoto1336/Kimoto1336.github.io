

const factTitle = document.getElementById('factTitle');
const factCard = document.getElementById('factCard');
const randomBtn = document.getElementById('randomFactBtn');
const toast = document.getElementById('resultToast');
const actionBtns = document.querySelectorAll('.action-btn');

// База данных фактов (для демонстрации анимаций)
const factsDB = [
    "Бананы — это ягоды",
    "Осьминог имеет 3 сердца",
    "Страусы прячут голову в песок от страха",
    "В Австралии верблюдов больше, чем в Африке",
    "Самый холодный материк — Антарктида",
    "Динозавры не вымерли, они превратились в птиц"
];

// Функция смены факта с анимацией
function changeFact() {
    // Запускаем анимацию исчезновения
    factCard.classList.remove('fade-in');
    factCard.classList.add('fade-out');

    // Ждем окончания анимации (300мс), меняем текст и возвращаем карточку
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * factsDB.length);
        factTitle.textContent = factsDB[randomIndex].toUpperCase();
        
        // Включаем анимацию появления
        factCard.classList.remove('fade-out');
        factCard.classList.add('fade-in');
    }, 300);
}

// Обработчик кнопки "Получить случайный факт"
if (randomBtn) {
    randomBtn.addEventListener('click', changeFact);
}

// Функция показа всплывающего уведомления
function showToast(message, isCorrect) {
    toast.textContent = message;
    toast.className = 'toast-hidden'; // Сброс классов
    
    if (isCorrect) {
        toast.classList.add('is-correct');
    } else {
        toast.classList.add('is-wrong');
    }

    // Запуск анимации
    requestAnimationFrame(() => {
        toast.classList.add('show-toast');
    });

    // Скрыть через 1.5 секунды
    setTimeout(() => {
        toast.classList.remove('show-toast');
    }, 1500);
}

// Обработчики кнопок ПРАВДА / ЛОЖЬ
actionBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const answer = this.dataset.answer; // 'true' или 'false'
        
        // В реальном приложении здесь должна быть логика сравнения с правильным ответом
        // Для демонстрации сымитируем, что правильный ответ всегда "true"
        const isRight = (answer === 'true'); 
        const buttonText = this.textContent.trim();

        if (isRight) {
            showToast(`✅ Верно! Вы выбрали "${buttonText}"`, true);
            this.classList.add('correct-flash');
        } else {
            showToast(`❌ Неверно! Вы выбрали "${buttonText}"`, false);
            this.classList.add('wrong-flash');
        }

        // Снимаем цветовые эффекты через 500мс
        setTimeout(() => {
            this.classList.remove('correct-flash', 'wrong-flash');
        }, 500);
    });
});
