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

  bookView.initDetailPage = function (ctx) {
    $('.error-view-container').hide();
    $('.view-title').show();
    $('.single-book').empty();
    let template = Handlebars.compile($('#single-book.template.text()'));
    $('single-book').append(template(ctx));

  }

  $(function() {
    app.Book.fetchAll(app.bookView.initIndexPage);
  })

  module.bookView = bookView;

})(app)
