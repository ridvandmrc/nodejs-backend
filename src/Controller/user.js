const express = require("express");
const userRouter = express.Router({});

const users = [
  { name: "ridvan", age: 32 },
  { name: "furkan", age: 32 },
  { name: "asi", age: 32 },
];

userRouter
  .route("/user")
  .get((req, res) => {
    res.json(users);
  })
  .post((req, res) => {
    res.json(users[0]);
  });

module.exports = userRouter;
