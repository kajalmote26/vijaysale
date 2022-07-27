var express=require('express');
var app=express();
app.get("/",(req,res)=>{
    res.send(
        "<h1>Vijay sales</h1>"
        +"<hr/>"
        +"<h3> Smart Devices for sale"
        +"<br/>"
        +"<ol>"
        +"<li>Laptop</li>"
        +"<li>mobile</li>"
        +"<li>Watch</li>"
        +"<li>ABC</li>"
        +"<li>CVB</li>"

    );
});

var server=app.listen(9000);
console.log("Vijay Sales online shopping on 9000");