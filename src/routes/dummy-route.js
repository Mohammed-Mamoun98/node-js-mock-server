const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.send({ msg: "hello world!" });
});

module.exports = Router;
