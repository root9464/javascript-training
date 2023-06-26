let sayMixin = {
    say(phrase) {
      console.log(phrase);
    }
};

let sayHiMixin = Object.create(sayMixin);

sayHiMixin.sayHi = function() {
    sayMixin.say(`Hey ${this.name}`);
}
  
class User {
    constructor(name) {
        this.name = name;
    }
}

// копируем методы
Object.assign(User.prototype, sayHiMixin);

// теперь User может сказать Привет
new User("Вася").sayHi(); // Привет, Вася!