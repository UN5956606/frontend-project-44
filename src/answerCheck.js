import readlineSync from 'readline-sync';

const isWrongCheck = (asnwerAndQuestion, name) => {
  console.log(asnwerAndQuestion[1]);
  const userAnswer = readlineSync.question(`Your answer: `);
  if (parseInt(userAnswer) !== parseInt(asnwerAndQuestion[0]) & userAnswer !== asnwerAndQuestion[0]) {
    console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${asnwerAndQuestion[0]}'.\nLet's try again, ${name}!`);
    return true;
  };
  console.log('Correct!');
  return false;
};

export default isWrongCheck;