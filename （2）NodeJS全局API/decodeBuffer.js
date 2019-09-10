var base64Str = "emhhbmdzYW46MTIzNDU2";

var buf = Buffer.from(base64Str,"base64");
var buf2 = buf.toString("utf8");
var arr = buf2.split(":");
console.log("用户名：%s 密码：%s",arr[0],arr[1]);