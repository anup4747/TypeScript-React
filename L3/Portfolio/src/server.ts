const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyparser());

const url = "";
mongoose.connect(
  url,
  {
    dbName: "",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err: Error | null) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to yourDB-name database");
    }
  },
  console.log("Connected to yourDB-name database")
);

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    message: {
        type: String,
        default: "none",
    },
});


// const Response = mongoose.model('Response', responseSchema);
