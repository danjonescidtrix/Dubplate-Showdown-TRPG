//opens the bundle
document.addEventListener('DOMContentLoaded', function() {

  'use strict';


  //---- GLOBALS ----
  var ROUND = 1;
  var P1;
  var P1_TURN = 1;
  var P2;
  var P2_TURN = 0;

  var characters = {
    Simula: {
      name: 'Simula',
      health: 100,
      attacks: {
        defaultAttack: {
          name: 'Standard Attack',
          attack: [
            10, 14
          ]
        },
        special1: {
          name: 'Nasssty frog synths',
          attack: [
            25, 30
          ],
          mannaRequired: 100
        }
      },
      dubRage: 20,
    },
    Noisia: {
      name: 'Noisia',
      health: 300,
      attacks: {
        defaultAttack: {
          name: 'Standard Attack',
          attack: [
            10, 14
          ]
        },
        special1: {
          name: 'Diplodoucus',
          attack: [
            25, 30
          ],
          mannaRequired: 100
        }
      },
      dubRage: 20,
    }
  };

  P1 = characters.Simula;
  P2 = characters.Noisia;

  console.log(P1);
  console.log(P2);

  document.getElementById('p1_name').innerHTML = P1.name;
  document.getElementById('p2_name').innerHTML = P2.name;
  document.getElementById('p1_health').innerHTML = P1.health;
  document.getElementById('p2_health').innerHTML = P2.health;

  document.getElementById('defaultAttack').onclick = function() {
    initRound('defaultAttack');
  };

  document.getElementById('special1').onclick = function() {
    initRound('special1');
  };

  function initRound(attackType) {
    if (P1_TURN === 1) {

      console.log('Round: ' + ROUND);

      //players move
      playMovePlayer(P1, P2, attackType);

      // Ai's move
      setTimeout(function() {
        playMoveAI(P1, P2);
        P1.dubRage += 20;
        P2.dubRage += 20;
        console.log('Round Finished');
        console.log('--------------');
        ROUND++;
      }, 2000);
    }
  }

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



  //player plays the move
  function playMovePlayer(P1, P2, attackType) {

    var attackMin;
    var attackMax;
    var moveName;

    //checks which attackType is used
    switch (attackType) {
      case 'defaultAttack':
        attackMin = P1.attacks.defaultAttack.attack[0];
        attackMax = P1.attacks.defaultAttack.attack[1];
        moveName = P1.attacks.defaultAttack.name + " (Standard)";
        break;
      case 'special1':
        attackMin = P1.attacks.special1.attack[0];
        attackMax = P1.attacks.special1.attack[1];
        moveName = P1.attacks.special1.name + " (Special)";
        break;
    }
    //uses move
    var damage = randomBetween(attackMin, attackMax);
    P2.health -= damage;

    //logs changes
    console.log(P1.name + ' uses ' + moveName);
    console.log(P1.name + ' does ' + damage + ' damage to ' + P2.name);
    console.log(P2.name + ' health is now ' + P2.health);

    //takes health
    document.getElementById('p1_health').innerHTML = P1.health;
    document.getElementById('p2_health').innerHTML = P2.health;

    //ends turns
    console.log(P1.name + ' turn over');
    console.log('');

    //checks if health < 0
    if (P2.health <= 0) {
      console.log(P2.name + ' is dead, game over... ' + P1.name + ' won!');
    }

    //changes turns
    P1_TURN = 0;
    P2_TURN = 1;
  }



  //AI plays the move
  function playMoveAI(P1, P2) {


    //picks random move
    var myArray = ['defaultAttack', 'special1'];
    var attackType = myArray[Math.floor(Math.random() * myArray.length)];

    var attackMin;
    var attackMax;
    var moveName;

    //checks which attackType has been picked
    switch (attackType) {
      case 'defaultAttack':
        attackMin = P2.attacks.defaultAttack.attack[0];
        attackMax = P2.attacks.defaultAttack.attack[1];
        moveName = P2.attacks.defaultAttack.name + " (Standard)";
        break;
      case 'special1':
        attackMin = P2.attacks.special1.attack[0];
        attackMax = P2.attacks.special1.attack[1];
        moveName = P2.attacks.special1.name + " (Special)";
        break;
    }

    //uses move
    var damage = randomBetween(attackMin, attackMax);
    P1.health -= damage;

    //logs changes
    console.log(P2.name + ' uses ' + moveName);
    console.log(P2.name + ' does ' + damage + ' damage to ' + P1.name);
    console.log(P1.name + ' health is now ' + P1.health);

    //takes health
    document.getElementById('p1_health').innerHTML = P1.health;
    document.getElementById('p2_health').innerHTML = P2.health;

    //ends turns
    console.log(P2.name + ' turn over');

    //checks if health < 0
    if (P1.health <= 0) {
      console.log(P1.name + ' is dead, game over... ' + P2.name + ' won!');
    }

    //changes turns
    P2_TURN = 0;
    P1_TURN = 1;
  }


  //closes the bundle
});
