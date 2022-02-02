const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    review: { type: String },
    cuisine: { type: Array, required: true },
    price: { type: String, required: true },
    occasion: { type: Array, required: true },
  },
  { collection: "restaurant" },
  { timestamps: true }
);

const Restaurant = mongoose.model("restaurant", RestaurantSchema);
module.exports = Restaurant;
