const express = require('express');
const app = express();
const port = 4000;

const a = new Date();
let day = a.getDay()
let hour = a.getHours()

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  });

if (day > 0 && day < 5 && hour > 9 && hour < 17) {
    app.get('/', (req, res) => {
        res.sendFile(__dirname + "/public/index.html");
    });

    app.get('/services', (req, res) => {
    res.sendFile(__dirname + "/public/services.html");
        });

    app.get('/contact', (req, res) => {
        res.sendFile(__dirname + "/public/contact.html");
    });
    app.use(function(req, res) {
        res.status(404);
        res.sendFile(__dirname + "/public/pagenotfound.html");
    })
}
else{
    app.get('*', (req, res) => {
        res.sendFile(__dirname + "/public/outoftime.html");
    });
}

app.listen(port, (err) =>
    err
        ? console.error(err)
        : console.log('The server is running.  please, open your browser at http://localhost:%s', port)
);
