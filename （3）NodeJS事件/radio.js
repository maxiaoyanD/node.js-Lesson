
const events = require("events");
var eventsEmitter = events.EventEmitter;
function Radio(radioName,radioFm){
    eventsEmitter.call(this);
    this.radioName = radioName;
    this.radioFm = radioFm;
}
Radio.prototype.play = function(){
        console.log("music radio FM 106.7 opended");
        console.log("lalalala");
};
Radio.prototype.stop = function(){
    console.log(this.radioName + " " + this.radioFm + " closed");

};
module.exports={
    Radio:Radio
}