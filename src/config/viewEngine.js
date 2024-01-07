const path = require("path");
// const app = require("express");
const express = require("express");
// console.log(path.join("./src", "view"));
const configViewEngine = (app) => {
  app.set("views", path.join("./src", "view"));
  app.set("view engine", "ejs");
  app.use(express.static(path.join("./src", "public")));
};
module.exports = configViewEngine;
