const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//PORT
const PORT = process.env.PORT || 4000;

//Middlewares
app.use(cors());

//Body parser
app.use(bodyParser.json());

//Import routes
const noteRoutes = require("./routes/routes");
app.use("/api/rooms", noteRoutes);

//Conect to DB

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://notes:qwer4321@cluster0-xeocx.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("conected to MongoDB")
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../front"));
}

//Listen to
app.listen(PORT);
