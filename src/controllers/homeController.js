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
  // console.log(req.body);
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  pool.query(
    `INSERT INTO Users (email, name, city ) 
    VALUES (?,?,?)`,
    [email, name, city],
    function (err, results) {
      console.log(results);
      res.send("Created user success!");
      console.log(email, name, city);
    }
  );
};
module.exports = {
  getHomePage,
  getABC,
  postCreateUser,
};
