
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userrecipes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('userrecipes').insert({id: 501, name: '', description: ''}),
        knex('userrecipes').insert({id: 502, name: '', description: ''}),
        knex('userrecipes').insert({id: 503, name: '', description: ''}),
        knex('userrecipes').insert({id: 504, name: '', description: ''})
      ]);
    });
};
