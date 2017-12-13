'use strict';

var app = app || {};

(function(module) {
  const bookView = {};

  bookView.initIndexPage = function() {
    $('.container').hide();
    console.log('in init index');
    $('.book-view').show();
    $('#book-list').empty();
    app.Book.all.map(book => $('#book-list').append(book.toHtml());
  }

  // bookView.initAddForm = function() {
  //   reset();
  //   $('.add-view').show();
  //   $('#add-form').on('submit', function(e) {
  //     e.prevemtDefault();
  //
  //     let book = {
  //       author: e.target.author.value;
  //       title: e.target.title.value;
  //       isbn: e.target.isbn.value;
  //       image_url: e.target.image_url.value;
  //       description: e.target.description.value;
  //       }
  //   })
  // }

  module.bookView = bookView;
})(app)

$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
})
