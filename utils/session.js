const jwt = require('jsonwebtoken');
const config = require('../config/env');

function generateToken(userDetails) {
  return jwt.sign(userDetails, config.JWT_SECRET, {
    expiresIn: `${config.JWT_EXPIRES_IN}`
  });
}

function verifyToken(token) {
  return jwt.verify(token, config.JWT_SECRET);
}

module.exports = { generateToken, verifyToken };
