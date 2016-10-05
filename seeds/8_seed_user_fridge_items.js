
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_fridge_item').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user_fridge_item').insert({id: 501, name: '', fridge_id: 50 , amount: , measurement: '' }),
        knex('user_fridge_item').insert({id: 502, name: '', fridge_id: 50 , amount: , measurement: '' }),
        knex('user_fridge_item').insert({id: 503, name: '', fridge_id: 50 , amount: , measurement: '' }),
        knex('user_fridge_item').insert({id: 504, name: '', fridge_id: 50 , amount: , measurement: '' })
      ]);
    });
};
