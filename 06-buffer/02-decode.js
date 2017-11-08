#!/usr/bin/node

var msg=process.argv[2];
var parseBasicAuth=function(encodestring){
  var buf=new Buffer(encodestring,'base64');
  var parts=buf.toString('utf8').split(':');
  return {
    name:parts[0],
    passwd:parts[1]
  };
};
var credentials=parseBasicAuth(msg);
console.log(credentials);
