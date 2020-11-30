//Dependencies
const http = require("http");
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
//Express Set up
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const apir = require("./routes/apiRoutes")(app);
const htmlr = require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log(`app listening on PORT ${PORT}`);
});
