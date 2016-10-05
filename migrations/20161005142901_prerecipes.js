
exports.up = function(knex, Promise) {
  return knex.schema.createTable('prerecipes', function(table){
    table.increments();
    table.string('name');
    table.text('description');
    table.string('author');
    table.boolean('is_vegan');
    table.boolen('is_vege');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('prerecipes');
};
