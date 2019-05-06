const db = require("../db/portfolio");
const router = require("express").Router();

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

router.get("/", (req, res) => {
  db.getAllPortfolios().then(projects => {
    res.json(projects);
  });
});

router.post("/messages", (req, res) => {
  res.header("Content-Type", "application/json");
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.MY_PHONE_NUMBER,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      res.send(JSON.stringify({ success: false }));
    });
});

module.exports = router;
