var http=require('http');
var url=require('url');

http.createServer(function(req,res){
  //console.log(Object.keys(req),'___',Object.keys(res));
  //var getDataObj=url.parse(req.url,true).query;
  var getDataStr=url.parse(req.url).query;
  res.writeHead(200,{
    "Content-Type":"text/plain",
    "Access-Control-Allow-Origin":"*",
    "Access-Control-Allow-Methods":"GET,POST"
  });
  setTimeout(function(){
    res.end("您输入的信息是："+getDataStr);
  },200*Math.random());
}).listen(8080,"192.168.113.144");
console.log('start server!')
