exports.seed = function(knex, Promise) {
  return knex("portfolio")
    .del()
    .then(function() {
      return knex("portfolio").insert([
        {
          id: 1,
          name: "Deck and screen",
          location: "Brooklyn",
          description: "Something about the project goes here",
          image: ""
        },
        {
          id: 2,
          name: "Flower Bed",
          location: "Lower Hutt",
          description: "Something about the project goes here",
          image: ""
        },
        {
          id: 3,
          name: "Paving of Courtyard",
          location: "Eastbourne",
          description: "Something about the project goes here",
          image: ""
        }
      ]);
    });
};
