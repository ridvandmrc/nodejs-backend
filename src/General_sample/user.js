const express = require("express");
const router = express.Router();

const userMiddleware = (req, res, next) => {
  console.log("user Middleware: ", Date.now());
  next();
};

router.use(userMiddleware);

router.get("/user", (req, res) => {
  res.send("user list");
});

module.exports = router;
