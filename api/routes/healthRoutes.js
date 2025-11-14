const express = require("express");
const healthControllers = require("../controllers/healthControllers");

const healthRoutes = express.Router();

healthRoutes.get("/health", healthControllers.health);

module.exports = healthRoutes;
