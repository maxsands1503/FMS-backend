
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_fridge').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user_fridge').insert({id: 501, user_id: 50 , shared_id: 50 , name: ''}),
        knex('user_fridge').insert({id: 502, user_id: 50 , shared_id: 50 , name: ''}),
        knex('user_fridge').insert({id: 503, user_id: 50 , shared_id: 50 , name: ''}),
        knex('user_fridge').insert({id: 504, user_id: 50 , shared_id: 50 , name: ''})
      ]);
    });
};
