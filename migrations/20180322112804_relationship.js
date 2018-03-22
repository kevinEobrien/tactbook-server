
exports.up = function(knex, Promise) {
  return knex.schema.createTable("relationship", (table) => {
    table.increments();
    table.integer("user1_id").notNullable().unsigned();
    table.foreign("user1_id").references("customer.id");
    table.integer("user2_id").notNullable().unsigned();
    table.foreign("user2_id").references("customer.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("relationship");
};
