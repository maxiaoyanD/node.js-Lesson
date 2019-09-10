var name = process.argv[2];
var password = process.argv[3];
if(name == undefined && password == undefined){
    console.log("请分别输入用户名和密码！");
    process.exit();
}else{
    console.log("用户名：%s 密码：%s",name,password);
    var str = name +":"+ password;
    var buf = Buffer.from(str,"utf8");
    var base64 = buf.toString("base64");
    console.log("base64加密：%s",base64);
}