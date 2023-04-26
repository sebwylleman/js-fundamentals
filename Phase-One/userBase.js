const User = require('./user');

class UserBase {
  constructor(users) {
    this.users = users;
  }
  count() {
    return this.users.length;
  }
  getNames() {
    return this.users.map((user) => user.getName());
  }

  getIntroduction() {
    return this.users.map((user) => `Hi, my name is ${user.getName()}`);
  }
}

const users = [new User('Uma'), new User('Josh'), new User('Ollie')];

const userbase = new UserBase(users);
console.log(userbase.getNames());
console.log(userbase.getIntroduction());
