
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


// function slow(x) {
//     // здесь могут быть ресурсоёмкие вычисления
//     console.log(`Called with ${x}`);
//     return x;
//   }
  
//   function cachingDecorator(func) {
//     let cache = new Map();
  
//     return function(x) {
//       if (cache.has(x)) {    // если кеш содержит такой x,
//         return cache.get(x); // читаем из него результат
//       }
  
//       let result = func(x); // иначе, вызываем функцию
  
//       cache.set(x, result); // и кешируем (запоминаем) результат
//       return result;
//     };
//   }
  
//   slow = cachingDecorator(slow);
  
//   console.log( slow(1) ); // slow(1) кешируем
//   console.log( "Again: " + slow(1) ); // возвращаем из кеша
  
//   console.log( slow(2) ); // slow(2) кешируем
//   console.log( "Again: " + slow(2) ); // возвращаем из кеша


// const names = {
//     one: "Egor",
//     two: "Ivan",
//     three: "Artem"
// }
// const hello = 'Hello';
// let say = ()=>{
//     const random = [Object.values(names)[Math.floor(Math.random()*Object.values(names).length)]]
//     return `${hello}` + " " + random
// }

// console.log(say.call())

// let worker = {
//     someMethod() {
//       return 1;
//     },
  
//     slow(x) {
//       console.log("Called with " + `${x}`);
//       return x * this.someMethod(); // (*)
//     }
//   };
  
//   function cachingDecorator(func) {
//     let cache = new Map();
//     return function(x) {
//       if (cache.has(x)) {
//         return cache.get(x);
//       }
//       let result = func.call(this, x); // теперь 'this' передаётся правильно
//       cache.set(x, result);
//       return result;
//     };
//   }
  
// worker.slow = cachingDecorator(worker.slow); // теперь сделаем её кеширующей

// console.log( worker.slow(2) ); // работает
// console.log( worker.slow(2) ); // работает, не вызывая первоначальную функцию (кешируется)

// let worker = {
//     slow(min, max) {
//       console.log(`Передано ${min},${max}`);
//       return min + max;
//     }
//   };
  
//   function cachingDecorator(func, hash) {
//     let cache = new Map();
//     return function() {
//       let key = hash(arguments); // (*)
//       if (cache.has(key)) {
//         return cache.get(key);
//       }
  
//       let result = func.call(this, ...arguments); // (**)
  
//       cache.set(key, result);
//       return result;
//     };
//   }
  
//   function hash(args) {
//     return args[0] + ',' + args[1];
//   }
  
//   worker.slow = cachingDecorator(worker.slow, hash);
  
//   console.log( "Результат:" + worker.slow(3, 5) ); // работает
//   console.log( "Кешированный результат: " + worker.slow(3, 5) ); // аналогично (из кеша)

// function hash() {
//     console.log([].join.call(arguments) ); // 1,2
//   }
  
// hash(4, 2);



// function f(a) {
//     console.log(a)
//   }
  
//   // f1000 передаёт вызовы f максимум раз в 1000 мс
// let f1000 = throttle(f, 1000);

// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)
// function throttle(func, ms) {

//     let isThrottled = false,
//       savedArgs,
//       savedThis;
  
//     function wrapper() {
  
//       if (isThrottled) { // (2)
//         savedArgs = arguments;
//         savedThis = this;
//         return;
//       }
  
//       func.apply(this, arguments); // (1)
  
//       isThrottled = true;
  
//       setTimeout(function() {
//         isThrottled = false; // (3)
//         if (savedArgs) {
//           wrapper.apply(savedThis, savedArgs);
//           savedArgs = savedThis = null;
//         }
//       }, ms);
//     }
  
//     return wrapper;
//   }
// console.log(throttle(f, 1000)(5)); // показывает 1);



// let user = {
//     firstName: "Вася",
//     sayHi() {
//       console.log("Привет" + " " + `${user.firstName}`);
//     }
//   };
  
//   setTimeout(user.sayHi, 1000); 

// let user = {
//     firstName: "Вася",
//     sayHi() {
//       console.log(`Привет, ${this.firstName}!`);
//     }
//   };
  
//   setTimeout((event) => {
//     user.sayHi(); 
//   }, 1000);

// let user = {
//     firstName: "Вася"
// };
// function func() {
//     return this.firstName
//   }
  
//   let funcUser = func.bind(user);
//   funcUser(); // Вася

// let user = {
//     firstName: "Вася",
//     say(phrase) {
//       console.log(`${phrase}, ${this.firstName}!`);
//     }
//   };
  
//   let say = user.say.bind(user);
  
//   say("Привет"); // Привет, Вася (аргумент "Привет" передан в функцию "say")
//   say("Пока");

// function partial(func, ...argsBound) {
//   return function(...args) { // (*)
//     return func.call(this, ...argsBound, ...args);
//   }
// }

// // использование:
// let user = {
//   firstName: "John",
//   say(time, phrase) {
//     console.log(`[${time}] ${this.firstName}: ${phrase}!`);
//   }
// };

// // добавляем частично применённый метод с фиксированным временем
// user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

// user.sayNow("Hello");
// // Что-то вроде этого:
// // [10:00] John: Hello!