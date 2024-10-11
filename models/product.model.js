const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Please enter product name"] },
    quantity: { type: Number, required: true, defaultValue: 0 },
    price: { type: Number, required: true, defaultValue: 0 },
    image: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
