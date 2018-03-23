
exports.up = function(knex, Promise) {
  return knex.schema.createTable("relationship", (table) => {
    table.increments();
    table.integer("customer_id").notNullable().unsigned();
    table.foreign("customer_id").references("customer.id");
    table.integer("customer2_id").notNullable().unsigned();
    table.foreign("customer2_id").references("customer.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("relationship");
};
