#!/usr/bin/node
var http=require('http');
var cp=require('child_process');
console.log('I am a father process. PID:',process.pid);
http.createServer(function(req,res){
  var child=cp.spawn('./02-child.js');
  child.stdout.pipe(process.stderr);
}).listen(8080);
