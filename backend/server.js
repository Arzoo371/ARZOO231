// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const tweetRoutes = require("./routes/tweetRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URI = "mongodb://localhost/twitter-clone";  // Use your MongoDB URI

app.use(cors());
app.use(bodyParser.json());
app.use(tweetRoutes);
app.use(userRoutes);

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected.");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log(err));
