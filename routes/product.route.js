const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  createProduct,
} = require("../controllers/product.controller");

router
  .get("/", getProducts)
  .get("/:id", getProduct)
  .put("/:id", updateProduct)
  .delete("/:id", deleteProduct)
  .post("/", createProduct);

module.exports = router;
