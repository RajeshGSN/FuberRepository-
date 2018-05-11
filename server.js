const express=require('express');
const fs = require('fs');
var sqrt = require( 'math-sqrt' );

console.log('app started');
const app=express();
var path = require('path');
var car= { CarId:String, Location: {x:Number,y:Number},IsPink:Boolean,Riding:Boolean};

app.use(express.static(__dirname+'/UI'));
app.get('/',(req,res)=>{
    res.sendfile('index.html', { root: __dirname + "/UI" } );
});
app.get('/api/cars',(req,res)=>{
    
    var id=req.param('id');
    var cars=JSON.parse(fs.readFileSync('data-cars.json',{ encoding: 'utf8' }));
    if(id=='all'){
        console.log('Inside all');
        res.send(cars);
    }else{
    var filtered = cars.filter((car)=> car.CarId===id);
    //res.setHeader('Content-Type', 'application/json');
    res.send(filtered);
    }
    
});
function pyth(a, b) {
    console.log(a);
    console.log(b);
    return(Math.sqrt((a * a) + (b * b)));
  }



app.listen(3000,()=>{console.log('server is up and running on 3000')});

app.get('/api/nearby',(req,res)=>{
    console.log('here');
    var x1=parseFloat(req.param('x'));
    var y1=parseFloat(req.param('y'));
    console.log('submitted inputs'+x1 + 'and '+y1);
    var cars=JSON.parse(fs.readFileSync('data-cars.json',{ encoding: 'utf8' }));
    var carsGap=[];
    cars.forEach(car => {
        var distance=pyth(x1-car.Location.x,y1-car.Location.y);
        console.log('calculate gap:'+distance);
        car.gap=distance;
        carsGap.push(car);
    });
    res.send(carsGap);
});