// const events = require("events")
// var eventsEmitter = events.EventEmitter;

// function Dog(name,energy){
//     eventsEmitter.call(this);
//     this.dogName = name;
//     this.energy = energy;
//     var that = this;
//         var timerId=setInterval(function(){
//             if(that.energy>=0){
//                 that.emit("bark");
//                 that.energy--; 
//             } 
//             else{
//                 timerId.unref();
//             } 
//         },1000);
// }
// Dog.prototype.__proto__ = eventsEmitter.prototype;
// var taiDi = new Dog("taidi",5);
// var zangao = new Dog("zangao",3);
// taiDi.on("bark",function(){
//     console.log(this.dogName + " barked energy:" + this.energy);
// })
// zangao.on("bark",function(){
//     console.log(this.dogName + " barked energy:" + this.energy);
// })

var dogBark = require("./dog.js");
// console.log(dogBark);//得到一个dog构造函数
function barkFun(){
    console.log(this.dogName + " barked energy:" + this.energy);
}

var taiDi = new dogBark("taiDi",5);
taiDi.on("bark",barkFun);
var zangao = new dogBark("zangao",3);
zangao.on("bark",barkFun);
var intervalId = setInterval(function(){
    if(taiDi.energy>=0){
        taiDi.emit("bark");
    }else{
        clearInterval(intervalId);
    }
    taiDi.energy -- ;  
},1000);
var intervalId1 = setInterval(function(){
    if(zangao.energy>=0){
        zangao.emit("bark");
    }else{
        clearInterval(intervalId1);
    }
    zangao.energy -- ;  
},1000);


