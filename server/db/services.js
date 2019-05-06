const db = require("./connection");

function getAllServices() {
  return db("services").select();
}

module.exports = {
  getAllServices
};
