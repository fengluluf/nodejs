#!/usr/bin/node
console.log(__filename);
console.log(__dirname);
var fileName=__dirname+'/views/view.html';
switch(process.platform){
  case 'linux':
    filename=__dirname+"/views/view.html";
    break;
  case 'win32':
    filename=__dirname+"\\views\\view.html";
    break;
  default:
    filename="something wrong";
    
}
console.log('filename',fileName);

