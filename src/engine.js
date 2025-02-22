import greetUser from '../src/cli.js';
import isWrongCheck from '../src/answerCheck.js';

const defaultLogic = (game, question) => {
  const name = greetUser();
  let isNotRight = false;
  const roundAmount = 3;
  console.log(question);
  for (let i = 0; i < roundAmount; i += 1) {
    const asnwerAndQuestion = game();
    isNotRight = isWrongCheck(asnwerAndQuestion, name);
    if (isNotRight === true) break;
  }
  if (isNotRight === false) console.log(`Congratulations, ${name}!`);
};

export default defaultLogic;