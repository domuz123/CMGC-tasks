const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

const logTime = getUrl => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let currentTime = `${hours}:${minutes}:${seconds}`;
  return currentTime + " - " + getUrl + "\n";
};

let requestTime = function(req, res, next) {
  req.requestTime = logTime(req.originalUrl);
  next();
};

app.use(requestTime);

app.get("/", (req, res) => {
  let responseText = "Hello World!<br>";
  responseText += "<small>Requested at: " + req.requestTime;
  res.send(responseText);
  fs.appendFile("./url.txt", req.requestTime, err => {
    if (err) throw err;
  });
});
app.get("/about", (req, res) => {
  let responseText = "About!<br>";
  responseText += "<small>Requested at: " + req.requestTime;
  res.send(responseText);
  fs.appendFile("./url.txt", req.requestTime, err => {
    if (err) throw err;
  });
});
app.get("/404", (req, res, next) => {
  let responseText = "404<br/>";
  responseText += "<small>Requested at: " + req.requestTime;
  res.send(responseText);
  fs.appendFile("./url.txt", req.requestTime, err => {
    if (err) throw err;
  });
});

app.use(function(req, res, next) {
  res.status(404).send("404");
  
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
