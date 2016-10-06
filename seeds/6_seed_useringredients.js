
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('useringredients').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('useringredients').insert({id: 501, name: 'cooking oil', amount: '1 Tbsp cooking oil', recipe_id: 501}),
        knex('useringredients').insert({id: 502, name: 'ground beef', amount: '½ lb. ground beef', recipe_id: 501}),
        knex('useringredients').insert({id: 503, name: 'mushrooms', amount: '8oz. mushrooms', recipe_id: 501}),
        knex('useringredients').insert({id: 504, name: 'onion', amount: '1 Onion', recipe_id: 501}),
        knex('useringredients').insert({id: 505, name: 'garlic powder', amount: '1/4 tsp Garlic Powder', recipe_id: 501}),
        knex('useringredients').insert({id: 506, name: 'salt', amount: '1/4 tsp salt', recipe_id: 501}),
        knex('useringredients').insert({id: 507, name: 'peppercorn', amount: 'freshly ground pepper to taste', recipe_id: 501}),
        knex('useringredients').insert({id: 508, name: 'worcestershire', amount: '1/2 Tbsp Worcestershire Sauce', recipe_id: 501}),
        knex('useringredients').insert({id: 509, name: 'egg noodles', amount: '8oz of egg noodles', recipe_id: 501}),
        knex('useringredients').insert({id: 510, name: 'tomato sauce', amount: '15oz. can tomato sauce', recipe_id: 501}),
        knex('useringredients').insert({id: 511, name: 'fire roasted diced tomatoes', amount: '15oz. can fire roasted diced tomatoes, drained ', recipe_id: 501}),
        knex('useringredients').insert({id: 512, name: 'sour cream', amount: '8oz. sour cream', recipe_id: 501}),
        knex('useringredients').insert({id: 513, name: 'cheddar cheese', amount: '8oz. medium cheddar, shredded', recipe_id: 501}),
        knex('useringredients').insert({id: 514, name: 'green onions', amount: '4 green onions, sliced', recipe_id: 501}),
        knex('useringredients').insert({id: 515, name: 'buttermilk', amount: '1/2 cup buttermilk', recipe_id: 502}),
        knex('useringredients').insert({id: 516, name: 'sour cream', amount: '1/2 cup sour cream', recipe_id: 502}),
        knex('useringredients').insert({id: 517, name: 'flour', amount: '10 ounces (2 cups) all-purpose flour, plus additional for dusting', recipe_id: 502}),
        knex('useringredients').insert({id: 518, name: 'baking powder', amount: '1 tablespoon baking powder', recipe_id: 502}),
        knex('useringredients').insert({id: 519, name: 'baking soda', amount: '1/4 teaspoon baking soda', recipe_id: 502}),
        knex('useringredients').insert({id: 520, name: 'salt', amount: '1 1/2 teaspoons kosher salt', recipe_id: 502}),
        knex('useringredients').insert({id: 521, name: 'butter', amount: '8 tablespoons (1 stick) cold unsalted butter, cut into 1/4-inch pats, plus 2 tablespoons melted unsalted butter for brushing', recipe_id: 502}),
        knex('useringredients').insert({id: 522, name: 'fish', amount: '4 thick white fish filets or steaks (such as halibut, striped bass, sea bass, or swordfish), 5 to 8 ounces each', recipe_id: 503}),
        knex('useringredients').insert({id: 523, name: 'salt and pepper', amount: 'Kosher salt and freshly ground black pepper to taste', recipe_id: 503}),
        knex('useringredients').insert({id: 524, name: 'flour', amount: '1/2 cup all-purpose flour', recipe_id: 503}),
        knex('useringredients').insert({id: 525, name: 'egg', amount: '1 large egg, beaten', recipe_id: 503}),
        knex('useringredients').insert({id: 526, name: 'panko bread crumbs', amount: '1 1/2 cups panko-style bread crumbs', recipe_id: 503}),
        knex('useringredients').insert({id: 527, name: 'cooking oil', amount: '3 tablespoons vegetable, canola, or peanut oil', recipe_id: 503}),
        knex('useringredients').insert({id: 528, name: 'squash', amount: '4 pounds whole butternut squash (about 2 medium), halved lengthwise and seeds removed', recipe_id: 504}),
        knex('useringredients').insert({id: 529, name: 'butter', amount: '2 tablespoons unsalted butter (1/4 stick)', recipe_id: 504}),
        knex('useringredients').insert({id: 530, name: 'apple', amount: '1 medium Granny Smith apple (about 8 ounces)', recipe_id: 504}),
        knex('useringredients').insert({id: 531, name: 'onion', amount: '1/2 medium yellow onion', recipe_id: 504}),
        knex('useringredients').insert({id: 532, name: 'sage', amount: '8 fresh sage leaves', recipe_id: 504}),
        knex('useringredients').insert({id: 533, name: 'broth', amount: '2 1/2 cups low-sodium vegetable or chicken broth', recipe_id: 504}),
        knex('useringredients').insert({id: 534, name: 'water', amount: '2 1/2 cups water', recipe_id: 504}),
        knex('useringredients').insert({id: 535, name: 'salt', amount: '1 1/2 teaspoons kosher salt, plus more as needed', recipe_id: 504}),
        knex('useringredients').insert({id: 536, name: 'pepper', amount: '1/4 teaspoon freshly ground black pepper, plus more as needed', recipe_id: 504}),
        knex('useringredients').insert({id: 537, name: 'heavy cream', amount: '1/3 cup heavy cream', recipe_id: 504}),
        knex('useringredients').insert({id: 538, name: 'pumpkin seeds', amount: '1/2 cup toasted pumpkin seeds, for garnish (optional)', recipe_id: 504}),
      ]);
    });
};
