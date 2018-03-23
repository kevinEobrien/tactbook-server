exports.up = function(knex, Promise) {
  return knex.schema.createTable("comment", (table) => {
    table.increments().notNullable();
    table.integer("post_id").notNullable();
    table.foreign("post_id").references("post.id");   
    table.integer("customer_id").notNullable();
    table.foreign("customer_id").references("customer.id");
    table.text("body");
  });
};
  
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("comment");
};
  
