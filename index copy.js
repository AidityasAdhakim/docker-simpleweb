const express = require('express');
let http = require('http');
let fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
    res.send('Hi There Version 2');
});

app.listen(8080, ()=>{
    console.log('Listening to port 8080')
});