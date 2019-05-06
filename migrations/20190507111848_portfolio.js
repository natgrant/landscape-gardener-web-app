exports.up = function(knex, Promise) {
  return knex.schema.createTable("portfolio", table => {
    table.increments("id");
    table.string("name");
    table.string("location");
    table.string("description");
    table.string("image");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("portfolio");
};
