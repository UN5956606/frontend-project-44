#!/usr/bin/env node
/* eslint-disable no-unused-vars */

import getRandomNum from '../randomNums.js';
import defaultLogic from '../engine.js';

const calc = () => {
  const expressionGenerator = () => {
    const rngExpressionType = getRandomNum(2); // выбор типа выражения 0-2 (+*-)
    const randomNumbers = [getRandomNum(25), getRandomNum(10)];
    let answer = 0;
    let question = '';
    switch (rngExpressionType) {
      case 0:
        answer = randomNumbers[0] + randomNumbers[1];
        question = `Question: ${randomNumbers[0]} + ${randomNumbers[1]}`;
        break;
      case 1:
        answer = randomNumbers[0] * randomNumbers[1];
        question = `Question: ${randomNumbers[0]} * ${randomNumbers[1]}`;
        break;
      case 2:
        answer = randomNumbers[0] - randomNumbers[1];
        question = (`Question: ${randomNumbers[0]} - ${randomNumbers[1]}`);
        break;
      default:
        break;
    }
    return [answer, question];
  };
  const question = 'What is the result of the expression?';
  defaultLogic(expressionGenerator, question);
};

export default calc;



