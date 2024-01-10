const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");
// const { connection } = require("mongoose");
// console.log("check env: ", process.env.PORT);
const port = process.env.PORT || 8080;
const hostName = process.env.HOST_NAME;
//config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data
app.use("/", webRoutes);
//connection

// config static files
configViewEngine(app);
(async () => {
  try {
    await connection();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>> Error connect to DB :", error);
  }
})();
