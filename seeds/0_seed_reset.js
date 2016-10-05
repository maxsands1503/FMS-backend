
exports.seed = function(knex, Promise) {
  return knex.raw("TRUNCATE users , shared, prerecipes, preingredients, userrecipes, useringredients, user_fridge, user_fridge_items, gorcery_list, grocery_list_item, saved_recipes RESTART IDENTITY CASCADE")
  .then(function(){
                return knex('users').del()
                  .then(function(){
                    return knex('shared').del()
                      .then(function(){
                        return knex('prerecipes').del()
                          .then(function(){
                            return knex('preingredients').del()
                              .then(function(){
                                return knex('userrecipes').del()
                                  .then(function(){
                                    return knex('useringredients').del()
                                      .then(function(){
                                        return knex('user_fridge').del()
                                          .then(function(){
                                            return knex('user_fridge_items').del()
                                              .then(function(){
                                                return knex('grocery_list').del()
                                                  .then(function(){
                                                    return knex('grocery_list_item').del()
                                                      .then(function(){
                                                        return knex('saved_recipes').del()
                                                          .then(function(){

                                                          })
                                                      })
                                                  })
                                              })
                                          })
                                      })
                                  })
                              })
                          })
                      })
         });
        });
};
