import readlineSync from 'readline-sync';

const isWrongCheck = (asnAndQuestion, name) => {
  console.log(asnAndQuestion[1]);
  const answer = asnAndQuestion[0]; //для исправления ошибки линтера
  const userAnswer = readlineSync.question('Your answer: ');
  if (parseInt(userAnswer, 10) !== parseInt(answer, 10) && userAnswer !== answer) {
    console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${asnAndQuestion[0]}'.\nLet's try again, ${name}!`);
    return true;
  }
  console.log('Correct!');
  return false;
};

export default isWrongCheck;
