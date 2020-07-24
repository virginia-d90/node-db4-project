exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        //Fried Egg
        {recipe_id:1, ingredient_id: 1, quantity: "3"},
        {recipe_id:1, ingredient_id: 2, quantity: "to taste"},
        {recipe_id:1, ingredient_id: 3, quantity: "1 tbsp"},
        //Grilled Chicken
        {recipe_id:2, ingredient_id: 4, quantity: "1 lb"},
        {recipe_id:2, ingredient_id: 2, quantity: "1 tsp"},
        {recipe_id:2, ingredient_id: 3, quantitiy: "1 tsp"},
        //Grandma's Cookies
        {recipe_id:3, ingredient_id: 5, quantity: "2 1/2 cups"},
        {recipe_id:3, ingredient_id: 2, quantity: "1.5 tsp"},
        {recipe_id:3, ingredient_id: 1, quantity: "2"},
        {recipe_id:3, ingredient_id: 6, quantity: "1/2 stick softened"},
        {recipe_id:3, ingredient_id: 7, quantity: "1 cup"},
      ]);
    });
};