const Candy = require('./candy');

describe('Candy', () => {
  it('returns the name of the candy', () => {
    const myCandy = new Candy('Mars', 1);
    expect(myCandy.name).toEqual('Mars');
  });
});
