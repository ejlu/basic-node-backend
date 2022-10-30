const Sequelize = require("sequelize");
const db = require("../db");

const Exercise = db.define("exercise", {
  name: Sequelize.STRING,
  date: Sequelize.DATE,
});

module.exports = Exercise;
