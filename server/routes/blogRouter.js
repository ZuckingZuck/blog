const router = require("express").Router();
const {getBlogs, postBlog, getSingleBlog, likeProcess, unlikeProcess } = require("../controller/blogController");
const requireAuth = require("../middleware/requireAuth");


router.get("/getblogs", getBlogs);
router.get("/getsingleblog/:id", getSingleBlog);
router.use(requireAuth);
router.post("/addblog", postBlog);
router.post("/likepost", likeProcess);
router.post("/unlikepost", unlikeProcess);


module.exports = router;