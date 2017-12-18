'use strict';

var app =  app || {};

// var __API_URL__ = 'http://localhost:3000';
var __API_URL__ =  'https://kp-rm-booklist.herokuapp.com';

(function(module) {

function errorCallback(err) {
  console.error(err);
  app.errorView.initErrorPage(err);
}

function Book (bookObj) {
  this.book_id = bookObj.book_id;
  this.author = bookObj.author;
  this.title = bookObj.title;
  this.image_url = bookObj.image_url;
  this.isbn = bookObj.isbn;
  this.description = bookObj.description;

  }

Book.prototype.toHtml = function () {
  let template = Handlebars.compile($('#book-list-template').text());
  return template(this);
}

Book.all = [];

Book.loadAll = function (rows) {
  console.log('load');
  Book.all = rows.map(function(book) {
    console.log(book);
     return new Book(book);
   })
};

Book.fetchAll = (callback) => {
console.log('fetchAll');
$.get(`${__API_URL__}/api/v1/books`)

  .then(data => Book.loadAll(data))
  .then(callback)
  .catch(errorCallback);

}

Book.fetchOne = (ctx, callback) => {
  console.log('fetchone');
  $.get(`${__API_URL__}/api/v1/books/${ctx.params.book_id}`)
    .then(results => ctx.book = results[0])
    .then(callback)
    .catch(errorCallback);
}

Book.create = book => {
  console.log('create book', book);
  $.post(`${__API_URL__}/api/v1/books`, book)
    .then(() => page('/'))
    .catch(errorCallback);
}

Book.update = (ctx, callback) => {
  //This is where the update function would go
  $.put()
}

Book.destroy = (cts, callback) => {
  //This is where the destroy function would go
  $.delete();
}

Book.find = (book, callback) => {
  $.get(`${__API_URL__}/api/v1/books/find`, book)
    .then(Book.loadAll)
    .then(callback)
    .catch(errorCallback);
}

Book.findOne = {
  $.get((`${__API_URL__}/api/v1/books/find/${isbn}`)
    .then(Book.create)
    .catch(errorCallback);
}


  module.Book = Book;

})(app)
