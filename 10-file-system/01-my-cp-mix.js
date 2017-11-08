#!/usr/bin/node
var fs=require('fs');
var file=process.argv[2];
var dst=process.argv[3];

var fid=fs.openSync(file,'r');
var did=fs.openSync(dst,'w');
var f=fs.readFileSync(fid,'utf8');
fs.writeFileSync(dst,f);
fs.closeSync(fid);
fs.closeSync(did);

