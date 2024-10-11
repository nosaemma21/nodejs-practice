const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoute = require("./routes/product.route.js");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.listen(5000, () => console.log("Server is running on port 5000"));

mongoose
  .connect(
    "mongodb+srv://nosaemma21:winnieboy$1234@backend-dev.l9fnc.mongodb.net/Node-API"
  )
  .then(() => {
    console.log("Connected to database ✅");
  })
  .catch(() => {
    console.log("Connection Failed ❌");
  });
