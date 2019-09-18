const http = require("http");
const fs = require("fs");
const path = require("path");
var fileName = process.argv[2];
http.createServer(function(req,res){
    if(fileName == undefined){
        var pathName = process.argv[1];

    }else{
        var pathName =  path.join(__dirname,process.argv[2]);
    }
    console.log(pathName);
    if(fs.existsSync(pathName)){
        var reader = fs.createReadStream(process.argv[1]);
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        reader.pipe(res);//可读流.pipe(可写流)
    }else{
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        res.end("文件不存在！！")
    }

}).listen(8081);
console.log("server is listening 8081");