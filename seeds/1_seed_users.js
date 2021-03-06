exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, email: 'max@maxsands.com', password: '$2a$08$iz712t0r34njkb4FjVLZjeajFhBrPJ0JtxpoAa9ao2sCddSDWjfx2', name: 'Max'}),
        knex('users').insert({id: 2, email: 'maxwants2glow@gmail.com', password: '$2a$08$iz712t0r34njkb4FjVLZjeajFhBrPJ0JtxpoAa9ao2sCddSDWjfx2', name: 'Test'}),
        knex('users').insert({id: 3, email: 'maxsands1503@icloud.com', password: '$2a$08$iz712t0r34njkb4FjVLZjeajFhBrPJ0JtxpoAa9ao2sCddSDWjfx2', name: 'Test2'}),
        knex('users').insert({id: 4, email: 'amandajean555@gmail.com', password: '$2a$08$iz712t0r34njkb4FjVLZjeajFhBrPJ0JtxpoAa9ao2sCddSDWjfx2', name: 'Amanda'})
      ]);
    });
};
