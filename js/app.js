const factTitle = document.getElementById('factTitle');
const factCard = document.getElementById('factCard');
const randomBtn = document.getElementById('randomFactBtn');
const toast = document.getElementById('resultToast');
const actionBtns = document.querySelectorAll('.action-btn');
const hintStar = document.getElementById('hintStar');
const hintModal = document.getElementById('hintModal');
const hintClose = document.getElementById('hintClose');
const hintBadge = document.getElementById('hintBadge');
const hintText = document.getElementById('hintText');
const categoryBtns = document.querySelectorAll('.category-btn');

// =================== БАЗА ФАКТОВ ПО КАТЕГОРИЯМ ===================
const categoriesData = {
  "Наука": [
    { text: "Вода проводит электричество", isTrue: false, argument: "Чистая вода — диэлектрик. Ток проводят растворённые в ней соли и примеси." },
    { text: "Стекло — это жидкость", isTrue: false, argument: "Стекло — аморфное твёрдое тело, а не жидкость. Миф возник из-за старых окон." },
    { text: "Солнце — звезда среднего размера", isTrue: true, argument: "Солнце относится к классу жёлтых карликов, это средний размер среди звёзд." },
    { text: "Земля плоская", isTrue: false, argument: "Форма Земли — геоид, близка к шару. Доказано тысячами лет наблюдений." },
    { text: "Атомы не видны в микроскоп", isTrue: false, argument: "Современные электронные микроскопы позволяют видеть отдельные атомы." },
    { text: "Кислород — самый распространённый элемент в земной коре", isTrue: true, argument: "Кислород составляет около 46% массы земной коры." },
    { text: "Радуга имеет 7 цветов", isTrue: true, argument: "Традиционно выделяют 7 цветов, хотя спектр непрерывен." },
    { text: "Звук в космосе не распространяется", isTrue: true, argument: "В вакууме нет среды для передачи звуковых волн." },
    { text: "Вирусы — живые организмы", isTrue: false, argument: "Большинство учёных не считают вирусы живыми, так как у них нет клеточного строения." },
    { text: "Чёрные дыры засасывают всё вокруг", isTrue: false, argument: "На расстоянии гравитация чёрной дыры такая же, как у обычной звезды той же массы." }
  ],
  "История": [
    { text: "Клеопатра жила ближе к открытию пиццы, чем к постройке пирамид", isTrue: true, argument: "Пирамиду Хеопса построили около 2560 г. до н.э., Клеопатра правила в I веке до н.э., а пицца маргарита появилась в 1889 г." },
    { text: "Римская империя пала в 476 году", isTrue: true, argument: "Эта дата считается концом Западной Римской империи." },
    { text: "Викинги носили рогатые шлемы", isTrue: false, argument: "Никаких археологических подтверждений рогатых шлемов у викингов нет, это образ из оперы XIX века." },
    { text: "Наполеон был низкого роста", isTrue: false, argument: "Его рост составлял около 168 см, что было выше среднего француза того времени." },
    { text: "Колумб доказал, что Земля круглая", isTrue: false, argument: "Образованные люди знали о шарообразности Земли ещё в античности." },
    { text: "Великая Китайская стена видна из космоса", isTrue: false, argument: "Она слишком тонкая, чтобы быть различимой невооружённым глазом с орбиты." },
    { text: "В Древнем Риме была канализация", isTrue: true, argument: "Cloaca Maxima построена в VI веке до н.э. и использовалась для отвода сточных вод." },
    { text: "Первая мировая война началась из-за убийства эрцгерцога", isTrue: true, argument: "Убийство Франца Фердинанда в 1914 году стало поводом для начала войны." }
  ],
  "Мемы": [
    { text: "Кот-барабанщик — вымерший вид", isTrue: false, argument: "Это интернет-мем с котом, играющим на барабанах, не связанный с реальностью." },
    { text: "«Это Спарта!» — историческая фраза", isTrue: false, argument: "В реальности спартанцы не выкрикивали эту фразу, она из фильма '300 спартанцев'." },
    { text: "Шапочка из фольги защищает от чтения мыслей", isTrue: false, argument: "Фольга не блокирует радиоволны, это популярный мем о паранойе." },
    { text: "Рикроллинг — это насильственное кормление роллами", isTrue: false, argument: "Это интернет-шутка, когда пользователя обманом заставляют смотреть клип Never Gonna Give You Up." },
    { text: "Пикачу — самый сильный покемон", isTrue: false, argument: "По игровой механике есть покемоны сильнее, например, Мьюту или Рейкваза." },
    { text: "Человек-паук сказал: 'С большой силой приходит большая ответственность'", isTrue: true, argument: "Эта фраза впервые появилась в комиксах Amazing Fantasy #15 в 1962 году." },
    { text: "Печенье предсказаний — традиционное китайское изобретение", isTrue: false, argument: "На самом деле печенье с предсказаниями придумали в США, в Китае его почти не знают." }
  ],
  "Животные": [
    { text: "У слонов 4 колена", isTrue: false, argument: "У слонов два колена и два локтя, как у других четвероногих." },
    { text: "Кошки мяукают только людям", isTrue: true, argument: "Взрослые кошки редко мяукают друг другу, этот звук предназначен для общения с человеком." },
    { text: "Страусы прячут голову в песок от страха", isTrue: false, argument: "Это миф. Они наклоняются, чтобы проверить гнездо, или ложатся для маскировки." },
    { text: "У осьминога прямоугольные зрачки", isTrue: true, argument: "Зрачки осьминогов вытянуты по горизонтали, иногда кажутся прямоугольными." },
    { text: "Ленивцы умирают, спускаясь в туалет", isTrue: false, argument: "Они спускаются раз в неделю для дефекации, это опасный момент, но не смертельный специально." },
    { text: "Богомол может съесть самца после спаривания", isTrue: true, argument: "У многих видов богомолов самка иногда поедает самца, но не всегда." },
    { text: "Верблюды хранят воду в горбах", isTrue: false, argument: "В горбах — жировые запасы, которые при окислении дают воду, но напрямую воду они не хранят." }
  ],
  "Игры": [
    { text: "Марио — сантехник", isTrue: true, argument: "Официальная профессия Марио — сантехник, хотя он чаще спасает принцессу." },
    { text: "В игре Тетрис можно выиграть", isTrue: false, argument: "Классический Тетрис бесконечен, фигуры падают до тех пор, пока не заполнится стакан." },
    { text: "Sonic the Hedgehog изначально был кроликом", isTrue: true, argument: "Изначально дизайнеры придумали кролика, но позже решили сделать ежа." },
    { text: "Покемоны эволюционируют в реальном времени", isTrue: false, argument: "Эволюция в играх происходит мгновенно после выполнения условий, а не постепенно." },
    { text: "В Minecraft есть измерение Небеса", isTrue: false, argument: "Официально существуют только Нижний мир и Край, слухи о Небесах — фанатская выдумка." },
    { text: "Первая компьютерная игра с графикой — Pong", isTrue: false, argument: "До Pong вышла игра Spacewar! (1962), а также Tennis for Two (1958)." }
  ],
  "18+": [
    { text: "Презервативы в СССР называли «резиновое изделие №2»", isTrue: true, argument: "Официальное название — «Изделие №2», №1 — противогаз." },
    { text: "Секс помогает похудеть", isTrue: true, argument: "За полчаса активного секса сжигается в среднем 100–200 калорий." },
    { text: "Алкоголь улучшает потенцию", isTrue: false, argument: "В малых дозах может снять напряжение, но в целом алкоголь угнетает половую функцию." },
    { text: "Виагра была изобретена случайно", isTrue: true, argument: "Изначально силденафил разрабатывали для лечения сердечных заболеваний." },
    { text: "Женщины говорят больше мужчин", isTrue: false, argument: "Исследования показывают, что оба пола говорят примерно одинаково (около 16 000 слов в день)." },
    { text: "Пиво увеличивает грудь у мужчин", isTrue: true, argument: "Хмель содержит фитоэстрогены, при чрезмерном употреблении может вызвать гинекомастию." }
  ]
};

