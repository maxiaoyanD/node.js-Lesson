var circleFun = require('./circleModule.js');
//得到的结果是module.exprots的值
// circleFun.circleFun(8).area();
// circleFun.circleFun(8).circumference();
var r = process.argv[2];
var circleObj = circleFun.circleFun(r);
console.log("圆的半径："+r);
console.log("圆的周长：%s"+circleObj.circumference());
console.log("圆的面积：%s"+circleObj.area());
/**
 * 1、原生模块：随node环境安装就存在的
 * 2、自定义模块：自己编写的程序
 * 3、第三方模块：在命令行中进行安装的模块，从npm服务器上下载到本地的
 * 直接require("date-now");
 */