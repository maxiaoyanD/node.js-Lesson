const stream = require("stream");
const util = require("util");
function MyReadable(){
    var reader = new stream.Readable();
    reader.push("abcdefghigklmnopqrstuvwxyz");
    reader.push(null);
    reader.pipe(process.stdout);   
}

util.inherits(MyReadable,stream.Readable)
var myReadable = new MyReadable();
