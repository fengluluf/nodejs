#!/usr/bin/node
var cp=require('child_process');
console.log('I am a father process. PID:',process.pid);
var child=cp.fork('./02-child.js');
setTimeout(function(){
  console.log('Father game over!');
  process.exit(0);
},5000);
