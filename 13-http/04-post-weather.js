#!/usr/local/bin/node
var http=require('http');
var city=process.argv[2] || "石家庄";
const{URL}=require('url');
const url=new URL('http://api.jisuapi.com/weather/query?appkey=d4afb00114742b00&city='+city);
var options={
  host:url.host,
  port:8080,
  method:'POST',
  path:url.pathname+url.search,
  //headers:{'Content-Type':'application/json'
  //},
}

var req=http.request(options,function(res){
  console.log('status:',res.statusCode);
  console.log('headers:',res.headers);
  console.log('');

  res.setEncoding('utf8');
  var result='';
  res.on('data',function(data){
    //console.log(data.toString('utf8'));
    result+=data.toString('utf8')
  });
  res.on('end',function(){
    var weather=JSON.parse(result);
    console.log(weather);
  })
}).on('error',function(err){
  console.log('problem with request:',err.message);
});
req.write(city+'\n');
req.end();
