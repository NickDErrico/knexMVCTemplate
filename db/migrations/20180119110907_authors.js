exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function(table) {
    table.increments();
    table.string('author_name');
    table.string('bio');
    table.integer('book_id').references('id').inTable('books').notNull().onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};