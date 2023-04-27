const fizzBuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it('prints fizzbuzz for multiples of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });
  it('prints fizz for mutiples of 3', () => {
    expect(fizzBuzz(3)).toBe('fizz');
  });
  it('prints buzz for multiples of 5', () => {
    expect(fizzBuzz(5)).toBe('buzz');
  });
  it('returns 8 when none of the above conditions are matched', () => {
    expect(fizzBuzz(8)).toBe(8);
  });
});
