const http = require('http');
const url = require('url');
const filesystem = require('fs');
const path = require('path');

const port = 5000;
const hostname = '127.0.0.1';

const mimeTypes = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'text/javascript',
    'png': 'image/png',
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpg'
}
http.createServer((req, res) => {
    var myUri = url.parse(req.url).pathname;
    console.log(myUri);
    var filename = path.join(process.cwd(),unescape(myUri));
    console.log('File you are looking for is :' + filename);
    var loadFile;
    try {
        loadFile = filesystem.lstatSync(filename);
    }
    catch (error) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 page not found');
        res.end();
        return;
    }
    if (loadFile.isFile()) {
        var mimeType = mimeTypes[path.extname(filename).split('.').reverse()[0]];
        res.writeHead(200, { 'Content-Type': mimeType });
        var filestream = filesystem.createReadStream(filename);
        filestream.pipe(res);
    }
    else if (loadFile.isDirectory()) {
        res.writeHead(302, { Location: 'index.html' });
        res.end();
    }
    else {
        res.writeHead(500, { 'Content-type': 'text/plain' });
        res.write('500 Interal Error');
        res.end();
    }
}).listen(port, hostname, () => {
    console.log(`Server is running at port:${port}`);
})