#!/usr/bin/node
var fs=require('fs');
var file=process.argv[2];
var dst=process.argv[3];

var f=fs.readFileSync(file,'utf8');
fs.writeFileSync(dst,f);


