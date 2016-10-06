
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(table){
    table.increments();
    table.string('name');
    table.text('instructions');
    table.integer('user_id').references('users.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
