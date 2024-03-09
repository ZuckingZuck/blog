const User = require('../models/user');
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: "3d"})
}

const loginUser = async (req,res) => {
    const { nickname, password } = req.body;
    try {
        const user = await User.login(nickname, password);
        const token = createToken(user._id)
        res.status(200).json({nickname: user.nickname, role: user.role, token, message: "Giriş başarılı!"})
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


const signupUser = async (req,res) => {
    const {
        nickname,
        password
    } = req.body;

    try {
        const user = await User.signup(nickname, password);
        const token = createToken(user._id)
        res.status(200).json({nickname,role: user.role, token, message: "Giriş başarılı!"})
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}






module.exports = { loginUser, signupUser };