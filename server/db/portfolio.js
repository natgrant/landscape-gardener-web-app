const db = require("./connection");

function getAllPortfolios() {
  return db("portfolio").select();
}

module.exports = {
  getAllPortfolios
};
