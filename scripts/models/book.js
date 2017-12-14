'use strict';

var app =  app || {};

var __API_URL__ = 'http://localhost:3000';

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
  console.log('book_id', this.book_id);
  }

Book.prototype.toHtml = function () {
  console.log('tohtml');
  let template = Handlebars.compile($('#book-list-template').text());
  console.log('temp',template);
  return template(this);
}

Book.all = [];

Book.loadAll = function (rows) {
  console.log('rows',rows);
  Book.all = rows.map(function(book) {
     return new Book(book);
   })
   console.log('Book.all ', Book.all);
};

Book.fetchAll = () => {
console.log('fetchAll');
$.get(`${__API_URL__}/api/v1/books`)

  .then(Book.loadAll)
  .then(app.bookView.initIndexPage)
  .catch(errorCallback);

}

Book.fetchOne = (ctx, callback) => {
  $.get(`${__API_URL__}/api/v1/books/${ctx.params.book_id}`)
    .then(results => ctx.book = results[0])
    .then(callback)
    .catch(errorCallback);
}

Book.create = book => {
  $.post(`${__API_URL__}/api/v1/books`, book)
    .then(() => page('/'))
    .then catch(errorCallback);
}











/books/:book_id


  module.Book = Book;

})(app)

// app.Book.fetchAll(app.bookView.initIndexPage);
