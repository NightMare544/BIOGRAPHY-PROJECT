/** @format */

const mongoose = require("mongoose");
const config = require("config");
const { connect } = require("mongoose");
//const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/mern", {
      useNewURLParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit Process with failure
    process.exit();
  }
};

module.exports = connectDB;
