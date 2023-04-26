class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
}

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

const candy = new Candy('Mars', 4.99);
console.log(candy.getName());
console.log(candy.getPrice());

const basket = new ShoppingBasket();
console.log(basket.getTotalPrice());

basket.addItem(candy);

console.log(basket.getTotalPrice());

basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));

console.log(basket.getTotalPrice());
