const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Posts'
    }],
    dp:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    fullname:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Users",userSchema);

