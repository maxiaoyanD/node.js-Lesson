const events = require("events");
const util = require('util');
const EventEmitter = events.EventEmitter;
var listenRadio = require("./radio.js");

var radio = new listenRadio.Radio("music radio" ,"FM 106.7 ");
util.inherits(listenRadio.Radio, EventEmitter);    
radio.on("opened",radio.play);
radio.on("closed",radio.stop);
radio.emit("opened");
setTimeout(function(){
    radio.emit("closed"); 
},2000);
    
    