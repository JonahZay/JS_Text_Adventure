var player;

function Player(characterType, health, damage, speed) {
  this.characterType = characterType;
  this.health = health;
  this.damage = damage;
  this.speed = speed;
}
var PlayerMoves = {
  calcAttack: function() {
    //who attacks first?
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = zombie.speed;
    //player attacks
    let playerAttack = function() {
      let calcBaseDamge;
      if (player.health > 0) {
        calcBaseDamge = player.damage / 10;
      } else {
        calcBaseDamge = play.damage / 10;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamge + offsetDamage;
      //number of hits
      let numberofhits = Math.floor(Math.random() * Math.floor(player.speed / 10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberofhits];
      return attackValues;


    }
    //enemy attacks
    let zombieAttack = function() {
      let calcBaseDamge;
      if (zombie.health > 0) {
        calcBaseDamge = zombie.damage / 10;
      } else {
        calcBaseDamge = zombie.damage / 10;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamge + offsetDamage;
      //number of hits
      let numberofhits = Math.floor(Math.random() * Math.floor(zombie.speed / 10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberofhits];
      return attackValues;
    }
    //get player/ enemy health to cahnge later
    let getPlayerHealth = document.querySelector(".health-player");
    let getZombieHealth = document.querySelector(".health-zombie");
    //initiate attacks
    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack();
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      zombie.health = zombie.health - totalDamage;
      alert("you hit " + playerAttackValues[0] + " damge" + playerAttackValues[1] + "times.");
      if (zombie.Health <= 0) {
        alert("you win! refresh browser to play again.");
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
        getZombieHealth.innerHTML = 'Health: 0 ';
      } else {
        getZombieHealth.innerHTML = 'Health: ' + zombie.health;
        // enemy attackValues
        let zombieAttackValues = zombieAttack();
        let totalDamage = zombieAttackValues[0] * zombieAttackValues[1];
        player.health = player.health - totalDamage;
        alert("Zombie hit " + zombieAttackValues[0] + " damge" + zombieAttackValues[1] + "times.");
        if (player.Health <= 0) {
          alert("you lose! refresh browser to play again.");
          getPlayerHealth.innerHTML = 'Health: 0';
          getZombieHealth.innerHTML = 'Health: ' + zombie.health;
        } else {
          getPlayerHealth.innerHTML = 'Health: ' + player.health;

        }

      }
    }
      else if (getPlayerSpeed >= getEnemySpeed) {
      let zombieAttackValues = zombieAttack();
      let totalDamage = zombieAttackValues[0] * playerAttackValues[1];
      player.health = player.health - totalDamage;
      alert("zombie hit " + zombieAttackValues[0] + " damge" + playerAttackValues[1] + "times.");
      if (player.Health <= 0) {
        alert("you lose! refresh browser to play again.");
        getZombieHealth.innerHTML = 'Health: ' + zombie.health;
        getPlayerHealth.innerHTML = 'Health: 0 ';
      } else {
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
        // player attackValues
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        zombie.health = zombie.health - totalDamage;
        alert("you hit " + playerAttackValues[0] + " damge" + playerAttackValues[1] + "times.");
        if (zombie.Health <= 0) {
          alert("you win! refresh browser to play again.");
          getZombieHealth.innerHTML ='Health: ';
          getPlayerHealth.innerHTML = 'Health: 0' + player.health;
        } else {
          getZombieHealth.innerHTML = 'Health: ' + zombie.health;

        }

      }
    }
  }

}
