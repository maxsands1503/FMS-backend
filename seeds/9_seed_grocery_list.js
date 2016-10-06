
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grocery_list').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('grocery_list').insert({id: 501, user_id: 501, shared_id: 504, name: 'List for party'}),
        knex('grocery_list').insert({id: 502, user_id: 502, shared_id: 503, name: 'List for brunch'}),
        knex('grocery_list').insert({id: 503, user_id: 503, shared_id: 502, name: 'List for BBQ'}),
        knex('grocery_list').insert({id: 504, user_id: 504, shared_id: 501, name: 'List for date night'})
      ]);
    });
};
