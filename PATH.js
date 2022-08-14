const path = require('path');

//seperator in the path
console.log(path.sep);

//join the file path
console.log(path.join('/folder','subfolder', 'file.txt'));

//basename of the path
console.log(path.basename(path.join('/folder','subfolder', 'file.txt')));

//absolute path to a file
console.log(path.resolve(__dirname, 'folder' , 'subFolder' , 'file.txt'));