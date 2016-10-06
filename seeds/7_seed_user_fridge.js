
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_fridge').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user_fridge').insert({id: 501, user_id: 501 , shared_id: 504 , name: 'mom\'s fridge'}),
        knex('user_fridge').insert({id: 502, user_id: 502 , shared_id: 503 , name: 'kitchen'}),
        knex('user_fridge').insert({id: 503, user_id: 503 , shared_id: null , name: 'outside fride'}),
        knex('user_fridge').insert({id: 504, user_id: 504 , shared_id: 501 , name: 'beer fridge'})
      ]);
    });
};
