const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

const PostRoute = require("./Routes/Post.route");
app.use("/api/post", PostRoute);

mongoose.connect(process.env.DB_CONNECT, err => {
  if (err) {
    console.log("mongo connection error ", err);
  } else {
    console.log("Mongodb connection success");
  }
});

app.listen(port, err => {
  if (!err) {
    console.log(`Server is up and running on port: ${port}`);
  } else {
    console.log("Server Connection Error ", err);
  }
});
