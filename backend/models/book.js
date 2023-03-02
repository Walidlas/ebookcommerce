
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  description: String,
  isbn:String,
  auteur:String,
  editeru:String,
  date_publication:Date,
  image:String,
  category: 
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"categories"
    },

});

const books = mongoose.model("books", bookSchema);
module.exports = books;