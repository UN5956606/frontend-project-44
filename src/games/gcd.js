#!/usr/bin/env node

import getRandomNum from '../randomNums.js';
import defaultLogic from '../engine.js';

const gcd = () => {
  const whatGcdOf = (num1, num2) => {
    while (num1 !== 0 && num2 !== 0) {
      if (num1 > num2) {
        num1 %= num2;
      } else {
        num2 %= num1;
      }
    }
    return (num1 + num2);
  };
  const answer = (randomNumberOne, randomNumberTwo) => {
    if (randomNumberOne === 0) return randomNumberTwo;
    if (randomNumberTwo === 0) return randomNumberOne;
    return whatGcdOf(randomNumberOne, randomNumberTwo);
  };
  const question = 'Find the greatest common divisor of given numbers.';
  const gameQuestionGenerator = () => {
    const randomNumberOne = getRandomNum(100);
    const randomNumberTwo = getRandomNum(100);
    const expression = `Question: ${randomNumberOne} ${randomNumberTwo}`;
    const correctAnswer = answer(randomNumberOne, randomNumberTwo);
    return [correctAnswer, expression];
  };
  defaultLogic(gameQuestionGenerator, question);
};

export default gcd;
