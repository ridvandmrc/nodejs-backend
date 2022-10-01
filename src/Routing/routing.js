const express = require("express");
const app = express();

// To get all request

app.all("/all", (req, res) => {
  res.send("handle all data");
});

// use ? to both accent and ignore'd'
app.get("/rid?van", (req, res) => {
  res.send("handle (?)");
});

// extends d ===> riddddvan
app.get("/rid+van", (req, res) => {
  res.send("handle (+)");
});

// accept ant string to '*'
app.get("/rid*van", (req, res) => {
  res.send("handle(*)");
});

// (xxx)?
app.get("/ab(cd)?e", (req, res) => {
  res.send("handle (xx)?");
});

// Routing params /:id - /:bookId
app.get("/params/:id/book/:bookId", (req, res) => {
  console.log("params: ", req.params);
  res.send(req.params);
});

// some tricky sample
app.get("/plane/:from-:to", (req, res) => {
  res.send(req.params);
});

// Route handler
// to provide a chain or middleware
// request type has 3rd param name is next
app.get(
  "/middleware/:id",
  (req, res, next) => {
    console.log("middleware", req.params.id);
    if (req.params.id === "0") {
      console.log("error");
      res.send("Error");
    } else {
      next();
    }
  },
  (req, res) => {
    res.send(`Done : ${req.params.id}`);
  }
);

// Request handler chain
// if we have more than one handler
const handler1 = (req, res, next) => {
  console.log("handler 1");

  if (req.params.id === "1") {
    res.send("select first handler");
  } else {
    next();
  }
};

const handler2 = (req, res, next) => {
  console.log("handler 2");
  if (req.params.id === "2") {
    res.send("handler 2");
  } else {
    next();
  }
};

const handler3 = (req, res, next) => {
  console.log("handler 3");
  res.send(`Handler chain ${req.params.id}`);
};

app.get("/chain/:id", ...[handler1, handler2, handler3]);

// route, we can use chainable

app
  .route("/chain")
  .get((req, res) => {
    res.send("router GET");
  })
  .post((req, res) => {
    res.send("router POST");
  })
  .put((req, res) => {
    res.send("router PUT");
  });

// Router module
// we can use module in controller :)

const portal = express.Router();

portal.get("/portal", (req, res) => {
  res.send("portal GET response");
});


app.use(portal)

app.listen(8008);
