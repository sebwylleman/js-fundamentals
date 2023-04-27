const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it("returns candies with prefix 'Ma' and maximum price: 5", () => {
    expect(searchCandies('Ma', 5)).toEqual(['Mars', 'Maltesers']);
  });
  xit("returns candies with prefix 'P' and maximum price: 10", () => {
    expect(searchCandies('P', 5)).toEqual(['Pastilla']);
  });
  xit('returns candies with prefix Q and maximum price: 10', () => {
    expect(searchCandies('Q', 10)).toEqual([]);
  });
  xit("returns candies with prefix 'Ma' and maximum price: -2", () => {
    expect(searchCandies('Ma', -2)).toEqual([]);
  });
});
