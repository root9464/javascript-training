//// дополнительный раздел
//// Прокси

// let obj = {}
// let proxy = new Proxy(obj, { })
// proxy.name = 'Egor'
// proxy.surname = 'Chervony'
// console.log(proxy)

// for (let i in proxy) {
//     console.log([proxy[i]])
// }

// let numbers = [...Array(40)].map(e=>~~(Math.random()*40))
// numbers = new Proxy(numbers, {
//     get(target, prop){
//         return prop in target ? target[prop] : null
//     }

// })

// console.log(numbers[-1]) //null

// let numbers = [...Array(40)].map(e=>~~(Math.random()*40))
// numbers = new Proxy(numbers, {
//     get(target, prop){
//         return prop in target ? target[prop] : null
//     }

// })
// console.log(numbers[30])

// let dictionary = {
//     'Hello': 'Hola',
//     'Bye': 'Adiós'
// };
// dictionary = new Proxy(dictionary, {
//     get(target, prop){
//         return prop in target ? target[prop] : prop
//     }
// })
// console.log( dictionary['Hello'] ); // Hola
// console.log( dictionary['Not translate from proxy']); //Not translate from proxy (нет перевода)

// let numbers = [];

// numbers = new Proxy(numbers, { // (*)
//   set(target, prop, val) { // для перехвата записи свойства
//     if (typeof val == 'number') {
//       target[prop] = val;
//       return true;
//     } else {
//       return false;
//     }
//   }
// });

// numbers.push(1); // добавилось успешно
// numbers.push(2); // добавилось успешно
// console.log("Длина: " + numbers.length); // 2
// numbers.push("тест"); // TypeError (ловушка set на прокси вернула false)
// console.log("Интерпретатор никогда не доходит до этой строки (из-за ошибки в строке выше)");

// let user = {
//     name: "Вася",
//     age: 30,
//     _password: "***"
// };
// user = new Proxy(user,{
//     ownKeys(target){
//         return Object.keys(target).filter(key => !key.startsWith('_'))
//     }
// })

// console.log(Object.keys(user))
// console.log(Object.values(user))

// let user = { };
// user = new Proxy(user, {
//     ownKeys(target) {
//         return ['a', 'b', 'c'];
//     },
//     getOwnPropertyDescriptor(target, prop) { // вызывается для каждого свойства
//         return {
//           enumerable: true,
//           configurable: true
//           /* ...другие флаги, возможно, "value: ..." */
//         };
//       }
// });

// console.log( Object.keys(user) ); // <пусто>    

////уровень попизже
// let user = {
//     name: "Вася",
//     _password: "***"
// };
// user = new Proxy(user,{
//     get(target, prop) {
//          if(prop.startsWith("")) {
//             throw new Error("Отказано в доступе");
//          }else{
//             let value = target[prop];
//             return (typeof value === "function") ? value.bind(target) : value; 
//          }
//     },
//     set(target, prop, value){
//         if (prop.startsWith('_')) {
//             throw new Error("Отказано в доступе");
//         } else {
//             target[prop] = val;
//             return true;
//         }
//     },
//     deleteProperty(target, prop){
//         if (prop.startsWith('_')) {
//             throw new Error("Отказано в доступе");
//         } else {
//             delete target[prop];
//             return true;
//         }
//     },
//     ownKeys(target) {
//         return Object.keys(target).filter(key => !key.startsWith("_"))
//     }
// })
// try {
//     console.log(user._password); // Error: Отказано в доступе
// } catch(e) { console.log(e.message); }

// // "set" не позволяет записать _password
// try {
//     user._password = "test"; // Error: Отказано в доступе
// } catch(e) { console.log(e.message); }

// // "deleteProperty" не позволяет удалить _password
// try {
//     delete user._password; // Error: Отказано в доступе
// } catch(e) { console.log(e.message); }

// // "ownKeys" исключает _password из списка видимых для итерации свойств
// for(let key in user) console.log(key); // name
//// конец попизже)

