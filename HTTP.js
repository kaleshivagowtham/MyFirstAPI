const http = require('http');

//To reply to the request recieved by the api
const server = http.createServer((req , res) => {
    if(req.url === '/'){
        res.end('Welcome to the home page');
    }
    else if(req.url === '/about'){
        res.end('This is about us');
    }
    else {
        res.end('Nothing found | 404')
    }
})

server.listen(5000);