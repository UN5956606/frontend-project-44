import greetUser from '../src/cli.js';
import readlineSync from 'readline-sync';
import getRandomNum from '../src/randomNums.js';
import isWrongCheck from '../src/answerCheck.js';

const answer = (randomNumberOne, randomNumberTwo) => {
  if (randomNumberOne === 0 || randomNumberTwo === 0) return randomNumberOne === 0 ? randomNumberTwo : randomNumberTwo === 0 ? randomNumberOne : 0;
  while (randomNumberOne !== 0 && randomNumberTwo !== 0) {
    if (randomNumberOne > randomNumberTwo) {
      randomNumberOne = randomNumberOne % randomNumberTwo;
    } else {
      randomNumberTwo = randomNumberTwo % randomNumberOne;
    };
  };
  return (randomNumberOne + randomNumberTwo)
};

const name = greetUser();
let isNotRight = false;
console.log('Find the greatest common divisor of given numbers.')
for (let i = 0; i < 3; i += 1) {
  let randomNumberOne = getRandomNum(100);
  let randomNumberTwo = getRandomNum(100);
  console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
  let currectAnswer = answer(randomNumberOne, randomNumberTwo);
  const userAnswer = readlineSync.question(`Your answer: `);
  isNotRight = isWrongCheck(currectAnswer, userAnswer, name);
  if (isNotRight === true ) break;
};
if (isNotRight === false) console.log(`Congratulations, ${name}`);