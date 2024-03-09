const Blog = require("../models/blog");
const User = require("../models/user");

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {}
};

const getSingleBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findOne({ _id: id });
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

const postBlog = async (req, res) => {
  try {
    const { title, content, img } = req.body;
    const ownerId = req.user.nickname;
    const newBlog = new Blog({ title, content, ownerId, img });
    await newBlog.save();
    res.status(200).json(newBlog);
  } catch (error) {
    res.status(400).json(error);
  }
};

const likeProcess = async (req, res) => {
  try {
    const { postid } = req.body;
    const { _id } = req.user;
    const blog = await Blog.findOne({ _id: postid });
    const user = await User.findOne({ _id: _id });
    const blogOwner = await User.findOne({nickname: blog.ownerId});
    if(!blog.likes.includes(user.nickname)){
      blog.likes.push(user.nickname);
      blog.save();
      user.likes.push(postid);
      user.save();
      blogOwner.IPSSPoint += 10;
      blogOwner.save();
    }
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
  }
};

const unlikeProcess = async (req, res) => {
  try {
    const { postid } = req.body;
    const { _id } = req.user;
    const blog = await Blog.findOne({ _id: postid });
    const user = await User.findOne({ _id: _id });
    const blogOwner = await User.findOne({nickname: blog.ownerId});
    if(blog.likes.includes(user.nickname)){
      blog.likes = blog.likes.filter((item) => item !== user.nickname);
      blog.save();
      user.likes = user.likes.filter((item) => item !== postid);
      user.save();
      blogOwner.IPSSPoint -= 10;
      blogOwner.save();
    }
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getBlogs, postBlog, getSingleBlog, likeProcess, unlikeProcess };
