import readlineSync from 'readline-sync';

const isWrongCheck = (asnAndQuestion, name) => {
  console.log(asnAndQuestion[1]);
  const userAnswer = readlineSync.question(`Your answer: `);
  if (parseInt(userAnswer) !== parseInt(asnAndQuestion[0]) && userAnswer !== asnAndQuestion[0]) {
    console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${asnAndQuestion[0]}'.\nLet's try again, ${name}!`);
    return true;
  };
  console.log('Correct!');
  return false;
};

export default isWrongCheck;