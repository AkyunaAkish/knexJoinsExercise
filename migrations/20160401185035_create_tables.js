exports.up = function(knex, Promise) {
  return knex.schema.createTable('gardeners', function(table){
    table.increments('gardener_id');
    table.string('gardener_name');
  })
  .createTable('plants', function(table){
    table.increments('plant_id');
    table.string('plant_name');

    //line below creates a foreign key to add a link between the plant and gardener tables
    table.integer('gardener_id').unsigned().references('gardener_id').inTable('gardeners');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('gardeners').dropTable('plants');
};
