#!/usr/bin/node
var EventEmitter=require("events").EventEmitter;
var emitter=new EventEmitter();
console.log('start...');
emitter.on("hello",function(){
  console.log("received hello event");
});
emitter.on('bye',function(){
  console.log('received bey event');
});
setTimeout(function(){
  emitter.emit('hello');
},500);
setTimeout(function(){
  emitter.emit('bye');
},2000);
