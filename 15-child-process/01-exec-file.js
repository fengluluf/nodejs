#!/usr/bin/node
var cp=require('child_process');
var file=process.argv[2] || 'cat';
var arg=process.argv[3] || "01-exec-file.js";
console.log(file+' '+arg);
console.log('');
cp.execFile(file,[arg],function(err,stdout,stderr){
  if(err){
    console.log(err);
  }
  console.log(stdout);
});
