
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('item').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('item').insert({id: 1, name: 'chicken'}),
        knex('item').insert({id: 2, name: 'cheddar cheese'}),
        knex('item').insert({id: 3, name: 'yellow onions'}),
        knex('item').insert({id: 4, name: 'garlic'}),
        knex('item').insert({id: 5, name: 'red peppers'}),
        knex('item').insert({id: 6, name: '2 pounds of ground beef'}),
        knex('item').insert({id: 7, name: 'spinach'}),
        knex('item').insert({id: 8, name: 'cucumber'}),
        knex('item').insert({id: 9, name: 'brown rice'})
      ]);
    });
};
