import express from "express";
import mongoose from "mongoose";
import Product from "./model.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/productsDB")
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).send("Error fetching products");
  }
});

app.post("/products", async (req, res) => {
  try {
    const products = Array.isArray(req.body) ? req.body : [req.body];
    const savedProducts = await Product.insertMany(products);
    res.json(savedProducts);
  } catch (err) {
    console.error("Error saving products:", err);
    res.status(500).send("Error saving products");
  }
});

app.listen(8000, () => {
  console.log("Server started on http://localhost:8000");
});
