const db = require("../db/services");
const router = require("express").Router();

router.get("/", (req, res) => {
  db.getAll().then(services => {
    res.json(services);
  });
});

module.exports = router;
