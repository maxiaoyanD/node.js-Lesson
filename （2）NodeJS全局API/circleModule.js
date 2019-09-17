function circleFun(r){
    // return{
    //     circumference :function(){
    //         return console.log("圆的周长是：%s",r*2*Math.PI);
    //     },
    //     area : function(){
    //         return console.log("圆的面积是：%s",r*r*Math.PI);
    //     }
    // };
    function circumference(){
        return r*2*Math.PI;
    }
    function area(){
        return r*r*Math.PI;
    }
    return{circumference:circumference,area:area}
}
module.exports = {
    circleFun:circleFun
}