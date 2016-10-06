
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fridge_inventory').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('fridge_inventory').insert({id: 1, fridge_id: 1, inventory_id: 1}),
        knex('fridge_inventory').insert({id: 2, fridge_id: 2, inventory_id: 2}),
        knex('fridge_inventory').insert({id: 3, fridge_id: 3, inventory_id: 3}),
        knex('fridge_inventory').insert({id: 4, fridge_id: 4, inventory_id: 4})
      ]);
    });
};
