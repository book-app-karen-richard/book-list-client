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
  this.isbn = bookObj.isbn;
  this.description = bookObj.description;

  }

Book.prototype.toHtml = function () {
  let template = Handlebars.compile($('#book-list-template').text());
  return template(this);
}

Book.all = [];

Book.loadAll = function (rows) {
  console.log('load', rows);
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
  console.log('fetchOne');
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

// Book.delete = function(callback){
//   $.ajax({
//     url: `${__API_URL__}/api/v1/books/${this.book_id}`,
//     method: 'DELETE'
//   })
//     .then(console.log);
//     .then(callback);
// };
//
// Book.update = function(callback) {
//   $.ajax({
//     url: `${__API_URL__}/api/v1/books/${this.book_id}`,
//     method: 'PUT',
//     data: {
//       title: this.title,
//       author: this.author,
//       isbn: this.isbn,
//       image_url: this.image_url,
//       description: this.description,
//       book_id: this.book_id
//     }
//   });
//   .then(console.log);
//   .then(callback);
// }
  module.Book = Book;

})(app)
