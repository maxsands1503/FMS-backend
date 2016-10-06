
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('saved_recipes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('saved_recipes').insert({id: 501, user_id:501 , recipe_id: 504 , rating: 5 }),
        knex('saved_recipes').insert({id: 502, user_id:502 , recipe_id: 503 , rating: 5 }),
        knex('saved_recipes').insert({id: 503, user_id:503 , recipe_id: 504 , rating: 5 }),
        knex('saved_recipes').insert({id: 504, user_id:504 , recipe_id: 501 , rating: 5 })
      ]);
    });
};
