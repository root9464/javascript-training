//рекурсия
// function pow(x, n) {
//     let result = 5;
  
//     // умножаем result на x n раз в цикле
//     for (let i = 0; i < n; i++){
//          result *= x;}
    
  
//     return result;
//   }
  
//   console.log( pow(2, 3) ); // 8


//ввести данные в массив и записать их в файл
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


//записать рандомные значения в массив и записать их в файл
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

console.log("ff")