#!/usr/bin/node

console.log("process id:",process.pid);
process.stdin.resume();
process.on('SIGNIT',function(){
  console.log('you press ctrl-c,good bey');
  process.exit(0);
})
process.on('SIGTSTP',function(){
  console.log('you press ctrl-z,stop running');
});


