const wheel =
document.getElementById("wheel");

const reward =
document.getElementById("reward");

const rewards = [
"🎁 +50 XP",
"📚 Редкий факт",
"🚀 Космический бонус",
"🧠 Сложный вопрос",
"🏆 Достижение",
"⭐ +100 XP"
];

let rotation = 0;

document
.getElementById("spinBtn")
.addEventListener("click", () => {

const randomSector =
Math.floor(
Math.random() * rewards.length
);

const sectorAngle = 60;

rotation +=
360 * 5 +
(360 - randomSector * sectorAngle);

wheel.style.transform =
`rotate(${rotation}deg)`;

setTimeout(() => {

```
reward.textContent =
  rewards[randomSector];
```

}, 4000);

});
