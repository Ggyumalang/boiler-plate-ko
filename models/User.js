const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength : 50
    },
    email : {
        type : String,
        trim : true,
        unique : 1 // 중복 허용하지 않는 코드
    },
    password : {
        type : String,
        minlength : 5
    },
    lastname : {
        type: String,
        maxlength : 50
    },
    role : {
        type : Number,
        default : 0
    },
    image : String,
    token : {
        type : String
    },
    tokenExp : {
        type : Number
    }
})

//Schema를 Model로 감싸는 코드
const User = mongoose.model('User',userSchema)

//다른 곳에서도 사용할 수 있도록 하는 코드
module.exports = {User}  