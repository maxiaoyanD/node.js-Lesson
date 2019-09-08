if(process.argv[2] == undefined || process.argv[2] == "-h"){
    console.log("帮助:请输入数学运算式！");
}else{
    console.log("%s = %s",process.argv[2],eval(process.argv[2]));
}