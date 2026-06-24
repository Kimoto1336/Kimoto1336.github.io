// ========== БАЗА ФАКТОВ (такая же, как на главной) ==========
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
    { text: "Коровы выделяют больше метана, чем автомобили", isTrue: true, argument: "Особенно когда жуют и смотрят на проезжающие машины." },
    { text: "В Антарктиде есть озеро, которое не замерзает при -50°C", isTrue: true, argument: "Озеро Дон-Жуан настолько солёное, что остаётся жидким." },
    { text: "Сахар вызывает гиперактивность у детей", isTrue: false, argument: "Научные исследования не подтверждают эту связь." },
    { text: "Магнитное поле Земли переворачивается раз в миллион лет", isTrue: true, argument: "За историю планеты полюса менялись местами сотни раз." },
    { text: "Если долго смотреть на микроволновку, можно получить сверхспособности", isTrue: false, argument: "Микроволновка не даёт радиацию, а стекло лишь экранирует волны." },
    { text: "Сахар не растворяется в бензине, но зато в нём можно хранить секреты", isTrue: false, argument: "Сахар не растворим в бензине, но это не метод шифрования." },
{ text: "Алмазы можно получить из арахисового масла", isTrue: true, argument: "Теоретически возможно при сверхвысоком давлении, но крайне неэффективно." },
    { text: "Если собрать все нервы человека в одну линию, она обернёт Землю 2.5 раза", isTrue: true, argument: "Суммарная длина нервных волокон — около 100 000 км." },
    { text: "Кристаллы льда всегда шестиугольные", isTrue: true, argument: "Молекулы воды образуют гексагональную решётку." },
    { text: "В вакууме перо и молоток падают с одинаковой скоростью", isTrue: true, argument: "Гравитация действует одинаково, без сопротивления воздуха." },
    { text: "Акулы умирают, если перестанут двигаться", isTrue: false, argument: "Только некоторые виды акул, а большинство могут качать воду через жабры в покое." }
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
    { text: "Чингисхан запретил воинам стирать одежду, чтобы не тратить воду", isTrue: true, argument: "Гигиена была не в приоритете, зато экология." },
    { text: "Древние греки использовали голубей для отправки SMS", isTrue: false, argument: "Голуби носили записки, но СМС — изобретение XX века." },
    { text: "Средневековые рыцари носили доспехи из фольги", isTrue: false, argument: "Доспехи делали из стали, а фольгу изобрели гораздо позже." },
    { text: "Египетские пирамиды построили инопланетяне", isTrue: false, argument: "Нет археологических доказательств участия инопланетян." },
    { text: "Венский конгресс 1815 года проходил под музыку Моцарта", isTrue: false, argument: "Моцарт умер в 1791 году, за 24 года до конгресса." },
    { text: "В Средневековье все думали, что Земля плоская", isTrue: false, argument: "Образованные люди знали о шарообразности ещё с античных времён." },
    { text: "Первый автомобиль изобрели древние римляне", isTrue: false, argument: "Автомобили появились в XIX веке, а римляне использовали колесницы." },
    { text: "Статуя Свободы была подарком от Франции ко дню независимости США", isTrue: true, argument: "Подарок к 100-летию независимости в 1886 году." },
    { text: "Гладиаторы в Риме сражались насмерть всегда", isTrue: false, argument: "Многие бои заканчивались без смертельного исхода, особенно с ценными бойцами." }
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
    { text: "Картинка 'Успешный ребёнок' — стоковое фото", isTrue: true, argument: "Знаменитый мем из фотостока." },
    { text: "Гифка с танцующим младенцем была создана в 1895 году", isTrue: false, argument: "Первая гифка появилась в 1987 году." },
    { text: "Карл Лагерфельд — автор мема «Наташа, мы всё уронили»", isTrue: false, argument: "Это русский мем про кота, модельер ни при чём." },
    { text: "Мем «This is fine» основан на реальных событиях 11 сентября", isTrue: false, argument: "Это комикс про собаку в горящей комнате." },
    { text: "Мем 'Ждун' создан голландской художницей", isTrue: true, argument: "Скульптура Homunculus loxodontus Маргрит ван Бреворт." },
    { text: "Существует мем про то, что Путин ездит на медведе", isTrue: true, argument: "Популярный интернет-стереотип, хотя в реальности такого нет." },
    { text: "Мем 'Наташа, ты спишь?' — это отсылка к фильму ужасов", isTrue: false, argument: "Это из популярного вайна." },
    { text: "Первый в мире мем появился в 1921 году", isTrue: true, argument: "Комикс 'Expectations vs Reality' считается первым зафиксированным мемом." }
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
    { text: "Белые медведи не заметны в инфракрасном свете", isTrue: true, argument: "Их шерсть очень хорошо изолирует тепло." },
    { text: "Хамелеоны меняют цвет, чтобы прятаться от хищников", isTrue: false, argument: "Основная причина — общение с сородичами и регуляция температуры." },
    { text: "Свиньи не умеют летать, потому что у них нет крыльев", isTrue: true, argument: "Да, это очевидно, но звучит как шутка." },
    { text: "Золотые рыбки помнят только 3 секунды", isTrue: false, argument: "Исследования показали, что память золотых рыбок может длиться месяцами." },
    { text: "Единорог — национальное животное Шотландии", isTrue: true, argument: "Неожиданно, но да: единорог — геральдический символ Шотландии." },
    { text: "Пингвины умеют играть на саксофоне", isTrue: false, argument: "Шутка! Пингвины музыкальных инструментов не осваивают." },
    { text: "У улитки около 25 000 зубов", isTrue: true, argument: "Расположены на языке-радуле." },
    { text: "Слоны — единственные млекопитающие, которые не умеют прыгать", isTrue: true, argument: "Из-за огромной массы и строения ног." },
    { text: "Кенгуру умеют плавать", isTrue: true, argument: "Они неплохо передвигаются в воде и используют хвост как руль." },
    { text: "Белки сажают тысячи деревьев, забывая про жёлуди", isTrue: true, argument: "Спрятанные и забытые семена прорастают." },
    { text: "Совы могут поворачивать голову на 360 градусов", isTrue: false, argument: "Максимум — 270 градусов." },
    { text: "Фламинго розового цвета от рождения", isTrue: false, argument: "Они рождаются серыми, а розовый пигмент получают с пищей." },
    { text: "Крокодилы едят камни, чтобы лучше нырять", isTrue: true, argument: "Камни в желудке работают как балласт." },
    { text: "Гепарды умеют мяукать, но не рычат", isTrue: true, argument: "В отличие от больших кошек, гепарды издают звуки, похожие на мяуканье." }
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
    { text: "Персонаж Марио носит кепку, потому что у него нет времени рисовать волосы", isTrue: true, argument: "Так сказал Сигэру Миямото." },
    { text: "В GTA V есть миссия, где нужно доставить пиццу на Луну", isTrue: false, argument: "Такой миссии нет, но моды могут многое." },
    { text: "Создатель Minecraft Маркус Перссон изначально хотел стать шеф-поваром", isTrue: false, argument: "Он был программистом и гейм-дизайнером." },
{ text: "Первый контроллер PlayStation был размером с велосипед", isTrue: false, argument: "Шутка! Контроллеры всегда были портативными." },
    { text: "Соник изначально назывался Мистер Ёж", isTrue: true, argument: "Рабочее название персонажа — Mr. Needlemouse." },
    { text: "Первый компьютерный вирус назывался 'Здесь был Вася'", isTrue: false, argument: "Первый вирус — Creeper, создан в 1971 году." },
    { text: "В Skyrim можно жениться на вампире", isTrue: true, argument: "Серана — популярный выбор, хотя без модов брак с ней недоступен." },
    { text: "Культовая фраза 'Finish Him!' появилась раньше Mortal Kombat", isTrue: false, argument: "Именно MK популяризировала фразу." }
  ],
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
    // Для "с подвохом" берём факты из Мемов, Истории и Науки (без 18+)
    const trickyPool = shuffle([
      ...categoriesData['Мемы'],
      ...categoriesData['История'].filter(() => Math.random() > 0.5),
      ...categoriesData['Наука'].filter(() => Math.random() > 0.5)
    ]);
    selectedFacts = trickyPool.slice(0, count);
    if (selectedFacts.length < count) {
      selectedFacts = selectedFacts.concat(shuffle(allFacts).slice(0, count - selectedFacts.length));
    }
  } else if (mode === 'millionaire') {
    selectedFacts = shuffle(allFacts).slice(0, count);
  } else {
    selectedFacts = shuffle(allFacts).slice(0, count);
  }

  const trueFacts = allFacts.filter(f => f.isTrue);
  const falseFacts = allFacts.filter(f => !f.isTrue);

  questions = selectedFacts.map(fact => {
    if (mode === 'millionaire') {
      const lookingForTrue = fact.isTrue;
      const questionText = lookingForTrue
        ? 'Какой из этих фактов является правдой?'
        : 'Какой из этих фактов является ложью?';
      const correctAnswer = fact.text;
      const oppositePool = lookingForTrue ? falseFacts : trueFacts;
      const wrongCandidates = shuffle([...oppositePool]).slice(0, 3);
      while (wrongCandidates.length < 3) {
        const extra = shuffle(allFacts).find(f => f.text !== correctAnswer && !wrongCandidates.some(w => w.text === f.text));
        if (extra) wrongCandidates.push(extra);
        else break;
      }
      const wrongTexts = wrongCandidates.map(f => f.text);
      const options = shuffle([correctAnswer, ...wrongTexts]);
      return { questionText, correctAnswer, options };
    } else {
      const correctAnswer = fact.isTrue ? 'Правда' : 'Ложь';
      return {
        questionText: fact.text,
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
  quizQuestion.textContent = q.questionText;
  quizInfo.innerHTML = `Вопрос ${currentIndex + 1} / ${questions.length} | Очки: ${score}`;

  quizAnswers.innerHTML = '';
  answered = false;
  nextBtn.style.display = 'none';

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'action-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleAnswer(opt, btn));
    quizAnswers.appendChild(btn);
  });

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

// ========== ТАЙМЕР (только для "На время") ==========
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
(function() {
  const body = document.body;
  const themeBtn = document.getElementById('themeBtn');

  // Восстановление темы при загрузке (работает всегда)
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    if (themeBtn) themeBtn.textContent = '☀️';
  } else {
    body.classList.remove('dark-theme');
    if (themeBtn) themeBtn.textContent = '🌙';
  }

  // Переключение темы (только если есть кнопка)
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      const isDark = body.classList.contains('dark-theme');
      themeBtn.textContent = isDark ? '☀️' : '🌙';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
})();
// ========== ИНИЦИАЛИЗАЦИЯ ==========
resetToModeSelection();
