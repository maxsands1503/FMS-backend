exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredient', function(table){
    table.increments();
    table.integer('recipe_id').references('recipes.id');
    table.integer('ingredient_id').references('ingredients.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredient');
};
