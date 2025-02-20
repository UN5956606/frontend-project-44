import readlineSync from 'readline-sync';

const isWrongCheck = (answer, name) => {
  const userAnswer = readlineSync.question(`Your answer: `);
  if (parseInt(userAnswer) !== parseInt(answer) & userAnswer !== answer) {
    console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${answer}'.\nLet's try again, ${name}`);
    return true;
  };
  console.log('Correct!');
  return false;
};

export default isWrongCheck;