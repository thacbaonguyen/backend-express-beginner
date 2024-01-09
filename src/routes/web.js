const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getABC,
  postCreateUser,
  getCreateUsers,
  getUpdateUsers,
  postUpdateUser,
  postDeleteUser,
  postRemoveUser,
} = require("../controllers/homeController");
router.get("/", getHomePage);
router.get("/abc", getABC);
router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);
router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user", postRemoveUser);

router.get("/create", getCreateUsers);
router.get("/update/:id", getUpdateUsers);
module.exports = router;
