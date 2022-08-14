const {readFileSync , writeFileSync, readFile} = require('fs');

console.log(readFileSync('./folder/first.txt' , 'utf-8'));
console.log(readFileSync('./folder/second.txt','utf-8'));

writeFileSync('./folder/subFolder/first.txt','Hello this is created and written by node');
console.log(readFileSync('./folder/subFolder/first.txt', 'utf-8'));

writeFileSync('./folder/subFolder/first.txt','///////Hello this is created and written by node',{flag:'a'});
