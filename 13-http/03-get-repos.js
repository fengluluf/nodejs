#!/usr/local/bin/node
var https=require('https');
var username=process.argv[2] || "wangding";
const{URL}=require('url');
const url=new URL('https://api.github.com/search/repositories?q=user:'+username);
var options={
  host:url.host,
  port:443,
  method:'GET',
  path:url.pathname+url.search,
  headers:{'User-Agent':'https://api.github.com'
  },
}

var req=https.request(options,function(res){
  res.setEncoding('utf8');
  var result='';
  res.on('data',function(data){
    result+=data.toString('utf8');
  });
  res.on('end',function(){
    var repos=JSON.parse(result);
    console.log('Total:',repos.total_count);
    console.log('===============');
    var i=0;
    for(i;i<repos.items.length;i++){
      console.log(i+'    ',repos.items[i].name);
    }
  })
}).on('error',function(err){
  console.log('problem with request:',err.message);
});
req.end();
