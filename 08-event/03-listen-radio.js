#!/usr/bin/node
var Radio=require('./03-radio');
var station={
  freq:'106.7',
  name:'music radio'
};
var radio=new Radio(station);
radio.on('play',function(station){
  console.log('"%s " FM %s opened:',station.name,station.freq);
  console.log("......");
})
radio.on('play',function(station){
  console.log('hello',station);
  console.log('\neventNames:',radio.eventNames());
  console.log('\nopen listen count:',radio.listenerCount('play'));
  console.log('\nopen listeners::',radio.listeners('play'));
});
radio.on('stop',function(){
  console.log('"%s" FM%s  closed:',station.name,station.freq);
});
