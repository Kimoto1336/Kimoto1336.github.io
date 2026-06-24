// ========== БАЗА ФАКТОВ (такая же, как на главной) ==========
const categoriesData = {
  "Наука": [
    { text: "Вода проводит электричество", isTrue: false, argument: "Чистая вода — диэлектрик. Ток проводят растворённые в ней соли и примеси." },
    { text: "Стекло — это жидкость", isTrue: false, argument: "Стекло — аморфное твёрдое тело, а не жидкость." },
    { text: "Солнце — звезда среднего размера", isTrue: true, argument: "Солнце относится к классу жёлтых карликов." },
    { text: "Земля плоская", isTrue: false, argument: "Форма Земли — геоид, близка к шару." },
    { text: "Кислород — самый распространённый элемент в земной коре", isTrue: true, argument: "Кислород составляет около 46% массы земной коры." },
    { text: "Радуга имеет 7 цветов", isTrue: true, argument: "Традиционно выделяют 7 цветов, хотя спектр непрерывен." },
    { text: "Звук в космосе не распространяется", isTrue: true, argument: "В вакууме нет среды для передачи звуковых волн." },
    { text: "Горячая вода замерзает быстрее холодной", isTrue: true, argument: "Эффект Мпембы." },
    { text: "Человек использует только 10% мозга", isTrue: false, argument: "Нейровизуализация показывает активность почти всех участков." },
    { text: "Луна сделана из сыра", isTrue: false, argument: "Это шутка, Луна из горных пород." }
  ],
  "История": [
    { text: "Клеопатра жила ближе к открытию пиццы, чем к постройке пирамид", isTrue: true, argument: "Пирамида Хеопса ~2560 г. до н.э., пицца маргарита 1889 г." },
    { text: "Викинги носили рогатые шлемы", isTrue: false, argument: "Археологических подтверждений нет." },
    { text: "Наполеон был низкого роста", isTrue: false, argument: "Его рост 168 см — выше среднего француза того времени." },
    { text: "Великая Китайская стена видна из космоса", isTrue: false, argument: "Слишком тонкая, не видна невооружённым глазом." },
    { text: "Петр I запретил носить бороды под страхом штрафа", isTrue: true, argument: "В 1698 году ввёл налог на бороды." },
    { text: "Пираты носили повязку на глаз, чтобы видеть в темноте", isTrue: true, argument: "Глаз быстрее адаптировался к слабому освещению в трюме." }
  ],
  "Мемы": [
    { text: "Кот-барабанщик — вымерший вид", isTrue: false, argument: "Интернет-мем, не связанный с реальностью." },
    { text: "«Это Спарта!» — историческая фраза", isTrue: false, argument: "Из фильма '300 спартанцев'." },
    { text: "Шапочка из фольги защищает от чтения мыслей", isTrue: false, argument: "Фольга не блокирует радиоволны." },
    { text: "Рикроллинг — это насильственное кормление роллами", isTrue: false, argument: "Интернет-шутка с клипом Never Gonna Give You Up." },
    { text: "Мем «Доге» основан на реальной собаке Кабосу", isTrue: true, argument: "Сиба-ину Кабосу — звезда интернета с 2010 года." }
  ],
  "Животные": [
    { text: "У слонов 4 колена", isTrue: false, argument: "У слонов два колена и два локтя." },
    { text: "Кошки мяукают только людям", isTrue: true, argument: "Взрослые кошки редко мяукают друг другу." },
    { text: "Страусы прячут голову в песок от страха", isTrue: false, argument: "Они наклоняются, чтобы проверить гнездо." },
    { text: "Верблюды хранят воду в горбах", isTrue: false, argument: "В горбах — жировые запасы." },
    { text: "Выдры держатся за лапки, чтобы не потеряться во сне", isTrue: true, argument: "Мило и правда." },
    { text: "Ленивцы могут умереть от голода с полным желудком", isTrue: true, argument: "При холоде бактерии в животе перестают работать." }
  ],
  "Игры": [
    { text: "Марио — сантехник", isTrue: true, argument: "Официальная профессия Марио." },
    { text: "В игре Тетрис можно выиграть", isTrue: false, argument: "Классический Тетрис бесконечен." },
    { text: "Sonic the Hedgehog изначально был кроликом", isTrue: true, argument: "Дизайнеры сначала придумали кролика." },
    { text: "В Minecraft криперы — ошибка кода", isTrue: true, argument: "Нотч перепутал параметры свиньи." },
    { text: "Пакман создан под влиянием пиццы без одного куска", isTrue: true, argument: "Дизайнер вдохновился надкушенной пиццей." }
  ],
  "18+": [
    { text: "Презервативы в СССР называли «резиновое изделие №2»", isTrue: true, argument: "Изделие №2, №1 — противогаз." },
    { text: "Алкоголь улучшает потенцию", isTrue: false, argument: "В целом угнетает половую функцию." },
    { text: "Виагра была изобретена случайно", isTrue: true, argument: "Изначально для сердца." },
    { text: "Пиво увеличивает грудь у мужчин", isTrue: true, argument: "Хмель содержит фитоэстрогены." }
  ]
};

