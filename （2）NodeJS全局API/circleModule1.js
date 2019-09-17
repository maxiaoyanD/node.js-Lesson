var cirObj = new Object();
cirObj.circumference = function(r){
    return  r*2*Math.PI;
}
cirObj.area = function(r){
    return r*r*Math.PI;
}
module.exports = {
    cirObj:cirObj
}