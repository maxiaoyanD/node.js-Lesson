//原生模块
const events = require("events")
var eventsEmitter = events.EventEmitter;

function Dog(name,energy){
    //将eventsEmitter的this指向转换成dog的
    eventsEmitter.call(this);
    this.dogName = name;
    this.energy = energy;
}
//防止eventsEmitter的覆盖Dog
Dog.prototype.__proto__ = eventsEmitter.prototype;
module.exports = Dog;