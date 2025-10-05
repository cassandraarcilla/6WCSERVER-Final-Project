const mongoose = require("mongoose");

const residentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  address: String,
  status: { type: String, default: "Active" }
}, { timestamps: true });

module.exports = mongoose.model("Resident", residentSchema);
