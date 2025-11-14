const express = require("express");
const cors = require("cors");
const healthRoutes = require("./routes/healthRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.use("/", healthRoutes);

console.log("server is running!");
module.exports = app;
