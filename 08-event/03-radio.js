#!/usr/bin/node
var events=require("events");
var util=require("util");
var Radio=function(station){
  events.EventEmitter.call(this);
  var self=this;
  setTimeout(function(){
    self.emit('play',station);
  },0);
  setTimeout(function(){
    self.emit('stop',station)
  },5000);
};
util.inherits(Radio,events.EventEmitter);
module.exports=Radio;
