#!/usr/bin/node
var fs=require('fs');
var file=process.argv[2];
var dst=process.argv[3];

var mode=fs.statSync(file).mode;
fs.createReadStream(file).pipe(fs.createWriteStream(dst));

fs.statSync(dst).mode=mode;


