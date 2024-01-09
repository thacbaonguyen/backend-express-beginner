const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getABC,
  postCreateUser,
  getCreateUsers,
  getUpdateUsers,
  postUpdateUser,
} = require("../controllers/homeController");
router.get("/", getHomePage);
router.get("/abc", getABC);
router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);

router.get("/create", getCreateUsers);
router.get("/update/:id", getUpdateUsers);
module.exports = router;
