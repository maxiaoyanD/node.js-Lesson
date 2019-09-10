function Bomb(message){
    this.message = message
}
Bomb.prototype.explode = function(){
    console.log( this.message);
};

var bomb = new Bomb("bomb!!!");
setTimeout(function(){
    bomb.explode();
},2000);

// setTimeout(bomb.explode.bind(bomb),2000);