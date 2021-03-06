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

app.get('/hello', (req, res)=>{
  res.send("hi");
 });

 function print(a,b,c,d) {
   let sum = a+b+c+d;
 }

 app.get('/sum/:a/:b',(req,res)=>{

    let a = req.path.params.a;
    let b = req.path.params.b;

    let sum = a+b;

    res.send(sum);

 });

app.get('/new', (req, res)=>{
  res.send("What's that?");
 });

app.listen(port, () => {
    console.log(`running on ${port}`)
});
