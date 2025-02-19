import greetUser from '../src/cli.js';
import readlineSync from 'readline-sync';
import getRandomNum from '../src/randomNums.js';


const name = greetUser();
let isNotRight = false;

const isWrongCheck = (answer, userAnswer) => {
  if (parseInt(userAnswer) !== answer) {
    console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${answer}'.\nLet's try again, ${name}`);
    return true;
  };
  return false;
};

const expression = () => {
  const rngExpressionType = getRandomNum(2);
  const randomNumOne = getRandomNum(25);
  const randomNumTwo = getRandomNum(10);
  let userAnswer = 0;
  let answer = 0;
  switch (rngExpressionType) {
    case 0:
      answer = randomNumOne + randomNumTwo;
      console.log(`Question: ${randomNumOne} + ${randomNumTwo}`);
      userAnswer = readlineSync.question(`Your answer: `);
      return isNotRight = isWrongCheck(answer, userAnswer);
    case 1:
      answer = randomNumOne * randomNumTwo;
      console.log(`Question: ${randomNumOne} * ${randomNumTwo}`);
      userAnswer = readlineSync.question(`Your answer: `);
      return isNotRight = isWrongCheck(answer, userAnswer);
    case 2:
      answer = randomNumOne - randomNumTwo;
      console.log(`Question: ${randomNumOne} - ${randomNumTwo}`);
      userAnswer = readlineSync.question(`Your answer: `);
      return isNotRight = isWrongCheck(answer, userAnswer);
    default:
      break;
  };
};

console.log(`What is the result of the expression?`);
for (let i = 0; i < 3; i += 1) {
  if (isNotRight === true) break;
  expression();
};
if (isNotRight === false) {
  console.log(`Congratulations, ${name}`);
};
