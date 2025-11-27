const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const namesRouter = require("./routes/names");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", namesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
