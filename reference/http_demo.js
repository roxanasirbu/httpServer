const http = require ('http');

//create server obj
http
.createServer((req, res) => {
    //write response
    res.write('Hello World');
    res.end()
})
.listen(8080, () => console.log('server runnig...'));