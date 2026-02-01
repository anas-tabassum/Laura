const mongoose = require("mongoose");
require("dotenv").config();

const URL = process.env.DATABASE_URI;

async function database() {
  try {
    return await mongoose.connect(URL);
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

module.exports = { database };
