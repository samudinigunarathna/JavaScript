var http = require('http');
http.createServer(function(req, res){
    res.write("Web services and technologies")
    res.end()
}).listen(8080)
