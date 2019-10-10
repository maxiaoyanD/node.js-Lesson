/**
 * 1、创建server 读取index.html
 * 响应到客户端
 * 
 * 2、在页面中发起ajax请求获取数据
 * 
 * 服务端接受到ajax请求，去猫眼网站上爬取页面内容
 * 使用cheerio来解析得到需要的数据，
 * 存储到数组里面响应到客户端
 * 
 * 3、在ajax回调函数中使用响应到的数据，拼接到页面上显示
 */

const cheerio = require("cheerio");


https.get("https://maoyan.com/films",function(res){
    var reault = "";
    res.on("data",function(chunk){
        reault +=chunk;
    })
})
