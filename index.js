const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { db } = require("./db");

const app = express();
const PORT = process.env.PORT || 3030;

//logging
app.use(morgan("dev"));

//parse JSON requests
app.use(express.json());

//api routes
app.use("/api", require("./api"));

// static file-serving middleware
app.use(express.static("public"));

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

// Remember that we aren't able to use await outside of an async function.
async function startServer() {
  try {
    await db.sync();
    app.listen(PORT, () => {
      console.log(`Mixing it up on port http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

startServer();
