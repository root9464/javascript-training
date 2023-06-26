////Классы

// class User {

//     constructor(named,surname) {
//         this.name = named;
//         this.surname = surname;
//     }
  
//     sayHi() {
        
//         console.log( "Hello,", this.name, this.surname);
//     }
  
//   }
  
//   // Использование:
//   let user = new User("Артем", "Шишкин");
//   user.sayHi();

// class user {}
// console.log(typeof user)

// class log {
//     log1(){
//         console.log('1')
//     }
//     log2(){
//         caches.log("2")
//     }
// }
// console.log(log.prototype.log1)

// class User {
//     constructor(name) { this.name = name; }
//     sayHi() { console.log(this.name); }
//   }
  
//   // класс - это функция
//   console.log(typeof User); // function
  
//   // ...или, если точнее, это метод constructor
//   console.log(User === User.prototype.constructor); // true
  
//   // Методы находятся в User.prototype, например:
//   console.log(User.prototype.sayHi); // sayHi() { console.log(this.name); }
  
//   // в прототипе ровно 2 метода
//   console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// function User(name, surname) {
//     this.name = name
//     this.surname = surname
// }
//   // каждый прототип функции имеет свойство constructor по умолчанию,
//   // поэтому нам нет необходимости его создавать
  
//   // 2. Добавляем метод в прототип
// User.prototype.add = (e) => {
//     return this.name, this.surname
// };

// // Использование:
// let user = new User("Егор","Червоный");
// console.log(Object.values(user))
// console.log(user)

// class User {

//     constructor(name) {
//       // вызывает сеттер
//       this.name = name;
//     }
  
//     get name() {
//       return this._name;
//     }
  
//     set name(value) {
//       if (value.length < 4) {
//         console.log("Имя слишком короткое.");
//         return;
//       }else{
//         this._name = value;
//       }
//     }
  
//   }
  
//   let user = new User("Иван");
//   console.log(user.name); // Иван
  
//   user = new User(""); // Имя слишком короткое.



//тоже самое что и сверху только сделано более грамотнее
// class User {
//     constructor(name,surname){
//         this.name = name;
//         this.surname = surname;
//     }
//     get fullName(){
//         return this._name, this._surname
//     }
   

//     set fullName(value){
//         return [this.name, this.surname] = value.split(" ");
//     }
// }

// let person = new User("Артем", "Шишкин");
// console.log(person) 
// console.log(Object.values(person))


//  // наследование
// class Animal {
//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
//     run(speed) {
//       this.speed = speed;
//       console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//     }
//     stop() {
//       this.speed = 0;
//       console.log(`${this.name} стоит неподвижно.`);
//     }
//   }

// class Rabbit extends Animal {
//     hide() {
//       console.log(`${this.name} прячется!`);
//     }
//   }

// let rabbit = new Rabbit("Белый кролик");

// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.hide(); // Белый кролик прячется!

// function say(phrase){
//     return class {
//         sayHi() { 
//             console.log(phrase);
//          }
//       };
// }
// class User extends say('hi') {}

// new User().sayHi(); // Привет

// class Animal {

//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//     }

//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} стоит неподвижно.`);
//     }

// }
  
// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} прячется!`);
//     }

//     stop() {
//         setTimeout(() => super.stop(), 5000); // вызывает родительский stop после 1 секунды
//     }
// }

// let rabbit = new Rabbit("Белый кролик");

// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!

// class Animal {

//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
  
//     // ...
//   }
  
//   class Rabbit extends Animal {
  
//     constructor(name, earLength) {
//       super(name);
//       this.earLength = earLength;
//     }
  
//     // ...
//   }
  
//   // теперь работает
//   let rabbit = new Rabbit("Белый кролик", 10);
//   console.log(rabbit.name); // Белый кролик
//   console.log(rabbit.earLength); // 10
//   console.log(rabbit)

// class Animal{
//     showName(){
//         console.log("animal")
//     }
//     constructor(){
//         this.showName()
//     }
// }
// class Dog extends Animal{
//     showName() {
//         console.log('dog')
//     }
// }

// new Animal()
// new Dog();

// let animal = {
//     name: "Animal",
//     eat() {
//       console.log(`${this.name} ест.`);
//     }
// };

// let rabbit = {
//   __proto__: animal,
//   name: "Кролик",
//   eat() {
//     // вот как предположительно может работать super.eat()
//     this.__proto__.eat.call(this); // (*)
//   }
// };

// rabbit.eat(); // Кролик ест.

// let Rabbit = {
//   name: 'Rabbit',
//   inf() {
//     console.log(`${this.name} есть`)
//   }
// }
// let Dog = {
//   __proto__: Rabbit,
//   name: 'Dog',
//   inf(){
//     super.inf()
//   }
// }

// let Cat = {
//   __proto__: Dog,
//   name: 'Cat',
//   inf(){
//     super.inf()
//   }
// }
// Cat.inf()


// class say{
//     static say(){
//         console.log(this === say)
//         console.log("Привет")
//     }
// }
// say.say()

////тоже самое что:

// class say { }
// say.func = () => {
//   console.log(this === User);
// };

// class article {
//     constructor(title, data){
//         this.title = title;
//         this.data = data;
//     }
//     static compare(a, b){
//         return a.date - b.date
//     }

