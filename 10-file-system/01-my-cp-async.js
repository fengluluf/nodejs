#!/usr/bin/node
var fs=require('fs');
var file=process.argv[2];
var dst=process.argv[3];
var f=fs.readFile(file,function(err,data){
  if(err){
    console.log(err.message);
    process.exit(1);
  }
  else{
    fs.writeFile(dst,data,function(err){
      if(err){
        console.log(err.message);
      }
    })
  }
});


