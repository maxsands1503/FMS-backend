exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fridge').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('fridge').insert({id: 1, name: 'mom\'s fridge'}),
        knex('fridge').insert({id: 2, name: 'kitchen'}),
        knex('fridge').insert({id: 3, name: 'outside fride'}),
        knex('fridge').insert({id: 4, name: 'beer fridge'})
      ]);
    });
};