// =================== ПЕРЕМЕННЫЕ СОСТОЯНИЯ ===================
let currentFact = null;
let currentCategory = 'all';
let answerPending = false; // блокировка повторных нажатий

// =================== ФУНКЦИИ ===================
function getRandomFact(category = 'all') {
  if (category === 'all') {
    const allFacts = Object.values(categoriesData).flat();
    return allFacts[Math.floor(Math.random() * allFacts.length)];
  } else {
    const facts = categoriesData[category];
    return facts[Math.floor(Math.random() * facts.length)];
  }
}

function changeFact() {
  // Сбрасываем блокировку ответа
  answerPending = false;
  // Включаем кнопки обратно (на случай, если были отключены)
  actionBtns.forEach(b => b.disabled = false);

  factCard.classList.remove('fade-in');
  factCard.classList.add('fade-out');

  setTimeout(() => {
    currentFact = getRandomFact(currentCategory);
    factTitle.textContent = currentFact.text.toUpperCase();
    
    factCard.classList.remove('fade-out');
    factCard.classList.add('fade-in');
  }, 300);
}

function showToast(message, isCorrect) {
  toast.textContent = message;
  toast.className = 'toast-hidden';
  if (isCorrect) {
    toast.classList.add('is-correct');
  } else {
    toast.classList.add('is-wrong');
  }
  requestAnimationFrame(() => {
    toast.classList.add('show-toast');
  });
  setTimeout(() => {
    toast.classList.remove('show-toast');
  }, 1500);
}

