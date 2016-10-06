exports.up = function(knex, Promise) {
  return knex.schema.createTable('inventory', function(table){
    table.increments();
    table.text('item');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('inventory');
};
