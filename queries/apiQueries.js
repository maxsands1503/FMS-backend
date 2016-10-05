var knex = require('../db/knex');

module.exports = {
  findUserByUserName : function(email){
  return knex('users').where({"email": email}).first();
},
  addUser : function(body){
  return knex('users').insert(body);
}
}
