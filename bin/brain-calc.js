import greetUser from '../src/cli.js';
import getRandomNum from '../src/randomNums.js';
import isWrongCheck from '../src/answerCheck.js';

const expression = () => {
  const rngExpressionType = getRandomNum(2);
  const randomNumOne = getRandomNum(25);
  const randomNumTwo = getRandomNum(10);
  let answer = 0;
  switch (rngExpressionType) {
    case 0:
      answer = randomNumOne + randomNumTwo;
      console.log(`Question: ${randomNumOne} + ${randomNumTwo}`);
      break;
    case 1:
      answer = randomNumOne * randomNumTwo;
      console.log(`Question: ${randomNumOne} * ${randomNumTwo}`);
      break;
    case 2:
      answer = randomNumOne - randomNumTwo;
      console.log(`Question: ${randomNumOne} - ${randomNumTwo}`);
      break;
    default:
      break;
  };
  return isNotRight = isWrongCheck(answer, name);
};

const name = greetUser();
let isNotRight = false;
console.log(`What is the result of the expression?`);
for (let i = 0; i < 3; i += 1) {
  expression();
  if (isNotRight === true) break;
};
if (isNotRight === false) console.log(`Congratulations, ${name}`);
