#!/usr/bin/node
var fs=require('fs');

var file=process.argv[2];

var len=fs.statSync(file).size;
var buffer=new Buffer(len);
var fid=fs.openSync(file,'r');
fs.readSync(fid,buffer,0,len,0);
console.log(buffer.toString('utf8'));
fs.closeSync(fid);
