#!/usr/bin/node
var http=require("http");
var fs=require('fs');

var file=process.argv[2] || 'www';
var root=__dirname+'/'+file;
http.createServer(function(req,res){

  var url='http://'+req.headers.host+req.url;

  console.log('URL:',url);
  console.log(req.headers);
  console.log('');
  
  fs.readdir(root,function(err,files){
    if(err){
      console.log(err);
    }
    else{
      var i=0;
      for(i;i<files.length;i++){
        if(req.url=='/'+files[i]){
          var fileName=root+req.url;
          fs.createReadStream(fileName).pipe(res);
          break;
        }    
        if(req.url!=files[i] && i==files.length-1){         
          var msg="NOT FOUND!";
          res.statusCode=404;
          res.setHeader('Content-Length',Buffer.byteLength(msg));
          res.setHeader('Content-Type','text-plain');
          res.end(msg);  
          return;
        }    
      }      
    }
  });
}).listen(8000);
