/*!
 * Dubplate-Showdown-TRPG
 * 
 * 
 * @author Dan Jones
 * @version 1.0.5
 * Copyright 2017. MIT licensed.
 */
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
          ],
          dubRageRequired: 0
        },
        special1: {
          name: 'Nasssty frog synths',
          attack: [
            25, 30
          ],
          dubRageRequired: 50
        }
      },
      dubRage: 0,
    },
    Noisia: {
      name: 'Noisia',
      health: 300,
      attacks: {
        defaultAttack: {
          name: 'Standard Attack',
          attack: [
            10, 14
          ],
          dubRageRequired: 0
        },
        special1: {
          name: 'Diplodoucus',
          attack: [
            25, 30
          ],
          dubRageRequired: 100
        }
      },
      dubRage: 0,
    }
  };

  P1 = characters.Simula;
  P2 = characters.Noisia;

  document.getElementById('p1_name').innerHTML = P1.name;
  document.getElementById('p2_name').innerHTML = P2.name;
  document.getElementById('p1_health').innerHTML = P1.health;
  document.getElementById('p2_health').innerHTML = P2.health;

  document.getElementById('defaultAttack').onclick = function() {
    if (P1_TURN === 1) {
      initRound('defaultAttack', '');
    }
  };

  document.getElementById('special1').onclick = function() {
    if (P1_TURN === 1) {
      if (P1.dubRage >= P1.attacks.special1.dubRageRequired) {
        initRound('special1', '');
      } else {
        console.log('You dont have enough Dub Rage for this move.');
      }
    }
  };

  function initRound(attackMove, defenceMove) {

    //init round
    console.log('Round: ' + ROUND);
    P1_TURN = 0;
    P2_TURN = 1;
    console.log(P1);
    console.log(P2);

    //players move
    playMovePlayer(attackMove, defenceMove, P1, P2);

    //bot's move
    var moveArray = ['attackMove', 'defenceMove'];
    var move = moveArray[Math.floor(Math.random() * moveArray.length)];

    switch (move) {
      case 'attackMove':
        var attackArray = [];
        Object.keys(P2.attacks).forEach(function(key, index) {
          attackArray.push(key);
        });
        //randomize attackArray to new arracy
        var shuffleAttackArray = shuffleArray(attackArray);
        var arrayLength = shuffleAttackArray.length;
        //loop array, check dubrequired vs P2 dubRage
        for (var i = 0; i < arrayLength; i++) {
          var thisFromShuffle = shuffleAttackArray[i];
          //if attack's dub rage available, use this atack, else keep looping
          if (P2.dubRage >= P1.attacks[thisFromShuffle].dubRageRequired) {
            attackMove = thisFromShuffle;
            playMovePlayer(attackMove, defenceMove, P2, P1);
            break;
          }
        }
        break;
      case 'defenceMove':
        console.log(P2.name + " uses defence.");
        break;
    }



    P1.dubRage += 20;
    P2.dubRage += 20;
    console.log('Round Finished');
    console.log('--------------');
    ROUND++;
    //changes turns
    P1_TURN = 1;
    P2_TURN = 0;



    //   playMoveAI(P1, P2);
    // // Ai's move
    // setTimeout(function() {
    // }, 2000);
  }

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }


  //player plays the move
  function playMovePlayer(attackMove, defenceMove, attacker, defender) {

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

  //AI plays the move
  function playMoveAI(P1, P2) {

    //picks random move
    var myArray = ['defaultAttack', 'special1'];
    var attackType = myArray[Math.floor(Math.random() * myArray.length)];


    var attackMin;
    var attackMax;
    var moveName;
    var dubRageRequired;

    switch (attackType) {
      case 'defaultAttack':
        dubRageRequired = 0;
        break;
      case 'special1':
        dubRageRequired = P2.attacks.special1.dubRageRequired;
        break;
    }

    //checks if has enough dubRage for this attack, if not, pick random default
    if (P2.dubRage < dubRageRequired) {
      myArray = ['defaultAttack', 'defaultAttack'];
      attackType = myArray[Math.floor(Math.random() * myArray.length)];
    }


    //checks which attackType has been picked
    switch (attackType) {
      case 'defaultAttack':
        attackMin = P2.attacks.defaultAttack.attack[0];
        attackMax = P2.attacks.defaultAttack.attack[1];
        moveName = P2.attacks.defaultAttack.name + " (Standard)";
        dubRageRequired = P2.attacks.defaultAttack.dubRageRequired;
        break;
      case 'special1':
        attackMin = P2.attacks.special1.attack[0];
        attackMax = P2.attacks.special1.attack[1];
        moveName = P2.attacks.special1.name + " (Special)";
        dubRageRequired = P2.attacks.special1.dubRageRequired;
        break;
    }

    //uses move
    var damage = randomBetween(attackMin, attackMax);
    P1.health -= damage;

    //uses Dub rage
    P2.dubRage -= dubRageRequired;

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
  }

  //closes the bundle
});
