#!/usr/bin/node
var cp=require('child_process');
console.log('I am a child process. PID:',process.pid);

process.on('message',function(msg){
  console.log('msg from father:',msg);
});

process.send('Hello!I am child process.PID:'+process.pid);
