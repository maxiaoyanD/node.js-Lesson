
const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer(function(req,res){
    if(process.argv[2]){
        var file = process.argv[2];
    }else{
        var file = 'fileReader2.js';
    }
    var filePath = path.join(__dirname,'/'+file);
    if(fs.existsSync(filePath)){
        fs.open(filePath,"r+",function(err,fd){
            if(err){
                console.log(err);
            }else{
                var len = fs.statSync(filePath).size;
                var buf = Buffer.alloc(len);
                fs.read(fd,buf,0,len,0,function(err,by,buff){
                    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                    res.end(buf.toString());
                });
                fs.close(fd,function(err){
                    if(err){
                        console.log(err);
                    }
                });
            }
        });  
    }else{
        res.end("该文件不存在！");
    }
}).listen(8081)

console.log("server is listening 8081");

/*
const http = require("http");
const fs = require("fs");
const path = require("path");
var fileName = process.argv[2];
http.createServer(function(req,res){
    if(fileName == undefined){
        fs.open(process.argv[1],"r+",function(err,fd){
            var statObj = fs.statSync(process.argv[1]);
            var buf = Buffer.alloc(statObj.size);
            fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){
                if(err){
                    console.log(err);
                }else{
                    res.end(buf.toString());
                    fs.closeSync(fd);
                }
            })
        })
    }else{
        
    }

}).listen(8081);
console.log("server is listening 8081");*/