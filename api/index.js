const router = require("express").Router();
module.exports = router;

router.use("/exercises", require("./exercises"));
router.use("/workouts", require("./workouts"));

router.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});
