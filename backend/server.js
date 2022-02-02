const express = require("express");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello world out there");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
