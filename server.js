//Dependencies
const http = require("http");
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
//Express Set up
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/notes", function (req, res) {
  console.log(`${req.method}: ${req.path} : ${JSON.stringify(req.params)}`);
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/", function (req, res) {
  console.log(`${req.method}: ${req.path} : ${JSON.stringify(req.params)}`);
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, function () {
  console.log(`app listening on PORT ${PORT}`);
});
