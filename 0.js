let fs = require('fs');

function createdFile() { //создание файлов циклично 
for (let i = 1; i < 5; i++) {
    fs.open(`${i}.js`, 'w', (err) => {
        if(err) throw err;
        console.log('File created');});
};
}