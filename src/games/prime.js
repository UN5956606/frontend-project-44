#!/usr/bin/env node

import getRandomNum from '../src/randomNums.js';
import defaultLogic from '../src/engine.js';

const prime = () => {
  const gameQuestionGenerator = () => {
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
    const expression = `Question: ${randomNumber}`;
    return [answer, expression];
  };

  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  defaultLogic(gameQuestionGenerator, question);
};

export default prime;