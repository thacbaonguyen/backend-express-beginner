const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
// console.log("check env: ", process.env.PORT);
const port = process.env.PORT || 8080;
app.set("views", path.join(__dirname, "./src/view"));
app.set("view engine", "ejs");
const hostName = process.env.HOST_NAME;
// config static files

app.use("/public", express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.send("Hello World! with Bao");
});
app.get("/abc", (req, res) => {
  res.render("sample.ejs");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