// }

// let articles = [
//     new article("HTML", new Date(2019, 1, 1)),
//     new article("CSS", new Date(2019, 0, 1)),
//     new article("JavaScript", new Date(2019, 11, 1))
// ]
// articles.sort(article.compare);
// console.log(articles[Math.floor(Math.random() * articles.length)])

// class Article  {
//     constructor(title, data){
//         this.title = title;
//         this.data = data;
//     }
//     static createTodays() {
//         // помним, что this = Article
//         return new this("Сегодняшний дайджест", new Date());
//       }
// }
// let article = Article.createTodays();
// console.log(article)

////новое в js добавлено недавно 
// class Article {
//     static publisher = "Артем Шишкин";
// }
// console.log( Article.publisher ); // Артем Шишкин
////статик можно изменить прямым присваивание к примеру Article.publisher = "Егор Червоный"

// class Animal{
//     constructor(name,speed){
//         this.name = name
//         this.speed = speed
//     }
//     run(speed = 0){
//         this.speed += speed
//         console.log(`${this.name} бежит со скоростью ${this.speed}`)
//     }
//     static compare(a,b){ //метод compare по сути является методом сравнивания но в данном примере нечего сравнивать как по мне
//         return a.name || b.name
//     }
// }

// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} прячется`)
//     }
// }

// let rabbits = [
//     new Rabbit("Белый кролик", 10),
//     new Rabbit("Чёрный кролик", 5)
// ]
// rabbits.sort(Rabbit.compare);
// rabbits[Math.floor(Math.random() * rabbits.length)].run()

// console.log(
//     Rabbit.__proto__ === Animal,
//     Rabbit.prototype.__proto__ === Animal.prototype
// )


////важное пошло:

// class CoffeeMachine{
//     #waterAmount = 0;

//     constructor(power){
//         this.#power = power
//         console.log(`создана кофемашина с мощностью: ${power}`)
//     }


//     set waterAmount(value){
//         if (value < 0) throw new Error("Отрицательное количество воды");
//         this.#waterAmount = value;
//     }
//     get waterAmount() {
//         return this.#waterAmount;
//     }
// }

// let machine = new CoffeeMachine(100)
// CoffeeMachine.waterAmount = -200
// CoffeeMachine.power = 25

// class CoffeeMachine {
//   #waterLimit = 200;

//   #checkWater(value) {
//     if (value < 0) throw new Error("Отрицательный уровень воды");
//     if (value > this.#waterLimit) throw new Error("Слишком много воды");
//   }
// }

// let coffeeMachine = new CoffeeMachine();

// // снаружи  нет доступа к приватным методам класса
// coffeeMachine.#checkWater(); // Error
// coffeeMachine.#waterLimit = 1000; // Error

// class PowerArray extends Array {
//     isEmpty() {
//         return this.length === 0;
//     }
//      // встроенные методы массива будут использовать этот метод как конструктор
//     static get [Symbol.species]() {
//         return Array;
//     }
// }
// let arr = new PowerArray(1, 2, 5, 10, 50);
// console.log(arr.isEmpty()); // false

// // filter создаст новый массив, используя arr.constructor[Symbol.species] как конструктор
// let filteredArr = arr.filter(item => item >= 10);

// // filteredArr не является PowerArray, это Array
// console.log(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function

// let objectToString = Object.prototype.toString;

// // какой это тип?

// let arr = [];

// console.log( objectToString.call(arr) ); // [object Array]

// let sayHiMixin = {
//     say(){
//         console.log(`Привет, ${this.name}`);
//     },
//     bye(){
//         console.log(`Пока, ${this.name}`);
//     }
// }
// class User{
//     constructor(name){
//         this.name = name;
//     }
// }
// Object.assign(User.prototype, sayHiMixin)
// let user1 = new User("Артем").say();

// let person = {
//     greet(){
//         super.greet(); 
//     }
// };

// Object.setPrototypeOf(person, {
//     greet: function(){ console.log("Prototype method"); }
// });

// person.greet();

// let A = {
//     run() {
//       console.log('A runs');
//     }
// };

// let B = {
//     run() {
//         super.run();
//     }
// };

// Object.setPrototypeOf(B, A);

// B.run(); // A runs


// let sayMixin = {
//     say(phrase) {
//         console.log(phrase);
//     }
// };

// let sayHiMixin = {
//     __proto__: sayMixin, // (или мы можем использовать Object.create для задания прототипа) я хз как это сделать блять!

//     sayHi() {
//         // вызываем метод родителя
//         super.say(`Привет, ${this.name}`); // (*)
//     },
//     sayBye() {
//         super.say(`Пока, ${this.name}`); // (*)
//     }
//     };

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// // копируем методы
// Object.assign(User.prototype, sayHiMixin);

// // теперь User может сказать Привет
// new User("Вася").sayHi(); // Привет, Вася!

// let sayMixin = {
//     say(phrase) {
//       console.log(phrase);
//     }
// };

// let sayHiMixin = Object.create(sayMixin);

// sayHiMixin.sayHi = function() {
//     sayMixin.say(`Hey ${this.name}`);
// }
  
// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// // копируем методы
// Object.assign(User.prototype, sayHiMixin);

// // теперь User может сказать Привет
// new User("Вася").sayHi(); // Привет, Вася!