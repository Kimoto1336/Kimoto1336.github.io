const players = [

{
name:"Алексей",
xp:1450
},

{
name:"Мария",
xp:1380
},

{
name:"Иван",
xp:1220
},

{
name:"Анна",
xp:1150
},

{
name:"Максим",
xp:980
},

{
name:"Елена",
xp:900
}

];

const leaderboard =
document.getElementById(
"leaderboardList"
);

function renderLeaderboard(){

leaderboard.innerHTML = "";

players.forEach((player,index)=>{

```
leaderboard.innerHTML += `

  <div class="player-card">

    <div class="player-info">

      <div class="player-rank">

        ${index + 1}

      </div>

      <img
        class="player-avatar"
        src="https://api.dicebear.com/7.x/adventurer/svg?seed=${player.name}"
      >

      <div>

        <h3>${player.name}</h3>

        <small>
          Уровень ${Math.floor(player.xp / 100)}
        </small>

      </div>

    </div>

    <div class="player-xp">

      ${player.xp} XP

    </div>

  </div>

`;
```

});

}

renderLeaderboard();
