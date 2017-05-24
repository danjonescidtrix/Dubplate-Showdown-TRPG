
  //plays the move
  export function initMove(attackMove, defenceMove, attacker, defender) {

    var attackMin;
    var attackMax;
    var moveName;
    var dubRageRequired;
    var damage;

    if (attackMove) {
      //sets variables
      attackMin = attacker.attacks[attackMove].attack[0];
      attackMax = attacker.attacks[attackMove].attack[1];
      damage = randomBetween(attackMin, attackMax);
      moveName = attacker.attacks[attackMove].name;
      dubRageRequired = attacker.attacks[attackMove].dubRageRequired;
      //does damage
      defender.health -= damage;
      //uses dubRage
      attacker.dubRage -= dubRageRequired;
      //takes health
      document.getElementById('p1_health').innerHTML = attacker.health;
      document.getElementById('p2_health').innerHTML = defender.health;
      //logs changes
      console.log(attacker.name + ' uses ' + moveName);
      console.log(attacker.name + ' does ' + damage + ' damage to ' + defender.name);
      console.log(defender.name + ' health is now ' + defender.health);
    }

    if (defenceMove) {
      damage = 0;
    }

    //ends turns
    console.log(attacker.name + ' turn over');
    console.log('');
    if (defender.health <= 0) {
      console.log(defender.name + ' is dead, game over... ' + attacker.name + ' won!');
    }
  }
