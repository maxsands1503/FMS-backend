
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('prerecipes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('prerecipes').insert({id: 501, name: '', description: '', author: '', is_vegan: , is_vege: }),
        knex('prerecipes').insert({id: 502, name: '', description: '', author: '', is_vegan: , is_vege: }),
        knex('prerecipes').insert({id: 503, name: '', description: '', author: '', is_vegan: , is_vege: }),
        knex('prerecipes').insert({id: 504, name: '', description: '', author: '', is_vegan: , is_vege: })
      ]);
    });
};
