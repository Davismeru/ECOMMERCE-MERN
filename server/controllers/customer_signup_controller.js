const bcrypt = require("bcryptjs");
const saltRounds = 10;

const customer_signup = require("../models/customer_signup");

const customerSignupController = async (req, res) => {
  const { phone_number, username, email, password } = req.body;

  // password hashing
  bcrypt.hash(password, saltRounds).then(function (hash) {
    const customerDetails = customer_signup.create({
      phone_number,
      username,
      email,
      password: hash,
    });

    res.json(customerDetails);
  });
};

module.exports = {
  customerSignupController,
};
