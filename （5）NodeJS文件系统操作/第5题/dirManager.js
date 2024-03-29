const fs = require("fs");
const path = require("path");
var  fileName = process.argv[2];
var pathName = path.join(__dirname,fileName);
if(fs.existsSync(pathName)){
    var statObj = fs.statSync(pathName);
    if(statObj.isFile()){
        fs.unlinkSync(pathName);
    }else{
        delDir(pathName);
    }
}else{
    console.log("not exist");
}
function delDir(pathName){
    var files = fs.readdirSync(pathName);
    for(var i = 0 ; i<files.length; i++){
        pathName1 = path.join(pathName,files[i]);
        var statObj = fs.statSync(pathName1);
        if(statObj.isFile()){
            fs.unlinkSync(pathName1);
        }else if(statObj.isDirectory()){
            delDir(pathName1);
        }
    }
    fs.rmdirSync(pathName);
}





// //删除一个非空文件夹会报错
// fs.rmdirSync("filedir");