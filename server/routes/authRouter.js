const router = require("express").Router();
const { signupUser, loginUser } = require("../controller/authController")

router.post("/register", signupUser);
router.post("/login", loginUser);

module.exports = router;