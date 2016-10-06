
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('ingredients').insert({id: 1, name: 'cauliflower', amount: '2 heads Cauliflower'}),
        knex('ingredients').insert({id: 2, name: 'beef stew chunks', amount: '1.5 pounds beef stew chunks'}),
        knex('ingredients').insert({id: 3, name: 'water', amount: '8-10 cups water'}),
        knex('ingredients').insert({id: 4, name: 'cilantro', amount: '2 bunches of cilantro'}),
        knex('ingredients').insert({id: 5, name: 'garlic', amount: '1 head of garlic'}),
        knex('ingredients').insert({id: 6, name: 'lemons', amount: '2-4 lemons'}),
        knex('ingredients').insert({id: 7, name: 'vegetable oil', amount: '1/2 cup of oil'}),
        knex('ingredients').insert({id: 8, name: 'salt and pepper', amount: 'salt and pepper to taste'}),
        knex('ingredients').insert({id: 9, name: 'hash browns', amount: '6 large and defrosted hash browns'}),
        knex('ingredients').insert({id: 10, name: 'baked beans', amount: '1/2 can baked beans'}),
        knex('ingredients').insert({id: 11, name: 'sausage', amount: '3 chopped sausages'}),
        knex('ingredients').insert({id: 12, name: 'bacon', amount: '4 Rashers of bacon'}),
        knex('ingredients').insert({id: 13, name: 'eggs', amount: '5 eggs'}),
        knex('ingredients').insert({id: 14, name: 'milk', amount: '50ml milk'}),
        knex('ingredients').insert({id: 15, name: 'cheddar cheese', amount: '100g cheddar cheese grated'}),
        knex('ingredients').insert({id: 16, name: 'ground parsley', amount: '1/2 tsp ground parsley'}),
        knex('ingredients').insert({id: 17, name: 'salt and pepper', amount: 'salt and pepper to taste'}),
        knex('ingredients').insert({id: 18, name: 'olive oil', amount: '1 Tbsp olive oil'}),
        knex('ingredients').insert({id: 19, name: 'garlic', amount: '2 Cloves of garlic'}),
        knex('ingredients').insert({id: 20, name: 'yellow onion', amount: '1 medium yellow onion'}),
        knex('ingredients').insert({id: 21, name: 'carrots', amount: '3 medium carrots'}),
        knex('ingredients').insert({id: 22, name: 'brown lentils', amount: '1 cup, uncooked brown lentils'}),
        knex('ingredients').insert({id: 23, name: 'curry powder', amount: '2 Tbsp curry powder'}),
        knex('ingredients').insert({id: 24, name: 'tomato sauce', amount: '15oz can of tomato sauce'}),
        knex('ingredients').insert({id: 25, name: 'salt and pepper', amount: 'salt and pepper to taste'}),
        knex('ingredients').insert({id: 26, name: 'cilantro', amount: '1/2 bunch of cilantro'}),
        knex('ingredients').insert({id: 27, name: 'lacinato kale', amount: '1 bunch of lacinato kale'}),
        knex('ingredients').insert({id: 28, name: 'cooking oil', amount: '1 Tbsp cooking oil'}),
        knex('ingredients').insert({id: 29, name: 'garlic', amount: '2 cloves or garlic'}),
        knex('ingredients').insert({id: 30, name: 'soy sauce', amount: '1 Tbsp of soy sauce'}),
        knex('ingredients').insert({id: 31, name: 'toasted sesame oil', amount: '1 tsp toasted sesame oil'}),
        knex('ingredients').insert({id: 32, name: 'sesame seeds', amount: '1 Tbsp sesame seeds'})
      ]);
    });
};
