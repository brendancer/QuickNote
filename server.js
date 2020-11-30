const http = require("http");
const app = require("express");
const path = require ("path");
const fs = require ("fs");

var PORT = 8080

app.use(express.urlencoded({ extended: true}));
app.use(express.json());