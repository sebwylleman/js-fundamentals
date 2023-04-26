const checklength = (string) => {
  if (string.length <= 10) {
    return true;
  }
  return false;
};

console.log(checklength('AAAA#####AAAA#87@768767382672'));
console.log(checklength('1763687364'));

// Using the filter function
const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'AAAA#####AAAA#87@768767382672',
  '4763687363',
  '4763687363',
];

const isPhoneNumber = (n) => {
  return n.length <= 10;
};

console.log(numbers.filter(isPhoneNumber));
