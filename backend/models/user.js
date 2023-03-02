const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  lname:String,
  fname:String,
  email:String,
  password:String,
  image:String
});

const users = mongoose.model("users", userSchema);
module.exports = users;