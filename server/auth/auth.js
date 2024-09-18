const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded._id).exec();
    if (!user) {
      return res.status(401).send('Invalid token');
    }
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).send('Invalid token');
  }
};

module.exports = { authenticate };
