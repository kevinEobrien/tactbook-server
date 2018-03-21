
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", (table) => {
    table.increments();
    table.text("name").notNullable();
    table.text("profileUrl");
    table.text("backgroundUrl");

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
