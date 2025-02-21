#!/usr/bin/env node

import greetUser from '../src/cli.js';
import getRandomNum from '../src/randomNums.js';
import isWrongCheck from '../src/answerCheck.js';

const answer = (randomNumberOne, randomNumberTwo) => {
  if (randomNumberOne === 0) return randomNumberTwo;
  if (randomNumberTwo === 0) return randomNumberOne;
  return gcd(randomNumberOne, randomNumberTwo);
};

const gcd = (num1, num2) => {
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
    };
  };
  return (num1 + num2);
};

const name = greetUser();
let isNotRight = false;
console.log('Find the greatest common divisor of given numbers.')
for (let i = 0; i < 3; i += 1) {
  const randomNumberOne = getRandomNum(100);
  const randomNumberTwo = getRandomNum(100);
  console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
  const currectAnswer = answer(randomNumberOne, randomNumberTwo);
  isNotRight = isWrongCheck(currectAnswer, name);
  if (isNotRight === true ) break;
};
if (isNotRight === false) console.log(`Congratulations, ${name}`);