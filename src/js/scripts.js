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
      dubRage: 20,
      defaultAttack: [
        16, 20
      ],
      attacks: {
        special_1: {
          name: 'Nasssty frog synths',
          attack: [
            25, 30
          ],
          mannaRequired: 100
        }
      }
    },
    Noisia: {
      name: 'Noisia',
      health: 300,
      defaultAttack: [
        10, 14
      ],
      dubRage: 50,
      special_1: {
        name: 'Diplodocus',
        attack: [
          25, 30
        ],
        mannaRequired: 140
      }
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

  function initRound(attackType) {
    if (P1_TURN === 1) {

      console.log('Round: ' + ROUND);
      playMove(P1, P2, attackType);

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
  function playMove(P1, P2, attackType) {

    var attackMin;
    var attackMax;

    if (attackType === 'defaultAttack') {
      attackMin = P1.defaultAttack[0];
      attackMax = P1.defaultAttack[1];
    }
    if (attackType === 'special_1') {
      attackMin = P1.special_1[0];
      attackMax = P1.special_1[1];
    }

    var damage = randomBetween(attackMin, attackMax);
    P2.health -= damage;

    console.log(P1.name + ' does ' + damage + ' damage to ' + P2.name);
    console.log(P2.name + ' health is now ' + P2.health);
    document.getElementById('p1_health').innerHTML = P1.health;
    document.getElementById('p2_health').innerHTML = P2.health;
    console.log(P1.name + ' turn over');
    console.log('');

    if (P2.health <= 0) {
      console.log(P2.name + ' is dead, game over... ' + P1.name + ' won!');
    }

    P1_TURN = 0;
    P2_TURN = 1;
  }

  //AI plays the move
  function playMoveAI(P1, P2) {
    //pick randome mobe then
    var attackMin = P2.defaultAttack[0];
    var attackMax = P2.defaultAttack[1];
    var damage = randomBetween(attackMin, attackMax);
    P1.health -= damage;

    console.log(P2.name + ' does ' + damage + ' damage to ' + P1.name);
    console.log(P1.name + ' health is now ' + P1.health);
    document.getElementById('p1_health').innerHTML = P1.health;
    document.getElementById('p2_health').innerHTML = P2.health;
    console.log(P2.name + ' turn over');

    if (P1.health <= 0) {
      console.log(P1.name + ' is dead, game over... ' + P2.name + ' won!');
    }

    P2_TURN = 0;
    P1_TURN = 1;
  }
});
