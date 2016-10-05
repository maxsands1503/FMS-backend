
exports.up = function(knex, Promise) {
  return knex.schema.createTable('useringredients', function(table){
    table.increments();
    table.string('name');
    table.integer('amount');
    table.text('measurement');
    table.integer('recipe_id').references('userrecipes.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('useringredients');
};
