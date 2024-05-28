const express = require("express");
const {
  customerSignupController,
} = require("../controllers/customer_signup_controller");
const router = express.Router();

// register new customer route
router.post("/customer_signup", customerSignupController);

module.exports = router;
