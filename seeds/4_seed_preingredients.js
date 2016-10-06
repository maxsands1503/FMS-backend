
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('preingredients').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('preingredients').insert({id: 501, name: 'Cauliflower', amount: '2 heads', recipe_id: 501}),
        knex('preingredients').insert({id: 502, name: 'beef stew chunks', amount: '1.5 pounds', recipe_id: 501}),
        knex('preingredients').insert({id: 503, name: 'water', amount: '8-10 cups', recipe_id: 501}),
        knex('preingredients').insert({id: 504, name: 'cilantro', amount: '2 bunches', recipe_id: 501}),
        knex('preingredients').insert({id: 505, name: 'garlic', amount: '1 head', recipe_id: 501}),
        knex('preingredients').insert({id: 506, name: 'Lemons', amount: '2-4', recipe_id: 501}),
        knex('preingredients').insert({id: 507, name: 'vegetable oil', amount: '1/2 cup' , recipe_id: 501}),
        knex('preingredients').insert({id: 508, name: 'Salt and pepper', amount: 'to taste' , recipe_id: 501}),
        knex('preingredients').insert({id: 509, name: 'Hash Browns', amount: '6 large and defrosted' , recipe_id: 502}),
        knex('preingredients').insert({id: 510, name: 'Baked Beans', amount: '1/2 can' , recipe_id: 502}),
        knex('preingredients').insert({id: 511, name: 'Sausage', amount: '3 chopped' , recipe_id: 502}),
        knex('preingredients').insert({id: 512, name: 'Bacon', amount: '4 Rashers' , recipe_id: 502}),
        knex('preingredients').insert({id: 513, name: 'Eggs', amount: '5' , recipe_id: 502}),
        knex('preingredients').insert({id: 514, name: 'Milk', amount: '50ml' , recipe_id: 502}),
        knex('preingredients').insert({id: 515, name: 'Cheddar Cheese', amount: '100g' , recipe_id: 502}),
        knex('preingredients').insert({id: 516, name: 'Ground parsley', amount: '1/2 tsp' , recipe_id: 502}),
        knex('preingredients').insert({id: 517, name: 'Salt and pepper', amount: 'to taste' , recipe_id: 502}),
        knex('preingredients').insert({id: 518, name: 'Olive Oil', amount: '1 Tbsp' , recipe_id: 503}),
        knex('preingredients').insert({id: 519, name: 'Garlic', amount: '2 Cloves' , recipe_id: 503}),
        knex('preingredients').insert({id: 520, name: 'Yellow Onion', amount: '1 Medium' , recipe_id: 503}),
        knex('preingredients').insert({id: 521, name: 'Carrots', amount: '3 medium' , recipe_id: 503}),
        knex('preingredients').insert({id: 522, name: 'Brown Lentils', amount: '1 cup, uncooked' , recipe_id: 503}),
        knex('preingredients').insert({id: 523, name: 'Curry powder', amount: '2 Tbsp' , recipe_id: 503}),
        knex('preingredients').insert({id: 524, name: 'Tomato Sauce', amount: '15oz can' , recipe_id: 503}),
        knex('preingredients').insert({id: 525, name: 'Salt and pepper', amount: 'to taste' , recipe_id: 503}),
        knex('preingredients').insert({id: 526, name: 'Cilantro', amount: '1/2 bunch' , recipe_id: 503}),
        knex('preingredients').insert({id: 527, name: 'Lacinato Kale', amount: '1 Bunch' , recipe_id: 504}),
        knex('preingredients').insert({id: 528, name: 'Cooking oil', amount: '1 Tbsp' , recipe_id: 504}),
        knex('preingredients').insert({id: 529, name: 'Garlic', amount: '2 Cloves' , recipe_id: 504}),
        knex('preingredients').insert({id: 530, name: 'Soy Sauce', amount: '1 Tbsp' , recipe_id: 504}),
        knex('preingredients').insert({id: 531, name: 'Toasted Sesame Oil', amount: '1 tsp' , recipe_id: 504}),
        knex('preingredients').insert({id: 532, name: 'Sesame Seeds', amount: '1 Tbsp' , recipe_id: 504})


      ]);
    });
};
