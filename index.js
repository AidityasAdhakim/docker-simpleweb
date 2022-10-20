const express = require('express');
let http = require('http');
let fs = require('fs');

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

app.use(express.static(__dirname));

app.listen(8080, ()=>{
    console.log('Listening to port 8080')
});