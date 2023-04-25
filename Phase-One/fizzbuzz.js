const fizzBuzz = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log("fizzbuzz");
  } else if (n % 3 === 0) {
    console.log("fizz");
  } else if (n % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(n);
  }
};

fizzBuzz(3);
// 'Fizz'

fizzBuzz(5);
// 'Buzz'

fizzBuzz(8);
// 8

fizzBuzz(15);
// 'FizzBuzz'

fizzBuzz(18);
// 'Fizz'

fizzBuzz(20);
// 'Buzz'
