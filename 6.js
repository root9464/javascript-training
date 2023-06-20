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

Переопределение конструктора