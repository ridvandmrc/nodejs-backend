const express = require("express");
const app = express();
const logger = require('./middleware')
const user = require("./user");

app.use(logger)
app.use(user);

app.listen(8008);
