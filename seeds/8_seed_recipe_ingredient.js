
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredient').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('recipe_ingredient').insert({id: 1, recipe_id: 1, ingredient_id: 1}),
        knex('recipe_ingredient').insert({id: 2, recipe_id: 1, ingredient_id: 2}),
        knex('recipe_ingredient').insert({id: 3, recipe_id: 1, ingredient_id: 3}),
        knex('recipe_ingredient').insert({id: 4, recipe_id: 1, ingredient_id: 4}),
        knex('recipe_ingredient').insert({id: 5, recipe_id: 1, ingredient_id: 5}),
        knex('recipe_ingredient').insert({id: 6, recipe_id: 1, ingredient_id: 6}),
        knex('recipe_ingredient').insert({id: 7, recipe_id: 1, ingredient_id: 7}),
        knex('recipe_ingredient').insert({id: 8, recipe_id: 1, ingredient_id: 8}),
        knex('recipe_ingredient').insert({id: 9, recipe_id: 2, ingredient_id: 9}),
        knex('recipe_ingredient').insert({id: 10, recipe_id: 2, ingredient_id: 10}),
        knex('recipe_ingredient').insert({id: 11, recipe_id: 2, ingredient_id: 11}),
        knex('recipe_ingredient').insert({id: 12, recipe_id: 2, ingredient_id: 12}),
        knex('recipe_ingredient').insert({id: 13, recipe_id: 2, ingredient_id: 13}),
        knex('recipe_ingredient').insert({id: 14, recipe_id: 2, ingredient_id: 14}),
        knex('recipe_ingredient').insert({id: 15, recipe_id: 2, ingredient_id: 15}),
        knex('recipe_ingredient').insert({id: 16, recipe_id: 2, ingredient_id: 16}),
        knex('recipe_ingredient').insert({id: 17, recipe_id: 2, ingredient_id: 17}),
        knex('recipe_ingredient').insert({id: 18, recipe_id: 3, ingredient_id: 18}),
        knex('recipe_ingredient').insert({id: 19, recipe_id: 3, ingredient_id: 19}),
        knex('recipe_ingredient').insert({id: 20, recipe_id: 3, ingredient_id: 20}),
        knex('recipe_ingredient').insert({id: 21, recipe_id: 3, ingredient_id: 21}),
        knex('recipe_ingredient').insert({id: 22, recipe_id: 3, ingredient_id: 22}),
        knex('recipe_ingredient').insert({id: 23, recipe_id: 3, ingredient_id: 23}),
        knex('recipe_ingredient').insert({id: 24, recipe_id: 3, ingredient_id: 24}),
        knex('recipe_ingredient').insert({id: 25, recipe_id: 3, ingredient_id: 25}),
        knex('recipe_ingredient').insert({id: 26, recipe_id: 3, ingredient_id: 26}),
        knex('recipe_ingredient').insert({id: 27, recipe_id: 3, ingredient_id: 27}),
        knex('recipe_ingredient').insert({id: 28, recipe_id: 4, ingredient_id: 28}),
        knex('recipe_ingredient').insert({id: 29, recipe_id: 4, ingredient_id: 29}),
        knex('recipe_ingredient').insert({id: 30, recipe_id: 4, ingredient_id: 30}),
        knex('recipe_ingredient').insert({id: 31, recipe_id: 4, ingredient_id: 31}),
        knex('recipe_ingredient').insert({id: 32, recipe_id: 4, ingredient_id: 32})
      ]);
    });
};
