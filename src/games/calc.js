#!/usr/bin/env node
/* eslint-disable no-unused-vars */

import getRandomNum from '../randomNums.js';
import defaultLogic from '../engine.js';

const calc = () => {
  const expressionGenerator = () => {
    const rngExpressionType = getRandomNum(2); // выбор типа выражения 0-2 (+*-)
    const randomNumOne = getRandomNum(25);
    const randomNumTwo = getRandomNum(10);
    let answer = 0;
    let question = '';
    switch (rngExpressionType) {
      case 0:
        answer = randomNumOne + randomNumTwo;
        question = `Question: ${randomNumOne} + ${randomNumTwo}`;
        break;
      case 2:
        answer = randomNumOne - randomNumTwo;
        question = (`Question: ${randomNumOne} - ${randomNumTwo}`);
        break;
      default:
        answer = randomNumOne * randomNumTwo;
        question = `Question: ${randomNumOne} * ${randomNumTwo}`;
        break;
    }
    return [answer, question];
  };
  const question = 'What is the result of the expression?';
  defaultLogic(expressionGenerator, question);
};

export default calc;
