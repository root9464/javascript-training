////Прототипы, наследование

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };
// rabbit.__proto__ = animal; // (*)

// // теперь мы можем найти оба свойства в rabbit:
// console.log( rabbit.eats ); // true (**)
// console.log( rabbit.jumps ); // true

// function Animal(name) {
//     this.name = name;
//     this.eats = true;
//   }
  
// let rabbit = new Animal("rabbit");

// console.log(
//     rabbit.name , rabbit.eats, 
//     ); 


// const animal = {
//     eats: true,
//     walk(){
//         console.log(`${animal.eats}, это животное жрет`)
//     }
// }
// const rabbit ={
//     jump: true,
//     __proto__:animal,
//     walk2(){
//         console.log(`${rabbit.jump} это животное еще и прыгает`)
//     }
// }
// rabbit.walk() + rabbit.walk2()
// console.log(rabbit)


// let animal = {
//     eats: true,
//     walk() {
//         /* этот метод не будет использоваться в rabbit */
//     }
// };

//     let rabbit = {
//     __proto__: animal
// };
  
// rabbit.walk = () => {
//     console.log("кролик епт");
// };

// rabbit.walk(); 


// let user = {
//     name: '',
//     surname: '', 

//     set fullName(value){
//         [this.name, this.surname] = value.split(' ');
//     },

//     get fullName() {
//         return `${this.name}, ${this.surname}`;
//     },
// }

// let admin = {
//     __proto__:user,
//     isAdmin: true,
// }

// user.fullName = "Алиса Купер"
// console.log(
//     `${admin.fullName}, имеет доступ: ${admin.isAdmin}`
// )


// // методы animal
// let animal = {
//     walk() {
//       if (! this.isSleeping) {
//         console.log(`I walk`);
//       }
//     },
//     sleep() {
//       this.isSleeping = true;
//     }
// };
  
// let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
// };

// // модифицирует rabbit.isSleeping
// rabbit.sleep();
// // animal.sleep();
// console.log( //true 
//     `${rabbit.isSleeping},${animal.isSleeping}`,// undefined (нет такого свойства в прототипе)
//      rabbit.name, rabbit.__proto__

// );

// let animal = {
//     eats: true
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
  
//   // Object.keys возвращает только собственные ключи
//   console.log(Object.keys(rabbit)); // jumps
  
//   // for..in проходит и по своим, и по унаследованным ключам
//   for(let prop in rabbit) console.log(prop); // jumps, затем eats

// let animal = {
//     eats: true
// };
  
// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };
// Object.prototype.hasOwnProperty({
//     enumerable: true,
//     configurable: true
// });
  
// let log = {
//     1:"",
//     2:"",
//     3:"",
// }
// for(let i in rabbit){
//     let isOwn = rabbit.hasOwnProperty(i);
//     log[3] = isOwn ? i : isOwn ? "" : rabbit[i]; ////залупа какая то я хз блять
//     if(isOwn){
//         log[1] = `${isOwn} - наследуется`
//     }else{
//         log[2] = `${isOwn} - не наследуется`
//     }
// };
// console.log(log)


// function animal(){}
// console.log(animal.prototype.constructor == animal)

// function FunctionAnimal(){}
// let rabbit = new FunctionAnimal()

// console.log(rabbit.constructor == FunctionAnimal)


// function FullName(name, surname) {
//     this.name = name
//     this.surname = surname
//     return `${name} ${surname}`
// }
// let user = new FullName("Егор", "Червоный")
// let string = ""
// for (let i in user) {
//     string += `${user[i]} `
// }

// console.log(string)
// console.log(typeof user, typeof string, typeof FullName,)

// if (!String.prototype.repeat) { // Если такого метода нет
//     // добавляем его в прототип
  
//     String.prototype.repeat = function(n) {
//       // повторить строку n раз
  
//       // на самом деле код должен быть немного более сложным
//       // (полный алгоритм можно найти в спецификации)
//       // но даже неполный полифил зачастую достаточно хорош для использования
//       return new Array(n + 1).join(this);
//     };
// }
// console.log("La".repeat(5))
// {
//     !String.prototype.repeat? String.prototype.repeat = function(n) {return new Array(n + 1).join(this)} : console.log( "La".repeat(5))
// }


// let user = "Null"
// {
//     user == "User" ? user : user = undefined
// }console.log(user)



// let obj = {
//     0: "Hello",
//     1: "world!",
//     length: 2,
// };

// obj.join = Array.prototype.join;

// console.log( obj.join(',') ); // Hello,world!



// const populations = {
//     russia: 146780,
//     ukraine: 42153,
//     belarus: 9475
// }
// let ArrKey = new Array()
// let ArrValue = new Array()
// for (let [key, value] of Object.entries(populations)) {
//     {
//         key ? ArrKey.push(key) :ArrKey = undefined,
//         value ? ArrValue.push(value) : ArrValue = undefined
//     }
// }
// console.log(
//     ArrKey,
//     ArrValue,
// )

// const populations = {
//     russia: 146780,
//     ukraine: 42153,
//     belarus: 9475
// }
// ArrKey = Object.keys(populations)
// //и так далее))
// console.log(ArrKey)


////неизменяемый обьект (enum) который выдает при записи в него имя + фамилию в строку 
//// и пользовательский созданный обьект (user) который копирует в себя значения и свойства enum'а и принимает имя и фамилию
//// может изменяться 
// const Enum = {
//     name: '',
//     surname: '',
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },
    
//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     }
// };

// let user = Object.create(Enum);
// user.fullName = "Егор Червоный";

// console.log(user.fullName); // Alice
// console.log(Enum)