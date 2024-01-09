const pool = require("../config/database");
const getAllUsers = async () => {
  let [results, fields] = await pool.query(`select * from Users`);
  return results;
};
module.exports = {
  getAllUsers,
};
