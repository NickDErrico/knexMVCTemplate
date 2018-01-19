const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex('books')
      .then((results) => {
        res.render('books', {
          books: results
        });
      })
  },
}