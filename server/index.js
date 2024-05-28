const express = require("express");
const app = express();

app.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

// configure mongodb
const mongoose = require("mongoose");

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("error connecting to the database");
  });

// routes middlewares
const customerSignupRouter = require("./routes/customer_signup");
app.use("/api", customerSignupRouter);
