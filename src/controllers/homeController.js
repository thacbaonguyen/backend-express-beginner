const pool = require("../config/database");
const { getAllUsers } = require("../services/CRUDServices");
const getHomePage = async (req, res) => {
  // pool.query("SELECT * FROM Users u", function (error, results, fields) {
  //   const dataString = JSON.stringify(results);
  //   res.send(dataString);
  // });
  //   let [results, fields] = await pool.query(`select * from Users`);
  //   return res.render("home.ejs", { listUsers: results });
  //
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  res.render("sample.ejs");
};
const getCreateUsers = (req, res) => {
  res.render("create.ejs");
};
const postCreateUser = async (req, res) => {
  // console.log(req.body);
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  // pool.query(
  //   `INSERT INTO Users (email, name, city )
  //   VALUES (?,?,?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(results);
  //     res.send("Created user success!");
  //     console.log(email, name, city);
  //   }
  // );
  let [results, fields] = await pool.query(
    `INSERT INTO Users (email, name, city )
     VALUES (?,?,?)`,
    [email, name, city]
  );
  res.send("Created user success!");
};
module.exports = {
  getHomePage,
  getABC,
  postCreateUser,
  getCreateUsers,
};
