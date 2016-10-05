
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shared', function(table){
    table.increments();
    table.integer('user_id').references('users.id');
    table.integer('shared_id').references('users.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('shared');
};
