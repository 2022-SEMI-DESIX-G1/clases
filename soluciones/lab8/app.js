const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.json({ hello: "world" });
});

app.get("/hi", function (req, res) {
  res.json({ hi: "hi" });
});

app.post("/hi", function (req, res) {
  res.json({ hi: "hi" });
});

app.post("/pokemon/:name", function (req, res) {
  const { name } = req.params;
  res.json({ name });
});

app.listen(3000);
