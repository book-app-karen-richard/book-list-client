'use strict';

var app = app || {};

(function(module) {

  const bookView = {};

  bookView.initIndexPage = function() {
    console.log('init');
    $('.error-view-container').hide();
    $('.book-view').show();
    $('#book-list').empty();
    console.log('a');
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
    console.log('b');
  }

  $(function() {
    app.Book.fetchAll(app.bookView.initIndexPage);
  })

  module.bookView = bookView;

})(app)
