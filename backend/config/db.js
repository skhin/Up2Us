const mongoose = require("mongoose");

// const db =

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log("MongoDB connection OK");
  } catch (error) {
    console.log("MongoDB connection FAIL ");
    process.exit(1);
  }
};

module.exports = connectDB;
