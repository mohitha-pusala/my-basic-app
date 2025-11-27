const express = require("express");
const path = require("path");

const router = express.Router();

let names = [];

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.post("/add", (req, res) => {
  names.push(req.body.name);
  res.redirect("/");
});

// So HTML can access current names
router.get("/names", (req, res) => {
  res.json(names);
});

module.exports = router;
