exports.seed = function(knex, Promise) {
  return knex("portfolio")
    .del()
    .then(function() {
      return knex("portfolio").insert([
        {
          id: 1,
          name: "Deck and screen",
          location: "Brooklyn",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget dolor morbi. Neque viverra justo nec ultrices.",
          image: "/images/placeholder1.jpg"
        },
        {
          id: 2,
          name: "Flower Bed",
          location: "Lower Hutt",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget dolor morbi. Neque viverra justo nec ultrices.",
          image: "/images/placeholder2.jpg"
        },
        {
          id: 3,
          name: "Paving of Courtyard",
          location: "Eastbourne",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget dolor morbi. Neque viverra justo nec ultrices.",
          image: "/images/placeholder3.jpg"
        }
      ]);
    });
};
