var express = require("express");
var router = express.Router();
const AuthenticationController = require("../controllers/AuthenticationController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ route: "authentication" });
});

router.get("/register", AuthenticationController.register);
router.get("/login", AuthenticationController.login);

module.exports = router;
