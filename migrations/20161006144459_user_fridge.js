exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_fridge', function(table){
    table.increments();
    table.integer('user').references('users.id');
    table.integer('fridge').references('fridge.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_fridge');
};
