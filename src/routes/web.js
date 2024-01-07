const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello World! with Baos");
});
router.get("/abc", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router;
