const books = require("../controllers/books.js");
const authors = require("../controllers/authors.js");
const discussions = require("../controllers/discussions.js");

module.exports = function(app) {

  app.get('/', books.index);

  app.get('/discussions/:id', discussions.byBook);

  app.post('/create')

}