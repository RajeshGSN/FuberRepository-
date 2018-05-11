var car={CarId:"ABC1234",Location:{x:-1.588,y:1.55},IsAvaialble:true};
var StringObj=JSON.stringify(car);
console.log(typeof StringObj);
const fs= require('fs');
var Car={CarId:'ABC123',Location:{x:1.25,y:2.57}};
var carString=JSON.stringify(Car);
fs.writeFileSync('car1.json',carString); 
//var carString=fs.readFileSync(carString);
