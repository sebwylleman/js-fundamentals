const fizzBuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it('prints fizzbuzz for multiples of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });
});
