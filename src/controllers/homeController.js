const pool = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDServices");
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
const getUpdateUsers = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user });
};
const postCreateUser = async (req, res) => {
  // console.log(req.body);
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  let [results, fields] = await pool.query(
    `INSERT INTO Users (email, name, city )
     VALUES (?,?,?)`,
    [email, name, city]
  );
  res.send("Created user success!");
};
const postUpdateUser = async (req, res) => {
  // console.log(req.body);
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  let userId = req.body.userId;
  await updateUserById(email, name, city, userId);
  // res.send("Updated user success!");
  res.redirect("/");
};
const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });
};
const postRemoveUser = async (req, res) => {
  const id = req.body.userId;
  await deleteUserById(id);
  res.redirect("/");
};
module.exports = {
  getHomePage,
  getABC,
  postCreateUser,
  getCreateUsers,
  getUpdateUsers,
  postUpdateUser,
  postDeleteUser,
  postRemoveUser,
};
