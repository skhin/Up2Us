const express = require("express");
const app = express();

require("dotenv").config();
require("./config/db");

const cors = require("cors");

const path = require("path");

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "../frontend/build")));

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

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../frontend/build/index.html"));
});

//  ************** LISTENER ************** //
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

///////////////////////////////////////////
