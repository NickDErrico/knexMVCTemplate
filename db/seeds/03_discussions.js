exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('discussions').del()
    .then(function() {
      // Inserts seed entries
      return knex('discussions').insert([{
          comments: 'Test Comment 1',
          name: 'Test Comment Author Name 1',
          book_id: 1
        },
        {
          comments: 'Test Comment 2',
          name: 'Test Comment Author Name 2',
          book_id: 2
        },
        {
          comments: 'Test Comment 3',
          name: 'Test Comment Author Name 3',
          book_id: 3
        },
        {
          comments: 'Test Comment 4',
          name: 'Test Comment Author Name 4',
          book_id: 4
        },
        {
          comments: 'Test Comment 5',
          name: 'Test Comment Author Name 5',
          book_id: 5
        },
        {
          comments: 'Test Comment 6',
          name: 'Test Comment Author Name 6',
          book_id: 6
        },
        {
          comments: 'Test Comment 7',
          name: 'Test Comment Author Name 7',
          book_id: 7
        },
        {
          comments: 'Test Comment 8',
          name: 'Test Comment Author Name 8',
          book_id: 8
        },
        {
          comments: 'Test Comment 9',
          name: 'Test Comment Author Name 9',
          book_id: 9
        },
        {
          comments: 'Test Comment 10',
          name: 'Test Comment Author Name 10',
          book_id: 10
        },
      ]);
    });
};