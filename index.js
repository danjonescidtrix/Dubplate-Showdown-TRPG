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
            dubRage: 20,
            defaultAttack: 18,
            attacks: {
                special_1: {
                    name: "Nasssty frog synths",
                    attack: 25,
                    mannaRequired: 100
                }
            }
        },
        Noisia: {
            name: "Noisia",
            health: 300,
            defaultAttack: 12,
            dubRage: 50,
            special_1: {
                name: "Diplodocus",
                attack: 35,
                mannaRequired: 140
            }
        }
    };

    P1 = characters.Simula;
    P2 = characters.Noisia;
    document.getElementById("p1_name").innerHTML = P1.name
    document.getElementById("p2_name").innerHTML = P2.name
    document.getElementById("p1_health").innerHTML = P1.health
    document.getElementById("p2_health").innerHTML = P2.health



    document.getElementById("attack").onclick = function() {
      console.log(P1);
      console.log(P2);
    }


    document.getElementById("defaultAttack").onclick = function() {
        if (P1_TURN == 1) {
            playMove(P1, P2);
        } else {
            playMove(P2, P1);
            P1.dubRage += 20;
            P2.dubRage += 20;
            ROUND++;
        }
    }

    //plays the move
    function playMove(attacker, defender) {
        var damage = attacker.defaultAttack;
        defender.health -= damage;

        console.log("Round: " + ROUND)
        console.log(attacker.name + " does " + damage + " damage to " + defender.name);
        console.log(defender.name + " health is now " + defender.health);
        console.log("Turn over");

        if (defender.health <= 0) {
            console.log(defender.name + " is dead, game over... " + attacker.name + " won!");
        }

        document.getElementById("p1_health").innerHTML = P1.health
        document.getElementById("p2_health").innerHTML = P2.health

        if (P1_TURN == 1) {
            P1_TURN = 0;
            P2_TURN = 1;
        } else {
            P1_TURN = 1;
            P2_TURN = 0;
        }
    }
});
