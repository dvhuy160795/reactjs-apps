const http = require('http');
const api = require('./web/api.js');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let dataApi = api.getResponsive(req, res);
    res.write(JSON.stringify(dataApi));
    res.end();
});

server.listen(port, hostname);