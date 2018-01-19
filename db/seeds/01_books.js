exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function() {
      // Inserts seed entries
      return knex('books').insert([{
          title: 'title 1',
          img_url: 'img 1',
          description: 'desc 1'
        },
        {
          title: 'title 2',
          img_url: 'img 2',
          description: 'desc 2'
        },
        {
          title: 'title 3',
          img_url: 'img 3',
          description: 'desc 3'
        },
        {
          title: 'title 4',
          img_url: 'img 4',
          description: 'desc 4'
        },
        {
          title: 'title 5',
          img_url: 'img 5',
          description: 'desc 5'
        },
        {
          title: 'title 6',
          img_url: 'img 6',
          description: 'desc 6'
        },
        {
          title: 'title 7',
          img_url: 'img 7',
          description: 'desc 7'
        },
        {
          title: 'title 8',
          img_url: 'img 8',
          description: 'desc 8'
        },
        {
          title: 'title 9',
          img_url: 'img 9',
          description: 'desc 9'
        },
        {
          title: 'title 10',
          img_url: 'img 10',
          description: 'desc 10'
        }
      ]);
    });
};