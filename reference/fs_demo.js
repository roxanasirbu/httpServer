const fs = require('fs');
const path = require('path');

//create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('folder created ...')
// });

//create and write to file 
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello, Roxana', err => {
//     if (err) throw err;
//     console.log('file created ...')
// });
// //overwrite
// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'), 
//     'I love Node.js`', 
//     err => {
//     if (err) throw err;
//     console.log('file created ...')
// });

//append 
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello, Roxana', err => {
//     if (err) throw err;
//     console.log('file created ...');

//     //file append
//     fs.appendFile(
//         path.join(__dirname, '/test', 'hello.txt'), 
//         'I love Node.js`', 
//         err => {
//         if (err) throw err;
//         console.log('file created ...')
//     });
// });

//read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 
// 'utf8', 
// (err,data) => {
//     if(err) throw err;
//     console.log(data);
// });

//rename
fs.rename(
path.join(__dirname, '/test', 'hello.txt'), 
path.join(__dirname, '/test', 'helloWorld.txt'), 
(err) => {
    if(err) throw err;
    console.log('file renamed');
});