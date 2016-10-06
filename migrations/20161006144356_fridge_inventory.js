exports.up = function(knex, Promise) {
  return knex.schema.createTable('fridge_inventory', function(table){
    table.increments();
    table.integer('fridge_id').references('fridge.id');
    table.integer('inventory_id').references('inventory.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('fridge_inventory');
};
