// const Person = require('./person');

// const person1 = new Person('John Doe', 20);
// person1.greeting();

// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('message', (data)=> console.log('called listener:', data));

// logger.log('Hello World!');

//create server 
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {

//     //console.log(req.url);
//     if (req.url === '/') {
//         //    res.writeHead(200, {'Content-Type': 'text/html'});
//         //    res.end('<h1>Homepage<h1>')
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//              if(err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(content);
//         })
//     }



// // if (req.url === '/about') {
// //     //    res.writeHead(200, {'Content-Type': 'text/html'});
// //     //    res.end('<h1>Homepage<h1>')
// //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
// //          if(err) throw err;
// //         res.writeHead(200, { 'Content-Type': 'text/html' });
// //         res.end(content);
// //     })
// // }

// if (req.url === '/api/users') {
//     const users = [
//         {name: 'Bob Smith', age: 40},
//         {name: 'John Doe', age: 20}
//     ];
//     res.writeHead(200, {'Content-Type': 'application.json'});
//     res.end(JSON.stringify(users));
// }

//build file path
let filePath = path.join(
    __dirname, 
    'public', 
    req.url === '/' ? 'index.html' : req.url);

// console.log(filePath);

//extension of the file 
let extname = path.extname(filePath);

//initial content tyope 
let contentType = 'text/html';

//check ext and set content tyoe 
switch(extname) {
    case '.js': 
      contentType = 'text/javascript';
    break;
    case '.css': 
      contentType = 'text/css';
    break;
    case '.json': 
      contentType = 'application/json';
    break;
    case '.png': 
      contentType = 'image/png';
    break;
    case '.jpg': 
      contentType = 'image/jpg';
    break;
}

//read file 
fs.readFile(filePath, (err, content) => {
    if(err) {
        if(err.code == 'ENOENT') //page not found
        {
           fs.readFile(path.join(__dirname, 'public', '404.html'),
           (err, content)=> {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content, 'utf8');
           })
        } else {
            //some server error
            res.writeHead(500);
            res.end(`server error: ${err.code}`);
        }
    } else {
        //success 
        res.writeHead(200, {'Content-Type': contentType});
        res.end(content, 'utf8');
    }
})

});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));