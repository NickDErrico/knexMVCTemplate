exports.up = function(knex, Promise) {
  return knex.schema.createTable('discussions', function(table) {
    table.increments();
    table.string('comments');
    table.string('name');
    table.integer('book_id').references('id').inTable('books').notNull().onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('discussions');
};