#!/usr/bin/node


console.log("start...");
var count=0;
var timeID=setInterval(loop,500);
function loop(){
  count++;
  console.log("I will loop forever");
  if(count==6){
    clearInterval(timeID);
  }
}

