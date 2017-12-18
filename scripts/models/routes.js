'use strict';

if(window.location.pathname !== '/') {
 page.base('/book-list-client');
}

page('/', ctx => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/new', ctx => app.bookView.initCreateFormPage(ctx));
page('/books/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initDetailPage));
page('/books/:book_id/update', (ctx, next) => app.Book.fetchOne(ctx, next),
=>  app.bookView.initUpdateFormPage(ctx));
page('/books/search', ctx => app.bookView.initSearchFormPage (ctx));

page();
