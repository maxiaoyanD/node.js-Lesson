
const util = require("util")
const events = require("events")
var eventsEmitter = events.EventEmitter;
function Radio(radioName,radioFm){
    this.radioName = radioName;
    this.radioFm = radioFm;
}
Radio.prototype.play = function(){
        console.log("lalalala");
};
Radio.prototype.stop = function(){
    console.log(this.radioName + " " + this.radioFm + " closed");
    clearInterval(intervalId);
};
util.inherits(Radio,eventsEmitter);