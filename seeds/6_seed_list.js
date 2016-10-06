exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('list').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('list').insert({id: 1, name: 'date night'}),
        knex('list').insert({id: 2, name: 'party list'}),
        knex('list').insert({id: 3, name: 'weekly shopping'}),
        knex('list').insert({id: 4, name: 'bar mitzvah list'})
      ]);
    });
};
