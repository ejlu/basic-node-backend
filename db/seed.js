const { Workout, Exercise } = require("./models");
const db = require("./db");

const yesterday = new Date(Date.now() - 24 * 60 * (60 * 1000));
const nextWeek = new Date(Date.now() + 7 * 24 * 60 * (60 * 1000));

const seedWorkouts = [
  {
    name: "Work the Core",
    date: yesterday,
  },
  {
    name: "Leg Day",
    date: nextWeek,
  },
];

const seedExercises = [
  {
    name: "Bicycling",
    completed: true,
    description: "Bike 10km along the lakefront",
  },
  {
    name: "Weightlifting",
    completed: false,
    description: "Free weights",
  },
  {
    name: "Swimming",
    completed: true,
  },
];

async function seed() {
  try {
    console.log("Seeding the database...");
    await db.sync({ force: true });
    await Workout.bulkCreate(seedWorkouts);
    await Exercise.bulkCreate(seedExercises);
    await db.close();
    console.log("Database was successfully seeded!");
  } catch (err) {
    console.error(err);
  }
}

seed();
