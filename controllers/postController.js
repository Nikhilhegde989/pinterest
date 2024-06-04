const postSchema  = require('../models/postsModel');
const userSchema = require('../models/userModel');

const createPost = async function(req,res){
    try {
        const createdPost = await postSchema.create({
        postText:"Hello Its a new post",
        user:"665f3ec6cea4bfef1f622e18"
    })
    let user = await userSchema.findOne({
        _id:createdPost.user
    })
    user.posts.push(createdPost._id);
    await user.save();
    res.send("post created & saved in the users post array "+createdPost );
    } catch (error) {
    res.send("Couldnt creat Post "+ error);
  }
};

const displayPosts = async function(req,res){
    try {
    let allPosts = await userSchema.findOne({
        _id:"665f3ec6cea4bfef1f622e18"
    }).populate('posts');

    res.send(allPosts);

    } catch (error) {
        res.send("error while fetching all posts of this user "+ error);
    }
}

module.exports = {createPost,displayPosts};