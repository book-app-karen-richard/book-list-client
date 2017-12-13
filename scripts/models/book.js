'use strict';

var app =  app || {};
var __API_URL__ = 'http;//localhost:3000' || kp-rm-booklist.herokuapp.com;

function(module) {

function errorCallback(err) {
  console.error(err);
  module.errorView.initErrorPage(err);
}

function Book (rawDataObj) {
Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
}

Book.prototype.toHtml = function () {
  let template = Handlebars.compile($('#book-list-template').text());
  return template(this);
}

BOOK.all = [];

Book.loadAll = rows => Book.all = rows.sort((a,b) => b.title - a.title).map(book => new Book(book));

Book.fetchAll = callback =>
$.get(`${__API_URL__}/api/vi/books`)
  .then(data => Book.load(data))
//  .then(Book.loadAll) same as line before different way
  .then (callback)
  .catch(errorCallback);

  module.Book = Book;
})(app)
