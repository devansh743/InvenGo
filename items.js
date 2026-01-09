const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

router.post("/add", async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json({ message: "Item added" });
});

module.exports = router;
