#!/usr/bin/node
var fs=require('fs');
var file=process.argv[2];
var dst=process.argv[3];
fs.renameSync(file,dst);
