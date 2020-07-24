exports.seed = function(knex) {
  // Deletes ALL existing entries
  //truncate resets primary key each time (instead of del)
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        //no need for id because auto incremented
        {name: 'eggs'},
        {name: 'salt'},
        {name: 'oil'},
        {name: 'chicken'},
        {name: 'flour'},
        {name: 'butter'},
        {name: 'chocolate chips'}
    
     
      ]);
    });
};