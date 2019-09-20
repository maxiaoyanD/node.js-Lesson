var listenRadio = require("./radio.js");

var radio = new listenRadio("music radio" ,"FM 106.7 ");

    radio.on("opened",radio.play);
    console.log("music radio FM 106.7 opened");
    var intervalId = setTimeout(function(){
        radio.emit("opened");
    },2000);
    radio.on("closed",radio.stop);
    radio.emit("closed"); 