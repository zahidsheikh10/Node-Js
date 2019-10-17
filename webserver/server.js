const http = require('http');
const hostname = '127.0.0.1';
const port = 5000;
http.createServer((req,rep) => {
    rep.writeHead(200,{'Content-Type':'text/plain'});
    rep.write('Server is running sucessfully');
    rep.end();
}).listen(port,hostname,() => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});