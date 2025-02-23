#!/usr/bin/env node
/* eslint-disable no-unused-vars */

import getRandomNum from '../randomNums.js';
import defaultLogic from '../engine.js';

const calc = () => {
  const expressionGenerator = () => {
    const rngExpressionType = getRandomNum(2); // выбор типа выражения 0-2 (+*-)
    const randomNumbers = [getRandomNum(25), getRandomNum(10)];
    const asnAndQue = [];
    switch (rngExpressionType) {
      case 0:
        asnAndQue[0] = randomNumbers[0] + randomNumbers[1];
        asnAndQue[1] = `Question: ${randomNumbers[0]} + ${randomNumbers[1]}`;
        break;
      case 1:
        asnAndQue[0] = randomNumbers[0] * randomNumbers[1];
        asnAndQue[1] = `Question: ${randomNumbers[0]} * ${randomNumbers[1]}`;
        break;
      case 2:
        asnAndQue[0] = randomNumbers[0] - randomNumbers[1];
        asnAndQue[1] = (`Question: ${randomNumbers[0]} - ${randomNumbers[1]}`);
        break;
      default:
        break;
    }
    return asnAndQue;
  };
  const question = 'What is the result of the expression?';
  defaultLogic(expressionGenerator, question);
};

export default calc;
