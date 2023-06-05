//*рекурсия
// function pow(x, n) {
//     let result = 5;
  
//     // умножаем result на x n раз в цикле
//     for (let i = 0; i < n; i++){
//          result *= x;}
    
  
//     return result;
//   }
  
//   console.log( pow(2, 3) ); // 8


//*ввести данные в массив и записать их в файл
// let fs = require('fs')

// array = []
// function arr(array) {
//     for (let i = 0; i < 10; i++){
//         array.push(i)
//     }
//     return array
// }

// console.log(arr(array))

// fs.writeFile('testFile.txt', `${array}`, (err) => {
//     if(err) throw err;
    
//     console.log('сделано епт');
// });


//*записать рандомные значения в массив и записать их в файл
// const fs = require('fs');
// array = []
// function arr(array) {
//     for (var i=0, t=40; i<t; i++) {
//         array.push(Math.round(Math.random() * t))
//     }array.sort((a, b) => a - b)
//     return array
// }
// fs.writeFile('testFile.txt', `${array}`, (e) => {
//     console.log('сделано епт');
// });


//*заполнить массив через время
// let array = [0];
// setTimeout(() => {
    
//     array.forEach(e => {
//         // for(let i = 1; i < 10; i++){
//         //     array.push(Math.round(Math.random() * 100))
//         // }

//         while(array.length < 100){
//             array.push(Math.round(Math.random() * 100))
//             array[0] = Math.round(Math.random() * 100)
//         }
//     });
//     console.log(array);
// }, 4000);

