#!/usr/bin/node
var fs=require('fs');
var file=process.argv[2];
var dst=process.argv[3];

var len=fs.statSync(file).size;
var buf=new Buffer(len);
var fid=fs.openSync(file,'r');
fs.readSync(fid,buf,0,len,0);

var did=fs.openSync(dst,'w');
fs.writeSync(did,buf,0,len,0);

fs.closeSync(fid);
fs.closeSync(did);
