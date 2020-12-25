const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),

const app = express();
app.use(bodyParser.json());
app.use(cors());
//const PORT = process.env.PORT
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send({ hello: "world" });
    });
const server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});