const http = require('http')
const fs = require('fs')
const PORT = 3000;
const server = http.createServer((req, resp) => {
    switch (req.url) {
        case '/':
            fs.readFile('./index.html', (error, data) => {
                resp.statusCode = 200;
                resp.setHeader('Content-Type', 'text/html');
                resp.end(data);
            })
            break
        case '/hello':
            fs.readFile('./hello.html', (error, data) => {
                resp.statusCode = 200;
                resp.setHeader('Content-Type', 'text/html');
                resp.end(data);
            })
            break
        default:

            resp.statusCode = 404;
            resp.setHeader('Content-Type', 'text/html');
            resp.end('NOT FOUND');



    }
})

server.listen(PORT, () => {
    console.log('Server is running');
})