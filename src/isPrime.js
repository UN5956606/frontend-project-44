const isNumPrime = (randomNumber) => {
  if (randomNumber < 2) {
    return 'no';
  }
  if (randomNumber === 2 || randomNumber === 3) {
    return 'yes';
  }
  if (randomNumber % 2 === 0) {
    return 'no';
  }
  for (let j = 3; j <= Math.sqrt(randomNumber); j += 2) {
    if (randomNumber % j === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default isNumPrime;
