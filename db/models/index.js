const Exercise = require("./exercise");
const Workout = require("./workout");

Workout.hasMany(Exercise);

module.exports = {
  Exercise,
  Workout,
};
