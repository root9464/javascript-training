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