const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //build file path   
    let filepath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : 
    req.url
    );
    console.log(req.url);
    let extname = path.extname(filepath);
    let contenttype = 'text/html';

    switch (extname) {
        case '.js':
            contenttype = 'text/javascript';
            break;
        case '.css':
            contenttype = 'text/css';
            break;
        case '.json':
            contenttype = 'application/json';
            break;
        case '.png':
            contenttype = 'image/png';
            break;
        case '.jpg':
            contenttype = 'image/jpg';
            break;
    }
    // read file
    fs.readFile(filepath,(err,content)=>{
        if(err){
            if(err.code == 'ENOENT'){
                // page not found
                fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content,'utf8');
                });
            }else{
                res.writeHead(500);
                res.end(`server error :${err.code}`);
            }
        }else{
            // success
            res.writeHead(200, { 'Content-Type': contenttype });   
            res.end(content,'utf8');    

        }
    })



    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, Content) => {
    //         if (err)
    //             throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.end(Content);
    //     });
    // }
    // if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, Content) => {
    //         if (err)
    //             throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.end(Content);
    //     });
    // }
    // if (req.url === '/api/users') {
    //    const users = [{name : 'mohamed' , age : 20},{name : 'omar' , age : 204}];  
    //    res.writeHead(200, { 'Content-Type': 'application/json' });
    //    res.end(JSON.stringify(users));
    //  }
    // console.log(req.url);
});

const PORT = process.env.port || 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT} `));




































// const Person =require('./person');

// const person  = new Person('mohamed' , 20);
// person.greeting();
// const Logger =  require('./logger');
// const logger = new Logger();
// logger.on('message',data => console.log(`Called listener:`,data));
// logger.log('hello world');
