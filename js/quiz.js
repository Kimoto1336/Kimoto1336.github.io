async function loadFacts(){

  const response =
    await fetch("/api/facts");

  questions =
    await response.json();

  loadQuestion();
}

loadFacts();

let currentQuestion = null;
let score = 0;
let answered = false;

const questionElement =
document.getElementById("question");

const resultElement =
document.getElementById("result");

const explanationElement =
document.getElementById("explanation");

const trueBtn =
document.getElementById("trueBtn");

const falseBtn =
document.getElementById("falseBtn");

function loadQuestion() {

answered = false;

const randomIndex =
Math.floor(
Math.random() * questions.length
);

currentQuestion =
questions[randomIndex];

questionElement.textContent =
currentQuestion.text;

resultElement.innerHTML = "";

explanationElement.innerHTML = "";

trueBtn.disabled = false;
falseBtn.disabled = false;
}

function checkAnswer(userAnswer) {

if(answered) return;

answered = true;

trueBtn.disabled = true;
falseBtn.disabled = true;

const isCorrect =
userAnswer === currentQuestion.answer;

if(isCorrect){

```
score += 10;

resultElement.innerHTML = `
  <div style="
    color:#22C55E;
    font-weight:bold;
    font-size:1.2rem;
  ">
    ✅ Верно! +10 XP
  </div>
`;
```

} else {

```
resultElement.innerHTML = `
  <div style="
    color:#EF4444;
    font-weight:bold;
    font-size:1.2rem;
  ">
    ❌ Неверно
    <br><br>

    Правильный ответ:
    <strong>
      ${
        currentQuestion.answer
        ? "Правда"
        : "Ложь"
      }
    </strong>
  </div>
`;
```

}

explanationElement.innerHTML = ` <div class="fact-card" style="margin-top:20px">

```
  <h3>
    📖 Пояснение
  </h3>

  <p style="margin-top:10px">
    ${currentQuestion.explanation}
  </p>

</div>
```

`;

localStorage.setItem(
"ibchXP",
score
);

setTimeout(() => {
loadQuestion();
}, 5000);
}

trueBtn.addEventListener(
"click",
() => checkAnswer(true)
);

falseBtn.addEventListener(
"click",
() => checkAnswer(false)
);

loadQuestion();
