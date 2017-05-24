'use strict';
require('../scss/index.scss');

import {initMove} from "./initMove";


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
    initMove(attackMove, defenceMove, P1, P2);

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
            initMove(attackMove, defenceMove, P2, P1);
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

  //closes the bundle
});
