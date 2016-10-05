
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_fridge_items', function(table){
    table.increments();
    table.string('name');
    table.integer('fridge_id').references('user_fridge.id')
    table.interger('amount');
    table.text('measurement');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_fridge_items');
};
