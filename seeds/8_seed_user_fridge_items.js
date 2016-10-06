
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_fridge_item').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user_fridge_item').insert({id: 501, name: 'milk', fridge_id: 501 , measurement: '1 gallong 2% milk' }),
        knex('user_fridge_item').insert({id: 502, name: 'tomatoes', fridge_id: 502 , measurement: '4 roma tomatoes' }),
        knex('user_fridge_item').insert({id: 503, name: 'chicken', fridge_id: 503 , measurement: '2 chicken thighs' }),
        knex('user_fridge_item').insert({id: 504, name: 'cheddar cheease', fridge_id: 504 , measurement: '1 pound of cheddar cheese' })
      ]);
    });
};
