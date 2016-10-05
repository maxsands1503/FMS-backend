
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('preingredients').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('preingredients').insert({id: 501, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 502, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 503, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 504, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 505, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 506, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 507, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 508, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 509, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 510, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 511, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 512, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 513, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 514, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 515, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 516, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 517, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 518, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 519, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 520, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 521, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 522, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 523, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 524, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 525, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 526, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 527, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 528, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 529, name: '', amount: , measurement: '', recipe_id: 50}),
        knex('preingredients').insert({id: 530, name: '', amount: , measurement: '', recipe_id: 50}),


      ]);
    });
};
