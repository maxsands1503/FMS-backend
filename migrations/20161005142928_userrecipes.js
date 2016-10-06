
exports.up = function(knex, Promise) {
  return knex.schema.createTable('userrecipes', function(table){
    table.increments();
    table.string('name');
    table.text('description');
    table.integer('user_id').references('users.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('userrecipes');
};
