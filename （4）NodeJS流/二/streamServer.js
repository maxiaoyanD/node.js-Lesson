const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer(function(req,res){
    var filePath = path.join(__dirname,'/data.txt');
    var streamReader = fs.createReadStream(filePath);
    streamReader.pipe(res);
}).listen(8081)

console.log("server is listening 8081");