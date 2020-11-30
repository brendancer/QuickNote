//Dependencies
const http = require("http");
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
//Express Set up
var PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/notes", function (req, res) {
  console.log(`${req.method}: ${req.path} : ${JSON.stringify(rerq.params)}`);
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/*", function (req, res) {
  console.log(`${req.method}: ${req.path} : ${JSON.stringify(rerq.params)}`);
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function () {
  console.log(`app listening on PORT ${PORT}`);
});
