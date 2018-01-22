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

  addBook: (req, res) => {
    knex('books')
      .insert({
        title: req.body.title,
        img_url: req.body.img_url,
        description: req.body.description
      })
      .then(() => {
        res.redirect('/')
      })
  },
}