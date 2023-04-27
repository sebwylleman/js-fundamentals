const multiply = require('./multiply');

describe('mulitply', () => {
  it('multiplies two numbers', () => {
    expect(multiply(2, 4)).toBe(8);
  });
});