// let range = {
//     start: 10,
//     end: 40,
// }
// range = new Proxy(range, {
//     has(target, prop){
//         return prop >= target.start && prop <= target.end
//     }
// })
// console.log(10 in range)

// let names = {
//     one:'Egor',
//     two:'Artem',
//     three:'Ivan',
// }
// names = new Proxy(names, {
//     has(target, prop){
//         return prop >= target.one && prop <= target.three
//     }
// })
// console.log("Egor" in names) //таким образом можно обрабатывать бдешки
// if('Egor' in names === true) {
//     console.log('есть')
// }

// let delay = (f,ms) =>{
//     return function(){
//         setTimeout(() => f.apply(this, arguments), ms);
//     }
// }
// let sayHi = (user) =>{
//     console.log(`Дарова ${user}`)
// }
// sayHi = delay(sayHi, 1000)
// sayHi('Artem')

// let delay = (f,ms) =>{
//     return new Proxy(f, {
//         apply(target, thisArg, args){
//             setTimeout(() => target.apply(thisArg, args), ms);
//         }
//     })
// }
// let sayHi = (user) =>{
//     console.log(`Дарова ${user}`)
// }
// sayHi = delay(sayHi, 3000);
// sayHi("Вася"); // Привет, Вася! (через 3 секунды)

// let user = {}
// Reflect.set(user, "name", "Egor")
// console.log(user)

// let user = {}
// user = new Proxy(user, {
//     get(target, prop,receiver){
//         console.log(`GET ${prop}`);
//         return Reflect.get(target, prop, receiver); // (1)
//     },
//     set(target, prop, value, receiver){
//         console.log(`SET ${prop}=${value}`);
//         return Reflect.set(target, prop, value, receiver); // (2)
//     }
// })
// let name = user.name; // выводит "GET name"
// user.name = "Петя"; // выводит "SET name=Петя"
// console.log(user)

// let user = {
//     _name: "Гость",
//     get name() {
//       return this._name;
//     }
//   };
  
// let userProxy = new Proxy(user, {
//     get(target, prop, receiver) {
//         return Reflect.get(target, prop, receiver); // (*)
//     }
// });

// let admin = {
//     __proto__: userProxy,
//     _name: "Админ"
// };
// console.log(admin.name); // Гость

// let map = new Map();
// let proxy = new Proxy(map, {
//     get(target, prop, receiver){
//         let value = Reflect.get(...arguments)
//         return typeof value === 'function' ? value.bind(target) : value
//     }
// })
// proxy.set('test', 1);
// console.log(map)

// class User {
//     #name = "Guest";
//     getName() {
//       return this.#name;
//     }
// }

// let user = new User();

// user = new Proxy(user, {
//     get(target, prop, receiver){
//         let value = Reflect.get(...arguments)
//         return typeof value == 'function' ? value.bind(target) : value;
//     }
// });

// console.log(user.getName()); 

// let allUsers = new Set();
// class User {
//   constructor(name) {
//     this.name = name;
//     allUsers.add(this);
//   }
// }

// let user = new User("Вася");
// console.log(allUsers.has(user)); // true

// user = new Proxy(user, {});
// console.log(allUsers.has(user)); // false

// let object = {
//     data: "Важные данные"
// };

// let {proxy, revoke} = Proxy.revocable(object, {});

// // передаём прокси куда-нибудь вместо оригинального объекта...
// console.log(proxy.data); // Важные данные
// // позже в коде
// revoke();
// // прокси больше не работает (отключён)
// console.log(proxy.data); // Ошибка

// let revokes = new WeakMap();
// let object = {
//   data: "Важные данные"
// };

// let {proxy, revoke} = Proxy.revocable(object, {});
// revokes.set(proxy, revoke);

// // ..позже в коде..
// revoke = revokes.get(proxy);
// revoke();
// console.log(proxy.data); // Ошибка (прокси отключён)



