#!/usr/bin/node
var http=require("http");
http.oreateServer(function(req,res){
  res.end('hello world');
}).listen(8080);

