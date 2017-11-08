#!/usr/bin/node

console.log("start...");
var timeID = setInterval(loop,500);
function loop(){
  console.log("I will loop forever");
}
setTimeout(function(){
  clearInterval(timeID);
},3000);

