#!/usr/bin/node

//var pi=require('./02-export-var');
//console.log('pi:',pi);

//var circle=require('./02-export-function.js');
//console.log(circle);
//console.log('area:',circle(20).area());
//console.log('circumference:',circle(20).circumference);

var Circle=require('./02-export-object');
console.log(Circle);
var c=new Circle(10);
console.log("diameter:",c.diameter());
console.log("area:",c.area());
console.log("circumference:",c.circumference());
