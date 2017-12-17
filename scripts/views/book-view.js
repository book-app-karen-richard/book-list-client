'use strict';

var app = app || {};

(function(module) {

  const bookView = {};

  bookView.initIndexPage = function() {
    console.log('init');
    $('.error-view-container').hide();
    $('.detail-view-container').hide();
    $('.create-view').hide();
    $('.book-view-container').show();
    $('#book-list').empty();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
  }

  bookView.initDetailPage = function (ctx) {
    console.log(ctx);
    $('.error-view-container').hide();
    $('.book-view-container').hide();
    $('.detail-view-container').hide();
    $('.create-view').hide();
    $('#single-book').empty();
    $('.detail-view-container').show();
    let template = Handlebars.compile($('#detail-view-template').text());
    $('#single-book').append(template(ctx));

  }

  bookView.initCreateFormPage = function () {
    $('.error-view-container').hide();
    $('.book-view-container').hide();
    $('.detail-view-container').hide();
    $('.create-view').show();
    $('#create-form').on('submit', function(event) {
      event.preventDefault();

      let book = {
        title: event.target.title.value,
        author: event.target.author.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value
      };
      app.Book.create(book);
      page('/');
    })
  }

//Event listeners for main nav
  $('.icon-menu').click(function(){
    $('.tab').toggle();
  });

  $('#main').click(function(){
    $('.tab').toggle();
  });

  $('#add').click(function(e){
    page('/books/new');
    $('.tab').toggle();
    e.preventDefault();
  });

  $(function() {
    app.Book.fetchAll(app.bookView.initIndexPage);
  })

  module.bookView = bookView;

})(app)
