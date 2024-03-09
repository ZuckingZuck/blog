const User = require('../models/user');
const Blog = require("../models/blog");
const jwt = require("jsonwebtoken");


const getUserInfo = async (req, res) => {
    const { nickname } = req.params;
    try {
        const user = await User.findOne({ nickname }, { password: 0 });
        res.status(200).json(user);
    } catch (error) {
        
    }
}

const getUserBlogs = async (req, res) => {
    const { nickname } = req.params;
    try {
        const blogs = await Blog.find({ownerId: nickname});
        console.log(blogs);
        res.status(200).json(blogs);
    } catch (error) {
        
    }
}




module.exports = { getUserInfo, getUserBlogs };