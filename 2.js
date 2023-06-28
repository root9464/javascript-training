////Обработка ошибокб + Промисы, async/await
////========================================




// try {

//     console.log('Начало блока try');  // (1) <--
  
//     //псевдо ошибка (разкоментиировать)
  
//     console.log('Конец блока try (никогда не выполнится при ошибке )');  // (2)
  
//   } catch(err) {
  
//     console.log(`Возникла ошибка!`); // (3) <--
  
//   }

////Промисы, async/await
// let promise = new Promise((resolve, reject) => {
//     // задача, не требующая времени
//     resolve("fff");
//   }).then((value) => {
//     console.log(value); 
//   });

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('гуд'),1000);

// }).then(
//     result => console.log(result),
//     reject => console.log("error")
// )

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("fff")), 1000);
// }).then(
//     result => console.log(result),
//     error => console.log("error")
// )


// let promise = new Promise(function(resolve, reject) {
//     // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
//     setTimeout(() => reject(), 1000);
//   });
//   promise.then(
//       result => console.log(result),
//       reject => console.log("error")
//   )

// // *заполнить массив при подписке на промис в через время
// const log = console.log
// let array = [0]
// let promise = new Promise((resolve, reject) => {
//     setTimeout((e) => {
//         reject(new Error("Whoops!"))
//         array.forEach(err => {
//                     // for(let i = 1; i < 10; i++){
//                     //     array.push(Math.round(Math.random() * 100))
//                     // }
            
//                     while(array.length < 100){
//                         array.push(Math.round(Math.random() * 100))
//                         array[0] = Math.round(Math.random() * 100)
//                     }
//                 });
//         resolve(array)
//     }, 2000);
//   }).finally(() => log("Промис завершён")) // срабатывает первым
//     .then(result => log(result), log(err)); // <-- .then показывает "value"



// async function hello(){ return 'Hello' }
// console.log(hello());

// async function hello(){
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("готово!"), 1000)
//       });
//     let result = await promise;
//     return promise
// }

// hello().then(
//     console.log,
// )

// async function f() {
//     await Promise.reject(new Error("Упс!"));
//   }
// f().then(
//     console.log,
//     err => console.log(err))
