
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('list_item').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('list_item').insert({id: 1, list_id: 1, item_id: 1}),
        knex('list_item').insert({id: 2, list_id: 1, item_id: 2}),
        knex('list_item').insert({id: 3, list_id: 1, item_id: 3}),
        knex('list_item').insert({id: 4, list_id: 2, item_id: 4}),
        knex('list_item').insert({id: 5, list_id: 2, item_id: 5}),
        knex('list_item').insert({id: 6, list_id: 3, item_id: 6}),
        knex('list_item').insert({id: 7, list_id: 3, item_id: 7}),
        knex('list_item').insert({id: 8, list_id: 4, item_id: 8}),
        knex('list_item').insert({id: 9, list_id: 4, item_id: 9})
      ]);
    });
};
