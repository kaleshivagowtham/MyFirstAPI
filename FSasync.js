const {readFile , writeFile} = require('fs');

//prints the error or the result
readFile('./folder/first.txt','utf-8', (error , result)=>{
    if (error){
        console.log(error);
        return ;
    }
    console.log(result);
})

//printing multiple files and writing to the files

readFile('./folder/first.txt','utf-8', (err , res) => {
    if(err){
        console.log(error);
        return ;
    }
    const first = res;
    readFile('./folder/second.txt','utf-8', (err , res) => {
        if (err){
            console.log(error);
            return ;
        }
        const second = res;
        writeFile('./folder/subFolder/second-async.txt', 'this is the second file in subfolder with async content' , (err ,res)=>{
            if(err){
                console.log(error);
                return ;
            }
            console.log(res);
        })
    } )
} )