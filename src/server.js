const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
// console.log("check env: ", process.env.PORT);
const port = process.env.PORT || 8080;
const hostName = process.env.HOST_NAME;
app.use("/token", webRoutes);
// config static files
configViewEngine(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
