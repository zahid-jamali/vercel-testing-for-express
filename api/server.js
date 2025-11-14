const express = require("express");
const cors = require("cors");
const path = require("path"); // needed for correct view path
const healthRoutes = require("./routes/healthRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Set EJS
app.set("view engine", "ejs");

// Important: set absolute views path
app.set("views", path.join(__dirname, "views"));

// Routes
app.get("/", (req, res) => {
  res.render("index"); // just 'index', not 'views/index'
});

app.use("/", healthRoutes);

// Export for Vercel serverless
module.exports = app;
