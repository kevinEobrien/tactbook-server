
exports.up = function(knex, Promise) {
  return knex.schema.createTable("post", (table) => {
    table.increments().notNullable();
    table.integer("customer_id").notNullabl();
    table.foreign("customer_id").references("customer.id");
    table.integer("post_id").notNullable();
    table.foreign("post_id").references("post.id");   
    table.text("comment");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("comment");
};
