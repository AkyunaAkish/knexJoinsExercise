
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('plants').del(),

    // Inserts seed entries
    knex('plants').insert({plant_id: 1, gardener_id: 1, plant_name: 'Taro'}),
    knex('plants').insert({plant_id: 2, gardener_id: 1, plant_name: 'Sugarcane'}),
    knex('plants').insert({plant_id: 3, gardener_id: 2, plant_name: 'Potato'}),
    knex('plants').insert({plant_id: 4, gardener_id: 2, plant_name: 'Cabbage'})
  );
};
