const factTitle = document.getElementById('factTitle');
const factCard = document.getElementById('factCard');
const randomBtn = document.getElementById('randomFactBtn');
const actionBtns = document.querySelectorAll('.action-btn');

// Простой массив объектов
const factsDB = [
    { text: "Бананы — это ягоды", isTrue: true },
    { text: "Страусы прячут голову в песок от страха", isTrue: false },
    { text: "Осьминог имеет 3 сердца", isTrue: true }
];

let currentFact = null;

function changeFact() {
    factCard.classList.remove('fade-in');
    factCard.classList.add('fade-out');
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * factsDB.length);
        currentFact = factsDB[randomIndex];
        factTitle.textContent = currentFact.text.toUpperCase();
        factCard.classList.remove('fade-out');
        factCard.classList.add('fade-in');
    }, 300);
}

if (randomBtn) {
    randomBtn.addEventListener('click', changeFact);
}

// Обработчики кнопок
actionBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        console.log('Нажата кнопка:', this.textContent); // проверка в консоли
        if (!currentFact) {
            alert('Сначала получите факт!');
            return;
        }
        const userAnswer = this.dataset.answer === 'true';
        const isRight = (userAnswer === currentFact.isTrue);
        alert(isRight ? '✅ Верно!' : '❌ Неверно!');
    });
});

// Показать первый факт
changeFact();
