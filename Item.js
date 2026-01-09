const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  minQty: Number
});

module.exports = mongoose.model("Item", itemSchema);
