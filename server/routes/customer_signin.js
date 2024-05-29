const express = require("express");
const router = express.Router();

router.get("/get_customer", (req, res) => {
  res.send("success");
});

module.exports = router;
