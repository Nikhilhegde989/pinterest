const mongoose = require("mongoose");

const postSchema =  mongoose.Schema({
    postText:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    likes:[],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    }
})

module.exports = mongoose.model("Posts",postSchema);
