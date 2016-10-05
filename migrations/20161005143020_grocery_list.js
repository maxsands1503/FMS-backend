
exports.up = function(knex, Promise) {
  return knex.schema.createTable('grocery_list', function(table){
    table.increments();
    table.integer('user_id').references('users.id');
    table.integer('shared_id').references('shared.id');
    table.string('name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('grocery_list');
};
