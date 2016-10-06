exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(table){
    table.increments();
    table.string('name');
    table.text('amount');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
