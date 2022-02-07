const express = require("express");
const app = express();

require("dotenv").config();
require("./config/db");

const cors = require("cors");

const authRoutes = require("./routes/authRoute");
const restaurantRoutes = require("./routes/restaurantRoutes");
const userSettingRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello from the Other Side");
});

app.use("/api", authRoutes);
app.use("/api", restaurantRoutes);
app.use("/api", userSettingRoutes);

//  ************** LISTENER ************** //
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
