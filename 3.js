
////Продвинутая работа с функциями
////================================



// let hello = 'Hello';

// function sayHello(name) {
//     return (`${hello}` + " " + name);
// }
// console.log(sayHello('Egor'));

// функция-конструктор возвращает новый объект


// function makeCounter() {
//     let count = 1
//     intrandom = Math.floor(Math.random() * 100);
//     return function() {
//       return count + intrandom // есть доступ к внешней переменной "count"
//     };
//   }
  
// let counter = makeCounter();
// console.log(counter());

// // функция конструктор которая содержит привет и рандомное имя из массива
// const array = ["Egor", "Ivan", "Artem"]
// let text = () =>{
//     const hello = 'Hello';
//     return function(name){ //замыкающая
//         name = array[Math.floor(Math.random() * array.length)];
//         return `${hello}` + " " + name;
//     }
// }
// const eventName = text();
// console.log(eventName());

//чекал как удобнее можно определять функцию
// let a = () => {
//     return typeof a
// }

// function b() {
//     return typeof b
// }
// console.log(a(), b());


