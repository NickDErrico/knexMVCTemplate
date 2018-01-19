exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function() {
      // Inserts seed entries
      return knex('authors').insert([{
          author_name: 'name 1',
          bio: 'bio 1',
          book_id: '1'
        },
        {
          author_name: 'name 2',
          bio: 'bio 2',
          book_id: '2'
        },
        {
          author_name: 'name 3',
          bio: 'bio 3',
          book_id: '3'
        },
        {
          author_name: 'name 4',
          bio: 'bio 4',
          book_id: '4'
        },
        {
          author_name: 'name 5',
          bio: 'bio 5',
          book_id: '5'
        },
        {
          author_name: 'name 6',
          bio: 'bio 6',
          book_id: '6'
        },
        {
          author_name: 'name 7',
          bio: 'bio 7',
          book_id: '7'
        },
        {
          author_name: 'name 8',
          bio: 'bio 8',
          book_id: '8'
        },
        {
          author_name: 'name 9',
          bio: 'bio 9',
          book_id: '9'
        },
        {
          author_name: 'name 10',
          bio: 'bio 10',
          book_id: '10'
        }
      ]);
    });
};