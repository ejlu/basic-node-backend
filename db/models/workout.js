const Sequelize = require("sequelize");
const db = require("../db");

const Workout = db.define("workout", {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  completed: Sequelize.BOOLEAN,
});

module.exports = Workout;
