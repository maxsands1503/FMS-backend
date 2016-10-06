exports.up = function(knex, Promise) {
  return knex.schema.createTable('list_item', function(table){
    table.increments();
    table.integer('list').references('list.id');
    table.integer('item').references('item.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('list_item');
};
