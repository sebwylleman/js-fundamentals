const printHello = () => {
  console.log('Hello!');
};

const executeAfterDelay = (delay, greeter) => {
  setTimeout(printHello, delay * 1000);
};

executeAfterDelay(5, printHello);
