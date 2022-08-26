const mongoose = require("mongoose");

const OrbitSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  DateOfBirth: String,
  Location: String,
  clientType: String,
});
module.exports = mongoose.model("newclients", OrbitSchema);
