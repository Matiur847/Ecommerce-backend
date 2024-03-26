const { jwtSec, jwtExp } = require("../config/config");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// create jwtToken or save is cookie
const jwtUser = (user, statusCode, res) => {
  const token = jwt.sign({ id: user._id }, jwtSec, {
    expiresIn: jwtExp,
  });

  // create cookie option
  const options = {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = jwtUser;
