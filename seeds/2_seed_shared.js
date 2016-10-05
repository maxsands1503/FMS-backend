
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shared').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('shared').insert({id: 501, user_id: 501 , shared_id: 502 }),
        knex('shared').insert({id: 502, user_id: 502 , shared_id: 503 }),
        knex('shared').insert({id: 503, user_id: 503 , shared_id: 504 }),
        knex('shared').insert({id: 504, user_id: 504 , shared_id: 501 })
      ]);
    });
};
