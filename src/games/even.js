#!/usr/bin/env node

import defaultLogic from '../engine.js';
import getRandomNum from '../randomNums.js';

const even = () => {
  const isEven = (num) => {
    if (num % 2 === 0) return 'yes';
    return 'no';
  };
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameQuestionGenerator = () => {
    const num = getRandomNum(512);
    const correctAnswer = isEven(num);
    const expression = `Question: ${num}`;
    return [correctAnswer, expression];
  };
  defaultLogic(gameQuestionGenerator, question);
};

export default even;
