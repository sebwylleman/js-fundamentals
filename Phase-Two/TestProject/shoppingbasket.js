const Candy = require('./candy');

class ShoppingBasket {
  constructor() {
    this.totalPrice = 0;
    this.items = [];
  }
  getTotalPrice() {
    return this.totalPrice;
  }
  addItem(item) {
    this.items.push(item);
    this.totalPrice += item.getPrice();
  }
}
module.exports = ShoppingBasket;
