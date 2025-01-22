import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  id: Number,
  name: String,
  category: String,
  price: Number,
  stock: Number,
  discount: Boolean,
});

export default mongoose.model("Product", ProductSchema);
