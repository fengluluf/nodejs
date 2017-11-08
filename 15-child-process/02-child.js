#!/usr/bin/node
var cp=require('child_process');
console.log('I am a child process. PID:',process.pid);
var timer=global.setInterval(function(){
  console.log('now time:',Date.now());
},1000);
global.setTimeout(function(){
  global.clearInterval(timer);
  console.log('OK!10 seconds.Game over!');
},10000)
