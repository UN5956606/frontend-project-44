#!/usr/bin/env node

import getRandomNum from '../randomNums.js';
import defaultLogic from '../engine.js';
import isNumPrime from '../isPrime.js';

const prime = () => {
  const gameQuestionGenerator = () => {
    const randomNumber = getRandomNum(100, 1);
    const answer = isNumPrime(randomNumber);
    const expression = `Question: ${randomNumber}`;
    return [answer, expression];
  };
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  defaultLogic(gameQuestionGenerator, question);
};

export default prime;
