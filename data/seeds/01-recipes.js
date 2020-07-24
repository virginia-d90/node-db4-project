
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: "Fried Egg"},
        {recipe_name: "Grilled Chicken"},
        {recipe_name: "Grandma's Cookies"}

      ]);
    });
};
