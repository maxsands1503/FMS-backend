
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grocery_list_item').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('grocery_list_item').insert({id: 501, gl_id: , amount: , measurement: '', name: ''}),
        knex('grocery_list_item').insert({id: 502, gl_id: , amount: , measurement: '', name: ''}),
        knex('grocery_list_item').insert({id: 503, gl_id: , amount: , measurement: '', name: ''}),
        knex('grocery_list_item').insert({id: 504, gl_id: , amount: , measurement: '', name: ''})

      ]);
    });
};
