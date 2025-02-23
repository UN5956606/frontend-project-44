#!/usr/bin/env node

import getRandomNum from '../randomNums.js';
import defaultLogic from '../engine.js';

const gcd = () => {
  const whatGcdOf = (num1, num2) => {
    const numbers = [num1, num2];
    while (numbers[0] !== 0 && numbers[1] !== 0) {
      if (numbers[0] > numbers[1]) {
        numbers[0] %= numbers[1];
      } else {
        numbers[1] %= numbers[0];
      }
    }
    return (numbers[0] + numbers[1]);
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
