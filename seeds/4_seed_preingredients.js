
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('preingredients').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('preingredients').insert({id: 501, name: 'cauliflower', amount: '2 heads Cauliflower', recipe_id: 501}),
        knex('preingredients').insert({id: 502, name: 'beef stew chunks', amount: '1.5 pounds beef stew chunks', recipe_id: 501}),
        knex('preingredients').insert({id: 503, name: 'water', amount: '8-10 cups water', recipe_id: 501}),
        knex('preingredients').insert({id: 504, name: 'cilantro', amount: '2 bunches of cilantro', recipe_id: 501}),
        knex('preingredients').insert({id: 505, name: 'garlic', amount: '1 head of garlic', recipe_id: 501}),
        knex('preingredients').insert({id: 506, name: 'lemons', amount: '2-4 lemons', recipe_id: 501}),
        knex('preingredients').insert({id: 507, name: 'vegetable oil', amount: '1/2 cup of oil' , recipe_id: 501}),
        knex('preingredients').insert({id: 508, name: 'salt and pepper', amount: 'salt and pepper to taste' , recipe_id: 501}),
        knex('preingredients').insert({id: 509, name: 'hash browns', amount: '6 large and defrosted hash browns' , recipe_id: 502}),
        knex('preingredients').insert({id: 510, name: 'baked beans', amount: '1/2 can baked beans' , recipe_id: 502}),
        knex('preingredients').insert({id: 511, name: 'sausage', amount: '3 chopped sausages' , recipe_id: 502}),
        knex('preingredients').insert({id: 512, name: 'bacon', amount: '4 Rashers of bacon' , recipe_id: 502}),
        knex('preingredients').insert({id: 513, name: 'eggs', amount: '5 eggs' , recipe_id: 502}),
        knex('preingredients').insert({id: 514, name: 'milk', amount: '50ml milk' , recipe_id: 502}),
        knex('preingredients').insert({id: 515, name: 'cheddar cheese', amount: '100g cheddar cheese grated' , recipe_id: 502}),
        knex('preingredients').insert({id: 516, name: 'ground parsley', amount: '1/2 tsp ground parsley' , recipe_id: 502}),
        knex('preingredients').insert({id: 517, name: 'salt and pepper', amount: 'salt and pepper to taste' , recipe_id: 502}),
        knex('preingredients').insert({id: 518, name: 'olive oil', amount: '1 Tbsp olive oil' , recipe_id: 503}),
        knex('preingredients').insert({id: 519, name: 'garlic', amount: '2 Cloves of garlic' , recipe_id: 503}),
        knex('preingredients').insert({id: 520, name: 'yellow onion', amount: '1 medium yellow onion' , recipe_id: 503}),
        knex('preingredients').insert({id: 521, name: 'carrots', amount: '3 medium carrots' , recipe_id: 503}),
        knex('preingredients').insert({id: 522, name: 'brown lentils', amount: '1 cup, uncooked brown lentils' , recipe_id: 503}),
        knex('preingredients').insert({id: 523, name: 'curry powder', amount: '2 Tbsp curry powder' , recipe_id: 503}),
        knex('preingredients').insert({id: 524, name: 'tomato sauce', amount: '15oz can of tomato sauce' , recipe_id: 503}),
        knex('preingredients').insert({id: 525, name: 'salt and pepper', amount: 'salt and pepper to taste' , recipe_id: 503}),
        knex('preingredients').insert({id: 526, name: 'cilantro', amount: '1/2 bunch of cilantro' , recipe_id: 503}),
        knex('preingredients').insert({id: 527, name: 'lacinato kale', amount: '1 bunch of lacinato kale' , recipe_id: 504}),
        knex('preingredients').insert({id: 528, name: 'cooking oil', amount: '1 Tbsp cooking oil' , recipe_id: 504}),
        knex('preingredients').insert({id: 529, name: 'garlic', amount: '2 cloves or garlic' , recipe_id: 504}),
        knex('preingredients').insert({id: 530, name: 'soy sauce', amount: '1 Tbsp of soy sauce' , recipe_id: 504}),
        knex('preingredients').insert({id: 531, name: 'toasted sesame oil', amount: '1 tsp toasted sesame oil' , recipe_id: 504}),
        knex('preingredients').insert({id: 532, name: 'sesame seeds', amount: '1 Tbsp sesame seeds' , recipe_id: 504})


      ]);
    });
};
