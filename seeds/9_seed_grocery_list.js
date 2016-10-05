
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grocery_list').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('grocery_list').insert({id: 501, user_id: , shared_id: , name: ''}),
        knex('grocery_list').insert({id: 502, user_id: , shared_id: , name: ''}),
        knex('grocery_list').insert({id: 503, user_id: , shared_id: , name: ''}),
        knex('grocery_list').insert({id: 504, user_id: , shared_id: , name: ''})
      ]);
    });
};
