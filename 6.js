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

