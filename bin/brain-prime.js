#!/usr/bin/env node

import greetUser from '../src/cli.js';
import getRandomNum from '../src/randomNums.js';
import isWrongCheck from '../src/answerCheck.js';

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  } else if (num === 2 || num === 3) {
    return 'yes';
  } else if (num % 2 === 0) {
    return 'no';
  } else {
    for (let j = 3; j <= Math.sqrt(num); j += 2) { // Исправлено на <=
      if (num % j === 0) {
        return 'no';
      }
    }
  }
  return 'yes';
};

const questionGeneration = () => {
  const randomNumber = getRandomNum(100, 1);
  let answer = isPrime(randomNumber);
  console.log(`Question: ${randomNumber}`);
  isNotRight = isWrongCheck(answer, name);
};

const name = greetUser();
let isNotRight = false;
console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);
for (let i = 0; i < 3; i += 1) {
  questionGeneration();
  if (isNotRight === true) break;
};
if (isNotRight === false) {
  console.log(`Congratulations, ${name}`);
};
