exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('inventory').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('inventory').insert({id: 1, item: '1 gallong 2% milk' }),
        knex('inventory').insert({id: 2, item: '4 roma tomatoes' }),
        knex('inventory').insert({id: 3, item: '2 chicken thighs' }),
        knex('inventory').insert({id: 4, item: '1 pound of cheddar cheese' })
      ]);
    });
};
