exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('gardeners').del(),


    // Inserts seed entries
    knex('gardeners').insert({gardener_id: 1, gardener_name: 'Kaleo'}),
    knex('gardeners').insert({gardener_id: 2, gardener_name: 'Aleksey'})
  );
};
