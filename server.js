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

app.get('/', (req, res)=>{
 res.send("it works");
});

app.listen(port, () => {
    console.log(`running on ${port}`)
});