var http = require('http');

// http.createServer(function(req,res){
//     res.writeHead(200,{
//         "content-type":"text/plain"
//     });
//     res.write("hello world");
//     res.end();
// }).listen(3001)

var server = new http.Server();
server.on("request",function(req,res){
    res.writeHead(200,{
        "content-type":"text/plain",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"GET,POST"
    })
    res.write("just a test");
    res.end();
});

server.listen(3001)