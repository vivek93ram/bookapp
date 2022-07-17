const express = require("express");
const cors = require("cors");
const bookdata = require("./src/model/bookData");

const app = new express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API
app.get('/books', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    bookdata.find()
        .then(function (books) {
            res.send(books);
        })
});

app.post('/insert', function (req, res) 
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    console.log(req.body);

    var book = {

        bookCode: req.body.item.bookCode,
        bookName: req.body.item.bookName,
        bookAuthor: req.body.item.bookAuthor,
        bookprice: req.body.item.bookprice

    }

    var books = new bookdata(book);
    books.save();

})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server up in Port 3000 ");
});