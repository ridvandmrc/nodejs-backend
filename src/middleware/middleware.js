const express = require("express");
const app = express();

// this will be worked for all request
const applicationBase = (req, res, next) => {
  console.log("Logged: ", Date.now());
  next();
};

// endpoint  base
const appMiddleware = (req, res, next) => {
  console.log("Only works /app", Date.now());
  next();
};

// application middleware
app.use(applicationBase);
// endpoint middleware
app.use("/app", appMiddleware);

app.get("/", (req, res, next) => {
  console.log("middleware 2");
  res.send("DONE !");
});

app.get("/app", (req, res) => {
  res.send("App");
});

// Router Middleware
const router = express.Router();

router.use(applicationBase);

router.get("/router", (req, res) => {
  res.send("router endpoints");
});

app.use(router)


app.listen(8008);
