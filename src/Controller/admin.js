const express = require("express");
const adminRouter = express.Router();

adminRouter
  .route("/admin")
  .get((req, res) => {
    res.send("trying to get admin users");
  })
  .post((req, res) => {
    res.send("trying to get admin POST req");
  });

module.exports = adminRouter;
