#!/usr/bin/node
var fs=require('fs');
var file=process.argv[2];

if(fs.statSync(src).isFile())
  fs.unlinkSync(file);
