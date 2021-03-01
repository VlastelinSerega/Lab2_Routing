const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let Arr = [];

app.use(bodyParser.text({ type: "text/plain" }));

app.post("/create", function(req, res) {
  Arr.push(req.body);
  res.end();
});

app
  .get("/list", function(req, res) {
    res.send(Arr);
    res.end();
  })
  .listen(8080); //the server object listens on port 8080
