const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("GET Response ");
});

app.post("/", (req, res) => {
  res.send("POST Response ");
});

app.put("/", (req, res) => {
  res.send("PUT Response ");
});

app.delete("/", (req, res) => {
  res.send("Delete Response ");
});

app.listen(8008);
