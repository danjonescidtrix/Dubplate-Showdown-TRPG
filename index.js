document.addEventListener("DOMContentLoaded", function(event) {

  //---- GLOBALS ----
  var ROUND = 1;
  var P1;
  var P1_TURN = 1;
  var P2;
  var P2_TURN = 0;

  var characters = {
    Simula: {
      name: "Simula",
      health: 100,
      defaultAttack: 18,
      attacks: {
        special1: 15
      }
    },
    Noisia: {
      name: "Noisia",
      health: 300,
      defaultAttack: 12,
      attacks: {
        special1: 20
      }
    }
  };

  P1 = characters.Simula;
  P2 = characters.Noisia;

  document.getElementById("attack").onclick = function() { //asign a function
    console.log(P1);
    console.log(P2);
  }

  document.getElementById("defaultAttack").onclick = function() { //asign a function
    if (P1_TURN == 1) {
      playMove(P1, P2);
    } else {
      playMove(P2, P1);
      ROUND++
    }
  }

  //plays the move
  function playMove(attacker, defender) {
    var damage = attacker.defaultAttack;
    defender.health -= damage;

    console.log("Round: " + ROUND)
    console.log(attacker.name + " does " + damage + " damage to " + defender.name);
    console.log(defender.name + " health is now " + defender.health);
    console.log("Turn over")

    if (P1_TURN == 1) {
      P1_TURN = 0;
      P2_TURN = 1;
    } else {
      P1_TURN = 1;
      P2_TURN = 0;
    }
  }
});
