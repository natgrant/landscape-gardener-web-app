exports.seed = function(knex, Promise) {
  return knex("services")
    .del()
    .then(function() {
      return knex("services").insert([
        { id: 1, title: "Lawns", description: "" },
        { id: 2, title: "Landscape Design", description: "" },
        { id: 3, title: "Gardening", description: "" }
      ]);
    });
};
