// ========== DOM-ЭЛЕМЕНТЫ ==========
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
const ageModal = document.getElementById('ageModal');
const ageClose = document.getElementById('ageClose');
const ageYes = document.getElementById('ageYes');
const ageNo = document.getElementById('ageNo');

// ========== БАЗА ФАКТОВ ПО КАТЕГОРИЯМ ==========
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
    { text: "Чёрные дыры засасывают всё вокруг", isTrue: false, argument: "На расстоянии гравитация чёрной дыры такая же, как у обычной звезды той же массы." },
    { text: "Растения ночью дышат кислородом, как люди", isTrue: true, argument: "Ночью фотосинтез не идёт, и растения действительно потребляют кислород." },
    { text: "Луна вызывает приливы не только в океане, но и в земной коре", isTrue: true, argument: "Твёрдая поверхность Земли поднимается на несколько сантиметров." },
    { text: "Молния никогда не бьёт в одно место дважды", isTrue: false, argument: "Наоборот, высокие объекты притягивают молнии многократно." },
    { text: "Человек светится в темноте", isTrue: true, argument: "Биолюминесценция человека существует, но слишком слаба для наших глаз." },
    { text: "Облака весят сотни тонн", isTrue: true, argument: "Среднее кучевое облако весит около 500 тонн." },
    { text: "Помидор — это ягода", isTrue: true, argument: "С ботанической точки зрения помидор — ягода, как и банан." },
    { text: "Горячая вода замерзает быстрее холодной", isTrue: true, argument: "Эффект Мпембы — до сих пор не до конца объяснён, но наблюдается." },
    { text: "Зажигалка изобретена раньше спичек", isTrue: true, argument: "Первая зажигалка (огниво Дёберейнера) появилась в 1823 году, а спички — в 1826." },
    { text: "Луна сделана из сыра", isTrue: false, argument: "Это популярный миф из сказок. Луна состоит из горных пород." },
    { text: "Человек использует только 10% мозга", isTrue: false, argument: "Нейровизуализация показывает активность почти всех участков мозга." },
    { text: "Если громко кричать на лук во время готовки, слёз будет меньше", isTrue: false, argument: "Слёзы вызывает химическое вещество, а не страх лука." },
    { text: "Коровы выделяют больше метана, чем автомобили", isTrue: true, argument: "Особенно когда жуют и смотрят на проезжающие машины." }
  ],
  "История": [
    { text: "Клеопатра жила ближе к открытию пиццы, чем к постройке пирамид", isTrue: true, argument: "Пирамиду Хеопса построили около 2560 г. до н.э., Клеопатра правила в I веке до н.э., а пицца маргарита появилась в 1889 г." },
    { text: "Римская империя пала в 476 году", isTrue: true, argument: "Эта дата считается концом Западной Римской империи." },
    { text: "Викинги носили рогатые шлемы", isTrue: false, argument: "Никаких археологических подтверждений рогатых шлемов у викингов нет." },
    { text: "Наполеон был низкого роста", isTrue: false, argument: "Его рост составлял около 168 см, что было выше среднего француза того времени." },
    { text: "Колумб доказал, что Земля круглая", isTrue: false, argument: "Образованные люди знали о шарообразности Земли ещё в античности." },
    { text: "Великая Китайская стена видна из космоса", isTrue: false, argument: "Она слишком тонкая, чтобы быть различимой невооружённым глазом с орбиты." },
    { text: "В Древнем Риме была канализация", isTrue: true, argument: "Cloaca Maxima построена в VI веке до н.э." },
    { text: "Первая мировая война началась из-за убийства эрцгерцога", isTrue: true, argument: "Убийство Франца Фердинанда в 1914 году стало поводом для начала войны." },
    { text: "Петр I запретил носить бороды под страхом штрафа", isTrue: true, argument: "В 1698 году ввёл налог на бороды." },
    { text: "Пираты носили повязку на глаз, чтобы видеть в темноте", isTrue: true, argument: "Глаз, закрытый повязкой, быстрее адаптировался к слабому освещению в трюме." },
    { text: "В 1914 году на Рождество немецкие и английские солдаты играли в футбол", isTrue: true, argument: "Стихийное перемирие действительно сопровождалось игрой." },
    { text: "Средневековые туалеты назывались «гардеробами», потому что в них хранили одежду", isTrue: true, argument: "Запах отпугивал моль, но и гостей." },
    { text: "Чингисхан запретил воинам стирать одежду, чтобы не тратить воду", isTrue: true, argument: "Гигиена была не в приоритете, зато экология." }
  ],
  "Мемы": [
    { text: "Кот-барабанщик — вымерший вид", isTrue: false, argument: "Это интернет-мем с котом, играющим на барабанах." },
    { text: "«Это Спарта!» — историческая фраза", isTrue: false, argument: "Из фильма '300 спартанцев', в реальности такого не кричали." },
    { text: "Шапочка из фольги защищает от чтения мыслей", isTrue: false, argument: "Фольга не блокирует радиоволны." },
    { text: "Рикроллинг — это насильственное кормление роллами", isTrue: false, argument: "Это интернет-шутка с клипом Never Gonna Give You Up." },
    { text: "Человек-паук сказал: 'С большой силой приходит большая ответственность'", isTrue: true, argument: "Фраза впервые появилась в комиксах 1962 года." },
    { text: "Печенье предсказаний — традиционное китайское изобретение", isTrue: false, argument: "Придумали в США, в Китае его почти не знают." },
    { text: "Мем «Доге» основан на реальной собаке по кличке Кабосу", isTrue: true, argument: "Сиба-ину Кабосу стала звездой интернета в 2010 году." },
    { text: "Кот, который кричит на женщину за столом — это спор о веганстве", isTrue: false, argument: "На самом деле два разных стоковых фото." },
    { text: "Мем 'Я не кот' снят в суде по делу о разводе", isTrue: true, argument: "Адвокат случайно включил фильтр кота на Zoom во время слушания." },
    { text: "Картинка 'Успешный ребёнок' — стоковое фото", isTrue: true, argument: "Знаменитый мем из фотостока." }
  ],
  "Животные": [
    { text: "У слонов 4 колена", isTrue: false, argument: "У слонов два колена и два локтя, как у других четвероногих." },
    { text: "Кошки мяукают только людям", isTrue: true, argument: "Взрослые кошки редко мяукают друг другу." },
    { text: "Страусы прячут голову в песок от страха", isTrue: false, argument: "Это миф. Они наклоняются, чтобы проверить гнездо." },
    { text: "У осьминога прямоугольные зрачки", isTrue: true, argument: "Зрачки осьминогов вытянуты по горизонтали." },
    { text: "Верблюды хранят воду в горбах", isTrue: false, argument: "В горбах — жировые запасы." },
    { text: "Выдры держатся за лапки, чтобы не потеряться во сне", isTrue: true, argument: "Это мило и абсолютная правда." },
    { text: "Пингвины дарят друг другу камни в знак любви", isTrue: true, argument: "Брачный ритуал — практически помолвка с булыжником." },
    { text: "Ленивцы могут умереть от голода с полным желудком", isTrue: true, argument: "Если станет холодно, бактерии в их животе перестают работать." },
    { text: "Козы имеют акцент в зависимости от региона", isTrue: true, argument: "Их блеяние различается у разных популяций." },
    { text: "Слоны думают, что люди милые, как мы про щенков", isTrue: true, argument: "При виде людей у слонов активируются зоны умиления." },
    { text: "Броненосцы всегда рождают четверых близнецов", isTrue: true, argument: "Из одной яйцеклетки развиваются четыре идентичных детёныша." },
    { text: "Черепахи могут дышать через попу", isTrue: true, argument: "Некоторые виды способны к клоакальному дыханию под водой." },
    { text: "У жирафа столько же шейных позвонков, сколько у мыши", isTrue: true, argument: "Семь позвонков, как у почти всех млекопитающих." },
    { text: "Дельфины спят с одним открытым глазом", isTrue: true, argument: "Одно полушарие мозга отдыхает, другое бодрствует." },
    { text: "Белые медведи не заметны в инфракрасном свете", isTrue: true, argument: "Их шерсть очень хорошо изолирует тепло." }
  ],
  "Игры": [
    { text: "Марио — сантехник", isTrue: true, argument: "Официальная профессия Марио — сантехник, хотя он чаще спасает принцессу." },
    { text: "В игре Тетрис можно выиграть", isTrue: false, argument: "Классический Тетрис бесконечен." },
    { text: "Sonic the Hedgehog изначально был кроликом", isTrue: true, argument: "Изначально дизайнеры придумали кролика, но позже решили сделать ежа." },
    { text: "В Minecraft есть измерение Небеса", isTrue: false, argument: "Официально существуют только Нижний мир и Край." },
    { text: "Первая компьютерная игра с графикой — Pong", isTrue: false, argument: "До Pong вышла игра Spacewar! (1962) и Tennis for Two (1958)." },
    { text: "Симс разработал тот же человек, что и SimCity", isTrue: true, argument: "Уилл Райт придумал обе игры." },
    { text: "В Ведьмаке 3 можно найти пасхальное яйцо с Титаником", isTrue: true, argument: "В локации Скеллиге лежит затонувший корабль." },
    { text: "В Minecraft криперы изначально были ошибкой кода", isTrue: true, argument: "Нотч перепутал параметры свиньи и получил модель крипера." },
    { text: "Пакман был создан под влиянием пиццы без одного куска", isTrue: true, argument: "Дизайнер вдохновился видом надкушенной пиццы." },
    { text: "В The Sims персонажи могут умереть от смеха", isTrue: true, argument: "Эмоция «игривость» может перейти в истерику и смерть." },
    { text: "Персонаж Марио носит кепку, потому что у него нет времени рисовать волосы", isTrue: true, argument: "Так сказал Сигэру Миямото." }
  ],
  "18+": [
    { text: "Презервативы в СССР называли «резиновое изделие №2»", isTrue: true, argument: "Официальное название — «Изделие №2», №1 — противогаз." },
    { text: "Секс помогает похудеть", isTrue: true, argument: "За полчаса активного секса сжигается в среднем 100–200 калорий." },
    { text: "Алкоголь улучшает потенцию", isTrue: false, argument: "В малых дозах может снять напряжение, но в целом алкоголь угнетает половую функцию." },
    { text: "Виагра была изобретена случайно", isTrue: true, argument: "Изначально силденафил разрабатывали для лечения сердечных заболеваний." },
    { text: "Женщины говорят больше мужчин", isTrue: false, argument: "Исследования показывают, что оба пола говорят примерно одинаково." },
    { text: "Пиво увеличивает грудь у мужчин", isTrue: true, argument: "Хмель содержит фитоэстрогены, при чрезмерном употреблении может вызвать гинекомастию." },
    { text: "Самый продолжительный поцелуй в мире длился 58 часов", isTrue: true, argument: "Рекорд установлен в 2013 году в Таиланде." },
    { text: "Пиво изобрели женщины", isTrue: true, argument: "В древних культурах пивоварение часто было женским занятием." },
    { text: "В Японии разрешено жениться на виртуальных персонажах", isTrue: false, argument: "Нет юридической силы, хотя некоторые проводят неофициальные церемонии." },
    { text: "Первое вибраторное устройство изобрели для лечения истерии", isTrue: true, argument: "В XIX веке врачи использовали механические стимуляторы." },
    { text: "Секс-куклы были известны ещё в Древней Греции", isTrue: true, argument: "Археологи находили подобия из слоновой кости." },
    { text: "В Японии есть рестораны, где еду подают на голых телах", isTrue: true, argument: "Ньятаймори — традиция подачи суши на обнажённой женщине." },
    { text: "Самый дорогой презерватив стоит более 1000 долларов", isTrue: true, argument: "Существуют дизайнерские изделия." },
    { text: "Некоторые люди испытывают оргазм от чистки зубов", isTrue: true, argument: "Синдром спонтанной эйфории, хотя крайне редкий." }
  ]
};

