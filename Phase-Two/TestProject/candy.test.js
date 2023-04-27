const Candy = require('./candy');
const myCandy = new Candy('Mars', 1);

describe('Candy', () => {
  it('returns the name of the candy', () => {
    expect(myCandy.name).toEqual('Mars');
  });
  it('returns the price of the candy', () => {
    expect(myCandy.price).toEqual(1);
  });
});
