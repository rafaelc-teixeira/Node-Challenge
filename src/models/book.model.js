'user strict';
var mysqlConnection = require('../config/db.config');

//Book object create
var Book = function(book){
    this.name         = book.name;
    this.author       = book.author;
    this.description  = book.description;
    this.image        = book.image;
    this.imported_t   = new Date(Date.now());
    this.updated_t   = new Date(Date.now());
};
Book.create = function (newBook, result) {    
    mysqlConnection.query("INSERT INTO book set ?", newBook, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Book.findById = function (id, result) {
  mysqlConnection.query("Select * from book where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Book.findAll = function (result) {
  mysqlConnection.query("Select * from book", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('books : ', res);  
            result(null, res);
        }
    });   
};
Book.update = function(id, book, result){
  mysqlConnection.query("UPDATE book SET name=?,author=?,description=?,image=? WHERE id = ?", [book.name,book.author,book.description,book.image, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Book.delete = function(id, result){
  mysqlConnection.query("DELETE FROM book WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Book;