// ========== СОСТОЯНИЕ ==========
let currentFact = null;
let currentCategory = 'all'; // все категории, кроме 18+
let answerGiven = false;
let ageConfirmed = false;

// Защита от повторов
const shownFactsByCategory = {};

// ========== ФУНКЦИИ ==========
function getRandomFact(category = 'all') {
  let facts;
  if (category === 'all') {
    // Все категории, кроме 18+
    facts = [];
    for (const [cat, catFacts] of Object.entries(categoriesData)) {
      if (cat !== '18+') {
        facts = facts.concat(catFacts);
      }
    }
  } else {
    facts = categoriesData[category];
  }

  if (!shownFactsByCategory[category]) {
    shownFactsByCategory[category] = new Set();
  }
  const shownSet = shownFactsByCategory[category];

  if (shownSet.size >= facts.length) {
    shownSet.clear();
  }

  const availableIndices = [];
  for (let i = 0; i < facts.length; i++) {
    if (!shownSet.has(i)) {
      availableIndices.push(i);
    }
  }

  const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
  shownSet.add(randomIndex);
  return facts[randomIndex];
}

function resetUI() {
  answerGiven = false;
  actionBtns.forEach(b => b.disabled = false);
  if (hintStar) hintStar.classList.remove('active');
}

function changeFact() {
  resetUI();

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

// ========== ОБРАБОТЧИКИ ==========
// Кнопка "Случайный факт"
if (randomBtn) {
  randomBtn.addEventListener('click', () => {
    if (!answerGiven) {
      showToast("Сначала ответьте на текущий факт!", false);
      return;
    }
    changeFact();
  });
}

// Кнопки "Правда"/"Ложь"
actionBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    if (answerGiven || !currentFact) {
      if (!currentFact) showToast("Сначала получите факт!", false);
      return;
    }

    const userAnswer = this.dataset.answer === 'true';
    const isRight = (userAnswer === currentFact.isTrue);
    const buttonText = this.textContent.trim();

    if (isRight) {
      factTitle.textContent = "✅ Верно, ответ правильный";
    } else {
      factTitle.textContent = "❌ Неверно, ответ неверный";
    }

    if (isRight) {
      showToast(`✅ Верно! Вы выбрали "${buttonText}"`, true);
      this.classList.add('correct-flash');
    } else {
      showToast(`❌ Неверно! Вы выбрали "${buttonText}"`, false);
      this.classList.add('wrong-flash');
    }

    answerGiven = true;
    actionBtns.forEach(b => b.disabled = true);

    if (hintStar) hintStar.classList.add('active');

    setTimeout(() => {
      this.classList.remove('correct-flash', 'wrong-flash');
    }, 500);
  });
});

