const express=require('express');

const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){

    //__Dirname gives the absolute path where ever it is placed.

    res.sendFile(__dirname+"/index.html");


});

app.post('/',function(req,res){

    var num1=parseInt(req.body.name1);
    var num2=parseInt(req.body['name2']);
    res.send(`The Result is ${num1+num2}`);

});

app.listen(3000);
