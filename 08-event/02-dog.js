#!/usr/bin/node
var emitter=require('events').EventEmitter;
function Dog(name){
  emitter.call(this);
  var self=this;
  this.name=name;
  var energy=8;
  self.on('bark',function(){
    console.log(self.name+'barke!');
    energy--;
    if(energy<=0){
      self.stop();
      console.log(self.name+"is tired!");
    }
  });
  var timer=setInterval(function(){
    self.emit('bark');
  },1000);
  this.stop=function(){clearInterval(timer);}
}
Dog.prototype.__proto__=emitter.prototype;
module.exports=Dog;

