var express=require('express');
var app=express();
app.get("/",(req,resp)=>{
    resp.send("hellow how are you ");

});

var server=app.listen(9000);
console.log("vijay sells app is working on port no 9000");