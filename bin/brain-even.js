#!/usr/bin/env node

import greetUser from '../src/cli.js';
import getRandomNum from '../src/randomNums.js';
import isWrongCheck from '../src/answerCheck.js';

const isEven = (num) => {
  if (num % 2 === 0 & num !== 0) return 'yes';
  return 'no';
};

const name = greetUser();
console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

//для проверки успешности ответа
let isWrong = false;
for (let i = 0; i < 3; i += 1) {
  const num = getRandomNum(100);
  const correctAnswer = isEven(num);
  console.log(`Is ${num} even? `);
  isWrong = isWrongCheck(correctAnswer, name);
  if (isWrong === true) break;
};
if (isWrong === false) {
  console.log(`Congratulations, ${name}`);
};
