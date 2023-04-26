const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 },
];

const message = (names) => {
  console.log(
    `Hi ${names.name}! ${names.discount}% off our best candies for you today!`
  );
};

const generateMessages = (namesAndDiscounts) => {
  namesAndDiscounts.map(message);
};

generateMessages(namesAndDiscounts);