// =================== ОБРАБОТЧИКИ ===================
if (randomBtn) {
  randomBtn.addEventListener('click', changeFact);
}

// Кнопки ПРАВДА / ЛОЖЬ (главное изменение)
actionBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // Защита от повторных ответов и отсутствия факта
    if (answerPending || !currentFact) {
      if (!currentFact) showToast("Сначала получите факт!", false);
      return;
    }

    const userAnswer = this.dataset.answer === 'true';
    const isRight = (userAnswer === currentFact.isTrue);
    const buttonText = this.textContent.trim();

    // Меняем текст факта на аргумент и результат
    const resultEmoji = isRight ? '✅' : '❌';
    const resultText = isRight ? 'Верно!' : 'Неверно!';
    factTitle.textContent = `${resultEmoji} ${resultText} ${currentFact.argument}`;

    // Показываем тост
    if (isRight) {
      showToast(`✅ Верно! Вы выбрали "${buttonText}"`, true);
      this.classList.add('correct-flash');
    } else {
      showToast(`❌ Неверно! Вы выбрали "${buttonText}"`, false);
      this.classList.add('wrong-flash');
    }

    // Блокируем кнопки до следующего факта
    answerPending = true;
    actionBtns.forEach(b => b.disabled = true);

    // Убираем цветовые эффекты через 500мс
    setTimeout(() => {
      this.classList.remove('correct-flash', 'wrong-flash');
    }, 500);

    // Автоматически загружаем следующий факт через 2.5 секунды
    setTimeout(() => {
      changeFact();
    }, 2500);
  });
});

// Подсказка (звезда) — без изменений
hintStar.addEventListener('click', () => {
  if (!currentFact) {
    showToast("Нет факта для подсказки", false);
    return;
  }
  hintBadge.textContent = currentFact.isTrue ? 'Правда' : 'Ложь';
  hintBadge.style.backgroundColor = currentFact.isTrue ? '#4CAF50' : '#F44336';
  hintText.textContent = currentFact.argument;
  hintModal.style.display = 'flex';
});

hintClose.addEventListener('click', () => {
  hintModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === hintModal) {
    hintModal.style.display = 'none';
  }
});

// Категории
categoryBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    categoryBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    const categoryName = this.textContent.trim();
    if (categoriesData[categoryName]) {
      currentCategory = categoryName;
    } else {
      currentCategory = 'all';
    }
    changeFact();
  });
});

// =================== ЗАПУСК ===================
changeFact();
