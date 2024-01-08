const pool = require("../config/database");
const getHomePage = (req, res) => {
  // pool.query("SELECT * FROM Users u", function (error, results, fields) {
  //   const dataString = JSON.stringify(results);
  //   res.send(dataString);
  // });
  res.render("home.ejs");
};
const getABC = (req, res) => {
  res.render("sample.ejs");
};
const postCreateUser = (req, res) => {
  console.log(req.body);
  res.send("creat a new user");
};
module.exports = {
  getHomePage,
  getABC,
  postCreateUser,
};
