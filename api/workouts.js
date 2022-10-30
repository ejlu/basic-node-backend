const router = require("express").Router();

const { Workout } = require("../db/models");
const { Exercise } = require("../db/models");

// GET all workouts
router.get("/", async (req, res, next) => {
  try {
    res.json(
      await Workout.findAll({
        include: { model: Exercise },
      })
    );
  } catch (error) {
    next(error);
  }
});

// GET a single workout by id
router.get("/:id", async (req, res, next) => {
  try {
    const workout = await Workout.findByPk(+req.params.id);
    if (!workout) return res.sendStatus(404);
    res.json(workout);
  } catch (error) {
    next(error);
  }
});

// POST a new workout
router.post("/", async (req, res, next) => {
  try {
    const { name, date } = req.body;
    res.status(201);
    res.json(await Workout.create({ name, date }));
  } catch (error) {
    next(error);
  }
});

// DELETE a workout by id
router.delete("/:id", async (req, res, next) => {
  try {
    const workout = await Workout.findByPk(+req.params.id);
    if (!workout) return res.sendStatus(404);
    await workout.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
