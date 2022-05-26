const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema({
  name: String,
  price: Number,
  availability: Number,
  caffeine: Boolean,
  capacity: Number,
  description: String,
});

const Drinks = mongoose.model("Drinks", drinkSchema);
module.exports = Drinks;
