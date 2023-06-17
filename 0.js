let fs = require('fs');

function createdFile(a,b) { //создание файлов циклично 
    for (let i = a; i <= b; i++) {
        fs.open(`${i}.js`, 'w', (err) => {
            
            console.log('готово епта');});
    };
}
createdFile(4,8)