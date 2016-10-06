
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_list').del()
    .then(function () {
      return Promise.all([
        knex('user_list').insert({id: 1, user: 2, list: 1}),
        knex('user_list').insert({id: 2, user: 3, list: 2}),
        knex('user_list').insert({id: 3, user: 4, list: 3}),
        knex('user_list').insert({id: 4, user: 1, list: 4})
      ]);
    });
};
