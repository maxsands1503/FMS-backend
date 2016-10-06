exports.up = function(knex, Promise) {
  return knex.schema.createTable('item', function(table){
    table.increments();
    table.string('name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('item');
};
