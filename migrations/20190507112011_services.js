exports.up = function(knex, Promise) {
  return knex.schema.createTable("services", table => {
    table.increments("id");
    table.string("title");
    table.string("description");
    table.integer("cost");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("services");
};
