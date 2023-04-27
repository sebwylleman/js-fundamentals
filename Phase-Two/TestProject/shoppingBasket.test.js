const Candy = require('./candy');
const ShoppingBasket = require('./shoppingbasket');

const myBasket = new ShoppingBasket();
const mockCandy1 = { name: 'Mars', price: 1, getPrice: () => 1 };
const mockCandy2 = { name: 'Snickers', price: 1, getPrice: () => 1 };

describe('ShoppingBasket', () => {
  beforeEach(() => {
    myBasket.items = [];
    myBasket.totalPrice = 0;
  });
  it('adds a candy to the basket', () => {
    myBasket.addItem(mockCandy1);
    expect(myBasket.items).toContain(mockCandy1);
  });
  xit('returns 0 as the total price when no candies have been added to the basket', () => {
    // write test
  });
  xit('returns the sum of prices for each item in the basket', () => {
    // write test
  });
});
