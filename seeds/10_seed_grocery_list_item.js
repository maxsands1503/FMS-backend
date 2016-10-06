
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grocery_list_item').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('grocery_list_item').insert({id: 501, gl_id: 501, amount: 2, measurement: 'pounds', name: 'Apples'}),
        knex('grocery_list_item').insert({id: 502, gl_id: 502, amount: 3, measurement: 'individual', name:  'Bananas'}),
        knex('grocery_list_item').insert({id: 503, gl_id: 502, amount: 1.5, measurement: 'pounds', name: 'deli turkey'}),
        knex('grocery_list_item').insert({id: 504, gl_id: 503, amount: 1 , measurement: 'jar', name: 'Grape Jelly'}),
        knex('grocery_list').insert({id: 505, gl_id, 504, amount: 2, measurement: 'cans', name: 'olives'})
      ]);
    });
};
