const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer(function(req,res){
    var readPath = path.join(__dirname,'/from.txt');
    var writePath = path.join(__dirname,'/to.txt');
    var streamReader = fs.createReadStream(readPath);
    var streamWrtier = fs.createWriteStream(writePath);
    
    streamReader.pipe(streamWrtier);
}).listen(8081);

console.log("server is listening 8081");
