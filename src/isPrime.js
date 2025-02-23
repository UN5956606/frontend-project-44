const isNumPrime = (randomNumber) => {
  if (randomNumber < 2) {
    return 'no';
  }
  if (randomNumber === 2 || randomNumber === 3) {
    return 'yes';
  } else if (randomNumber % 2 === 0) {
    return 'no';
  } else {
    for (let j = 3; j <= Math.sqrt(randomNumber); j += 2) {
      if (randomNumber % j === 0) {
        return 'no';
        break;
      }
    }
  }
  return 'yes';
};

export default isNumPrime;
