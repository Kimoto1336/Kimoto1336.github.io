const questions = [
{
text: "Бананы являются ягодами",
answer: true
},
{
text: "Китайскую стену видно из космоса",
answer: false
},
{
text: "У осьминога три сердца",
answer: true
},
{
text: "Земля плоская",
answer: false
}
];

let currentQuestion;

const questionElement =
document.getElementById("question");

const resultElement =
document.getElementById("result");

function loadQuestion(){

currentQuestion =
questions[
Math.floor(
Math.random() * questions.length
)
];

questionElement.textContent =
currentQuestion.text;

resultElement.textContent = "";
}

document
.getElementById("trueBtn")
.addEventListener("click", () => {

if(currentQuestion.answer){
resultElement.textContent =
"✅ Верно! +10 XP";
}else{
resultElement.textContent =
"❌ Неверно";
}

setTimeout(loadQuestion,1500);
});

document
.getElementById("falseBtn")
.addEventListener("click", () => {

if(!currentQuestion.answer){
resultElement.textContent =
"✅ Верно! +10 XP";
}else{
resultElement.textContent =
"❌ Неверно";
}

setTimeout(loadQuestion,1500);
});

document
.querySelectorAll(".quiz-mode")
.forEach(mode => {

mode.addEventListener("click", () => {

```
loadQuestion();
```

});

});

loadQuestion();
