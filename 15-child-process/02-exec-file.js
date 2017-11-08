#!/usr/bin/node
var cp=require('child_process');
console.log('I am a father process. PID:',process.pid);

cp.execFile('./02-child.js',function(error,stdout,stderr){
  console.log(stdout);
});
