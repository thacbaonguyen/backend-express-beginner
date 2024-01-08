const getHomePage = (req, res) => {
  res.send("Hello World! with Baos");
};
const getABC = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomePage,
  getABC,
};
