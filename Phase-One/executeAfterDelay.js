const printHello = () => {
  console.log('Hello!');
};

const executeAfterDelay = (delay, greeter) => {
  setTimeout(printHello, 5000);
};

executeAfterDelay(5, printHello);
