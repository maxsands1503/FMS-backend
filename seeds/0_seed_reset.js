exports.seed = function(knex, Promise) {
  return knex.raw("TRUNCATE users, recipes, ingredients, fridge, inventory, list, item, recipe_ingredient, fridge_inventory, user_list, list_item, user_fridge RESTART IDENTITY CASCADE")
  .then(function(){
                return knex('users').del()
                  .then(function(){
                     return knex('recipes').del()
                      .then(function(){
                         return knex('ingredients').del()
                          .then(function(){
                            return knex('fridge').del()
                              .then(function(){
                                return knex('inventory').del()
                                  .then(function(){
                                    return knex('list').del()
                                      .then(function(){
                                        return knex('item').del()
                                          .then(function(){
                                            return knex('recipe_ingredient').del()
                                              .then(function(){
                                                return knex('fridge_inventory').del()
                                                  .then(function(){
                                                    return knex('user_list').del()
                                                      .then(function(){
                                                        return knex('list_item').del()
                                                          .then(function(){
                                                            return knex('user_fridge').del()
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
