const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const inventoryRoutes = require("./routes/inventory");

const app = express();

// middleware
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// routes (ONLY ONCE)
app.use("/api/auth", authRoutes);
app.use("/api/inventory", inventoryRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/invengo")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on 5000"));
  })
  .catch(err => console.error(err));
