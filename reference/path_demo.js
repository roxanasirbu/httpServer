const path = require('path');

//base file name 
console.log(path.basename(__filename)); //-> path_demo.js

//directory name
console.log(path.dirname(__filename));

//file extension
console.log(path.extname(__filename));

//create path object 
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

//concatenate paths 
//../test/hello.html
console.log(path.join(__dirname, 'test','hello.html'));