// ========== DOM-элементы ==========
const quizModeBtns = document.querySelectorAll('#quizModeSelector .category-btn');
const quizQuestion = document.getElementById('quizQuestion');
const quizAnswers = document.getElementById('quizAnswers');
const quizInfo = document.getElementById('quizInfo');
const nextBtn = document.getElementById('nextQuestionBtn');
const quizResult = document.getElementById('quizResult');
const toast = document.getElementById('resultToast');

// ========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
let currentMode = 'millionaire';
let questions = [];
let currentIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 0;
let answered = false;

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========
function showToast(message, isCorrect) {
  toast.textContent = message;
  toast.className = 'toast-hidden';
  toast.classList.add(isCorrect ? 'is-correct' : 'is-wrong');
  requestAnimationFrame(() => toast.classList.add('show-true'));
  setTimeout(() => {
    toast.classList.remove('is-correct', 'is-wrong', 'show-true');
  }, 1500);
}

function getAllFacts() {
  let all = [];
  for (const cat in categoriesData) {
    all = all.concat(categoriesData[cat]);
  }
  return all;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ========== ЗАГРУЗКА ВОПРОСОВ ==========
function loadQuestions(mode) {
  const allFacts = getAllFacts();
  let selectedFacts = [];
  const count = mode === 'millionaire' ? 15 : 10;

  if (mode === 'tricky') {
    const trickyPool = shuffle([
      ...categoriesData['Мемы'],
      ...categoriesData['18+'],
      ...categoriesData['История'].filter(() => Math.random() > 0.5),
      ...categoriesData['Наука'].filter(() => Math.random() > 0.5)
    ]);
    selectedFacts = trickyPool.slice(0, count);
    if (selectedFacts.length < count) {
      selectedFacts = selectedFacts.concat(shuffle(allFacts).slice(0, count - selectedFacts.length));
    }
  } else if (mode === 'millionaire') {
    // Для миллионера: 15 вопросов, каждый с 4 вариантами-фактами
    selectedFacts = shuffle(allFacts).slice(0, count);
  } else {
    selectedFacts = shuffle(allFacts).slice(0, count);
  }

  // Пулы фактов по истинности для генерации неправильных вариантов
  const trueFacts = allFacts.filter(f => f.isTrue);
  const falseFacts = allFacts.filter(f => !f.isTrue);

  questions = selectedFacts.map(fact => {
    if (mode === 'millionaire') {
      // Определяем, что мы ищем: правду или ложь
      const lookingForTrue = fact.isTrue;
      const questionText = lookingForTrue
        ? 'Какой из этих фактов является правдой?'
        : 'Какой из этих фактов является ложью?';

      // Правильный ответ — сам факт
      const correctAnswer = fact.text;

      // Подбираем три неправильных варианта с противоположным значением
      const oppositePool = lookingForTrue ? falseFacts : trueFacts;
      // Исключаем сам факт (он в любом случае не попадёт, т.к. у него другой статус)
      const wrongCandidates = shuffle([...oppositePool]).slice(0, 3);

      // Если не хватило (маловероятно), добавим факты с тем же статусом, но это нарушит логику.
      // Надёжнее дополнить фиктивными утверждениями, но оставим так – в реальности хватит.
      while (wrongCandidates.length < 3) {
        // Берём случайный факт из всех, но с фильтром, чтобы не совпадал с правильным
        const extra = shuffle(allFacts).find(f => f.text !== correctAnswer && !wrongCandidates.some(w => w.text === f.text));
        if (extra) wrongCandidates.push(extra);
        else break; // совсем крайний случай
      }

      const wrongTexts = wrongCandidates.map(f => f.text);
      const options = shuffle([correctAnswer, ...wrongTexts]);

      return {
        questionText,
        correctAnswer,
        options
      };
    } else {
      // Обычный режим и с подвохом: две кнопки «Правда»/«Ложь»
      const correctAnswer = fact.isTrue ? 'Правда' : 'Ложь';
      return {
        questionText: fact.text,   // для этих режимов вопрос = сам факт
        correctAnswer,
        options: ['Правда', 'Ложь']
      };
    }
  });
}

// ========== ОТОБРАЖЕНИЕ ВОПРОСА ==========
function renderQuestion() {
  if (currentIndex >= questions.length) {
    endQuiz();
    return;
  }
  const q = questions[currentIndex];

  // Устанавливаем текст вопроса
  quizQuestion.textContent = q.questionText;

  // Информационная строка (прогресс и очки)
  quizInfo.innerHTML = `Вопрос ${currentIndex + 1} / ${questions.length} | Очки: ${score}`;

  quizAnswers.innerHTML = '';
  answered = false;
  nextBtn.style.display = 'none';

  // Создаём кнопки вариантов
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'action-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleAnswer(opt, btn));
    quizAnswers.appendChild(btn);
  });

  // Таймер только для режима "На время"
  if (currentMode === 'timed') {
    startTimer();
  }
}

