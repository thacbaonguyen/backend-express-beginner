const express = require("express");
const path = require("path");
require("dotenv").config();
const mysql = require("mysql2");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
// console.log("check env: ", process.env.PORT);
const port = process.env.PORT || 8080;
const hostName = process.env.HOST_NAME;
const conection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "hoidanit",
});
conection.query("SELECT * FROM Users u", function (error, results, fields) {
  console.log("check results=", results);
  console.log("check fields=", fields);
});

app.use("/token", webRoutes);
// config static files
configViewEngine(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
