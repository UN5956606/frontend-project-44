const isWrongCheck = (answer, userAnswer, name) => {
  if (parseInt(userAnswer) !== answer) {
    console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${answer}'.\nLet's try again, ${name}`);
    return true;
  };
  return false;
};

export default isWrongCheck;