// ========== ОБРАБОТКА ОТВЕТА ==========
function handleAnswer(selected, btnElement) {
  if (answered) return;
  answered = true;

  if (currentMode === 'timed') {
    clearInterval(timer);
  }

  const q = questions[currentIndex];
  const isCorrect = (selected === q.correctAnswer);

  // Подсвечиваем все кнопки: правильную зелёным, неправильную (если нажата) красным
  document.querySelectorAll('#quizAnswers .action-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === q.correctAnswer) {
      btn.classList.add('correct-flash');
    } else if (btn === btnElement && !isCorrect) {
      btn.classList.add('wrong-flash');
    }
  });

  if (isCorrect) {
    score++;
    quizInfo.innerHTML = `Вопрос ${currentIndex + 1} / ${questions.length} | Очки: ${score} | ✅ Правильно!`;
    showToast('✅ Верно!', true);
  } else {
    quizInfo.innerHTML = `Вопрос ${currentIndex + 1} / ${questions.length} | Очки: ${score} | ❌ Неверно. Правильный ответ: ${q.correctAnswer}`;
    showToast(`❌ Неверно! Правильный ответ: ${q.correctAnswer}`, false);
  }

  nextBtn.style.display = 'inline-block';
  nextBtn.textContent = (currentIndex < questions.length - 1) ? 'Далее' : 'Закончить викторину';
}

// ========== ТАЙМЕР ДЛЯ РЕЖИМА "НА ВРЕМЯ" ==========
function startTimer() {
  timeLeft = 15;
  updateTimerDisplay();
  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timer);
      if (!answered) {
        const correct = questions[currentIndex].correctAnswer;
        showToast(`⏰ Время вышло! Ответ: ${correct}`, false);
        answered = true;
        document.querySelectorAll('#quizAnswers .action-btn').forEach(b => b.disabled = true);
        // Подсветка правильного ответа
        document.querySelectorAll('#quizAnswers .action-btn').forEach(btn => {
          if (btn.textContent === correct) btn.classList.add('correct-flash');
        });
        nextBtn.style.display = 'inline-block';
        nextBtn.textContent = (currentIndex < questions.length - 1) ? 'Далее' : 'Закончить викторину';
      }
    }
  }, 1000);
}

function updateTimerDisplay() {
  const existingTimer = document.getElementById('timerDisplay');
  if (existingTimer) existingTimer.remove();
  const timerDiv = document.createElement('div');
  timerDiv.id = 'timerDisplay';
  timerDiv.textContent = `⏳ ${timeLeft} сек`;
  timerDiv.style.fontWeight = 'bold';
  timerDiv.style.marginTop = '10px';
  quizAnswers.parentNode.insertBefore(timerDiv, nextBtn);
}

// ========== ПЕРЕХОД К СЛЕДУЮЩЕМУ ВОПРОСУ ==========
nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    renderQuestion();
  } else {
    endQuiz();
  }
});

// ========== ЗАВЕРШЕНИЕ ВИКТОРИНЫ ==========
function endQuiz() {
  if (currentMode === 'timed') clearInterval(timer);
  quizQuestion.textContent = 'Викторина завершена!';
  quizAnswers.innerHTML = '';
  nextBtn.style.display = 'none';
  quizInfo.innerHTML = `Ваш счёт: ${score} / ${questions.length}`;
  quizResult.style.display = 'block';
  quizResult.innerHTML = `
    <p>Вы ответили правильно на ${score} из ${questions.length} вопросов.</p>
    <button class="action-btn" id="restartQuiz">Пройти заново</button>
    <button class="action-btn" id="backToModes">К выбору режима</button>
  `;
  document.getElementById('restartQuiz').addEventListener('click', () => startQuiz(currentMode));
  document.getElementById('backToModes').addEventListener('click', resetToModeSelection);
}

// ========== ЗАПУСК ВИКТОРИНЫ ==========
function startQuiz(mode) {
  currentMode = mode;
  currentIndex = 0;
  score = 0;
  answered = false;
  loadQuestions(mode);
  document.getElementById('quizModeSelector').style.display = 'none';
  document.getElementById('quizContainer').style.display = 'block';
  quizResult.style.display = 'none';
  renderQuestion();
}

// ========== ВОЗВРАТ К ВЫБОРУ РЕЖИМА ==========
function resetToModeSelection() {
  document.getElementById('quizModeSelector').style.display = 'flex';
  document.getElementById('quizContainer').style.display = 'none';
  clearInterval(timer);
}

// ========== ОБРАБОТЧИКИ КНОПОК РЕЖИМОВ ==========
quizModeBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    quizModeBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const mode = this.dataset.mode;
    startQuiz(mode);
  });
});

// ========== ИНИЦИАЛИЗАЦИЯ ==========
resetToModeSelection();
