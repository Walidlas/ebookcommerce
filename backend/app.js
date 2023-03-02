const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/bookRoutes");
const router2 = require("./routes/categoryRoutes");
const router3 = require("./routes/userRoutes");


const loggingMiddelwares = require("./middelwares/logging_middelware");

require("dotenv").config()
mongoose.connect(process.env.MONGO_URI)
.then(result=>app.listen(5577,()=> console.log("Server is running")))
.catch((error) => console.log(error));


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(loggingMiddelwares.loggignfUrl);
app.use(loggingMiddelwares.loggignParamas);

app.use("/books", router);
app.use("/categories", router2);
app.use("/users", router3);




app.get("/", (req, res) => {
  res.send("<h2> Bienvneue dans notre app Express</h2>");
});