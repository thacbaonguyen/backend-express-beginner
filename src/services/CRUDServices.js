const pool = require("../config/database");
const getAllUsers = async () => {
  let [results, fields] = await pool.query(`select * from Users`);
  return results;
};
const getUserById = async (userId) => {
  let [results, fields] = await pool.query(`select * from Users where id = ?`, [
    userId,
  ]);
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};
const updateUserById = async (email, name, city, userId) => {
  let [results, fields] = await pool.query(
    `UPDATE Users
    SET email = ?, name= ?, city =?
    WHERE id =?`,
    [email, name, city, userId]
  );
};
module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
};
