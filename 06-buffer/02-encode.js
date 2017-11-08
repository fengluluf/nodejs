#!/usr/bin/node
var name=process.argv[2];
var passwd=process.argv[3];

console.log("name:",name);
console.log("passwd:",passwd);

var buf=new Buffer(name+':'+passwd);
console.log("user name and passwd:",buf.toString());
console.log("user name and passwd:",buf.toString('base64'));

console.log("user name and passwd:",buf.toString('hex'));
