
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_fridge').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user_fridge').insert({id: 1, user_id: 1, fridge_id: 1}),
        knex('user_fridge').insert({id: 2, user_id: 2, fridge_id: 2}),
        knex('user_fridge').insert({id: 3, user_id: 3, fridge_id: 3}),
        knex('user_fridge').insert({id: 4, user_id: 4, fridge_id: 4})
      ]);
    });
};
