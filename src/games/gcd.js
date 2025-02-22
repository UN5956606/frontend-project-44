#!/usr/bin/env node

import getRandomNum from '../randomNums.js';
import defaultLogic from '../engine.js';

const gcd = () => {
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
      }
    }
    return (num1 + num2);
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