const express = require("express");
const router = express.Router();
const Inventory = require("../models/Inventory");

// GET all items
router.get("/", async (req, res) => {
  try {
    const items = await Inventory.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ADD item
router.post("/", async (req, res) => {
  const item = new Inventory(req.body);
  try {
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
