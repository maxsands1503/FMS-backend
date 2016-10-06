
exports.up = function(knex, Promise) {
  return knex.schema.createTable('grocery_list_item', function(table){
    table.increments();
    table.integer('gl_id').references('grocery_list.id')
    table.float('amount');
    table.text('measurement');
    table.string('name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('grocery_list_item');
};
