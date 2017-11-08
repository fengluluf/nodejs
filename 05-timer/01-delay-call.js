#!/usr/bin/node
setTimeout(function(){
  console.log('hello from the past');
},1000);

function Bomb(){
  this.message="Bomb";
}
Bomb.prototype.explode=function(){
  console.log(this.message);
}
var bomb=new Bomb();
var timeID=setTimeout(bomb.explode.bind(bomb),2000);

//clearTimeout(timeID);
