const customer_signup = require("../models/customer_signup");

const customerSignupController = async (req, res) => {
  const { phone_number, username, email, password } = req.body;
  const customerDetails = await customer_signup.create({
    phone_number,
    username,
    email,
    password,
  });
  res.json(customerDetails);
};

module.exports = {
  customerSignupController,
};
