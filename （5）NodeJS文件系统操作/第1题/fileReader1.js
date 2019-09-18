const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer(function(req,res){
    if(process.argv[2]){
        var file = process.argv[2];
    }else{
        var file = 'fileReader1.js'
    }
    var pathName = path.join(__dirname,'/'+file);
    if(fs.existsSync(pathName)){
        fs.readFile(pathName,function(err,data){
            if(err){
                res.end(err);
            }else{
                res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                // res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
                res.end(data.toString());
            }
        });
    }else{
        res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
        res.end("文件不存在！！");
    }
}).listen(8081);
console.log("server is listening 8081");


//不传参试fileName是undefined


// var fileName = process.argv[2];
// http.createServer(function(req,res){
//     if(fileName == undefined){
//         /**
//          * fs.readFile():是一个异步方法，执行到该句不会等待文件读取完成
//          * 就直接执行后面的语句。
//          * 回调函数是等到文件读取完成之后才执行。
//          */
//         //var str = "hello";
//         fs.readFile(process.argv[1],function(err,data){
//             if(err){
//                 console.log(err);
//             }else{
//                 //data得到的是buffer类型的
//                 res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
//                 res.end(data.toString());
//                 //str= data.toString();
//             }
//         })
//         //res.end(str);
//         //显示结果是hello，因为readFile是异步操作，不等函数执行完，就会执行下面的内容
//     }else{
//         var pathName = path.join(__dirname,'/'+fileName);
//         if(fs.existsSync(pathName)){
//             fs.readFile(pathName,function(err,data){
//                 if(err){
//                     console.log(err);
//                 }else{
//                     res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
//                     res.end(data.toString());
//                 }
//             })
//         }else{
//             res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
//             res.end("文件不存在！！！");
//         }
//     }

// }).listen(8081);
// console.log("server is listening 8081");
