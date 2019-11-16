const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");//获取资源路径

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    if(pathName == "/"){
        showIndex(res);
    }else if(pathName == "/list"){
        showList(res);
        //indexOf查找子串第一次出现位置的索引值
    }else if(pathName == "/image.png"){
        showImg(res);
    }else if(pathName == "/upload" && req.method == "POST"){
        uploadFile(req,res);
    }else if(pathName.indexOf("upload") >=0 && req.method == "GET"){
        var imgSrc = path.join(__dirname,pathName);
        var imgContent = fs.readFileSync(imgSrc);
        //这里需要判断一下图片的后缀名
        res.writeHead(200,{"Contnet-Type":"image/png"});
        res.end(imgContent);
    }else if(pathName == "/getlist"){
        //将upload下的图片响应到前端
        var files = fs.readdirSync(__dirname+"/upload");
        var fileStr = JSON.stringify(files);//转换成字符串
        res.end(fileStr);
    }
}).listen(8081);
console.log("listen 8081");
function showIndex(res){
    var indexPath = path.join(__dirname,'/index.html');
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fileContent);
}
function showImg(res){
    var imgPath = path.join(__dirname,"/image.png");
    var imgContent = fs.readFileSync(imgPath);
    res.writeHead(200,{"Content-Type":"image/png"});
    res.end(imgContent);
}
function showList(res){
    var listPath = path.join(__dirname,'/list.html');
    var fileContent = fs.readFileSync(listPath);
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end(fileContent);
}
function uploadFile(req,res){
    var dataStr = "";
    req.setEncoding("binary");
    req.on("data",function(chunk){
        dataStr += chunk;
    })
    req.on("end",function(){
        var totalArr = dataStr.split('\r\n');
        var bufArr = totalArr.slice(4,totalArr.length-2);
        var imgData = "";
        for(var i = 0 ;i<bufArr.length;i++){
            imgData += bufArr[i];
        }
        var timer = (new Date()).getTime();
        fs.writeFileSync("upload\\" + timer + ".png",imgData,{"encoding":"binary"})
        res.end("submit success");
    })
}
/***
 * 请求的发起方式
 * 1、地址栏发起http请求 get请求
 * 2、超链接发起请求   get请求
 * 3、提交表单发起请求 get请求 post请求均可
 * 4、ajax发起请求  get请求
 * 5、<script src>  get请求
 * 6、<img src>   get请求
 * 
 * get请求，向服务端传递的参数都在url中呈现
 * http://localhost:8081/detail?newId=1&&newType=1
 * var urlObj = url.parse(req.url,true);
 * urlObj.query.newId
 * post请求，数据存储在请求体里面，提交
 * req.on("data",function(chunk){})
 * req.on("end",function(){})
 */
