const isWrongCheck = (answer, userAnswer, name) => {
  if (parseInt(userAnswer) !== parseInt(answer) & userAnswer !== answer) {
    console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${answer}'.\nLet's try again, ${name}`);
    console.log(userAnswer);
    console.log(answer);
    return true;
  };
  console.log('Correct!');
  return false;
};

export default isWrongCheck;