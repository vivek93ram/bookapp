const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/book");
const Schema = mongoose.Schema;

var bookSchema = new Schema({
    bookCode: String,
    bookName: String,
    bookAuthor: String,
    bookprice: Number
});

var bookdata = mongoose.model('books', bookSchema);
module.exports = bookdata;