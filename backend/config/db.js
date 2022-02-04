const mongoose = require("mongoose");

// const DB = process.env.DATABASE

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected to Mongo");
  })
  .catch((err) => console.log("Database not connected to Mongo"));
