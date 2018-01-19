exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table) {
    table.increments();
    table.text('title');
    table.text('img_url');
    table.text('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};