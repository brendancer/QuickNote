//const http = require("http");
//const express = require("./node_modules/express");
//const fs = require("fs");
const path = require("path");
//const app = express();

module.exports = function (app) {
  app.get("public/notes.html", function (req, res) {
    //console.log(`${req.method}: ${req.path} : ${JSON.stringify(req.params)}`);
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", function (req, res) {
    //console.log(`${req.method}: ${req.path} : ${JSON.stringify(req.params)}`);
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
