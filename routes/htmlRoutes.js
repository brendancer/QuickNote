//const http = require("http");
//const express = require("./node_modules/express");
//const fs = require("fs");
const path = require("path");
//const app = express();
const fs = require("fs");

module.exports = function (app) {
  app.get("/", function (req, res) {
    // console.log(`${req.method}: ${req.path} : ${JSON.stringify(req.params)}`);
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/notes", function (req, res) {
    // console.log(`${req.method}: ${req.path} : ${JSON.stringify(req.params)}`);
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
};
