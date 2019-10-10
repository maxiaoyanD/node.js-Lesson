const http = require("http");
const fs = require("fs");
const url = require("url");
const https = require("https");
https.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    if(pathName == "/"){
        var fileContent = fs.readdirSync("index");
        res.writeHead(200,{"Content-Type":"text/html"});
    }else if(pathName == "getlist"){
        https.get("https://maoyan.com/films",function(resObj){
            var result = "";
            resObj.on("data",function(chunk){
                result += chunk;
            })
            resObj.on("end",function(){
                //res.end(result);
                var $ = cheerio.load(result);
                $(".move-item-title a").each(function(){
                    
                })
            })
        })
    }
}).listen(8081);