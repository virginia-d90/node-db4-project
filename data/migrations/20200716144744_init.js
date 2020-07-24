
exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
        tbl.increments();
        tbl.string("recipe_name", 255)
            .unique()
            .notNullable()

    })
    .createTable("ingredients", tbl => {
        tbl.increments();
        tbl.string("name", 255)
            .notNullable()
    })
    .createTable("recipe_ingredients", tbl => {
        tbl.increments();
        tbl.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("recipes.id")
        tbl.integer("ingredient_id")
            .unsigned()
            .notNullable()
            .references("ingredients.id")

        tbl.string("quantity", 50)
            .notNullable()
                


    })
    .createTable("steps", tbl => {
        tbl.increments();
        tbl.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("recipes.id")
        tbl.integer("step_number")
            .unsigned()
            .notNullable()
        tbl.string("step")
            .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
};
