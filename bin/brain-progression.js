#!/usr/bin/env node

import greetUser from '../src/cli.js';
import getRandomNum from '../src/randomNums.js';
import isWrongCheck from '../src/answerCheck.js';

const questionGeneration = () => {
  const array = [];
  const progressionNumber = getRandomNum(5, 2);
  let startNum = getRandomNum(100, 1);
  for (let i = 1; i < getRandomNum(16, 6); i += 1) {
    startNum += progressionNumber;
    array.push(startNum + progressionNumber);
  };
  const skippedNumInArray = getRandomNum(array.length, 0);
  const answer = array[skippedNumInArray];
  array[skippedNumInArray] = `..`;
  const screenShow = array.toString().split(',').join(" ");
  console.log(screenShow);
  return isNotRight = isWrongCheck(answer, name);
};


const name = greetUser();
let isNotRight = false;
for (let i = 0; i < 3; i += 1) {
  questionGeneration();
  if (isNotRight === true) break;
};
if (isNotRight === false) console.log(`Congratulations, ${name}`);