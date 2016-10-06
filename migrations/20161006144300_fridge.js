exports.up = function(knex, Promise) {
  return knex.schema.createTable('fridge', function(table){
    table.increments();
    table.string('name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('fridge');
};
