#!/usr/bin/env node

import greetUser from '../src/cli.js';
import getRandomNum from '../src/randomNums.js';
import isWrongCheck from '../src/answerCheck.js';

const questionGeneration = () => {
  const randomNumber = getRandomNum(100, 1);
  let answer = 'yes';
  if (randomNumber < 2) {
    answer = 'no';
  }
  if (randomNumber === 2 || randomNumber === 3) {
    answer = 'yes';
  }
  if (randomNumber % 2 === 0) {
    answer = 'no';
  }
  for (let j = 3; j <= Math.sqrt(randomNumber); j += 2) {
    if (randomNumber % j === 0) {
      answer = 'no';
      break;
    }
  }
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
