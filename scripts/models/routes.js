'use strict';

if(window.location.pathname !== '/') {
 page.base('/book-list-client');
}

page('/', ctx => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/new', ctx => app.bookView.initCreateFormPage(ctx));
page('/books/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initDetailPage));
// page('*', ctx => app.Book.fetchAll(app.bookView.initIndexPage));
page();
