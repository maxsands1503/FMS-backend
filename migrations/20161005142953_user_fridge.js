
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_fridge', function(table){
    table.increments();
    table.integer('user_id').references('users.id');
    table.integer('shared_id').references('shared.id');
    table.string('name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_fridge');
};
