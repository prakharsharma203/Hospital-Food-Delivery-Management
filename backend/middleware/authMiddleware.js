const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

/**
 * Authentication Middleware
 * Verifies the token and attaches user details to the request object
 */
const authenticate = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const token = bearerToken.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedToken._id);

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized: Invalid user' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized: Invalid token', error: error.message });
  }
};

module.exports = { authenticate };
