const checklength = (string) => {
  if (string.length <= 10) {
    return true;
  }
  return false;
};

console.log(checklength('AAAA#####AAAA#87@768767382672'));
console.log(checklength('1763687364'));
