
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('saved_recipes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('saved_recipes').insert({id: 501, user_id: , recipe_id: , rating: }),
        knex('saved_recipes').insert({id: 502, user_id: , recipe_id: , rating: }),
        knex('saved_recipes').insert({id: 503, user_id: , recipe_id: , rating: }),
        knex('saved_recipes').insert({id: 504, user_id: , recipe_id: , rating: })
      ]);
    });
};
