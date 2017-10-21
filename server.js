'use strict';

require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const cros = require('cors');

const port = process.env.PORT;

const app = express();
app.use(bodyparser.urlencoded({ extended:true}));
app.use(bodyparser.json());
app.use(cros());

app.get('/forloop', (req, res)=>{
 res.send("it works");
});

 function print(a,b,c,d) {
   let sum = a+b+c+d;
 }

 app.get('/sum/:a:b',(req,res)=>{

    let a = body.params.a;
    let b = body.params.b;

    sum = a+b;

    res.send(sum);

 });

app.listen(port, () => {
    console.log(`running on ${port}`)
});