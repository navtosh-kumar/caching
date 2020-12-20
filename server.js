// This is just a simple server
const database = require('./database');
const express = require('express');

const app = express();
// define cache
const cache = {};

// There are two end points defined

// This does not use the cache
app.get('/nocache/index.html', (req, res) => {
    // all it does is, it calls the database
    // to get the html page that is being called
    // and once it gets the page just send the page
    database.get('index.html', page => {
        res.send(page);
    });
});


// This uses the cache
app.get('/withcache/index.html', (red, res) => {
    // In this we check if the page is in the cache
    // and if it is we skip going to the database 
    if('index.html' in cache) {
        res.send(cache['index.html']);
        return;
    }

    // Otherwise we make a call to the database
    // and cache the page 
    // then we return the response of the page
    database.get('index.html', page => {
        cache['index.html'] = page;
        res.send(page);
    });
});

app.listen(3001, function () {
    console.log('Listening on port 3001!');
});