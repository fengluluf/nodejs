#!/usr/bin/node
var fs=require('fs');
var mime="image/jpg";
var http=require("http");
var data=fs.readFileSync('./nodejs-logo.jpg.1').toString('base64');
var uri='data:'+mime+';base64,'+data;
//console.log('data uri:\n%s',uri);
var html='<!DOCTYPE html>\n<html>\n<body>\n<img alt="nodejs-logo" src="'+uri+'"/>\n</body>\n</html>';
http.createServer(function(req,res){
  console.log(req.headers);

  res.end(html);
}).listen(8080);
