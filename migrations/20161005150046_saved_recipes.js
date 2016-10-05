
exports.up = function(knex, Promise) {
  return knex.schema.createTable('saved_recipes', function(table){
    table.increments();
    table.integer('user_id').references('users.id')
    table.interger('recipe_id').references('prerecipes.id');
    table.interger('rating');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('saved_recipes');
};
