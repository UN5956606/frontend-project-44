import greetUser from '../src/cli.js';
import readlineSync from 'readline-sync';

const isEven = (num) => {
  if (num % 2 === 0 & num !== 0) return 'yes';
  return 'no';
};

const name = greetUser();
console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

//костыль, не знаю как правильно закончить весь код досрочно.
let itDidWell = true;
for (let i = 0; i < 3; i += 1) {
  const num = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(num);
  console.log(`Is ${num} even? `);
  const userAnswer = readlineSync.question(`Your answer: `);
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`);
    itDidWell = false;
    break;
  };
  console.log('Correct!');
};
if (itDidWell === true) {
  console.log(`Congratulations, ${name}`);
};