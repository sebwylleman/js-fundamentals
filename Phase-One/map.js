const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const message = (name) => {
  console.log(`Hi ${name}! 50% off our best candies for you today!`);
};

const generateMessages = (names) => {
  names.map(message);
};

generateMessages(names);
