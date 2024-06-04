const userSchema  = require('../models/userModel');


const createUser = async function(req,res){
    try {
    const createdUser = await userSchema.create({
      username:"Nikhil",
      password:"Password",
      email:"nikhilhegde989@gmail.com",
      fullname:"Nikhil Hegde"
      })
      res.send("user created" + createdUser);
  } catch (error) {
    res.send("Couldnt created user "+ error);
  }
};

module.exports = createUser;