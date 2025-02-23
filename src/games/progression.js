#!/usr/bin/env node

import getRandomNum from '../randomNums.js';
import defaultLogic from '../engine.js';

const progression = () => {
  const gameQuestionGenerator = () => {
    const array = [];
    const progressionNumber = getRandomNum(5, 2);
    let startNum = getRandomNum(100, 1);
    for (let i = 1; i < getRandomNum(16, 6); i += 1) {
      startNum += progressionNumber;
      array.push(startNum + progressionNumber);
    }
    const skippedNumInArray = getRandomNum(array.length, 0);
    const answer = array[skippedNumInArray];
    array[skippedNumInArray] = '..';
    const arrayToString = array.toString().split(',').join(" ");
    const expression = 'Question: ${arrayToString}';
    return [answer, expression];
  };

  const question = 'What number is missing in the progression?';
  defaultLogic(gameQuestionGenerator, question);
};

export default progression;
