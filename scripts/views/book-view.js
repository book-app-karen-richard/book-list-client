'use strict';

var app = app || {};

(function(module) {

  const bookView = {};

  bookView.initIndexPage = function() {
    console.log('init');
    $('.error-view-container').hide();
    $('.book-view-containter').show();
    $('#book-list').empty();
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
  }

  bookView.initDetailPage = function (ctx) {
    console.log(ctx);
    $('.error-view-container').hide();
    $('.book-view-container').hide();
    $('#single-book').empty();
    $('.detail-view-container').show();
    let template = Handlebars.compile($('#detail-view-template').text());
    $('#single-book').append(template(ctx));

  }

  bookView.initCreateFormPage = function () {
    console.log('create', ctx);
    $('.error-view-container').hide();
    $('.book-view-container').hide();
    $('.create-view').show();
    $('#create-form').on('submit', function(event) {
      event.preventDefault();

        let book = {
          title: event.target.title.value,
          author:event.target.author.value,
          isbn:event.target.isbn.value,
          image_url:event.target.image_url.value,
          description:event.target.description.value
        };

        app.Book.create(book);
    })

  }

  $(function() {
    app.Book.fetchAll(app.bookView.initIndexPage);
  })

  module.bookView = bookView;

})(app)
