const user = require("./user");
const adminRouter = require("./admin");
const express = require("express");
const app = express();
app.use(...[user, adminRouter]);

app.listen(8008);