// Звезда-подсказка
if (hintStar) {
  hintStar.addEventListener('click', () => {
    if (!currentFact) {
      showToast("Нет факта для подсказки", false);
      return;
    }
    if (!answerGiven) {
      showToast("Сначала ответьте на факт!", false);
      return;
    }
    hintBadge.textContent = currentFact.isTrue ? 'Правда' : 'Ложь';
    hintBadge.style.backgroundColor = currentFact.isTrue ? '#4CAF50' : '#F44336';
    hintText.textContent = currentFact.argument;
    hintModal.style.display = 'flex';
  });
}

if (hintClose) {
  hintClose.addEventListener('click', () => {
    hintModal.style.display = 'none';
  });
}

window.addEventListener('click', (e) => {
  if (e.target === hintModal) hintModal.style.display = 'none';
  if (e.target === ageModal) ageModal.style.display = 'none';
});

// Категории с подтверждением возраста
function switchCategory(categoryName) {
  categoryBtns.forEach(b => b.classList.remove('active'));
  categoryBtns.forEach(b => {
    if (b.textContent.trim() === categoryName) b.classList.add('active');
  });

  if (categoriesData[categoryName]) {
    currentCategory = categoryName;
  } else {
    currentCategory = 'all';
  }
  changeFact();
}

categoryBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const categoryName = this.textContent.trim();

    if (categoryName === '18+' && !ageConfirmed) {
      ageModal.style.display = 'flex';
      return;
    }

    switchCategory(categoryName);
  });
});

// Модальное окно возраста
ageYes.addEventListener('click', () => {
  ageConfirmed = true;
  ageModal.style.display = 'none';
  switchCategory('18+');
});

ageNo.addEventListener('click', () => {
  ageModal.style.display = 'none';
  showToast('🔞 Доступ к категории 18+ только для взрослых!', false);
});

if (ageClose) {
  ageClose.addEventListener('click', () => {
    ageModal.style.display = 'none';
  });
}

// ========== ЗАПУСК ==========
changeFact();
