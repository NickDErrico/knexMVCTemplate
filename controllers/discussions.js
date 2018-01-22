const knex = require("../db/knex.js");

module.exports = {
  byBook: (req, res) => {
    knex('discussions')
      .join('books', 'books_id', 'books.id')
      .where('id', req.params.id)
      .then((results) => {
        res.render('discussions', {
          discussions: results
        });
      })
  },
}