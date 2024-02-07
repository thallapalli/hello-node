const http = require('http')
const PORT = 3000;
const server = http.createServer((req, resp) => {
    resp.statusCode=200;
    resp.setHeader('Content-Type','text/plain');
    resp.end('Hello World');

})

server.listen(PORT,()=>{
    console.log('Server is running');
})