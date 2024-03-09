const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require("validator");
  

const User = mongoose.Schema({
    nickname: {
        type: String,
        required: true,
    },
    IPSSPoint: {
        type: Number,
        default: 0
    },
    role: {
        type: String,
        default: "user",
    },
    likes: {
        type: Array,
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})

User.statics.login = async function(nickname, password) {
    if(!nickname || !password){
        throw Error("Bütün alanlar doldurulmak zorunda!");
    }

    const user = await this.findOne({nickname: nickname});
    
    if(!user){
        throw Error("Bu kullanıcı adıyla kayıtlı kullanıcı bulunamadı");
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw Error("Hatalı pardola!");
    }

    return user;
}

User.statics.signup = async function (nickname,password){


    if(!nickname || !password){
        throw Error("Bütün alanlar doldurulmak zorunda!");
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Parola yeterince güçlü değil!");
    }

    const exists = await this.findOne({nickname: nickname});
    

    if(exists){
        throw Error("Bu kullanıcı adı başka bir kullanıcı tarafından alınmış!");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({nickname, password: hash});
    return user;
} 


module.exports = mongoose.model("User", User);