exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_list', function(table){
    table.increments();
    table.integer('user').references('users.id');
    table.integer('list').references('list.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_list');
};
