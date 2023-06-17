////свойства обьекта и их конфигурация

// let user = {
//     name: "John",
//     surname: "FFF"
//   };
  
//   let descriptor = Object.getOwnPropertyDescriptor(user, 'surname');
  
//   console.log( JSON.stringify(descriptor, null, 2 ) );

// let user = {};

// Object.defineProperty(user, "name", {
//   value: "John"
// });

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// console.log( JSON.stringify(descriptor, null, 2 ) );

// "use strict"
//     let user = {
//         name: "John"
//     };
    
//     Object.defineProperty(user, "name", {
//     writable: false
//     });

//     user.name = "Pete";
//     console.log(user.name); 


// let user = {
//     name: "John",
//     surname: "Smith",
  
//     get fullName() {
//       return `${this.name} ${this.surname}`;
//     }
//   };
  
//   console.log(user.fullName); // John Smith


// let user = {
//     name: "John",
//     surname: "Smith",
  
//     get fullName() {
//       return `${this.name} ${this.surname}`;
//     },
  
//     set fullName(value) {
//       [this.name, this.surname] = value.split(" ");
//     }
//   };
  
//   // set fullName запустится с данным значением
//   user.fullName = "Alice Cooper";
  
//   console.log(user.name); // Alice
//   console.log(user.surname); // Cooper


// let user = {
//     name: "John",
//     surname: "Smith"
//   };
  
//   Object.defineProperty(user, 'fullName', {
//     get() {
//       return `${this.name} ${this.surname}`;
//     },
  
//     set(value) {
//       [this.name, this.surname] = value.split(" ");
//     }
//   });
// let fullnameKey = {

// }
// for(let key in user) {
//     fullnameKey[key] = user[key];

// } // name, surname
// console.log(fullnameKey)


// let user = {
//     get name(){
//         return this._name
//     },
//     set name(value){
//         if (value.length  <= 4){
//             console.log("слишком короткое")
//         }
//         this._name = value
//     }

// }
// user.name = "Pet"
// console.log(user.name)




// let user = {
//     name: "",
//     surname: "",
  
//     get fullName() {
//       return `${this.name} ${this.surname}`;
//     },
  
//     set fullName(value) {
//       [this.name, this.surname] = value.split(" ");
//     }
//   };
  
// // set fullName запустится с данным значением
// user.fullName = "Alice Cooper";

// console.log(user.fullName); // Alice


// let user = {
//     name: "",
//     surname: ""
//   };
  
//   Object.defineProperty(user, 'fullName', {
//     get() {
//       return `${this.name} ${this.surname}`;
//     },
  
//     set(value) {
//       [this.name, this.surname] = value.split(" ");
//     }
//   });
// user.fullName = "Alice Smith"
// console.log(user.fullName, user); // John Smith

// for(let key in user) console.log(key); // name, surname
