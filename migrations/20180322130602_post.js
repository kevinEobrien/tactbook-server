
exports.up = function(knex, Promise) {
  return knex.schema.createTable("post", (table) => {
    table.increments().notNullable();
    table.integer("customer_id").notNullable();
    table.foreign("customer_id").references("customer.id");
    table.text("content");
    table.text("imageUrl1");
    table.text("imageUrl2");
    table.integer("likes");
    table.intger("markedAbuse");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("post");
};
