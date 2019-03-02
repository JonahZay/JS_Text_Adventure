var gameM = {
  Gamestart: function(characterType) {
    this.resetGame(characterType);
    this.preFight();

  },
  resetGame: function(characterType) {
    switch (characterType) {
      case "JonathanA":
        player = new Player(characterType, 200, 100, 100);
        break;

      case "Luther":
        player = new Player(characterType, 150, 120, 45);
        break;


    }
    let getInterface = document.querySelector(".dropdown-content");
    getInterface.innerHTML =  '<img src ="" alt="'+ player.characterType +'" class = "img-avatar"><div><h3>'+ player.characterType +'</h3><p class ="health-player">Health:'+player.health +'</p><p>Damage:'+player.damage+'</p><p>Speed:'+player.speed+'</p></div>';

  },
  preFight: function() {
    //let getHeader = document.querySelector(".header");
    let getAction = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");
    //getHeader.innerHTML = '<p>Task: find an Enemy!</p>';
    getAction.innerHTML = '<a href = "#"class="btn-preFight" onclick="gameM.setFight()">Search for an enemy!</a>';
    getArena.style.visibility = "visible";

  },
  setFight: function() {
    //let getHeader = document.querySelector(".header");
    let getAction = document.querySelector(".actions");
    let getEnemy = document.querySelector(".zombie");
    //create zombie
    let zombie00 = new Zombie("zombie", 100, 50, 50);
    let zombie01 = new Zombie("zombie", 100, 50, 50);

    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
    switch (chooseRandomEnemy) {
      case 0:
        zombie = zombie00;
        break;
      case 1:
        zombie = zombie01;
        break;

    }
    //getHeader.innerHTML = '<p>task: choose your move</p>';
    getAction.innerHTML = '<a href = "#"class="btn-preFight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
    getEnemy.innerHTML = '<img src ="" alt="'+ zombie.enemyType +'" class = "img-avatar"><div><h3>Zombie</h3><p class ="health-zombie">Health:'+zombie.health +'</p><p>Damage:'+zombie.damage+'</p><p>Speed:'+zombie.speed+'</p></div>';
  }

}
