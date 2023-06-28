////генераторы и продвинутая итерация


// function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
//   }
  
// let generator = generateSequence();

// let arr = ["one", "two", "three"]
// arr.forEach(e => {
//     e = generator.next();
//     console.log(JSON.stringify(e));
// })

// function* generatorSequence(){
//     yield 1;
//     yield 2;
//     yield 'епта';
//     return "все епт"
// }

// let generator = generatorSequence();

// for(let value of generator) {
//   console.log(value); // 1, затем 2
// }

// function* generateSequence() {
//     yield 'Я';
//     yield 'пиздатый';
//     yield 'разработчик';
//   }
  
// let sequence = [...generateSequence()].join(" ") // или .toString() чтобы изменить тип, хотя оба метода меняют тип )
// console.log(sequence); // 0, 1, 2, 3

// let range = {
//     from: 1,
//     to: 10,
//     [Symbol.iterator](){
//         return {
//             current: this.from,
//             last: this.to,

//             // next() вызывается при каждой итерации цикла for..of
//             next() {
//                 // нужно вернуть значение как объект {done:.., value :...}
//                 return this.current <= this.last ? { done: false, value: this.current++ } :{ done: true }
//                                              или
//                 // if (this.current <= this.last) {
//                 // return { done: false, value: this.current++ };
//                 // } else {
//                 // return { done: true };
//                 // }
//       }
//         }
//     }
// }
// console.log([...range])

// let range = {
//     from: 1,
//     to: 5,
  
//     *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
//       for(let value = this.from; value <= this.to; value++) {
//         yield value;
//       }
//     }
// };

// console.log( [...range] ); // 1,2,3,4,5

// function* generateSequence(start, end) {
//     for (let i = start; i <= end; i++) yield i;
// }
// function* generateAlphaNum() {

//     // yield* generateSequence(48, 57); цифры
//     for (let i = 48; i <= 57; i++) yield i;
  
//     // yield* generateSequence(65, 90); большие буквы
//     for (let i = 65; i <= 90; i++) yield i;
  
//     // yield* generateSequence(97, 122); маленькие буквы
//     for (let i = 97; i <= 122; i++) yield i;
  
// }

// let str = '';

// for(let code of generateAlphaNum()) {
//     str += String.fromCharCode(code);
// }

// console.log(str); // 0..9a..zA..Z

// function* gen() {
//     let result = yield 10 + 2
    
//     {
//         question === result ? console.log(`Ваш ответ: ${result}, вывод:`, true) : console.log(`Ваш ответ: ${question}, вывод:`, false)
//     }
//     console.log(`Правильный ответ: ${result}`)
// }

// let generator = gen()
// let question = generator.next().value; 
// generator.next(12); 

// function* gen() {
//     let ask1 = yield "2 + 2 = ?";
  
//     console.log(ask1); // 4
  
//     let ask2 = yield "3 * 3 = ?"
  
//     console.log(ask2); // 9
// }

// let generator = gen();

// console.log( generator.next().value ); // "2 + 2 = ?"

// console.log( generator.next(4).value ); // "3 * 3 = ?"

// console.log( generator.next(9).done ); // true 
// // минус здесь в том что любое значение будет true что неприемлемо! 

// function* gen() {
//     try {
//       let result = yield "2 + 2 = ?"; // (1)
  
//       console.log("Выполнение программы не дойдёт до этой строки, потому что выше возникнет исключение");
//     } catch(e) {
//       console.log(e); // покажет ошибку
//     }
//   }
  
//   let generator = gen();
  
//   let question = generator.next().value;
  
//   generator.throw(new Error("Ответ не найден в моей базе данных")); // (2)

// const err = new Error('errr');
// function* gen() {
//     let result = yield 10 + 2
//     if(typeof question === "number" && question === result){
//         console.log(`Ваш ответ: ${result}, правильный ответ: ${question}, вывод:`, true)
//     }else if(typeof question !== "number"){
//         console.log(err)
//     }else{
//         console.log(`Ваш ответ: ${result}, правильный ответ: ${question}, вывод:`, false)
//     }
//     console.log(typeof result, result)
// }

// let generator = gen()
// let question = generator.next().value; 
// generator.next(12); 

//// псевдо асинхронность

// let range = {
//     from: 1,
//     to: 5,
//     // for await..of вызывает этот метод один раз в самом начале
//     [Symbol.asyncIterator]() { // (1)
//         // ...возвращает объект-итератор:
//         // далее for await..of работает только с этим объектом,
//         // запрашивая у него следующие значения вызовом next()
//         return {
//         current: this.from,
//         last: this.to,
//         // next() вызывается на каждой итерации цикла for await..of
//         async next() { // (2)
//                 // должен возвращать значение как объект {done:.., value :...}
//                 // (автоматически оборачивается в промис с помощью async)
//                 // можно использовать await внутри для асинхронности:
//                 await new Promise(resolve => setTimeout(resolve, 1000)); // (3)
//                 return this.current <= this.last ? { done: false, value: this.current++ } :{ done: true };
//             }
//         };
//     }
// };

// (async () => {
//     for await (let value of range) { // (4)
//         console.log(value); // 1,2,3,4,5
//     }
// })()

// function* generateSequence(start, end) {
//     for (let i = start; i <= end; i++) {
//         yield i;
//     }
// }

// for(let value of generateSequence(1, 5)) {
// console.log(value); // 1, потом 2, потом 3, потом 4, потом 5
// }

// async function* generateSequence(start, end){
//     for(let i = 0; i <= end; i++) {
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         yield i;
//     }

// }
// (async () =>{
//     let generator = generateSequence(1,19)
//     for await (let value of generator){
//         console.log(value)
//     }
// })();

// let range = {
//     start: 1,
//     end: 5,
  
//     async *[Symbol.asyncIterator]() { // то же, что и [Symbol.asyncIterator]: async function*()
//       for(let value = this.start; value <= this.end; value++) {
//         // пауза между значениями, ожидание
//         await new Promise(resolve => {
//             setTimeout(() => {
//                 resolve(value)
//             }, 1000);
//         })
//         yield value;
//       }
//     }
//   };

// (async () => {
//     for await (let value of range) {
//         console.log(value); // 1, потом 2, потом 3, потом 4, потом 5
//     }
// })();


//// уровень попизже
//// псевдоасинхронная функция которая пиздит коммиты с гита)
// async function* gopnik(repo){
//     let url = `https://api.github.com/repos/${repo}/commits`;
//     while(url){
//         const response = await fetch(url, {
//             headers: {'User-Agent': 'Our script'},
//         });
//         const body = await response.json();
//         let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
//         nextPage = nextPage && nextPage[1];
//         url = nextPage;

//         for(let commit of body) { // (4) вернуть коммиты один за другим, до окончания страницы
//           yield commit;
//         }
//     }
// }
// (async () => {
//     let count = 0;
//     for await (const commit of gopnik('javascript-tutorial/en.javascript.info')) {
//         console.log(commit.author.login);
//         if (++count == 100) { // остановимся на 100 коммитах
//             break;
//         }
//     }
// })();

