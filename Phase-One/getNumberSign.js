const getNumberSign = (n) => {
  if (n < 0) {
    return 'negative';
  } else if (n === 0) {
    return 'zero';
  } else {
    return 'positive';
  }
};

console.log(getNumberSign(2));
console.log(getNumberSign(-2));
console.log(getNumberSign(0));
