const http = require('http');
const api = require('./web/api.js');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
    res.writeHead(200,
        {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*',//check front end call api fail
            'Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': "*",
            'Access-Control-Allow-Headers': "*",
            }
        );
    var body='';
    req.on('data', function (data) {
        body +=data;
    });
    req.on('end',function(){
        let params = body;
        if (req.method === "POST") {
            params = JSON.parse(body);
        }
        // console.log(req.url);
        let request = {
            url : req.url,
            method : req.method,
            params : params
        };
        let dataApi = api.getResponsive(request, res);
        res.write(JSON.stringify(dataApi));
        res.end();
    });


});

server.listen(port, hostname);