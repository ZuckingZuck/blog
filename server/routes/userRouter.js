const router = require("express").Router();
const { getUserInfo, getUserBlogs } = require("../controller/userController")

router.get("/:nickname", getUserInfo);
router.get("/getblogs/:nickname", getUserBlogs);

module.exports = router;