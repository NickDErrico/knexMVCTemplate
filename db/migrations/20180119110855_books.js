exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table) {
    table.increments();
    table.string('title');
    table.string('img_url');
    table.string('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};