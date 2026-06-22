const user = {
nickname: "Игрок",
xp: 120,
level: 2,
factsRead: 15,
quizWins: 9,
likes: 4
};

document.getElementById("nickname")
.textContent = user.nickname;

document.getElementById("level")
.textContent =
`Уровень ${user.level}`;

document.getElementById("xpValue")
.textContent = user.xp;

document.getElementById("factsRead")
.textContent = user.factsRead;

document.getElementById("quizWins")
.textContent = user.quizWins;

document.getElementById("likesCount")
.textContent = user.likes;

const xpPercent =
(user.xp % 100);

document.getElementById("xpFill")
.style.width =
`${xpPercent}%`;
