//Dependencies
const http = require("http");
const express = require("express");
const path = require("path");

//Express Set up
const app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log(`app listening on PORT ${PORT}`);
});
