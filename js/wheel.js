// ========== БАЗА ФАКТОВ (такая же, как в app.js) ==========
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

// ========== КОНФИГУРАЦИЯ КОЛЕСА ==========
const SEGMENTS = [
  { label: "Наука", color: "#FF5733" },
  { label: "История", color: "#33FF57" },
  { label: "Мемы", color: "#3357FF" },
  { label: "Животные", color: "#FF33F6" },
  { label: "Игры", color: "#F6FF33" },
  { label: "18+", color: "#FF3333" },
  { label: "Наука", color: "#33FFF6" },
  { label: "Мемы", color: "#F633FF" }
];

const SEGMENT_COUNT = SEGMENTS.length;
const ANGLE_PER_SEGMENT = 360 / SEGMENT_COUNT;

// ========== DOM-ЭЛЕМЕНТЫ ==========
const wheelEl = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');
const rewardBox = document.getElementById('reward');

// ========== СОСТОЯНИЕ ==========
let spinning = false;
let currentRotation = 0;

// ========== ПОСТРОЕНИЕ КОЛЕСА ==========
function buildWheel() {
  wheelEl.innerHTML = '';
  const center = document.createElement('div');
  center.className = 'wheel-center';
  center.textContent = 'ИБЧ';
  wheelEl.appendChild(center);

  for (let i = 0; i < SEGMENT_COUNT; i++) {
    const seg = SEGMENTS[i];
    const segmentDiv = document.createElement('div');
    segmentDiv.className = 'wheel-segment';
    const angle = ANGLE_PER_SEGMENT;
    const startAngle = i * angle;
    segmentDiv.style.transform = rotate(${startAngle}deg) skewY(${90 - angle}deg);
    segmentDiv.style.backgroundColor = seg.color;

    const label = document.createElement('span');
    label.className = 'segment-label';
    label.textContent = seg.label;
    label.style.transform = skewY(${angle - 90}deg) rotate(${angle / 2}deg) translateY(-50%);
    segmentDiv.appendChild(label);

    wheelEl.appendChild(segmentDiv);
  }
}

// ========== СЛУЧАЙНЫЙ ФАКТ ИЗ КАТЕГОРИИ ==========
function getRandomFactFromCategory(categoryName) {
  const facts = categoriesData[categoryName];
  if (!facts) {
    const all = Object.values(categoriesData).flat();
    return all[Math.floor(Math.random() * all.length)];
  }
  return facts[Math.floor(Math.random() * facts.length)];
}

// ========== ОТОБРАЖЕНИЕ РЕЗУЛЬТАТА ==========
function showReward(fact) {
  rewardBox.innerHTML = `
    <div class="reward-fact">${fact.text}</div>
    <div class="reward-controls">
      <button class="action-btn" id="revealAnswerBtn">Показать ответ</button>
    </div>
    <div id="answerReveal" style="display:none; margin-top:10px;"></div>
  `;

  document.getElementById('revealAnswerBtn').addEventListener('click', () => {
    const answerDiv = document.getElementById('answerReveal');
    answerDiv.style.display = 'block';
    const verdict = fact.isTrue ? '✅ Правда' : '❌ Ложь';
    answerDiv.innerHTML = <strong>${verdict}</strong><p>${fact.argument}</p>;
  });
}

// ========== ВРАЩЕНИЕ КОЛЕСА ==========
function spinWheel() {
  if (spinning) return;
  spinning = true;
  spinBtn.disabled = true;

  const extraRotations = 360 * (Math.floor(Math.random() * 5) + 5);
  const randomSegmentIndex = Math.floor(Math.random() * SEGMENT_COUNT);
  const targetAngle = randomSegmentIndex * ANGLE_PER_SEGMENT + ANGLE_PER_SEGMENT / 2;
  const totalRotation = currentRotation + extraRotations + (360 - (currentRotation % 360)) + targetAngle;

  wheelEl.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
  wheelEl.style.transform = rotate(${totalRotation}deg);
  currentRotation = totalRotation;

  setTimeout(() => {
    spinning = false;
    spinBtn.disabled = false;

    const normalizedAngle = (currentRotation % 360);
    const winningIndex = Math.floor((360 - normalizedAngle + ANGLE_PER_SEGMENT / 2) % 360 / ANGLE_PER_SEGMENT) % SEGMENT_COUNT;
    const category = SEGMENTS[winningIndex].label;
const fact = getRandomFactFromCategory(category);
    showReward(fact);
  }, 4100);
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========
buildWheel();
spinBtn.addEventListener('click', spinWheel);
