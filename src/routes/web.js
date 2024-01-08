const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getABC,
  postCreateUser,
  getCreateUsers,
} = require("../controllers/homeController");
router.get("/", getHomePage);
router.get("/abc", getABC);
router.post("/create-user", postCreateUser);
router.get("/create", getCreateUsers);
module.exports = router;
