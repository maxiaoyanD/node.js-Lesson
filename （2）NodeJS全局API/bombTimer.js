
function Bomb(message){
    this.message = message,
    this.explode = function(){
        console.log( this.message);
    }
}

var bomb = new Bomb("bomb!!!");
setTimeout(function(){
    bomb.explode();
},2000);
