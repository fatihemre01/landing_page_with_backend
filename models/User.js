const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  message: String,
  social_accounts: String,
});

module.exports = new mongoose.model("user", userSchema);
